const product_slider = document.querySelector(".product_slider");

const productCollection = [
  {
    productImage: "./images/Product1.png",
    productTitle: "Gavya Mart",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4,
  },
  {
    productImage: "./images/Product2.png",
    productTitle: "Gavya Mart",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4.5,
  },
  {
    productImage: "./images/Product3.png",
    productTitle: "BrownStone Malabar",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 3,
  },
  {
    productImage: "./images/Product1.png",
    productTitle: "Gavya Mart",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4,
  },
  {
    productImage: "./images/Product2.png",
    productTitle: "Gavya Mart",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4,
  },
  {
    productImage: "./images/Product3.png",
    productTitle: "BrownStone Malabar",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4,
  },
];

window.addEventListener("load", () => productSlider());

function generateStars(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars += '<span class="fas fa-star"></span>';
  }
  if (halfStar) {
    stars += '<span class="fas fa-star-half-alt"></span>';
  }
  for (let i = 0; i < emptyStars; i++) {
    stars += '<span class="far fa-star"></span>';
  }

  return stars;
}

function productSlider() {
  let products = "";
  for (let product in productCollection) {
    products += `
             <div class="card">
                <img
                src="${productCollection[product].productImage}"
                alt="Gavya Mart"
                />
                <h3>${productCollection[product].productTitle}</h3>
                <p>${productCollection[product].productDetail}</p>
                <p><i class="fas fa-truck delivery-icon"></i> <strong>${
                  productCollection[product].productDelivery
                }</strong> </p>
                <p class="location"><i class="fas fa-map-marker-alt location-icon"></i> ${
                  productCollection[product].productLocation
                }</p>
                <div class="rating">
                ${generateStars(productCollection[product].stars)}
                </div>
            </div>
            `;
  }
  product_slider.innerHTML = products;

  const tnSlider = tns({
    container: ".product_slider",
    items: 2,
    gutter: 15,
    slideBy: 1,
    nav: true,
    navPosition: "bottom",
    speed: 400,
    controlsContainer: "#product-slider-controls",
    prevButton: ".product-previous",
    nextButton: ".product-next",
    touch: true,
    mouseDrag: true,
    swipeAngle: false,
    responsive: {
      992: {
        items: 4,
      },
    },
  });
}

// product1 slider ----------------------------------

const product1_slider = document.querySelector(".product1_slider");

const product1Collection = [
  {
    productImage: "./images/Product4.png",
    productTitle: "Gavya Mart",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4,
  },
  {
    productImage: "./images/Product5.png",
    productTitle: "Gavya Mart",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4.5,
  },
  {
    productImage: "./images/Product6.png",
    productTitle: "BrownStone Malabar",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 3,
  },
  {
    productImage: "./images/Product1.png",
    productTitle: "Gavya Mart",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4,
  },
  {
    productImage: "./images/Product2.png",
    productTitle: "Gavya Mart",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4,
  },
  {
    productImage: "./images/Product3.png",
    productTitle: "BrownStone Malabar",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4,
  },
];

window.addEventListener("load", () => product1Slider());

function generateStars(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars += '<span class="fas fa-star"></span>';
  }
  if (halfStar) {
    stars += '<span class="fas fa-star-half-alt"></span>';
  }
  for (let i = 0; i < emptyStars; i++) {
    stars += '<span class="far fa-star"></span>';
  }

  return stars;
}

function product1Slider() {
  let products = "";
  for (let product in product1Collection) {
    products += `
             <div class="card">
                <img
                src="${product1Collection[product].productImage}"
                alt="Gavya Mart"
                />
                <h3>${product1Collection[product].productTitle}</h3>
                <p>${product1Collection[product].productDetail}</p>
                <p><i class="fas fa-truck delivery-icon"></i> <strong>${
                  product1Collection[product].productDelivery
                }</strong> </p>
                <p class="location"><i class="fas fa-map-marker-alt location-icon"></i> ${
                  product1Collection[product].productLocation
                }</p>
                <div class="rating">
                ${generateStars(product1Collection[product].stars)}
                </div>
            </div>
            `;
  }
  product1_slider.innerHTML = products;

  const tnSlider = tns({
    container: ".product1_slider",
    items: 2,
    gutter: 15,
    slideBy: 1,
    nav: true,
    navPosition: "bottom",
    speed: 400,
    controlsContainer: "#product1-slider-controls",
    prevButton: ".product1-previous",
    nextButton: ".product1-next",
    touch: true,
    mouseDrag: true,
    swipeAngle: false,
    responsive: {
      992: {
        items: 4,
      },
    },
  });
}

// product2 slider ----------------------------------

const product2_slider = document.querySelector(".product2_slider");

