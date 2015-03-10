$( document ).ready(function() {
    $('form').submit(function(event){
     var href = window.location.href;
     var tweet_url = $("#tweet-url-input").val();
     var img_url = href + "img/?url=" + tweet_url;
     $("#tweet-image").attr("src", img_url);
     event.preventDefault();
    });
});
