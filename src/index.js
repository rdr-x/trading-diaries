import User from "./clases/user.js";
const users = [];

let newUser = new User("rodrigo ramos xochiteotzin", "rdrx20@gmail.com", "abc");
console.log(newUser);
console.log(newUser.addTrade("first trade"));

// DOM
const signinButton = document.getElementById('signin-button');
signinButton.addEventListener('click', signIn)

function signIn() {
    const name = document.getElementById('signin-name').value;
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    let newUser = new User(name, email, password);
    users.push(newUser)
    console.log(newUser);
    console.log(users);
    return newUser;
}