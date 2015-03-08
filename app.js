var express = require('express');
var app = express();
var path = require('path');
var spawn = require('child_process').spawn;

//for static files, index.html etc
app.use(express.static(path.join(__dirname, 'public')));

app.get('/img', function (req, res) {
 // Create a child process
 var parts = req.query.url.split('/');
 var id = parts[parts.length-1];

 var child = spawn('phantomjs',
     ['tweet_image.js', req.query.url]);

     child.on('exit', function (exitCode) {
      //when complete, grab the file from tmp and return it as a png
      fs = require('fs')
      data = fs.readFileSync('/tmp/' + id)
      res.write(data);
      res.end();
    });
})

var server = app.listen(process.env.PORT || 3000, function () {
  var host = server.address().address
  var port = server.address().port
})
