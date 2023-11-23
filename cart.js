document.addEventListener('DOMContentLoaded', function () {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsList = document.getElementById('cartItems');

    function updateCart() {
        cartItemsList.innerHTML = '';

        cart.forEach(function (item, index) {
            const productDiv = document.createElement('div');
            productDiv.className = 'cart-item';
            productDiv.style.border = '1px solid #000'; // Add an outline
            
            const productName = document.createElement('p');
            productName.textContent = `Product ${item.productNumber}`;
            
            const payNowButton = document.createElement('button');
            payNowButton.textContent = 'Pay Now';
            payNowButton.className = 'cart-button pay-now-button'; // Apply styles for Pay Now button
            payNowButton.onclick = function() {
                payForProduct(item.productNumber);
            };

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'cart-button remove-button'; // Apply styles for Remove button
            removeButton.onclick = function() {
                removeFromCart(index);
            };

            productDiv.appendChild(productName);
            productDiv.appendChild(payNowButton);
            productDiv.appendChild(removeButton);
            cartItemsList.appendChild(productDiv);
        });
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    }

    function payForProduct(productNumber) {
        // You can implement payment logic here based on the selected product
        console.log(`Paying for Product ${productNumber}`);
        // Add your payment integration or redirection logic as needed
    }

    updateCart();

    window.clearCart = function() {
        localStorage.removeItem('cart');
        cart = [];
        updateCart();
    };
});
