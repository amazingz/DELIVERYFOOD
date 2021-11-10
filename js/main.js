const buttonAuth = document.querySelector('.button-auth')
const modalAuth = document.querySelector('.modal-auth')
const closeAuth = document.querySelector('.close-auth')

closeAuth.addEventListener ('click', () => {
  modalAuth.style.display = 'none';
})

buttonAuth.addEventListener('click', () => {
  modalAuth.style.display = 'flex';
})

////////////////////////////////////////////////////////////////////////////////////////////////////////
// function sayMeow (){
//   console.log('Meow');
// }

// sayMeow();

// const hello = function () {
//   console.log('Hello');
// }

// hello();

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