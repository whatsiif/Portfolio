let nav=document.querySelector(".navbar");
window.onscroll= function () {
    if(document.documentElement.scrollTop> 15){
        nav.classList.add("header-scroll");
    }else{
        nav.classList.remove("header-scroll")
    }
}

let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");

navBar.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapse.classList.remove("show")
    })
})

