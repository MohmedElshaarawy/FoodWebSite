let menu  = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
//  btn click nav
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//  on Scroll
window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    
    if(window.scrollY > 60){
        document.querySelector('#scrollTop').classList.add('active');
    }else{
        document.querySelector('#scrollTop').classList.remove('active')
    }
    // style scroll
window.scrollBy({
    behavior:'smooth'
});
}
// loader container 
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out')
}

function fadeOut(){
    setInterval(loader ,3000);
}
window.onload = fadeOut();