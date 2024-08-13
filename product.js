let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let productData = [
  {
    productName: "Boosted Rev Brake-Lever",
    price: "19.00",
    id: 1,
    image:
      "https://boostedusa.com/cdn/shop/products/BPN-103790_2000x.jpg?v=1610483730",
  },
  {
    productName: "Boosted Helmet - Triple 8 Mips",
    price: "69.00",
    id: 2,
    image:
      "https://boostedusa.com/cdn/shop/products/boosted-triple-8-mips-helmet-side_2000x.jpg?v=1610485289",
  },
  {
    productName: "Super73 Z Adventure Blackout SE",
    price: "3095.00",
    id: 3,
    image:
      "https://boostedusa.com/cdn/shop/products/23YM_Z-Blackout_Right_1600x.jpg?v=1697495956",
  },
  {
    productName: "Boosted Rev Stomp Brake Fender",
    price: "Sold Out",
    id: 4,
    image: "https://boostedusa.com/cdn/shop/products/03_2000x.jpg?v=1610478682",
  },
  //   {
  //     productName: "Boosted Daypack Waterproof Backpack",
  //     price: "59.00",
  //     id: 5,
  //     image:
  //       "https://boostedusa.com/cdn/shop/products/Daypack-Hero_2x__1_2000x.jpg?v=1586300122",
  //   },
];
window.onload = function () {
  renderData(productData);
};

function renderData(data) {
  //   console.log(data);
  let mainContainer = document.getElementById("mainContainerN");
  data.forEach((element) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = element.image;
    let name = document.createElement("p");
    name.innerText = element.productName;
    let price = document.createElement("p");
    price.innerText = `₹ ${element.price}`;
    div.append(img, name, price);
    mainContainer.append(div);
  });
}
