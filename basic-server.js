// Basic Node Server
const http = require("http");

const server = http.createServer(function(req, res){

    res.setHeader("Content-type", "application/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200); //status code HTTP 200 / OK

    let dataObj = {
        id: 123,
        name: "Emmanuel",
        email: "nwolisaemmanuel@gmail.com",
        age: 20,
        location: "London"
    };
    let data = JSON.stringify(dataObj);
    res.end(data)
});


server.listen(9999, function(){
    console.log('listening on port 9999');
});
