console.log("I am connected");
//javascript, jQuery
//create a variable to hold my favorite kid's shows
var topics = ['Sesame Street', 'Paw Patrol', 'Peppa Pig', "Daniel Tiger's", 'Steven Universe', 'Adventure time', 'My Little Pony', 'PJ Masks', 'Gravity Falls', 'Odd Squad', 'Super WHY!'];
//verify if var topic is console logging
//console.log(topics);

//create a function to get gif using JSON for each button 
 function displayShowInfo() {
   //console.log($(this));
  var show = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=v5KqH1M87Ogbof59AWvNl4ZhtS6DHFVl&limit=10&limit=10&rating=g";

  //console.log(queryURL);
  $("#shows-Gif-appears-here").empty();
   $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    displayImages(response);
    console.log(queryURL);
    console.log(response);
  

 }); 
 console.log(show);
}
//created function to get the response  from the giphy api 
// created nested function to display the gif images and in still mode
  function displayImages(response){
    response.data.forEach(function(image){
      var imageDiv =$("<div class='images'>");
      var imageTag =$("<img>").attr("data-state", "still")
      .attr("src",image.images.fixed_height_still.url)
      .attr("data-animate",image.images.fixed_height_small.url)
      .attr("data-still",image.images.fixed_height_still.url);
      imageDiv.append(imageTag);
    $("#shows-Gif-appears-here").append(imageDiv);
    
    var rating = image.rating;

    var pRating = $("<p>").text("Rating: " + rating);
    imageDiv.append(pRating);

    })
  }
//create a function to add a button with show names
function renderButton() {

  //empty the button value onloading the page
  //Must add .empty otherwise the we will have repeating buttons
  $("#show-add-button").empty();

  //looping through the array of topics
  for (var i = 0; i < topics.length; i++) {

    //Create button with jquery to hold the each value that user input into to the search field
    //also add class to (<button>) 
    //add data-name attribute to the button so it can get the correct data from the variable topics
    //has to add name of the shows to the button using .text method
    //Add the button to the HTML in the <div(show-add-button)>using jquery

    var searchshow = $("<button>");
    searchshow.addClass("kids-show");
    searchshow.attr('data-name', topics[i]);
    searchshow.text(topics[i]);
    $('#show-add-button').append(searchshow);

  }
}
//trigger this function when submit button is clicked
  $('#add-shows').on("click", function(event) {
    event.preventDefault();

    //create a var to capture user input text
    var topic = $("#show-input").val().trim();

    //add a temporary new button to the page with User input using .push method
    topics.push(topic);

    
    //calling the renderButton function inside click function so it can append the new button on the page
    renderButton();
  });

/* 
  $("#add-shows").on("click", function() {
    var results = response.data;
    for (var i = 0; i < results.length; i++) {}
    var gifDiv = $("<div>");
    var p = $("<p>").text("Rating: " + results[i].rating);


  } */


  // calling renderButton outside of the functions beacuse it will render all the show names from the topics array when the page loads.
  //$(body).on("click", ".topic", displayShowNames);

  renderButton();
  //calling the function to 
  $(document).on("click", ".kids-show", displayShowInfo);

