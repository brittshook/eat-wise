document.addEventListener("DOMContentLoaded", () => {
    const buttonWithEmail = document.querySelector('#with-email');

    buttonWithEmail.addEventListener("click", ()  => {
        const emailInput =  document.querySelector('#email');
        let value = emailInput.value;
        value = value.trim();

        if (value === 'existing@gmail.com') {
            const logInSignUp = document.querySelector('#login-or-signup');
            const welcomeBack = document.querySelector('#welcome-back');
            const passwordField = document.querySelector('label[for="password"]');
            const buttonLogIn = document.querySelector('#login');
            
            buttonWithEmail.style.display = 'none';
            logInSignUp.style.display = 'none';
            passwordField.style.display = 'flex';
            welcomeBack.style.display = 'block';
            buttonLogIn.style.display = 'block';
        } else {
            window.location.href = '../pages/register.html';
        }

    })
})