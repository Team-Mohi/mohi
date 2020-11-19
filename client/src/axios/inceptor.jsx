import axios from 'axios';
import {API_REFRESH_TOKEN} from './../Constants/Api.jsx';

function IsJsonString(str) {
  try {
      JSON.parse(str);
  } catch (e) {
      return false;
  }
  return true;
}

let ustk = IsJsonString(localStorage.getItem('ustk')) ? JSON.parse(localStorage.getItem('ustk')) : '';
let currentToken = ustk ? ustk.access_token : '';

if(!currentToken){
  localStorage.removeItem('ustk');
}else{
  axios.interceptors.request.use(
     config => {
        const token = localStorage.getItem('ustk') ? JSON.parse(localStorage.getItem('ustk')).access_token: '';
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
     if (error.response && error.response.status === 401 && !originalRequest._retry) {

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
                   'token' : JSON.parse(localStorage.getItem('ustk')).access_token
               })
               .then((res) => {
                   if (res.status === 200) {
                       localStorage.setItem('ustk', JSON.stringify(res.data));
                       let new_token = JSON.parse(localStorage.getItem('ustk')).access_token;
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
}
