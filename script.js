function openFeature(){
    let elems = document.querySelectorAll(".elem");
let fullelem = document.querySelectorAll(".fullelem");
let fullelemBackbtn = document.querySelectorAll(".fullelem .back");

elems.forEach((elem)=>{
    elem.addEventListener("click",function(){
        console.log(elem.id);

        fullelem[elem.id].style.display = "block";
    })

})

fullelemBackbtn.forEach((back)=>{
    back.addEventListener("click",()=>{
        fullelem[back.id].style.display = "none";
    })
})
}

openFeature();

let allTasks = document.querySelector(".todo-fullpage .taskcontainer .allTasks");
let form = document.querySelector(".todo-fullpage .taskcontainer .addTasks form");
let tasktitle = document.querySelector(".todo-fullpage .taskcontainer .addTasks form input");
let taskdesc = document.querySelector(".todo-fullpage .taskcontainer .addTasks form textarea");
let checkImp = document.querySelector(".todo-fullpage .taskcontainer .addTasks form .check-imp input");
let savedTasks = [{
    title:"task ka title",
    desc:"task ka desc",
    isImp:true
}]

console.log(form)

function renderTasks(){
    allTasks.innerHTML = "";
    savedTasks.forEach((e)=>{
        let div = document.createElement("div");
        div.classList.add("task");
        div.style.justifyContent = "space-between";
        div.innerHTML = `
        <div class="task">
                        <h2>${e.title} ${e.isImp ? `<span class="imp">Imp</span>` : ""}</h2>
                        <button>Mark as Completed</button>
                    </div>
        `;
        allTasks.appendChild(div);

    })
}

renderTasks();

form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log(tasktitle.value , taskdesc.value , checkImp.checked);
    savedTasks.push({title:tasktitle.value,desc:taskdesc.value,isImp:checkImp.checked});
    console.log(savedTasks);
    renderTasks();
    tasktitle.value = "";
    taskdesc.value = "";
    checkImp.value = "";
})



