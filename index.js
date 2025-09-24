import SuccessReg from './alphabet/success-reg.js';

console.log('index.js loaded');

document.getElementById('showpass').addEventListener('change', function(){
    const password = document.getElementById('password');
    password.type= this.checked ? 'text' : 'password';
});

const form = document.querySelector('form');
const name = document.querySelector('#name');
const successReg = new SuccessReg();

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    successReg.writeName(name.value);
});



