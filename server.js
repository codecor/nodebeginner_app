var http = require("http");
var url = require("url");

function dbg(out)
{
    console.log(out);
}

function start(route, handle)
{
    function onRequest (request, response)
    {
        var pathname = url.parse(request.url).pathname;
        dbg("Request received " + pathname +".");
        route(handle,pathname,response,request);

        /*
        var postData = "";
        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            dbg("Received POST data chunk '"+
                postDataChunk + "'.");
        });

        request.addListener("end", function() {
            route(handle,pathname,response,postData);
        });
        */
        //response.end();
    }

    http.createServer(onRequest).listen(8888,"0.0.0.0");
    dbg("server listening on 0.0.0.0:8888");
}

exports.start = start;
