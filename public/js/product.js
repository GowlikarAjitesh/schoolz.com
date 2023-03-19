
let cartBtn = document.querySelector('.cart-btn');
var c = 0;
cartBtn.addEventListener('click', () => {
    c += 1;
    if (sessionStorage.getItem('user')) {
        let productName = document.querySelector('.product-title');
        var e = document.getElementById("select-size");
        var size = e.options[e.selectedIndex].text;
        let shortDes = document.querySelector('.product-des');
        let price = document.querySelector('.price1');
        let productImage = document.querySelector('.product-image');
        let quan = document.querySelector("quantity");
        if (size == "Select Size") {
            alert("Select a size");
        }
        else {
            let cart = [];
            if (sessionStorage.getItem('cart')) {
                cart = JSON.parse(sessionStorage.getItem('cart'));
                c = cart.length + quan + 1;
            }
            if(localStorage.getItem('cart')){
                cart = JSON.parse(localStorage.getItem('cart'));
                c = cart.length + quan + 1;
            }
            cart.push(product = { 'item': 1, 'productName': productName.innerHTML, 'size': size, 'price': price.innerHTML, 'productImage': productImage.src, 'shortDes': shortDes.innerHTML, "count": c });
            console.log(cart);
            localStorage.setItem('cart', JSON.stringify(cart));

            const updateNavCartCounter = () => {
                let cartCounter = document.querySelector('.cart-item-count');
                let cartItem = JSON.parse(localStorage.getItem('cart'));
                if (cartItem == null) {
                    cartCounter.innerHTML = '00';
                }
                else {
                    if (cartItem.length > 9) {
                        cartCounter.innerHTML = '9+';
                    }
                    else if (cartItem.length <= 9) {
                        cartCounter.innerHTML = `0${cartItem.length}`;
                    }
                }
            }

            updateNavCartCounter();
        }
    }
    else {
        alert("login to buy items");
    }
});
