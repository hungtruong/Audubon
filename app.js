var express = require('express');
var app = express();
var path = require('path');
var spawn = require('child_process').spawn;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/img', function (req, res) {
 // Create a child process
 var parts = req.query.url.split('/');
 var id = parts[parts.length-1];

 var child = spawn('phantomjs',
     ['test3.js', req.query.url]);

    child.stdout.on('data',
    function (data) {
        //console.log('got some data');
        //res.write(data);
    });

    child.on('exit', function (exitCode) {
     //console.log('finished');
     fs = require('fs')
     data = fs.readFileSync('/tmp/' + id)
     res.write(data);
     res.end();
    });
})

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
