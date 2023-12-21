
const products = document.querySelectorAll('.col-4');

function addToCart(event) {

    const product = event.currentTarget;
    const productName = product.querySelector('h4').innerText;
    const productPrice = product.querySelector('p').innerText;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    cartItem.innerHTML = `
        <img src="${product.querySelector('img').src}" alt="${productName}">
        <div>
            <h4>${productName}</h4>
            <p>${productPrice}</p>
        </div>
    `;

    const shoppingCart = document.querySelector('.shopping-cart');
    shoppingCart.appendChild(cartItem);
}


products.forEach(product => {
    product.addEventListener('click', addToCart);
});
