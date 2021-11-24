const renderItems = (data) => {
  console.log(data);
}

fetch('https://food-delivery-3c5d5-default-rtdb.europe-west1.firebasedatabase.app/db/partners.json')
  .then((response) => response.json())
    .then((data) => {renderItems(data)})
      .catch((error) => {
        console.log(error);
      })

fetch('./db/food-band.json')
  .then((response) => response.json())
    .then((data) => {console.log(data)} )

fetch('./db/pizza-burger.json')
.then((response) => response.json())
  .then((data) => {console.log(data)})

fetch('./db/pizza-plus.json')
  .then((response) => response.json())
    .then((data) => {console.log(data)})
    
 fetch('./db/tanuki.json')
  .then((response) => response.json())
    .then((data) => {console.log(data)})

fetch('./db/gusi-lebedi.json')
  .then((response) => response.json())
    .then((data) => {console.log(data);})


// const array = [11, 32, 432, 123, 765]

//   array.forEach((elem, index) => {
//     if (index < 2){
//       console.log(elem);
//     } else if (index === 3) {
//       console.log(elem)
//     }
//   })

// const array = [11, 34, 67, 798, 45]

// array.forEach((elem) => {
//   console.log(elem);
//   console.log(index);
//   console.log(array);
// } )

// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }

// const arr = [15, 20, 25, 45, 48]
// for (let j = 0; j < arr.length; j++) {
//   console.log(arr[j]);
// }