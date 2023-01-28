//Function to check if the bidding amount is greater than the current price
function checkIfBidAmountSamllerThanCurrent() {

  //variables for warning messages
  let successfulMsgCont = document.getElementById('successfulMsgCont')
  let errorMsgCont = document.getElementById('errorMsgCont')
  let closeBtn = document.getElementsByClassName('closeBtn')

  //Function for close button of warning messages
  for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].addEventListener('click', function () {
      successfulMsgCont.style.display = 'none';
      errorMsgCont.style.display = 'none';
    });
  }

  //Get the current price from the HTML table
  var a = parseFloat(document.getElementById("current_price").innerText);

  //Get the bidding amount from the HTML textbox
  var b = parseFloat(document.getElementById("bid_amount").value);

  //check if the current price is greater than or smaller than, then output the relevant result and warning messages
  if (a < b) {
    a = b;
    document.getElementById("current_price").innerHTML = a;
    document.getElementById("bid_amount").value = "";
    successfulMsgCont.style.display = 'block';

  }
  else {
    errorMsgCont.style.display = 'block';
    document.getElementById("bid_amount").value = "";
  }
}

//Create a array containing all the images
var images = ["46068568_572787116385_0.58071200-1603169459.jpg",
  "50586592_901682152930_0.21193600-1661333306.jpg",
  "76951364_153122757871_0.02739400-1574681912.jpg",
  "77484232_146113668464_0.28135200-1665463843.jpg",
  "81875528_985952085504_0.81658400-1566908508.jpg",
  "85715752_896021970858_0.50947700-1664354451.jpg",
  "29037453_520155462125_0.55557600-1664841797.jpg",
  "15449199_182986766927_0.77451100-1618563475.jpg",];

//Create a variable for index of array
var index = 0;

//Function to show the first image when loading the page
function MakeImage() {
  var img = document.createElement('img')
  img.src = images[index];
  document.getElementById('CakeImage').appendChild(img);
}

//Function to go to next image when button is clicked
function NextImage() {
  var img = document.getElementById('CakeImage').getElementsByTagName('img')[0];
  index++;
  index = index % images.length;
  img.src = images[index];
}

//Function to go to previous image when button is clicked
function PreviousImage() {
  var img = document.getElementById("CakeImage").getElementsByTagName('img')[0];
  index--;
  if (index < 0) {
    index = 7
    img.src = images[index];
  }
  else {
    img.src = images[index];
  }
}


// Set the date we're counting down to
var countDownDate = new Date("Dec 25, 2022 21:31:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="timer"
  document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);


