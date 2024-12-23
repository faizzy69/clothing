// Sample Products
const products = [
    { id: 1, name: "Hoodie", category: "clothing", image: "assets/shoe1.jpg", price: 50 },
    { id: 2, name: "Joggers", category: "clothing", image: "assets/shoe2.jpg", price: 40 },
    { id: 3, name: "Shirt", category: "clothing", image: "assets/shirt.jpg", price: 30 },
];

// Cart management
let cart = [];

// Load Products
function loadProducts(productsToShow) {
    const productsSection = document.getElementById("products");
    productsSection.innerHTML = productsToShow
        .map(
            (product) => `
        <div class="product">
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
    `
        )
        .join("");
}

// Filter Products by Category
function filterCategory(category) {
    if (category === "new") {
        alert("New products coming soon!");
        return;
    }
    const filteredProducts = products.filter((p) => p.category === category);
    loadProducts(filteredProducts);
}

// Search Products
function searchProducts() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(query)
    );
    loadProducts(filteredProducts);
}

// Add to Cart
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    cart.push(product);
    document.getElementById("cartCount").innerText = `Cart: ${cart.length}`;
    alert(`Product ${product.name} added to the cart!`);
}

// Show Cart Modal
function showCart() {
    const cartSidebar = document.getElementById("cartSidebar");
    const cartSection = document.getElementById("cartSection");

    // Clear previous cart items
    cartSection.innerHTML = '';

    // Add cart items to the modal
    if (cart.length === 0) {
        cartSection.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            cartSection.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" />
                <p>${item.name}</p>
                <p>Price: $${item.price}</p>
            </div>
            `;
        });
    }

    cartSidebar.style.display = 'block'; // Show the cart sidebar
}

// Close Cart Modal
function closeCart() {
    const cartSidebar = document.getElementById("cartSidebar");
    cartSidebar.style.display = 'none'; // Hide the cart sidebar
}

// Go to Checkout Page
function goToCheckout() {
    window.location.href = 'payment.html'; // Redirect to checkout page
}

// Initial Load
loadProducts(products);

// Toggle Sidebar (for categories)
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
    } else {
        sidebar.style.left = "0px";
    }
}
