"use strict";


const login_form = $('#login_form');
const username = $('#login_username');
const password = $('#login_password');


login_form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = $('#login_username').value;
    const password = $('#login_password').value;
    const token = JSON.parse(localStorage.getItem('token'));
    if(token.username == username && token.password == password){
        window.location.href = './assets/pages/home.html';
    }else{
        alert('Invalid Username or Password');
    }
})