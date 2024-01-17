const add = document.querySelector(".add");
const task = document.querySelector(".text");
const empty = document.querySelector('h5')
const todotask = document.querySelector(".tasks");


function addtask(){

    let newTask;
    const edit = document.querySelector(".edit");
    
    if(task.value == ""){
        empty.innerText = "INPUT CAN'T BE EMPTY";
        setTimeout(() => {
            empty.innerText = "";
        }, 2000);

        
    }else{
       todotask.innerHTML +=
    `<div class="task">
       <h4>${task.value}</h4>
       <div class="buttonType">
           <button class="edit" onclick="editt(this)">Done</button>
           <button class="delete delee" onclick="dele(this)">Delete</button>
       </div>
    </div>`
        task.value = "";

};
}

function dele(button) {
    let deletee = button.closest(".task");
    deletee.remove();
}
function editt(button){

    let edit = button.closest(".task")
    let taskText = edit.querySelector("h4").innerText;
    if(edit.querySelector("h4").innerHTML === `<del>${taskText}</del>`){
        edit.querySelector("h4").innerHTML = `${taskText}`
    }else{
        edit.querySelector("h4").innerHTML = `<del>${taskText}</del>`
    }
}




