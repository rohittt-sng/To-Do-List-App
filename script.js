const inputBox = document.getElementById("input-box");
const listcontainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("you must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("Span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = "";
    saveDta();
}


listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveDta();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveDta();
    }
},false);


// if we wanr to show our list after the refresh then we have to do this

function saveDta(){
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
showTask();