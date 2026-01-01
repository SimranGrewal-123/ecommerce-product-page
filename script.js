let cart = [];
let total = 0;

function addToCart(productName, price) {
    cart.push({ productName, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    cartItems.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.productName} - $CAD${item.price}`;
        cartItems.appendChild(li);
    });

    totalElement.textContent = total;
}

