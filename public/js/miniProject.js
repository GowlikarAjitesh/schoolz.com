
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click', ()=> {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', ()=> {
        nav.classList.remove('active');
    })
}
const search = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const sotreitems = document.getElementById("pro-container");
    const product = document.querySelectorAll("product-list");
    const pname = document.getElementsByTagName("h2");
    for(var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName("h2")[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML;
            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}