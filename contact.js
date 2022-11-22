// check validity of the form
const fullname = document.getElementById("fullname");
const apartment = document.getElementById("apartment");
const email = document.getElementById("email");
const message = document.getElementById("message");

// if something is wrong, display an error message
function check () {
  var valid = true, error = "", field = "";
field = document.getElementById("fullname");
error = document.getElementById("error_name");

if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Please enter a full name.";
  fullname.style.borderColor = "var(--red)";
} else {
  error.innerHTML = "";
  fullname.style.borderColor = "var(--grey)";
};

field = document.getElementById("apartment");
error = document.getElementById("error_apartment");
if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Please enter a valid number without a dot.";
  apartment.style.borderColor = "var(--red)";
} else {
  error.innerHTML = "";
  apartment.style.borderColor = "var(--grey)";
};

field = document.getElementById("email");
error = document.getElementById("error_email");
if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Please enter a valid e-mail.";
  email.style.borderColor = "var(--red)";
} else {
  error.innerHTML = "";
  email.style.borderColor = "var(--grey)";
};

field = document.getElementById("message");
error = document.getElementById("error_message");
if (!field.checkValidity()) {
  valid = false;
  error.innerHTML = "Please enter a message.";
  message.style.borderColor = "var(--red)";
} else {
  error.innerHTML = "";
  message.style.borderColor = "var(--grey)";
};

return valid;
};


// choose a person of contact
const caretaker = document.getElementById('caretaker_id');
const council = document.getElementById('council_id');
const locksmith = document.getElementById('locksmith_id');
const fontcaretaker = document.getElementById('caretaker');
const fontcouncil = document.getElementById('council');
const fontlocksmith = document.getElementById('locksmith');


// if a person is chosen change colors
caretaker.addEventListener('click', function() {
    caretaker.style.backgroundColor = "var(--white)";
    fontcaretaker.style.color = "var(--orange)";
    council.style.backgroundColor = "var(--orange)";
    fontcouncil.style.color = "var(--white)";
    locksmith.style.backgroundColor = "var(--orange)";
    fontlocksmith.style.color = "var(--white)";
});

council.addEventListener('click', function() {
    council.style.backgroundColor = "var(--white)";
    fontcouncil.style.color = "var(--orange)";
    locksmith.style.backgroundColor = "var(--orange)";
    fontlocksmith.style.color = "var(--white)";
    caretaker.style.backgroundColor = "var(--orange)";
    fontcaretaker.style.color = "var(--white)";
});

locksmith.addEventListener('click', function() {
    locksmith.style.backgroundColor = "var(--white)";
    fontlocksmith.style.color = "var(--orange)";
    council.style.backgroundColor = "var(--orange)";
    fontcouncil.style.color = "var(--white)";
    caretaker.style.backgroundColor = "var(--orange)";
    fontcaretaker.style.color = "var(--white)";
});


