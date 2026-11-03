let tasks =
JSON.parse(
localStorage.getItem("tasks")
) || [];

const taskInput =
document.getElementById("taskInput");

const priority =
document.getElementById("priority");

const dateInput =
document.getElementById("dateInput");

const addTask =
document.getElementById("addTask");

addTask.addEventListener(
"click",
createTask
);

function createTask(){

    if(taskInput.value.trim()==="")
        return;

    const task={

        id:Date.now(),

        title:taskInput.value,

        priority:priority.value,

        date:dateInput.value,

        status:"pending"
    };

    tasks.push(task);

    saveTasks();

    taskInput.value="";
}

function saveTasks(){

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

    renderTasks();

    updateStats();
}

function renderTasks(){

    document.getElementById("pending").innerHTML="";
    document.getElementById("progress").innerHTML="";
    document.getElementById("done").innerHTML="";

    tasks.forEach(task=>{

        const div=document.createElement("div");

        div.className=
        `task ${task.priority}`;

        div.draggable=true;

        div.dataset.id=task.id;

        div.innerHTML=`

            <div class="task-title">
                ${task.title}
            </div>

            <div class="task-date">
                📅 ${task.date || 'Sin fecha'}
            </div>

            <div class="buttons">
                <button
                    class="edit"
                    onclick="editTask(${task.id})">
                    Editar
                </button>

                <button
                    class="delete"
                    onclick="deleteTask(${task.id})">
                    Eliminar
                </button>
            </div>
        `;

        div.addEventListener(
            "dragstart",
            dragStart
        );

        document
        .getElementById(task.status)
        .appendChild(div);

    });

}

function editTask(id){

    let task=
    tasks.find(t=>t.id===id);

    let title=
    prompt(
        "Editar tarea",
        task.title
    );

    if(title){

        task.title=title;

        saveTasks();
    }
}

function deleteTask(id){

    tasks=
    tasks.filter(
        t=>t.id!==id
    );

    saveTasks();
}

function updateStats(){

    const total=
    tasks.length;

    const completed=
    tasks.filter(
    t=>t.status==="done"
    ).length;

    const pending=
    total-completed;

    document.getElementById(
    "totalTasks"
    ).innerText=total;

    document.getElementById(
    "completedTasks"
    ).innerText=completed;

    document.getElementById(
    "pendingTasks"
    ).innerText=pending;

    const progress=
    total===0
    ?0
    :(completed/total)*100;

    document.getElementById(
    "progressFill"
    ).style.width=
    progress+"%";
}

let dragged=null;

function dragStart(){

    dragged=this.dataset.id;
}

document
.querySelectorAll(".dropzone")
.forEach(zone=>{

    zone.addEventListener(
        "dragover",
        e=>e.preventDefault()
    );

    zone.addEventListener(
        "drop",
        function(){

            const task=
            tasks.find(
            t=>t.id==dragged
            );

            task.status=
            this.id;

            saveTasks();
        }
    );
document.getElementById("progressText").textContent =
    Math.round(progress) + "%";
});

renderTasks();
updateStats();