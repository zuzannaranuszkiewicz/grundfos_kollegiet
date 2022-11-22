// choosing a service 
const machine = document.getElementById('machine_id');
const kitchen = document.getElementById('kitchen_id');
const fontkitchen = document.getElementById('kitchen');
const fontmachine = document.getElementById('machine');
const guestsclose = document.getElementById('guests_close');
const purposeclose = document.getElementById('purpose_close');

// changing colors of a selected button 
machine.addEventListener('click', function() {
    machine.style.backgroundColor = "var(--white)";
    fontmachine.style.color = "var(--orange)";
    kitchen.style.backgroundColor = "var(--orange)";
    fontkitchen.style.color = "var(--white)";
    purposeclose.style.display = "none";
    guestsclose.style.display = "none";
});

kitchen.addEventListener('click', function() {
    kitchen.style.backgroundColor = "var(--white)";
    fontkitchen.style.color = "var(--orange)";
    machine.style.backgroundColor = "var(--orange)";
    fontmachine.style.color = "var(--white)";
    purposeclose.style.display = "block";
    guestsclose.style.display = "block";
});


// checking the form 
const fullname = document.getElementById("fullname");
const apartment = document.getElementById("apartment");
const email = document.getElementById("email");
const guests = document.getElementById("guests");
const purpose = document.getElementById("purpose");

// if a field in the form is "false", display a message 
function check () {
    var valid = true, error = "", field = "";
field = document.getElementById("fullname");
error = document.getElementById("error_name");

if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Please enter a full name.";
  fullname.style.borderColor = "#ff5555";
} else {
  error.innerHTML = "";
  fullname.style.borderColor = "#c4c4c4";
};

field = document.getElementById("apartment");
error = document.getElementById("error_apartment");
if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Please enter a valid number.";
  apartment.style.borderColor = "#ff5555";
} else {
  error.innerHTML = "";
  apartment.style.borderColor = "#c4c4c4";
};

field = document.getElementById("email");
error = document.getElementById("error_email");
if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Please enter a valid e-mail.";
  email.style.borderColor = "#ff5555";
} else {
  error.innerHTML = "";
  email.style.borderColor = "#c4c4c4";
};

field = document.getElementById("guests");
error = document.getElementById("error_guests");
if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Please enter a valid number.";
  guests.style.borderColor = "#ff5555";
} else {
  error.innerHTML = "";
  guests.style.borderColor = "#c4c4c4";
};

field = document.getElementById("purpose");
error = document.getElementById("error_purpose");
if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Please enter a valid purpose.";
  purpose.style.borderColor = "#ff5555";
} else {
  error.innerHTML = "";
  purpose.style.borderColor = "#c4c4c4";
};

// if the form is "true", return valid 
return valid;
};



// a calendar, coded with a usage of youtube videos

// puts up a date
const date = new Date();

// paste the whole code here
const rendercalendar = () => {

// date of the last day
// just 0 - last day of previous month; 
// + 1, 0 - last day of current month;
// get.Date() - last day of curent month (number);
const lastday = new Date(date.getFullYear(),date.getMonth() + 1,0).getDate();

// date of the last day of the previous month
const prevlastday = new Date(date.getFullYear(),date.getMonth(),0).getDate();

//first day 
const firstday = date.getDay();

// array with months (0-11)
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

// shows current month
document.querySelector(".date h2").innerHTML = months[date.getMonth()];

//shows current year
document.querySelector(".date p").innerHTML = date.getFullYear();

// days
let days = "";

// loop: for every time this is true (x equals firstday; x is bigger than 0: x decrease by one)
for(let x = firstday; x > 0; x--){
   days += `<div class="prev-date">${prevlastday - x + 3}</div>`;
}


// loop: for every time this is true (i equals 1; i is less than or equals lastday: i increase by one)
// i = 1 because every month starts with a day 1 
for(let i = 1; i <= lastday; i++){
    // show the class today for today's date 
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
        days += `<div class="today">${i}</div>`;
    } else {    
        // content of the div 
        days += `<div>${i}</div>`;
        // x += 10 means x = x + 10
    }
};

// show days
document.querySelector(".days").innerHTML = days;

};


// giving functions to the arrows for previous and next month when clicked
document.querySelector(".prev").addEventListener("click",() => {
    date.setMonth(date.getMonth() - 1);
    rendercalendar();
});

document.querySelector(".next").addEventListener("click",() => {
    date.setMonth(date.getMonth() + 1);
    rendercalendar();
});


rendercalendar();



