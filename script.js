var header = document.getElementById("keypressHeader");
var loginheader = document.getElementById("loginHeader");

var sumbit = document.getElementById("submitButton");

sumbit.addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (password == 12345678) {
        loginheader.innerHTML = "user info is correct";
    } else {
        alert("Your sign in has failed");
        console.log(username);
        console.log(password);
    }
});

document.addEventListener("keypress", function(e) {
    if ((e.key = 74)) {
        header.innerHTML = "j";
    }
});
