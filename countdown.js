function twodigit(num)
{

  if (num < 10) return "0" + num;
  else if (num > 0) return num;
  else return "00";

}

// Set the date we're counting down to
var countDownDate = new Date("Aug 20, 2022 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);



  // Output the result in an element with id="demo"
  document.getElementById("showday").innerHTML = twodigit(days);
  document.getElementById("showhour").innerHTML = twodigit(hours);
  document.getElementById("showminute").innerHTML = twodigit(minutes);
  document.getElementById("showsecond").innerHTML = twodigit(seconds);

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
