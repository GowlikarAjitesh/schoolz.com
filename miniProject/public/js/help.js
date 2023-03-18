let ssubmit = document.querySelector('#submit');
let qname = document.querySelector("#q_name");

let qemail = document.querySelector('.email');
let qsubject = document.querySelector('.subject');
let qmessage = document.querySelector('.message');
let q = document.getElementById('query');
ssubmit.addEventListener('click', () => {
    if(qname.value.length==0){
        q.innerHTML = ('Fill all the inputs');
    }
    else{
        sendData('/submit-suggestion', {
            qname: qname.value,
            qemail: qemail.value,
            qsubject: qsubject.value,
            qmessage: qmessage.value
        });
    }

})


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
    sessionStorage.query = JSON.stringify(data);
    location.replace('/help');
}