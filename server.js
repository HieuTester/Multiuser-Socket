const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static("public"));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
  });

io.on('connection', (socket) => {
  console.log(socket.id, "is connected");
    socket.on('disconnect', () => {
        console.log(socket.id, "disconnected");
      });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

// http.listen(process.env.PORT, () => {
//   console.log("Your app is listening on port" + process.env.PORT);
// })
