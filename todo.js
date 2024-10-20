const taskbox = document.getElementById("task-box");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(taskbox.value === ''){
        alert("Write Something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=taskbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    taskbox.value = "";
    saveData();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName=== "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML);
}
function displayTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
displayTask();
