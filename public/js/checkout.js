var btn = document.querySelector("placeOrder");
var email = document.getElementById("email").value;
var cart = localStorage.getItem('cart');
btn.addEventListener('click', function(e){
    e.preventDefault()
    console.log('hii');
    Email.send({
        SecureToken : "2504ab39-45a6-423f-b079-4592c0f38033",
        To : 'ajiteshgowlikar@gmail.com',
        From : 'ajiteshgowlikar@gmail.com',
        Subject : "Your order has been successfully placed",
        Body : cart
    }).then(
      message => alert(message)
    );
})