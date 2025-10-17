import SuccessReg from './alphabet/success-reg.js';
import { ValidationPage } from './validation/validationClass.js';

console.log('index.js loaded');

document.getElementById('showpass').addEventListener('change', function(){
    const password = document.getElementById('password');
    password.type= this.checked ? 'text' : 'password';
});

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

const nameError = document.getElementById('username-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

const successReg = new SuccessReg();
const validationPage = new ValidationPage();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = {
        userName: nameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
    };

    const errors = validationPage.validateForm(data);

    nameInput.classList.remove('valid');
    nameInput.classList.remove('invalid');
    passwordInput.classList.remove('valid');
    passwordInput.classList.remove('invalid');
    emailInput.classList.remove('valid');
    emailInput.classList.remove('invalid');

    if (Object.keys(errors).length === 0) {
        successReg.writeName(data.userName);
    } else {
        nameError.textContent = errors.userName || '';
        emailError.textContent = errors.email ? errors.email[0] : '';
        passwordError.textContent = errors.password ? errors.password.join(', ') : '';
    }
});
nameInput.addEventListener('input', () => {
    validationPage.validateName(nameInput.value, 'userName');
    if (validationPage.errors.userName) {
        nameInput.classList.remove('valid');
        nameInput.classList.add('invalid');
        nameError.textContent = validationPage.errors.userName;
    } else {
        nameInput.classList.remove('invalid');
        nameInput.classList.add('valid');
        nameError.textContent = '';
    }
});

emailInput.addEventListener('input', () => {
    validationPage.validateEmail(emailInput.value);
    if (validationPage.errors.email) {
        emailInput.classList.remove('valid');
        emailInput.classList.add('invalid');
        emailError.textContent = validationPage.errors.email;
        emailError.textContent = validationPage.errors.email;
    } else {
        emailInput.classList.remove('invalid');
        emailInput.classList.add('valid');
        emailError.textContent = '';
    }
});

passwordInput.addEventListener('input', () => {
    validationPage.validatePassword(passwordInput.value);
    if (validationPage.errors.password) {
        passwordInput.classList.remove('valid');
        passwordInput.classList.add('invalid');
        passwordError.textContent = validationPage.errors.password.join(', ');
        passwordError.textContent = validationPage.errors.password;
    } else {
        passwordInput.classList.remove('invalid');
        passwordInput.classList.add('valid');
        passwordError.textContent = '';
    }
});

