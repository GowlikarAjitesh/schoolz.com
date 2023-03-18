// send data function
const sendData = (path, data) => {
    fetch(path, {
        method: 'post',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(data)

    })
    .then(res => res.json())
    .then(data => processData(data));
}

const processData = (data) => {
    console.log(data);
    loader.style.display = null;
    if(data.alert){
        showAlert(data.alert);
    }
    else if(data.name){
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
    else if(data.product){
        sessionStorage.user = JSON.stringify(data);
        location.replace('/');
    }
}

const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 1000);
}