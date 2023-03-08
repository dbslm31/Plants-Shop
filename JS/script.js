fetch("./plants.json")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (plants) {
    console.log(plants);

    const productContainer = document.querySelector(".product__container");

    for (let i = 0; i < plants.length; i++) {
      const productCard = `<div class="product">
        <div class="product__card">
                <img src=${plants[i].image} alt="${plants[i].alt}">      
        </div>
        <div class="product-infos">
                <h2>${plants[i].name}</h2>
                <p>${plants[i].price}€</p>
        </div>
     </div>`;
      productContainer.innerHTML += productCard;
    }
  })
  .catch(function (err) {
    // Une erreur est survenue
  });

const nextBtn = document.querySelector(".next-btn");
const preBtn = document.querySelector(".pre-btn");