const product2Collection = [
  {
    productImage: "./images/Product7.png",
    productTitle: "Gavya Mart",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4,
  },
  {
    productImage: "./images/Product7.png",
    productTitle: "Gavya Mart",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4.5,
  },
  {
    productImage: "./images/Product7.png",
    productTitle: "BrownStone Malabar",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 3,
  },
  {
    productImage: "./images/Product7.png",
    productTitle: "Gavya Mart",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4,
  },
  {
    productImage: "./images/Product2.png",
    productTitle: "Gavya Mart",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4,
  },
  {
    productImage: "./images/Product3.png",
    productTitle: "BrownStone Malabar",
    productDetail: "•Ghee •Sweatner •Pooja Needs …",
    productDelivery: "4.6 km 15-20 min",
    productLocation: "Indore",
    stars: 4,
  },
];

window.addEventListener("load", () => product2Slider());

function generateStars(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars += '<span class="fas fa-star"></span>';
  }
  if (halfStar) {
    stars += '<span class="fas fa-star-half-alt"></span>';
  }
  for (let i = 0; i < emptyStars; i++) {
    stars += '<span class="far fa-star"></span>';
  }

  return stars;
}

function product2Slider() {
  let products = "";
  for (let product in product2Collection) {
    products += `
             <div class="card">
                <img
                src="${product2Collection[product].productImage}"
                alt="Gavya Mart"
                />
                <h3>${product2Collection[product].productTitle}</h3>
                <p>${product2Collection[product].productDetail}</p>
                <p><i class="fas fa-truck delivery-icon"></i> <strong>${
                  product2Collection[product].productDelivery
                }</strong> </p>
                <p class="location"><i class="fas fa-map-marker-alt location-icon"></i> ${
                  product2Collection[product].productLocation
                }</p>
                <div class="rating">
                ${generateStars(product2Collection[product].stars)}
                </div>
            </div>
            `;
  }
  product2_slider.innerHTML = products;

  const tnSlider = tns({
    container: ".product2_slider",
    items: 2,
    gutter: 18,
    slideBy: 1,
    nav: true,
    navPosition: "bottom",
    speed: 400,
    controlsContainer: "#product2-slider-controls",
    prevButton: ".product2-previous",
    nextButton: ".product2-next",
    touch: true,
    mouseDrag: true,
    swipeAngle: false,
    responsive: {
      992: {
        items: 4,
      },
    },
  });
}

// banner slider  -------------------------------------------------

const banner_slider = document.querySelector(".banner_slider");

const bannerCollection = [
  {
    productImage: "./images/Frame1.png",
  },
  {
    productImage: "./images/Frame1.png",
  },
  {
    productImage: "./images/Frame1.png",
  },
  {
    productImage: "./images/Frame1.png",
  },
];

window.addEventListener("load", () => bannerSlider());

function bannerSlider() {
  let products = "";
  for (let product in bannerCollection) {
    products += `

             <div class="banner">
                <img
                src="${bannerCollection[product].productImage}"
                alt="Gavya Mart"
                />
            </div>
           
            `;
  }
  banner_slider.innerHTML = products;

  const tnSlider = tns({
    container: ".banner_slider",
    items: 1,
    gutter: 15,
    slideBy: 1,
    nav: true,
    navPosition: "bottom",
    speed: 400,
    touch: true,
    mouseDrag: true,
    swipeAngle: false,
  });
}

// category  slider  -------------------------------------------------

const category_slider = document.querySelector(".category_slider");

const categoryCollection = [
  {
    Image: "./images/Flower.png",
    Title: "Gardening & Planting",
  },
  {
    Image: "./images/Box.png",
    Title: "General Merchandise",
  },
  {
    Image: "./images/Colors.png",
    Title: "Festives, Celebration",
  },
  {
    Image: "./images/Tomato.png",
    Title: "Fruit,Veg, Exotics",
  },
  {
    Image: "./images/Chicken.png",
    Title: "Chicken, Meat, Fish",
  },
  {
    Image: "./images/Box.png",
    Title: "General Merchandise",
  },
];

window.addEventListener("load", () => categorySlider());

function categorySlider() {
  let categories = "";
  for (let category in categoryCollection) {
    categories += `
             <div class="category">
                <img
                src="${categoryCollection[category].Image}"
                alt="Gavya Mart"
                />
                <h3>${categoryCollection[category].Title}</h3>
                
            </div>
            `;
  }
  category_slider.innerHTML = categories;

  const tnSlider = tns({
    container: ".category_slider",
    items: 2,
    gutter: 15,
    slideBy: 1,
    nav: true,
    navPosition: "bottom",
    speed: 400,
    controlsContainer: "#category-slider-controls",
    prevButton: ".category-previous",
    nextButton: ".category-next",
    touch: true,
    mouseDrag: true,
    swipeAngle: false,
    responsive: {
      992: {
        items: 5,
      },
    },
  });
}
