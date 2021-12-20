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
