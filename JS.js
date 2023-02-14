

var CardNumber = document.getElementById("c-Number");
var lastDigits = document.getElementById("c-Endingnumber");
var Verified = document.getElementById("verified");

function addSpace() {
  Verified.style.display = "none";
  let value = CardNumber.value.toString();
  let inputValue = value.replace(/\D+/g, "");
  if (inputValue.length > 16) {
    inputValue = inputValue.substring(0, 16);
  }

  CardNumber.value = inputValue.match(/.{1,4}/g).join(" - ");

  let fourdigits = inputValue.substring(12, 16);
  lastDigits.innerHTML = fourdigits;

  if (inputValue.length >= 16) {
    Verified.style.display = "block";
  }
}


let expMonth = document.getElementById("expmonth");
let expDate = document.getElementById("expyear");
let expNumber = document.getElementById("Exp-number"); //card2

expMonth.addEventListener("input", function () {
  let storeMonth = document.getElementById("expmonth").value;
  expNumber.innerHTML = storeMonth + "/";
}
)

expDate.addEventListener("input", function () {
  let storeMonth = document.getElementById("expmonth").value;
  let storeDate = document.getElementById("expyear").value;

  expNumber.innerHTML = storeMonth + "/" + storeDate;
}
)


let minutes = 01;
let seconds = 59;
function updateTimer() {
  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  if (minutes < 0) {
    clearInterval(interval);
    overlay.style.display = "block";
    open.style.display = "block";
    return;
  }

  let minute1 = Math.floor(minutes / 10);
  let minute2 = minutes % 10;
  let second1 = Math.floor(seconds / 10);
  let second2 = seconds % 10;

  document.getElementById("minute1").innerHTML = minute1;
  document.getElementById("minute2").innerHTML = minute2;
  document.getElementById("second1").innerHTML = second1;
  document.getElementById("second2").innerHTML = second2;
}

let interval = setInterval(updateTimer, 1000);



let open = document.getElementById("modal");
let overlay = document.getElementById("overLay");

function exit() {
  overlay.style.display = "none";
  open.style.display = "none";
  location.reload();

}
