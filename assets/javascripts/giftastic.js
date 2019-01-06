console.log("I am connected");
//javascript, jQuery
//create a variable to hold my favorite kid's shows
var topics = ['Sesame Street', 'Paw Patrol', 'Peppa Pig', "Daniel Tiger's", 'Steven Universe', 'Adventure time', 'My Little Pony', 'PJ Masks', 'Gravity Falls', 'Odd Squad', 'Super WHY!'];
//verify if var topic is console logging
//console.log(topics);

//create a function to get gif using JSON for each button 
 function displayShowNames() {
  var show = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=v5KqH1M87Ogbof59AWvNl4ZhtS6DHFVl&limit=10";

  //console.log(show);
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });
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

  // calling renderButton outside of the functions beacuse it will render all the show names from the topics array when the page loads.
  //$(body).on("click", ".topic", displayShowNames);

  renderButton();
