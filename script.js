let elems = document.querySelectorAll(".elem");

let fullelem = document.querySelectorAll(".fullelem");



elems.forEach((elem)=>{
    elem.addEventListener("click",function(){
        console.log(elem.id);

        fullelem[elem.id].style.display = "block";
    })

})