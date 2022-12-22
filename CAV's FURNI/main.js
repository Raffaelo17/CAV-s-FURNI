function myNav(){
    let bar = document.getElementById("bar");
    let nav = document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.right == "0%"){
            nav.style.right = "-50%";
            bar.src = "images/menu.png"
        }else{
            nav.style.right = "0%";
            bar.src = "images/x.png"
        }
    }
}
myNav();

function myHeader(){
    let header = document.getElementById("header");
    let lamp = document.getElementById("lamp");
    window.addEventListener("scroll",function(){
        if(window.scrollY > 0){
            header.classList.add("active")
            lamp.src = "images/wbulb.png";
        }else{
            header.classList.remove("active")
            lamp.src = "images/lbulb.png";
        }
    })
}
myHeader()