import axios from 'axios';
import {API_REFRESH_TOKEN} from './../Constants/Api.jsx';

const token = localStorage.getItem('ustk');

axios.interceptors.request.use(
   config => {
       if (token) {
           config.headers['Authorization'] = 'Bearer ' + token;
       }
       return config;
   },
   error => {
       Promise.reject(error)
 });

 let isRefreshing = false;
 let failedQueue = [];

 const processQueue = (error, token = null) => {
   failedQueue.forEach(prom => {
     if (error) {
       prom.reject(error);
     } else {
       prom.resolve(token);
     }
   })

   failedQueue = [];
 }

axios.interceptors.response.use((response) => {
   return response
},
function (error) {
   const originalRequest = error.config;

   if (error.response.status === 401 && !originalRequest._retry) {

     if (isRefreshing) {
        return new Promise(function(resolve, reject) {
          failedQueue.push({resolve, reject})
        }).then(token => {
          originalRequest.headers['Authorization'] = 'Bearer ' + token;
          return axios(originalRequest);
        }).catch(err => {
          return Promise.reject(err);
        })
      }

       originalRequest._retry = true;
       isRefreshing = true;
       return new Promise(function (resolve, reject) {
         axios.post(API_REFRESH_TOKEN,
             {
                 'token' : token
             })
             .then(res => {
                 if (res.status === 200) {
                     localStorage.setItem('ustk', res.data.access_token);
                     let new_token = localStorage.getItem('ustk');
                     processQueue(null, res.data.access_token);
                     axios.defaults.headers.common['Authorization'] = 'Bearer ' + new_token;
                     originalRequest.headers['Authorization'] = 'Bearer ' + new_token;
                     resolve(axios(originalRequest));
                 }
             })
             .then(() => { isRefreshing = false })
        })
   }
   return Promise.reject(error);
});
