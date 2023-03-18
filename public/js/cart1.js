
const createSmallCard = (card) => {
    return `
    <div class="row">
                                <!-- cart images div -->
                                <div
                                    class="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                                    <img src="${card.productImage}" class="img-fluid" alt="cart img">
                                </div>
                                <!-- cart product details -->
                                <div class="col-md-7 col-11 mx-auto px-4 mt-2">
                                    <div class="row">
                                        <!-- product name  -->
                                        <div class="col-6 card-title">
                                            <h1 class="mb-4 product_name">${card.productName}</h1>
                                            <p class="mb-2">${card.shortDes}</p>
                                            <p class="mb-3">SIZE: ${card.size}</p>
                                            <p class="mb-2">&#8377; <span id="money${card.count}">${card.price}</span></p>
                                        </div>
                                        <!-- quantity inc dec -->
                                        <div class="col-6">
                                            <ul class="pagination justify-content-end set_quantity">
                                                <li class="page-item">
                                                    <button class="page-link "
                                                        onclick="decreaseNumber('textbox${card.count}','itemval${card.count}', 'money${card.count}')">
                                                        <i class="fas fa-minus"></i> </button>
                                                </li>
                                                <li class="page-item"><input type="text" name="" class="page-link"
                                                        value="${card.item}" id="textbox${card.count}">
                                                </li>
                                                <li class="page-item">
                                                    <button class="page-link"
                                                        onclick="increaseNumber('textbox${card.count}','itemval${card.count}', 'money${card.count}')"> <i
                                                            class="fas fa-plus"></i></button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- //remover move and price -->
                                    <div class="row">
                                        <div class="col-8 d-flex justify-content-between remove_wish" id="remove${card.count}" onclick="remove(remove${card.count})">
                                            <p><i class="fas fa-trash-alt" ></i> REMOVE ITEM</p>
                                            <!-- <p><i class="fas fa-heart"></i>MOVE TO WISH LIST </p> -->
                                        </div>
                                        <div class="col-4 d-flex justify-content-end price_money">
                                            <h3>&#8377<span id="itemval${card.count}">${card.price}</span></h3>
                                        </div>
                                    </div>
                                </div>
                            </div>`
};

const setCartProducts = () => {
    const cartContainer = document.querySelector('.card123');
    var product_total_amt = document.getElementById('product_total_amt');
    var total_cart_amt = document.getElementById('total_cart_amt');
    let cart = JSON.parse(sessionStorage.getItem('cart'));
    if (cart == null || !cart.length) {
        cartContainer.innerHTML += `<img src="img/empty-cart.png" class="empty-img" alt="">`
    }
    else {
        for (let i = 0; i < cart.length; i++) {
            cartContainer.innerHTML += createSmallCard(cart[i]);
            product_total_amt.innerHTML = Number(product_total_amt.innerHTML) + Number(cart[i].price);
            total_cart_amt.innerHTML = Number(total_cart_amt.innerHTML) + parseInt(cart[i].price);
        }
    }
}
setCartProducts();



var product_total_amt = document.getElementById('product_total_amt');
var shipping_charge = document.getElementById('shipping_charge');
var total_cart_amt = document.getElementById('total_cart_amt');
var discountCode = document.getElementById('discount_code1');

const decreaseNumber = (incdec, itemprice, money) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    var productprice = document.getElementById(money).innerHTML;
    console.log(productprice);
    //console.log(itemprice.innerHTML);
    // console.log(itemval.value);
    if (itemval.value < 2) {
        itemval.value = 1;
    } else {
        itemval.value = parseInt(itemval.value) - 1;
        itemval.style.background = '#fff';
        itemval.style.color = '#000';
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - Number(productprice);
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) - Number(productprice);
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}
const increaseNumber = (incdec, itemprice, money) => {
    var itemval = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    var productprice = document.getElementById(money).innerHTML;
    // console.log(itemval.value);
    if (itemval.value >= 5) {
        itemval.value = 5;
        itemval.style.background = 'red';
        itemval.style.color = '#fff';
    } else {
        itemval.value = parseInt(itemval.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + Number(productprice);
        product_total_amt.innerHTML = parseInt(product_total_amt.innerHTML) + Number(productprice);
        total_cart_amt.innerHTML = parseInt(product_total_amt.innerHTML) + parseInt(shipping_charge.innerHTML);
    }
}
const remove = (product) => {
    console.log(product.id);
    var str1 = product.id;
    let cart1 = JSON.parse(sessionStorage.getItem('cart'));
    for (let i = 0; i < cart1.length; i++) {
        var val = cart1[i].count;
        var str2 = "remove" + val;
        console.log(str2);
        const result = str1.toUpperCase() === str2.toUpperCase();

        if (result) {
            cart1.splice(i, 1);
            break;
        }
    }
    sessionStorage.setItem('cart', JSON.stringify(cart1));
    location.reload();
}
let dc = 0;
const discount_code = () => {
    let totalamtcurr = parseInt(total_cart_amt.innerHTML);
    let dism = document.getElementById("discout1");
    let disr = document.getElementById("rupee");
    let dishead = document.getElementById("discountHeading");
    let error_trw = document.getElementById('error_trw');
    if (discountCode.value === 'shaik') {
        dc += 1;
        error_trw.innerHTML = "Hurray! code is valid";
        if (total_cart_amt.innerHTML > 100 && dc == 1) {
            let newtotalamt = totalamtcurr - 100;
            total_cart_amt.innerHTML = newtotalamt;
            dishead.innerHTML = "Discount";
            disr.innerHTML = "-&#8377;100";
            dism.innerHTML = "100";
        }
        else if (dc > 1) {
            error_trw.innerHTML = "Couponu already applied";
        }
        else {
            error_trw.innerHTML = "Add more Items to apply coupon";
        }
    } else {
        error_trw.innerHTML = "Wrong code Entered";
    }
}
let checkout = document.querySelector('#checkout');
checkout.addEventListener('click', () => {
    if (Number(total_cart_amt.innerHTML) > 0) {
        location.replace("/checkout");
    }
    else {
        alert("Your cart is empty");
    }
});
