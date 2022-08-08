
let taskList = document.querySelector('.task-list');

const addTask = event => {
    /**
     * Since I am using forms for the input
     * we have to use the preventDefault in order
     * to keep the browser from refreshing every time.
     */
    event.preventDefault();
    let name = document.querySelector('.new-task-field').value

    //check if the input is empty
    if (name === '') {
        alert('Task Name can\'t be empty!');
        return;
    }

    let taskItem = document.createElement('li');

    taskItem.classList.add('task');

    //add task name span
    let taskName = document.createElement('span');
    taskName.textContent = name;
    taskItem.append(taskName);

    let buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons-container');

    /**
    * Create, add eventListener and append the complete task button 
    */
    let taskToggleCompletedButton = document.createElement('button');
    taskToggleCompletedButton.textContent = 'Mark as Complete';
    taskToggleCompletedButton.classList.add('btn', 'toggle');
    taskToggleCompletedButton.addEventListener('click', toggleCompleteTask);
    buttonsDiv.append(taskToggleCompletedButton);

    /**
     * Create, add eventListener and append the remove button 
     */
    let taskRemoveButton = document.createElement('button');
    taskRemoveButton.textContent = 'Remove';
    taskRemoveButton.classList.add('btn', 'remove');
    taskRemoveButton.addEventListener('click', removeTask);
    buttonsDiv.append(taskRemoveButton);
    taskItem.append(buttonsDiv);


    taskList.append(taskItem)
}

/**
 * We just remove the <li>
 * Clicked the remove button by accident?
 * Too Bad!
 */
const removeTask = event => {
    event.target.parentElement.parentElement.remove();
}

const toggleCompleteTask = event => {

    /**
     * Gets the task <li> classList
     * We have to get the parentElement of the parentElement
     * because I nested it on a div for styling purposes ¯\_(ツ)_/¯ 
     */
    const parentClassList = event.target.parentElement.parentElement.classList;

    /**
     * If the list item does not have the 'completed' class
     * add the class 'completed' and change the button text
     */
    if (parentClassList[1] !== 'completed') {
        parentClassList.add('completed');
        event.target.textContent = 'Undo';
    } else {
        parentClassList.remove('completed');
        event.target.textContent = 'Mark as Complete';
    }

}

// gets the task form on the top of the page, where we create tasks
let taskForm = document.querySelector('#task-form');
taskForm.addEventListener('submit', addTask)
