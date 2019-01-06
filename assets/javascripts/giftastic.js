console.log("I am connected");
//javascript, jQuery
//var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=v5KqH1M87Ogbof59AWvNl4ZhtS6DHFVl&limit=10");
//xhr.done(function(data) { console.log("success got data", data); });
var topics = ['Sesame Street','Paw Patrol', 'Peppa Pig', "Daniel Tiger's",'Steven Universe', 'Adventure time', 'My Little Pony', 'PJ Masks','Gravity Falls','Odd Squad','Super WHY!'];
//var queryURL = "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=v5KqH1M87Ogbof59AWvNl4ZhtS6DHFVl&limit=10";
//.on('click') to trigger Ajax call
$("#search-gif").on("click", function(event) {

//event.preventDefault will prevent a default event
event.preventDefault();
//var tvShows = $(this).attr('data-name');
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+ 'Peppa+Pig' +"&api_key=v5KqH1M87Ogbof59AWvNl4ZhtS6DHFVl&limit=10";
console.log(queryURL);
$.ajax({
  url: queryURL,
  method: "GET"
})
.then(function(response) {
  //console.log(response);
  //storing the image url
  var imageUrl = response.data.image_original_url;
 //creating variable for image tag 
  var topicImage = $('<img>');
 topicImage.attr("src", imageUrl);
 topicImage.attr("alt" , "kids shows")
 $("#shows-view-image").attr.prepend(topicImage);
}); 
});
//displayShowInfo();
//function displayShowInfo() {
