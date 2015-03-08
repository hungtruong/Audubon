$( document ).ready(function() {
    $("#ok-button").click(function(){
     var href = window.location.href;
     var tweet_url = $("#tweet-url-input").val();
     var img_url = href + "img/?url=" + tweet_url;
     $("#tweet-image").attr("src", img_url);
    });
});
