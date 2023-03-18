window.onload = () => {
    if (sessionStorage.user) {
        user = JSON.parse(sessionStorage.user);
        if (user.email) {
            location.replace('/');
        }
    }
}
let submitBtn = document.querySelector('.submit-btn');
let loader = document.querySelector('.loader');

submitBtn.addEventListener('click', () => {
    let fullname = document.querySelector('#name') || null;
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let phone = document.querySelector('#phone') || null;
    let tac = document.querySelector('#tac') || null;
    if (fullname != null) {
        if (fullname.value.length < 3) {
            showAlert('Name must be 3 letters long');
        } else if (!email.value.length) {
            showAlert('Enter your Email');
        } else if (password.value.length < 8) {
            showAlert('Password should be 8 letters long');
        } else if (!phone.value.length) {
            showAlert('Enter your Phone Number');
        } else if (!Number(phone.value) || (phone.value.length < 10) || (phone.value.length > 10)) {
            showAlert('Invalid number, please enter valid one');
        } else if (!tac.checked) {
            showAlert('you must agree to our terms and conditions');
        } else {
            // submit form
            loader.style.display = 'block';
            sendData('/signup', {
                name: fullname.value,
                email: email.value,
                password: password.value,
                phone: phone.value,
                tac: tac.checked
            })
        }
    }
    else{
        if(!email.value.length || !password.value.length){
            showAlert('Fill all the inputs');
        }
        else{
            loader.style.display='block';
            sendData('/login', {
                email: email.value,
                password: password.value
            })
        }
    }
})

