var showCurrentTime = function() 
{ 
    var clock = document.getElementById('clock');
    var currentTime = new Date();

    var hr = currentTime.getHours();
    var min = currentTime.getMinutes();
    var sec = currentTime.getSeconds();
    var PM = 'AM';

    if (hr >= 12)
    {
        PM = 'PM';
    }
    if (hr > 12)
    {
        hr = hr - 12;
    }

    if (sec < 10){
        sec = '0' + sec;
    }
    if (min < 10){
        min = '0' + min;
    }
    var clockTime = hr + ':' + min + ':' + sec + " " + PM + '!';

    clock.innerText = clockTime;
};

var updateClock = function() 
{
  var time = new Date().getHours();
  var messageText;
  var image = "/clock-with-js/images/normalTime.jpg";

  var clickEvent = document.getElementById("clickEvent");
  var imageEvent = document.getElementById('catImage');

  if (time == 7)
  {
   image = "/clock-with-js/images/cat1.jpg";
    messageText = "Wake up!";
  }
  else if (time == 12)
  {
    image = "/clock-with-js/images/cat2.jpg";
    messageText = "Let's have some lunch!";
  }
  else if (time == 14)
  {
    image = "/clock-with-js/images/cat3.jpg";
    messageText = "Sleep tight!";
  }
  else if (time < 12)
  {
    image = "/clock-with-js/images/morning.jpeg";
    messageText = "Good morning!";
  }
  else if (time >= 18)
  {
    image = "/clock-with-js/images/Cat_sleep.jpg";
    messageText = "Good evening!";
  }
  else
  {
    image = "/clock-with-js/images/normalTime.jpg";
    messageText = "Good afternoon!";
  }
  clickEvent.innerText = messageText;
  imageEvent.src = image;
  
  showCurrentTime();
};
updateClock();
var secondInterval = 1000;
setInterval( updateClock, secondInterval);

var btn = document.getElementById('partyBtn');
var partyE = function()
{
if (btn.innerText == 'PARTY TIME!')
{
    
    btn.onclick = (btn.innerText = "PARTY OVER!");
    btn.style.backgroundColor = "#0A8DAB";
    clickEvent.innerText = "Let's party!";
    document.getElementById('catImage').src = "/clock-with-js/images/partyTime.jpg";
}
else{
    
    btn.innerText = "PARTY TIME!";
    btn.style.backgroundColor = "#222";
}

}
btn.addEventListener("click", partyE);

