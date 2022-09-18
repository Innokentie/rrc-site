const express = require("express");
const createServer = require("http");
//const Server = require("socket.io");
// const mysql = require("mysql2");

// Database
/*
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'mysql',
    password: 'sha1'
});
*/


// Server
const app = express();
const httpServer = createServer.createServer(app);
//const io = new Server.Server(httpServer, {});

app.get('/', function(req, res) {
    app.use(express.static(__dirname + "/site"));
    res.redirect("index.html");
});

/*
io.on("connection", (socket) => {
    console.log(`Connected ${socket.id}!`);

    connection.query("SELECT * FROM users", function(err, result){
        if (err) console.log(err);
        else {
            socket.emit("update_users", {list: result});
            console.log(result);
        }
    });

    socket.on("new_user", (data) => {
        connection.query(`INSERT INTO users(name, age) VALUES ('${data.name}', '${data.age}')`, function(err, res){
            if (err) console.log(err);

            else {
                connection.query("SELECT * FROM users", function(err, result){socket.emit("update_users", {list: result});});
            }
        });
    });
});


connection.connect(function(err){
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else{
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});

connection.query("CREATE TABLE users (name VARCHAR(4), age INT(2))", function(err, result){
    if (err) console.log(err);
    else console.log(result);
});


connection.query("INSERT INTO users(name, age) VALUES('Izua', '43')", function(err, result){
    if (err) console.log(err);
    else console.log(result);
});

connection.query("TRUNCATE TABLE users", function(err, result){
    if (err) console.log(err);
    else console.log(result);
});


connection.query("SELECT * FROM users", function(err, result){
    if (err) console.log(err);
    else console.log(result);
});
*/

const { PORT=3000, LOCAL_ADDRESS='0.0.0.0' } = process.env
httpServer.listen(PORT, LOCAL_ADDRESS, () => {
    const address = server.address();
    console.log('Server ready!', address);
});
