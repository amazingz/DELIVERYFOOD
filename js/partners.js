const cardsRestaurants = document.querySelector('.cards-restaurants')
// cardsRestaurants.classList.add('testClass')
// cardsRestaurants.classList.remove('testClass')
// cardsRestaurants.classList.toggle('testClass')
// console.dir(cardsRestaurants);

const renderItems = (data) => {
  data.forEach(({image, kitchen, name, price, products, stars, time_of_delivery})  => {
    const a = document.createElement('a')
      console.log(image, kitchen, name, price, products, stars, time_of_delivery);
    //card card-restaurant
      a.setAttribute('href', 'restaurant.html')
      a.classList.add('card')
      a.classList.add('card-restaurant')
      a.innerHTML = `
          <img src="img/pizza-plus/preview.jpg" alt="image" class="card-image" />
          <div class="card-text">
            <div class="card-heading">
              <h3 class="card-title">Пицца плюс</h3>
              <span class="card-tag tag">50 мин</span>
            </div>
            <div class="card-info">
              <div class="rating">
                4.5
              </div>
              <div class="price">От 900 ₽</div>
              <div class="category">Пицца</div>
            </div>
          </div>
      `
      console.log(a);
  });
}

fetch('https://food-delivery-3c5d5-default-rtdb.europe-west1.firebasedatabase.app/db/partners.json')
  .then((response) => response.json())
    .then((data) => {renderItems(data)})
      .catch((error) => {
        console.log(error);
      })

  // fetch('./db/pizza-burger.json')
  //   .then((response) => response.json())
  //     .then((data) => {renderItems(data)})
  //       .catch((error) => {console.log(error)})

// fetch('./db/food-band.json')
//   .then((response) => response.json())
//     .then((data) => {console.log(data)} )

// fetch('./db/pizza-burger.json')
// .then((response) => response.json())
//   .then((data) => {console.log(data)})

// fetch('./db/pizza-plus.json')
//   .then((response) => response.json())
//     .then((data) => {console.log(data)})
    
//  fetch('./db/tanuki.json')
//   .then((response) => response.json())
//     .then((data) => {console.log(data)})

// fetch('./db/gusi-lebedi.json')
//   .then((response) => response.json())
//     .then((data) => {console.log(data);})


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