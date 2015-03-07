var page = require('webpage').create();

var system = require('system');
var args = system.args;

var tweet_url = args[1];

page.open(tweet_url, function    (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
    } else {
        console.log('downloading');
        window.setTimeout(function () {
            //Heres the actual difference from your code...
            var bb = page.evaluate(function () {
                return document.getElementsByClassName("permalink-tweet")[0].getBoundingClientRect();
            });

            page.clipRect = {
                top:    bb.top,
                left:   bb.left,
                width:  bb.width,
                height: bb.height
            };

	page.render("/dev/stdout", {format: 'png', quality: '100'});
            console.log('downloaded');
            phantom.exit();
        }, 200);
    }
});
