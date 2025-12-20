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

function dailyMotivation(){
    let quote = document.querySelector(".moti-fullpage .moti-container .moti-wrapper .moti-2 h2");
let author = document.querySelector(".moti-fullpage .moti-container .moti-wrapper .moti-3 h2")

async function fetchQuotes(){
    let response  = await fetch('https://dummyjson.com/quotes/random');
    let data = await response.json();
    quote.innerHTML = data.quote;
    author.innerHTML = data.author;
    

}

fetchQuotes();


}

dailyMotivation();


function pomoTimer(){
    let totalSeconds = 25*60;
let timerInterval = null;
let timer = document.querySelector(".pomo-wrapper h1");
let startbtn = document.querySelector(".start-button");
let pausebtn = document.querySelector(".pause-button");
let resetbtn = document.querySelector(".reset-button");
let workSession = true;
let session = document.querySelector(".pomo-fullpage .session h2")

function updateTimer(){
    let sec = totalSeconds%60;
    let min = Math.floor(totalSeconds/60);

    timer.innerHTML = `${String(min).padStart('2','0')}:${String(sec).padStart('2','0')}`;
}

startbtn.addEventListener("click",()=>{
    clearInterval(timerInterval);

    if(workSession){
        
            timerInterval = setInterval(()=>{
    if(totalSeconds>0){
            totalSeconds--;
            updateTimer()
        
        } else {
            workSession = false;
            clearInterval(timerInterval);
            timer.innerHTML = '05:00';
            session.innerHTML = 'Take a Break'
            totalSeconds = 5*60;
        }

    },5)
        
    } else {
       
       
            timerInterval = setInterval(()=>{
         if(totalSeconds>0){
            totalSeconds--;
            updateTimer()
        } else {
            workSession = true;
            clearInterval(timerInterval);
             timer.innerHTML = '25:00';
             session.innerHTML = 'Work Session'
             totalSeconds = 25*60;
        }
    },10)
    }
    
})

pausebtn.addEventListener("click",function(){
    clearInterval(timerInterval);
})

resetbtn.addEventListener("click",function(){
    totalSeconds = 1500;
    updateTimer();
})
}
pomoTimer();














