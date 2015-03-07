var express = require('express')
var app = express()

app.get('/', function (req, res) {

 var spawn = require('child_process').spawn;

 // Create a child process

 console.log(req.query.url);


 var child = spawn('bin/phantomjs',
     ['test3.js', req.query.url]);

    child.stdout.on('data',
    function (data) {
        console.log('got some data');
        res.write(data);
    });

    child.on('exit', function (exitCode) {
     console.log('finished');
     res.end();
    });

  /*
  var exec = require('child_process').exec,
    child;

  child = exec('phantomjs test3.js',
  function (error, stdout, stderr) {
    //console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    console.log('exec error: ' + error);
    if (error == null) {
      //console.log('exec error: ' + error);
      console.log('got stuff');
      res.type('png');
      res.send(stdout);
    }
  });
  //res.send('Hello World!')
  */
})

var server = app.listen(process.env.PORT || 3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
