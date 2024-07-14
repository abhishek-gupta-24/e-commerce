let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('total').textContent = total.toFixed(2);
    document.getElementById('cart-count').textContent = cart.length;
}

function checkout() {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
}
