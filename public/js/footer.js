const createFooter = () => {
    let footer = document.querySelector('.footer');
    footer.innerHTML = `
    <div class="col">
        <img src="img/logo/logo.png" alt="" class="logo">
        <h4>Contact</h4>
        <p><strong>Address:</strong> 562 RajBhavan Road, street 32, Hyderabad</p>
        <p><strong>Phone:</strong> +91 9000896861/ +91 9549129815</p>
        <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
        <div class="follow">
            <h4>Follow us</h4>
            <div class="icon">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-pintrest-p"></i>
                <i class="fab fa-youtube"></i>
            </div>
        </div>
    </div>
    <div class="col">
        <h4>About</h4>
        <a href="#">About Us</a>
        <a href="#">Delivery Information</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
        <a href="#">Contact Us</a>
    </div>
    <div class="col">
        <h4>My Account</h4>
        <a href="#">Sign In</a>
        <a href="#">View Cart</a>
        <a href="#">My WishList</a>
        <a href="#">Track My Order</a>
        <a href="#">Help</a>
    </div>
    <div class="col install">
        <h4>Install App ( Coming Soon... )</h4>
        <p>From App Store & Google Play</p>
        <div class="row">
            <img src="img/pay/app.jpg" alt="">
            <img src="img/pay/play.jpg" alt="">
        </div>
        <p><strong>Secured Payment Gatways</strong></p>
        <img src="img/pay/pay.png" alt="">
    </div>
    <div class="copyright">
        <p> &copy; 2022, MLR Institute Of Technology - Schoolz </p>
    </div>
    `;
}
createFooter();