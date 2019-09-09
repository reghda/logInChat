const logInButton = document.getElementById('logIn');
const signInButton = document.getElementById('signIn');
// const container = document.getElementById('container');

logInButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});