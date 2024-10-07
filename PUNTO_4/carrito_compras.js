// Inicializar carrito
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Actualizar los elementos del carrito
const updateCartDisplay = () => {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    let totalItems = 0;
    let totalPrice = 0;

    cart.forEach(item => {
        totalItems += item.quantity;
        totalPrice += item.quantity * item.price;
    });

    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice.toFixed(2);
};

// Función para añadir productos al carrito
const addToCart = (productId, productName, productPrice) => {
    const existingProduct = cart.find(item => item.id === productId);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
};

// Event listener para los botones de "Añadir al Carrito"
const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.product');
        const productId = productElement.getAttribute('data-id');
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseFloat(productElement.getAttribute('data-price'));
        
        addToCart(productId, productName, productPrice);
    });
});

// Actualizar el carrito al cargar la página
updateCartDisplay();