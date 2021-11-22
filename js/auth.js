const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')
const buttonOut = document.querySelector('.button-out')
const userName = document.querySelector('.user-name')
const logInForm = document.getElementById('logInForm')
const inputLogin = document.getElementById('login')
const inputPassword = document.getElementById('password')


const login = (user) => {
buttonAuth.style.display = 'none'
buttonOut.style.display = 'flex'
userName.style.display = 'flex'

userName.textContent = user.login
modalAuth.style.display = 'none';
}

const logout = () => {
  buttonAuth.style.display = 'flex'
  buttonOut.style.display = 'none'
  userName.style.dysplay = 'none'

  userName.textContent = ''
  localStorage.removeItem('user')

}

closeAuth.addEventListener ('click', () => {
  modalAuth.style.display = 'none';
})

buttonAuth.addEventListener('click', () => {
  modalAuth.style.display = 'flex';
})

buttonOut.addEventListener('click', () => {
  logout();
})

logInForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const user = {
    login: inputLogin.value,
    password: inputPassword.value
  }

    localStorage.setItem('user', JSON.stringify(user))
    login(user);
})

if (localStorage.getItem('user')) {
  login(JSON.parse(localStorage.getItem('user')))
}

//////////////////////////////////////////////function declaration//////////////////////////////////
// function sayMeow (){
//   console.log('Meow');
// }

// sayMeow();
//////////////////////////////////////////////function expression//////////////////////////////////
// const hello = function () {
//   console.log('Hello');
// }

// hello();
//////////////////////////////////////////////function arrow expression//////////////////////////////////
// const sayMeow = () => {
//   console.log('Meow-Meow');
// }

// sayMeow();

// const obj = {
//       name: 'John',
//       age: 35,
//       sayHello: function () {
//         console.log('Hello, my name' + ' ' + obj.name);
//       }
// }

// obj.sayHello();
// const arr = [1, 2, 3, 4, 5]
// console.log(arr[3]);

// const counter = (a, b) => {
//   return a + b
// }

// console.log(counter(200, 3));

// modalAuth.style.color = 'red'
////////////////////////////////////////////////////////////////////////////////////////////////////////