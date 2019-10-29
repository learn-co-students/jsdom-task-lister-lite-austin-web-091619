document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const taskForm = document.querySelector("#create-task-form");
  const todosList = document.querySelector("#tasks");
  const textBox = document.querySelector("#new-task-description");
  const prioritySelect = document.querySelector("#priority");
  const datedue = document.querySelector("#datedue");
  
  function addTodos(event){
    event.preventDefault();

    let delButton = document.createElement("button");
    let editButton = document.createElement("button");
    delButton.innerHTML = "x";
    editButton.innerHTML = "Edit";
    let li = document.createElement("li");
    let secondli = document.createElement("li");
    let ul = document.createElement("ul");
    li.innerHTML = textBox.value ;
    li.className = prioritySelect.value;
    secondli.innerHTML = datedue.value;
    taskForm.reset();
    // Told class of li item to be the value of the select box
    li.appendChild(delButton);
    li.appendChild(editButton);
    li.appendChild(ul);
    ul.appendChild(secondli);
    

    function destroyButton(){
        li.parentNode.removeChild(li)
        // li is the child, grab it's parent, destroy it's child.
        // todosList.removeChild(li) would probably work too.
    }
    function editTodo(){
        let oldText = li.value;
        debugger
    }
    delButton.addEventListener("click", destroyButton)
    editButton.addEventListener("click", editTodo)
    // there are two non visible li elements that seperate high medium and small

    if (prioritySelect.value == "high"){
      // if high priority is selected we find the medium divider
      // and add the li before it.
      const mediumDivider = document.querySelector("#medium-divider")
      todosList.insertBefore(li, mediumDivider)

    } else if (prioritySelect.value == "low"){
      // if its low priority just put it in at the bottom of the ul
      todosList.appendChild(li);
    } else {
      // otherwise its medium so we find the low divider
      // and insert the li before the divider
      const lowDivider = document.querySelector("#low-divider")
      todosList.insertBefore(li, lowDivider)
    }
    // debugger;
  }

  taskForm.addEventListener("submit", addTodos)
});