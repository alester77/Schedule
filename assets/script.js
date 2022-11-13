
$(function() {
  // displays the date at the top of the page
  var today = dayjs().format("MMMM D, YYYY");

  // this makes it so the colors change depending on the day
  function blockColor () {
    // this is the time of day in military time
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

  // this is try two
  $(document).ready(function (){
    $(".saveBtn").on("click", function() {
      console.log(this);
      // getting the type in box to store on save
      var text = $(this).siblings(".description").val();
      var times = $(this).parent().attr("id");

      localStorage.setItem(times, text);
    })
    $("#9 .description").val(localStorage.getItem(9));
    $("#10 .description").val(localStorage.getItem(10));
    $("#11 .description").val(localStorage.getItem(11));
    $("#12 .description").val(localStorage.getItem(12));
    $("#13 .description").val(localStorage.getItem(13));
    $("#14 .description").val(localStorage.getItem(14));
    $("#15 .description").val(localStorage.getItem(15));
    $("#16 .description").val(localStorage.getItem(16));
    $("#17 .description").val(localStorage.getItem(17));
  })
 
});




