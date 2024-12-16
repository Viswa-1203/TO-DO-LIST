
    const inputdata = document.getElementById("taskinput");
    const addbutton = document.getElementById("AddTask");
    const tasklist = document.getElementById("tasklist");
    

    addbutton.addEventListener('click', () => {
        const task = inputdata.value.trim();
        if (task) {
            createTaskElement(task);
            inputdata.value = ''; 
        } else {
            alert("Please enter a task");
        }
    });

    function createTaskElement(task) {
        const li = document.createElement("li");
        li.classList.add("task-item"); 

        const doneButton = createButton('Done', () => li.classList.toggle('completed'));
        const deleteButton = createButton('Delete', () => li.remove());

        li.innerHTML = `${task} <span class="buttons"></span>`; 
        li.querySelector('.buttons').append(doneButton, deleteButton); 

        if (tasklist.firstChild) {
            tasklist.insertBefore(li, tasklist.firstChild); // Use tasklist, not li
        } else {
            tasklist.appendChild(li); // Append when the list is empty
        }
        
    }
     
    function createButton(text, onClick) {
        const button = document.createElement("button");
        button.innerText = text;
        button.classList.add("task-button"); 
        button.addEventListener("click", onClick);
        return button;
    }
    
    
    

