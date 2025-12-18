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


function todo(){
var savedTasks = [];

if(localStorage.getItem("TaskList")){
    savedTasks = JSON.parse(localStorage.getItem("TaskList"));
} else {
    console.log("Task lIst is empty");
}

function renderTasks(){
    var allTask = document.querySelector('.allTasks');
    console.log(allTask)

        var sum = ''

        savedTasks.forEach(function (elem, idx) {
            sum = sum + `<div class="task">
        <h2>${elem.title} <span class="${elem.imp}">imp</span></h2>
        <button id=${idx}>Mark as Completed</button>
        </div>`
        })

        allTask.innerHTML = sum;

        localStorage.setItem('TaskList', JSON.stringify(savedTasks))

        document.querySelectorAll('.task button').forEach(function (btn) {
            btn.addEventListener('click', function () {
                savedTasks.splice(btn.id, 1)
                renderTasks()
            })
        })
    
}

renderTasks();


let form = document.querySelector(".todo-fullpage .taskcontainer .addTasks form");
let tasktitle = document.querySelector(".todo-fullpage .taskcontainer .addTasks form input");
let taskdesc = document.querySelector(".todo-fullpage .taskcontainer .addTasks form textarea");
let checkImp = document.querySelector(".todo-fullpage .taskcontainer .addTasks form .check-imp input");

form.addEventListener("submit",function(e){
    e.preventDefault();
    console.log(tasktitle.value , taskdesc.value , checkImp.checked);
    savedTasks.push({title:tasktitle.value,desc:taskdesc.value,isImp:checkImp.checked});
    console.log(savedTasks);
    localStorage.setItem("TaskList",JSON.stringify(savedTasks));
    renderTasks();
    tasktitle.value = ''
    taskdesc.value = ''
    checkImp.checked = false;
})

}

todo();

function dayPlanner(){
var dayGoals = JSON.parse(localStorage.getItem("dayGoals")) || {};
let dayPlanner = document.querySelector(".day-planner");

var hours = Array.from({length:18},(elem,idx)=>{
    return `${6+idx}:00 - ${7+idx}:00`
})


var wholeDaySum = '';

hours.forEach((e,idx)=>{

    let saveData = dayGoals[idx] || '';
    wholeDaySum += `
    <div class="day-planner-time">
                    <p>${e}</p>
                    <input id=${idx} type="text" placeholder="..." value=${saveData}>
                </div>
    `
})


dayPlanner.innerHTML = wholeDaySum;
let dayPlannerInputs = document.querySelectorAll(".day-planner input");

dayPlannerInputs.forEach((e)=>{
    e.addEventListener("input",()=>{
        dayGoals[e.id] = e.value;
        localStorage.setItem("dayGoals",JSON.stringify(dayGoals));
    })
})

}

dayPlanner();
















