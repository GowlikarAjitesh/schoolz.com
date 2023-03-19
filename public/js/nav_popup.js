
//user icon popup

let userIcon = document.querySelector('.user-icon');
let userPopupIcon = document.querySelector('.user-icon-popup');
userIcon.addEventListener('click', () => userPopupIcon.classList.toggle('active1'))

let text = userPopupIcon.querySelector('p');
let actionBtn = userPopupIcon.querySelector('a');
let user = JSON.parse(sessionStorage.user || null);
if (user != null) {
    text.innerHTML = ` `;
    actionBtn.innerHTML = 'logout';
    actionBtn.addEventListener('click', () => logout());
}
else {
    text.innerHTML = 'login account';
    actionBtn.innerHTML = 'login';
    actionBtn.addEventListener('click', () => location.href = '/login');
}
const logout = () => {
    let cart = JSON.parse(sessionStorage.getItem('cart'));
        sessionStorage.clear();
        location.reload();
}

const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)

    })
    .then(res => res.json())
    .then(data => processData(data));
}


// nav cart count

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