const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function paintGreeting(username){
    greeting.innerText = `안녕하세요. ${username}님.`;
}

if(savedUsername !== null) {
    paintGreeting(savedUsername);
}