const createNav = () => {
    let nav = document.querySelector('#header');
    nav.innerHTML = 
    `<div id="brand-logo">
    <a href="/" id="logoAnchor"><img src="img/logo/logo.png" alt="loading" id="logo-img"></a>
</div>
<!-- <div id="search-box">
    <form action="/search" method="GET" class="search-bar">
        <input type="text" placeholder="Search here !" class="search" name="search" onkeyup="search()" id="search-item">
        <button type="button" value="Search" class="submit"><i class="fas fa-search"></i></button>
    </form>
</div> -->
<div id="navigation-bar">
    <ul id="navbar">
        <li><a onclick="home()" href="/" class="home active">Home</a></li>
        <li><a onclick="shop()" href="/shop" class="shop">Shop</a></li>
        <li><a onclick="help()" href="/help" class="help">Help</a></li>
        <div class="user">
            <li id="lg-acc"><a href="#" class="user-icon" onclick="login()" ><i class="fas fa-user-circle "></i></a></li>
            <div class="user-icon-popup ">
                <p>login account</p>
                <a href="#">login</a>
            </div>
        </div>
        <div class="cart" onclick="location.href='/cart'">
            <li id="lg-bag"><a href="#" onclick="cart()"  class="cart"><i class="fas fa-bag-shopping cart-icon"></i></a></li>
            <div class="cart-item-count">00</div>
        </div>
        <a href="#" id="close"><i class="fas fa-times"></i></a>
    </ul>
</div>
<div id="mobile">
    <a href="/cart"><i class="fas fa-bag-shopping"></i></a>
    <i id="bar" class="fas fa-outdent"></i>
</div>`;
}
createNav();


let home1 = document.querySelector('.home');
let shop1 = document.querySelector('.shop');
let help1 = document.querySelector('.help');
let login1 = document.querySelector('.user-icon');
let cart1 = document.querySelector('.cart');

const home = () => {
    home1.classList.add('active');
    shop1.classList.remove('active');
    help1.classList.remove('active');
    login1.classList.remove('active');
    cart1.classList.remove('active');
}
const shop = () => {
    home1.classList.remove('active');
    shop1.classList.add('active');
    help1.classList.remove('active');
    login1.classList.remove('active');
    cart1.classList.remove('active');
}
const help = () => {
    home1.classList.remove('active');
    shop1.classList.remove('active');
    help1.classList.add('active');
    login1.classList.remove('active');
    cart1.classList.remove('active');
}
const login = () => {
    home1.classList.remove('active');
    shop1.classList.remove('active');
    help1.classList.remove('active');
    login1.classList.add('active');
    cart1.classList.remove('active');
}
const cart = () => {
    home1.classList.remove('active');
    shop1.classList.remove('active');
    help1.classList.remove('active');
    login1.classList.remove('active');
    cart1.classList.add('active');
}