// from cart t0  redirect to home page
function redirectToHomePage() {
    // Replace 'home.html' with the actual URL of your homepage
    window.location.href = 'product.html';
}

let productData = [
    {
      "productName": "Evolve Performance Bushings Pack",
      "price": "$ 19.00",
      "id": 1,
      "image": "https://boostedusa.com/cdn/shop/products/BPN-103790_2000x.jpg?v=1610483730"
    },
    {
      "productName": "Boosted Helmet - Triple 8 Mips",
      "price": "$ 69.00",
      "id": 2,
      "image": "https://boostedusa.com/cdn/shop/products/boosted-triple-8-mips-helmet-side_2000x.jpg?v=1610485289"
    },
    {
      "productName": "Super73 Z Adventure Blackout SE",
      "price": "$ 3095.00",
      "id": 3,
      "image": "https://boostedusa.com/cdn/shop/products/23YM_Z-Blackout_Right_1600x.jpg?v=1697495956"
    },
    {
      "productName": "Boosted Rev Stomp Brake Fender",
      "price": "$ 50.00",
      "id": 4,
      "image": "https://boostedusa.com/cdn/shop/products/03_2000x.jpg?v=1610478682"
    },
    {
      "productName": "Boosted Daypack Waterproof Backpack",
      "price": "$ 59.00",
      "id": 5,
      "image": "https://boostedusa.com/cdn/shop/products/Daypack-Hero_2x__1_2000x.jpg?v=1586300122"
    },
 ]


  function createProductCard(product){
    let productCard = document.createElement("div");
    productCard.className = "productCard";
    
    let image = document.createElement("img");
    image.id = "image";
    image.src = product.image;
    
    let title = document.createElement("p");
    title.textContent = product.productName;
    title.id = "recommeded-title"

    let p = document.createElement("p");
    p.textContent = product.price;
    let Addbutton = document.createElement("button");
    Addbutton.id = "Addbutton";
    Addbutton.textContent = "Add To Cart";
    productCard.append(image,title,p,Addbutton);


    
   
    Addbutton.addEventListener('click', ()=>{
        let data = JSON.parse(localStorage.getItem("products")) || [];
        let items = {
            "image" : product.image,
            "productName" : product.productName,
            "price" : product.price,
            "quantity" : 1,
      }
      let existingProductIndex = data.findIndex(product => product.productName === items.productName);
        if (existingProductIndex !== -1) {
            // Product already exists, update its quantity
            data[existingProductIndex].quantity++;
        }
        else {
            // Product doesn't exist, add it to the cart
            data.push(items);
        }
        localStorage.setItem("products", JSON.stringify(data));
        


        // modify
        getProducts();
        
       
    })
  
    
    return productCard;


}

  let productContainer = document.getElementById("productContainer");
  productData.forEach(item=>{
      let card = createProductCard(item);
      productContainer.appendChild(card);
  });


let getData = JSON.parse(localStorage.getItem("products")) || [];



let firstdiv = document.getElementById("first-div");
let secondDiv = document.getElementById("second-div");


