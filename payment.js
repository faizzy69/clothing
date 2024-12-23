// Fetch the cart from localStorage (or session storage) and display it
window.onload = function() {
    const checkoutItems = document.getElementById("checkoutItems");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        checkoutItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            checkoutItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" />
                <p>${item.name}</p>
                <p>Price: $${item.price}</p>
            </div>
            `;
        });
    }

    document.getElementById("paymentForm").onsubmit = function(event) {
        event.preventDefault();
        alert("Payment Successful! Your order will be processed shortly.");
        localStorage.removeItem("cart"); // Clear cart after payment
        window.location.href = "thankyou.html"; // Redirect to a thank-you page
    };
};
