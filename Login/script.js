

const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');


registerBtn.addEventListener('click', () => {
    container.classList.add('active');

});


loginBtn.addEventListener('click', () => {
    container.classList.remove('active');

});

 function toggleForms() {
      document.getElementById("LoginForm").classList.toggle("active");
      document.getElementById("RegisterForm").classList.toggle("active");
    }