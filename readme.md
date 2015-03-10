# Audubon

Audubon is a tool that creates tweet screenshots automatically with PhantomJS.

You could also use the included tweet_image.js as a command line tool if you don't want to use the web app.

Deploy it directly to Heroku with this button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/hungtruong/Audubon)

You can try it out in action [here](https://audubon-tweets.herokuapp.com)

Alternatively, tweet_image.js can be used as a command line tool that takes a url of a tweet as an argument. An example use case is:

```
phantomjs tweet_image.js https://twitter.com/shaq/status/1542241989
```

Currently, the script saves the image to /tmp but it should really support an output file as an optional argument.
