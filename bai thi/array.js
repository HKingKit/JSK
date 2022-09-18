function signup(e){
event.preventDefault();


var email = document.getElementById('email').value;
var phone = document.getElementById('phone').value;
var password = document.getElementById('password').value;
var username = document.getElementById('username').value;

var user = {
    email: email,
    phone: phone,
    password: password,
    username: username,
};

var JSON = JSON.stringify(user);
localStorage.setItem(username, json);
console.log('user added');

}