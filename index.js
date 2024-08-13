const mostPopPorducts = document.querySelector(".most-popular-products");

const jsonFile = "./products.json";

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("electricBikesLink").addEventListener("click", function(event) {
		event.preventDefault(); // Prevent default anchor behavior
		const eleScooterSection = document.getElementById("bikes");
		eleScooterSection.scrollIntoView({ behavior: "smooth" });
	});
});

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("getskateboard").addEventListener("click", function(event) {
		event.preventDefault(); // Prevent default anchor behavior
		const eleScooterSection = document.getElementById("skateboard");
		eleScooterSection.scrollIntoView({ behavior: "smooth" });
	});
});

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("getscooters").addEventListener("click", function(event) {
		event.preventDefault(); // Prevent default anchor behavior
		const eleScooterSection = document.getElementById("scooters");
		eleScooterSection.scrollIntoView({ behavior: "smooth" });
	});
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("shopScooter").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        window.location.href = "./cart.html"; // Redirect to ./cart.html
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("shopBoard").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        window.location.href = "./cart.html"; // Redirect to ./cart.html
    });
});




fetch(jsonFile)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((product) => { // Changed from map to forEach
            const { id, productName, price, images } = product;
            mostPopPorducts.innerHTML += `
                <div class="product-card" data-product-id="${id}">
                    <div class="product-card__container">
                        <div class="product-card__btn cart" data-tooltip="add to cart" onclick="addToCart(${id})">
                            <span class="material-symbols-rounded"> shopping_bag </span>
                        </div>
                        <div class="product-card__btn fav" data-tooltip="add to wishlist"><span class="material-symbols-rounded"> favorite </span></div>
                        <div class="product-card__img">
                            <img src="${images[0].url}" alt="${productName}" />
                        </div>
                    </div>
                    <div class="product-card__description">
                        <div class="product-card__text">${productName}</div>
                        <div class="product-card__price">${price}</div>
                    </div>
                    <div class="product-card__color">
                        ${images.map((image) => {
                            const { url, color } = image;
                            return `<button class="product-card__btn-radio" data-img="${url}">
                                        <span style="background-color: ${color};"></span>
                                    </button>`;
                        }).join("")}
                    </div>
                </div>
            `;
        });

        // Select all radio buttons
        const radioBtns = document.querySelectorAll(".product-card__btn-radio");
        document.querySelectorAll(".product-card__color").forEach((pcc) => pcc.firstElementChild.classList.add("selected"));
        radioBtns.forEach((radioBtn) => {
            radioBtn.addEventListener("click", () => {
                let productCard = radioBtn.parentElement.parentElement,
                    productImg = productCard.querySelector(".product-card__img > img"),
                    proRadioBtns = productCard.querySelectorAll(".product-card__btn-radio");
                if (radioBtn.parentElement.parentElement === productCard) {
                    proRadioBtns.forEach((radioBtn) => radioBtn.classList.remove("selected"));
                    radioBtn.classList.add("selected");
                    productImg.src = radioBtn.dataset.img;
                }
            });
        });
    });

// Function to handle "add to cart" button click
function addToCart(productId) {
    // Redirect to product.html with the productId as a query parameter
    window.location.href = `product.html?id=${productId}`;
}
