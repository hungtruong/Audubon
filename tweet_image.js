var page = require('webpage').create();

var system = require('system');
var args = system.args;

var tweet_url = args[1];
var parts = tweet_url.split('/');
var id = parts[parts.length-1];

page.open(tweet_url, function    (status) {
 if (status !== 'success') {
  } else {
   //from http://stackoverflow.com/a/18658104/1475472
   window.setTimeout(function () {
    var bounds = page.evaluate(function () {
      return document.getElementsByClassName("permalink-tweet")[0].getBoundingClientRect();
     });

     page.clipRect = {
      top:    bounds.top,
      left:   bounds.left,
      width:  bounds.width,
      height: bounds.height
      };

      page.render("/tmp/" + id, {format: 'png', quality: '100'});
      phantom.exit();
      }, 200);
      }
     });
