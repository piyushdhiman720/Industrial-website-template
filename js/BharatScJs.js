
window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0 );
});


const Hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

    Hamburger.addEventListener('click',()=>{
    navUl.classList.toggle('show');
});





// var cnt = 1;

// setInterval(function(){
//     document.getElementById('radio'+cnt).checked = true;
//     cnt = cnt + 1;
//     if(cnt>4){
//         cnt=1
//     }
// }, 2000);