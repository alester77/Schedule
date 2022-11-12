// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// Display date and have current hour available for styling
var hourInput = document.querySelector(".document");

$(function() {
  var today = dayjs().format("MMMM D, YYYY");
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //

  // TODO: Add code to apply the past, present, or future class to each time
  function blockColor () {
    var timeOfDay = parseInt(dayjs().format('HH'));
    $('#time').text(today);
  
    $( ".time-block" ).each(function() {
      // console.log($( this ).attr('id'));
      var timeBlock = $( this ).attr('id');
      if (timeBlock == timeOfDay) {
        $(this).addClass("present");
      } else if (timeBlock < timeOfDay) {
        $(this).addClass("past");
      } else if (timeBlock > timeOfDay) {
        $(this).addClass("future");
      }});
  }
  blockColor();  

  // Adding the save button function
  $(".saveBtn" ).click(function() {
    var inputData = document.querySelector(".description").text;
    window.localStorage.setItem(".comment", JSON.stringify(inputData));
    console.log($(this).attr("class"));
    getDescription();
  });
   
  var inputData = $(".description");
  console.log(inputData);

  function getDescription (){
    var amountOfHours = {
      hour9 : document.querySelector(".description").text
    }
    for (var i=0; i <amountOfHours.length; i++){
      let description = localStorage.getItem(amountOfHours[i])
      $("#" + (i+9)).siblings().first().children().text(description);
      $window.localStorage.setItem(".description", JSON.stringify($scope.amountOfHours));
    }
  }
getDescription ();
console.log(getDescription);
 
  
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  

  //
  // TODO: Add code to display the current date in the header of the page.
});




