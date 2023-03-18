
const createSmallCard = (card) => {
    return `
    <div class="sm-product">
        <img src="${card.productImage}" class="sm-product-img" alt="">
        <div class="sm-text">
            <p class="sm-product-name">${card.productName}</p>
            <p class="sm-des">${card.shortDes}</p>
            <p class="sm-des">SIZE: ${card.size}</p>
        </div>
        <div class="item-counter">
            <button class="counter-btn decrement">-</button>
            <p class="itemcount">${card.item}</p>
            <button class="counter-btn increment">+</button>
        </div>
        <p class="sm-price" data-price="${card.price}">&#8377; ${card.price * card.item}</p>
        <button class="sm-delete-btn"><img src="img/close.png" alt=""></button>
    </div>`
};
//line 20
const setCartProducts = () => {
    const cartContainer = document.querySelector('.cart-container');
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null || !cart.length) {
        cartContainer.innerHTML += `<img src="img/empty-cart.png" class="empty-img" alt="">`
    }
    else {
        for (let i = 0; i < cart.length; i++) {
            cartContainer.innerHTML += createSmallCard(cart[i]);
            
            //totalBill += Number(cart[i].price * cart[i].item);
            //updateBill();
        }
    }
    setupCardEvents();
    
}
setCartProducts();

const setupCardEvents = () => {
    const counterMinus = document.querySelectorAll('.card-container .decrement');
    const counterPlus = document.querySelectorAll('.increment');
    const counts = document.querySelectorAll('.card-container .itemcount');
    const price = document.querySelectorAll('.card-container .sm-price');
    const deleteBtn = document.querySelectorAll('.cart-container .sm-delete-btn');
    
    let product = JSON.parse(localStorage.getItem('cart'));
    counts.forEach((item, i) => {
        let cost = Number(price[i].getAttribute('data-price'));
         counterMinus[i].addEventListener('click', () => {
             if (item.innerHTML > 1) {
                  item.innerHTML--;
                 // totalBill -= cost;
                 // //updateBill();
                 // price[i].innerHTML = `$${item.innerHTML * cost}`;
                 // product[i].item = item.innerHTML;
                 // localStorage.setItem('cart', JSON.stringify(product));
 
             }
         })
 
         counterPlus[i].addEventListener('click', () => {
             if (item.innerHTML < 9) {
                  item.innerHTML++;
                 // totalBill += cost;
                 // //updateBill();
                 // nprice[i].innerHTML = `$${item.innerHTML * cost}`;
                 // product[i].item = item.innerHTML;
                 // localStorage.setItem('cart', JSON.stringify(product));
             }
         })
 
     });
 
     // deleteBtn.forEach((item, i) => {
     //     item.addEventListener('click', () => {
     //         product = product.filter((data, index) => index != i);
     //         localStorage.setItem('cart', JSON.stringify(product));
     //         location.reload();
     //     })
     // })
};
s//etupCardEvents();
// let totalBill = 0;



// const updateBill = () => {
//     //updateNavCartCounter();
//     let billPrice = document.querySelector('.bill');
//     billPrice.innerHTML = `$${totalBill}`;
// }

