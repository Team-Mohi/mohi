var io = require('socket.io')(8000)
console.log('đã kết nối')

io.on('connection',function(socket){
  console.log(socket.id + ' đã connect')

  socket.on('noti-action-post', (admin) => {
    io.emit('action', admin)
  })

  socket.on('disconnect', ()=>{
    console.log('user disconect')
  })
})
