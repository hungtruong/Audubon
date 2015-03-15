$( document ).ready(function() {
    $('form').submit(function(event){
     $('#loading').show();
     var href = window.location.href;
     var tweet_url = $("#tweet-url-input").val();
     var img_url = href + "img/?url=" + tweet_url;
     $("#tweet-image").remove();
     $("#loading").after('<img id="tweet-image" src="">');
     $("#tweet-image").attr("src", img_url);
     $("#tweet-image").on('load', function(){
      $('#loading').hide();
     });
     event.preventDefault();
    });

});
