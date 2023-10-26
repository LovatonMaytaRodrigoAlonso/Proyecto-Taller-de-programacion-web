// programacion del movimiento de promociones 
document.addEventListener('DOMContentLoaded', function () {
    const btnCart = document.querySelector('.container-cart-icon');
    const containerCartProducts = document.querySelector('.container-cart-products');
    const cartInfo = document.querySelector('.cart-product');
    const rowProduct = document.querySelector('.row-product');
    const productsList = document.querySelector('.container-menu');
    const valorTotal = document.querySelector('.total-pagar');
    const countProducts = document.querySelector('#contador-productos');
    const cartEmpty = document.querySelector('.cart-empty');
    const cartTotal = document.querySelector('.cart-total');
    
    // Variable de arreglos de Productos
    let allProducts = [];
    
    btnCart.addEventListener('click', () => {
        containerCartProducts.classList.toggle('hidden-cart');
    });
    
    productsList.addEventListener('click', e => {
        if (e.target.classList.contains('btn-add-cart')) {
            const product = e.target.parentElement;
    
            const infoProduct = {
                quantity: 1,
                title: product.querySelector('h2').textContent,
                price: product.querySelector('p').textContent,
            };
    
            const exists = allProducts.some(
                product => product.title === infoProduct.title
            );
    
            // condición de existencia de algún producto para su incremento
            if (exists) {
                const products = allProducts.map(product => {
                    if (product.title === infoProduct.title) {
                        product.quantity++;
                        return product;
                    } else {
                        return product;
                    }
                });
                allProducts = [...products];
            } else {
                allProducts = [...allProducts, infoProduct];
            }
    
            showHTML();
        }
    });
    
    // el evento servirá para eliminar un producto del carrito 
    rowProduct.addEventListener('click', e => {
        if (e.target.classList.contains('icon-close')) {
            const product = e.target.parentElement;
            const title = product.querySelector('p').textContent;
    
            allProducts = allProducts.filter(
                product => product.title !== title
            );
    
            showHTML();
        }
    });
    
    // Función para mostrar el HTML
    const showHTML = () => {
        if (!allProducts.length) {
            cartEmpty.classList.remove('hidden');
            rowProduct.classList.add('hidden');
            cartTotal.classList.add('hidden');
        } else {
            cartEmpty.classList.add('hidden');
            rowProduct.classList.remove('hidden');
            cartTotal.classList.remove('hidden');
        }
    
        // Limpiar HTML
        rowProduct.innerHTML = '';
    
        // Inicializa el total del carrito
        let total = 0;
        let totalOfProducts = 0;
    
        allProducts.forEach(product => {
            const containerProduct = document.createElement('div');
            containerProduct.classList.add('cart-product');
    
            containerProduct.innerHTML = `
                <div class="info-cart-product">
                    <span class="cantidad-producto-carrito">${product.quantity}</span>
                    <p class="titulo-producto-carrito">${product.title}</p>
                    <span class="precio-producto-carrito">${product.price}</span>
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="icon-close"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            `;
    
            rowProduct.append(containerProduct);
    
            // Función para calcular el total final del cliente
            total = total + parseInt(product.quantity * product.price.slice(1));
            totalOfProducts = totalOfProducts + product.quantity;
        });
    
        valorTotal.innerText = `S/. ${total}.00`;
        countProducts.innerText = totalOfProducts;
    };
    
    // Mantener el menú de navegación
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            nav.classList.add('active');
        } else {
            nav.classList.remove('active');
        }
    });
});


// movilizar los platos y bebidas
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#IrPlatos').addEventListener('click', () => {
		window.scrollTo({
			top: 450,
			behavior: "smooth"
		});
	});

	document.querySelector('#IrBebidas').addEventListener('click', () => {
		window.scrollTo({
			top: 1750,
			behavior: "smooth"
		});
	});
});