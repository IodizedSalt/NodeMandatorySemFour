var express = require("express");
var app = express();

app.use(express.static(__dirname + "/templates"));


app.get("/", function(req, res){
    console.log(__dirname);
    res.sendFile(__dirname + "/index.html");
});


var server = app.listen("3000", function(err){
if(err){
    console.log("Error launching server");
}
    console.log("Server started on port: " + server.address().port);

});