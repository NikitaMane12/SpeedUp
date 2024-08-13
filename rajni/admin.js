const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");
const adminName = document.querySelector("#AdminName");

// JSON data for recent orders
const Orders = [
    {
        "productName": "Super73 Z Adventure Blackout SE",
        "price": "3095.00",
        "id": 3,
        "image": "https://boostedusa.com/cdn/shop/products/23YM_Z-Blackout_Right_1600x.jpg?v=1697495956"
      },
      {
        "productName": "Super73 Z Miami SE",
        "price": "2295.00",
        "id": 4,
        "image": "https://boostedusa.com/cdn/shop/files/LastMile-SF-Marin-Super73-Electric-bikes-2023_ZMiamiSE_Metallic-02_1600x.webp?v=1698944106"
      }
    
];

// Function to populate recent orders table
function populateRecentOrders() {
    const recentOrdersBody = document.getElementById('recentOrdersBody');
    Orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.productName}</td>
            <td>${order.price}</td>
            <td><img src="${order.image}" alt="${order.productName}"></td>
        `;
        recentOrdersBody.appendChild(row);
    });
}

// Populate the recent orders table when the page loads
populateRecentOrders();

// Show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});



themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});
