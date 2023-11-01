// var http = require("http");
// var servercreate = http.createServer(function(request, response){
//     console.log("working")
// });
// servercreate.listen(2000)


const express = require("express");
const database = require("./Src/config/database");
const bodyParser = require('body-parser');
const router = require("./Src/router/userRouter");
const cors = require("cors")
const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    limit:"50mb",
    extended: true
}))

app.use(router);
app.listen(2000, () => {
  console.log("server listening 2000 port");
});