let todolist = [
    
];
diplayTask();



function addTodo(){
    let taskele = document.querySelector('#taskName');
    let taskedate = document.querySelector('#dueDate');
    let name = taskele.value;
    let when = taskedate.value;
    todolist.push({item:name, dueDate:when})
    taskele.value='';
    taskedate.value ='';
    // console.log(todolist);
    diplayTask();
}

function diplayTask(){
    let newTask = document.querySelector('.tasks');
    let newhtml ='';
    for (let i = 0; i <todolist.length; i++) {
        let{item, dueDate} = todolist[i];
        newhtml += `
        
        <span>${item}</span>
        <span> ${dueDate}</span>
        <button class="btn-del" onclick="todolist.splice(${i},1); diplayTask()">Delete</button>
        
        `
    }
    newTask.innerHTML=newhtml;
}