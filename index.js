var express=require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'ejs');
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
   res.render('wait.ejs');
});
app.get('/full',function(req,res){
   res.render('full.ejs');
})

players=[]
count=0
io.on('connection', function(socket) {
   
   if(count<4){
   count+=1;
   players.push(socket.id);
   if(count==4){
      game_start();
   }
   else{
   io.sockets.emit('new_conn',{num:count,keys:players});
   }}
   else {
      socket.emit('room_full',{});
   }
   console.log(socket.id+'new connection')
   socket.on('next_round',(data)=>{game_start(data.score)});
   socket.on('disconnect', function () {
      const index = players.indexOf(socket.id);
      if(index>=0){
      count-=1;
      players.splice(index, 1);
      io.sockets.emit('new_conn',{num:count,keys:players})
      }
      console.log(socket.id+" disconnected");
   });
});


http.listen(3000, function() {
   console.log('listening on *:3000');
});


function game_start(point){
   let list = [1,2,3,4]
      list = list.sort(() => Math.random() - 0.5)
      for (i=0;i<4;i++){
         io.to(players[i]).emit('start_game',{id:i,role:list,score:point});
      }
}