function getProducts() {
    getData = JSON.parse(localStorage.getItem("products")) || [];
    if (getData.length === 0) { // Check if there are no items in the cart
        // If there are no items in the cart, show the first-div
        firstdiv.style.visibility = "visible";
        secondDiv.style.visibility = "hidden"; // Hide the second-div if it's visible
    // Hide the Pay Now button when cart is empty
    let payNowButton = document.getElementById("payNowButton");
    if (payNowButton) {
        payNowButton.style.display = "none";
    } else {
        console.error("Element with id 'payNowButton' not found.");
    }
} else {
    firstdiv.style.visibility = "hidden";
    secondDiv.style.visibility = "visible";

    let totalPrice = 0;
    getData.forEach((element) => {
        totalPrice += parseFloat(element.price.replace("$", "").trim()) * element.quantity;
    });

    let totalPriceElement = document.getElementById("totalPrice");
    if (totalPriceElement) {
        totalPriceElement.textContent = "Total Price: $" + totalPrice.toFixed(2);
    } else {
        console.error("Element with id 'totalPrice' not found.");
    }

    // Show the Pay Now button when there are items in the cart
    let payNowButton = document.getElementById("payNowButton");
    if (payNowButton) {
        payNowButton.style.display = "block";
    } else {
        console.error("Element with id 'payNowButton' not found.");
    }


        secondDiv.innerHTML = "";
        getData.forEach((element, index) => {
            createCard(element, index);
        });
    }
}
// Add functionality to the Pay Now button
let payNowButton = document.getElementById("payNowButton");
if (payNowButton) {
    payNowButton.addEventListener('click', () => {
        // You can add the logic here for handling payment
        // For example, redirecting to a payment gateway or processing payment
        // For now, let's just log a message
        console.log("Redirecting to payment gateway...");
    });
} else {
    console.error("Element with id 'payNowButton' not found.");
}




getProducts();


function createCard(obj,index){
   let mycard = document.createElement("div");
   mycard.id = "mycard";
   let imageDiv = document.createElement("div");
   imageDiv.id = "imageDiv";
   let myImage = document.createElement("img");
   myImage.id = "myImage";
   myImage.src = obj.image;
    
   let myTitle = document.createElement("p");
   myTitle.textContent = obj.productName;
   myTitle.id = "myTitle"
   let MYprice = document.createElement("p");
   MYprice.textContent = "Price:" + " " + obj.price;

   let deleteButton = document.createElement("button");
   deleteButton.innerText = "Delete"
   deleteButton.id = "deleteButton";
   let increaseButton = document.createElement("button");
   increaseButton.id = "increaseButton";
   increaseButton.innerText = "+";
   let quantity = document.createElement("p");
   quantity.innerText =  "Quantity:" + " " + obj.quantity;
   let descreseButton = document.createElement("button");
   descreseButton.id = "decreaseButton";
   descreseButton.innerText = "-";

   // to increase the quantity 
   
   increaseButton.addEventListener('click', () => {
    // Find the corresponding product in the cart based on its index
    let product = getData[index];
    
    // Increase the quantity of the product
    product.quantity++;

    // Update the quantity display on the UI
    quantity.innerText = "Quantity: " + product.quantity;

    // Update the local storage with the modified data
    localStorage.setItem("products", JSON.stringify(getData));
    getProducts();
});



// to decrese the qauntity 
descreseButton.addEventListener('click', () => {
    // Find the corresponding product in the cart based on its index
    let product = getData[index];

    // Decrease the quantity of the product
    product.quantity--;

    // If the quantity becomes 0, remove the item from the cart
    if (product.quantity === 0) {
        getData.splice(index, 1); // Remove the item from the array
        localStorage.setItem("products", JSON.stringify(getData)); // Update local storage
        mycard.remove(); // Remove the card from UI
        getProducts(); // Update UI
    } else {
        // Update the quantity display on the UI
        quantity.innerText = "Quantity: " + product.quantity;
        localStorage.setItem("products", JSON.stringify(getData)); // Update local storage
        getProducts();
    }
});




// to remove the item from cart
   deleteButton.addEventListener ('click', ()=>{
       let ind = index;
       if (ind >= 0 && ind < getData.length) {
        // Remove the item at the specified index
        getData.splice(ind, 1);
        
        // Update the local storage with the modified data
         localStorage.setItem("products", JSON.stringify(getData));

        mycard.remove();
        getProducts();
        // Optionally, you can update your UI to reflect the changes
    }
    else {
        console.log('Invalid index');
    }
   })

   

   imageDiv.appendChild(myImage);

   mycard.append(imageDiv,myTitle,MYprice,deleteButton,increaseButton,quantity,descreseButton,);
   secondDiv.append(mycard);

    
}










