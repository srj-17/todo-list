import user from "./user";
import addDialogs from "./addDialogs";
import domController from "./domController";

let projects = document.createElement("div");
projects.classList.toggle("projects");

//let returnButtonContainer = document.createElement("div");
//returnButtonContainer.classList.toggle("return-button-container");
//let returnButton = document.createElement("button");
//returnButton.classList.toggle("return-button");
//returnButton.textContent = "Return";
//returnButtonContainer.appendChild(returnButton);
//projects.appendChild(returnButtonContainer);

let projectsHeader = `
    <div class="return-button-container">
        <button class="return-button"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#222"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg></button>
    </div>
    <div class="seperator"></div>
    <div class="projects-header">
        Projects
    </div>
    <div class="tasks-header">
        Tasks
    </div>
`;
projects.innerHTML = projectsHeader;

let returnButton = projects.querySelector(".return-button");
returnButton.addEventListener("click", () => {
  domController.renderMain();
});

let projectsList = document.createElement("ul");
projectsList.classList.toggle("projects-list");
projects.appendChild(projectsList);

function renderProjects() {
  // remove previous projects
  let previousList = Array.from(projects.querySelectorAll("li.project"));
  previousList.forEach((li) => {
    projectsList.removeChild(li);
  });

  // add current projects to the list
  let userProjects = user.getProjects();

  // no projects created
  // first remove the current no projects text div
  let previousNoProjects = projectsList.querySelector(".no-projects");
  if (previousNoProjects) {
    projectsList.removeChild(previousNoProjects);
  }

  // then attach it again
  if (userProjects.length === 0) {
    // remove previous project tasks
    let projectTasksContainer = projects.querySelector(".project-tasks");
    let previousProjectTasks = Array.from(
      projects.querySelectorAll(".project-tasks li.todo"),
    );
    previousProjectTasks.forEach((todo) => {
      projectTasksContainer.removeChild(todo);
    });

    let noProjects = document.createElement("li");
    noProjects.classList.toggle("no-projects");
    noProjects.textContent = "No Projects Created";

    projectsList.appendChild(noProjects);
  }

  userProjects.forEach((item) => {
    let projectItem = document.createElement("li");
    projectItem.classList.toggle("project");
    projectItem.id = `project-${item.id}`;

    let projectName = document.createElement("div");
    projectName.classList.toggle("project-name");
    projectName.textContent = `${item.name}`;
    projectItem.appendChild(projectName);

    let deleteProjectButtonContainer = document.createElement("div");
    deleteProjectButtonContainer.classList.toggle(
      "delete-project-button-container",
    );
    deleteProjectButtonContainer.hidden = true;
    let deleteProjectButton = document.createElement("button");
    deleteProjectButton.classList.toggle("delete-project-button");
    deleteProjectButton.textContent = "Delete project";
    deleteProjectButtonContainer.appendChild(deleteProjectButton);
    //projectItem.appendChild(deleteProjectButtonContainer);

    // adding `add task` button
    let addTaskButtonContainer = document.createElement("div");
    addTaskButtonContainer.classList.toggle("add-task-button-container");
    let addTaskButton = document.createElement("button");
    addTaskButton.classList.toggle("add-task-button");
    addTaskButton.textContent = "Add Task";
    addTaskButtonContainer.hidden = true;
    addTaskButtonContainer.appendChild(addTaskButton);
    //projectItem.appendChild(addTaskButtonContainer);

    let projectButtonsContainer = document.createElement("div");
    projectButtonsContainer.classList.toggle("project-buttons");
    projectButtonsContainer.appendChild(addTaskButtonContainer);
    projectButtonsContainer.appendChild(deleteProjectButtonContainer);
    projectItem.appendChild(projectButtonsContainer);

    deleteProjectButton.addEventListener("click", (event) => {
      user.deleteProject(projectItem.id.split("-").at(1));
      renderProjects();

      // to stop the delete button from also rendering the project
      // resulting in an error
      event.stopPropagation();
    });

    addTaskButton.addEventListener("click", (event) => {
      addDialogs.changeTaskDialogFor(projectItem.id.split("-").at(1));
      addDialogs.addTaskDialog.show();

      event.stopPropagation();
    });

    projectsList.appendChild(projectItem);
    configureProjectButtons(projectItem);
  });

  renderFirstProject();
  configureButtons(projects);
}

function renderFirstProject() {
  // querySelector selects the first node that matches the query
  let firstProjectName = projects.querySelector(".project-name");
  let firstProject = projects.querySelector(".project");
  if (firstProjectName) {
    let clickEvent = new Event("click", { bubbles: true });
    firstProjectName.dispatchEvent(clickEvent);
    let id = firstProject.id.split("-").at(1);
    renderProjectTasks(id, projects);
  }
}

function hideAllProjectButtons() {
  let deleteProjectButtons = Array.from(
    projectsList.querySelectorAll(".delete-project-button-container"),
  );
  let addTaskButtons = Array.from(
    projectsList.querySelectorAll(".add-task-button-container"),
  );

  deleteProjectButtons.forEach((button) => {
    if (!button.hasAttribute("hidden")) {
      button.hidden = true;
    }
  });

  addTaskButtons.forEach((button) => {
    if (!button.hasAttribute("hidden")) {
      button.hidden = true;
    }
  });
}

function configureProjectButtons(projectNode) {
  projectNode.addEventListener("click", () => {
    hideAllProjectButtons();
    //let project = projects.querySelector(`#project-${id}`);
    let childDeleteButton = projectNode.querySelector(
      ".delete-project-button-container",
    );
    let childAddButton = projectNode.querySelector(
      ".add-task-button-container",
    );

    if (childDeleteButton.hasAttribute("hidden")) {
      childDeleteButton.hidden = false;
    }

    if (childAddButton.hasAttribute("hidden")) {
      childAddButton.hidden = false;
    }
  });
}

// node = node to attach the rendered tasks on
function renderProjectTasks(id, node) {
  let targetProject = user.getProject(id);
  let targetProjectTasks = targetProject.getTodos();

  // adding todos themselves
  let todosHTML = ``;
  targetProjectTasks.forEach((todo) => {
    let todoItem = `
            <li class="todo" id="${id}-${todo.id}">
                <div class="todo-completion-status">
                    <input type="checkbox" id="complete" name="completed"  ${todo.status ? "checked" : "unchecked"}>
                </div>
                <div class="todo-title">${todo.title}</div>
                <div class="todo-desc">${todo.description}</div>
                <div class="todo-duedate">${todo.duedate.toDateString()}</div>
                <div class="buttons">
                    <button class="delete-button">Delete</button>
                    <button class="edit-button">Edit</button>
                </div>
            </li>
            `;
    todosHTML = todosHTML + todoItem;
  });

  let projectTasks = document.createElement("ul");
  projectTasks.classList.toggle("project-tasks");
  projectTasks.innerHTML = todosHTML;

  // removing previous task and add-button nodes (if any)
  let previousProjectTasks = node.querySelector(".project-tasks");
  if (previousProjectTasks) {
    node.removeChild(previousProjectTasks);
  }

  // appending the tasks that are created at this moment
  node.appendChild(projectTasks);
}

// configuring todo buttons (add / delete)
// node = node on which the buttons are (any parent)
function configureButtons(node) {
  // configuring the delete todo button
  // configuring the edit todo button
  node.addEventListener("click", (event) => {
    let classList = event.target.parentNode.classList;
    if (classList.contains("buttons")) {
      if (event.target.classList.contains("delete-button")) {
        let todoToDelete = event.target.closest(".todo");
        let id = todoToDelete.id.split("-").at(1);
        let parentProjectId = todoToDelete.id.split("-").at(0);
        let parentProject = user.getProject(parentProjectId);
        parentProject.deleteTodo(id);
        renderProjectTasks(parentProjectId, projects);
      } else if (event.target.classList.contains("edit-button")) {
        let todoToEdit = event.target.closest(".todo");
        let id = todoToEdit.id.split("-").at(1);

        addDialogs.changeTaskDialogFor(id);
        addDialogs.editTaskDialog.showModal();
      }
    }
  });
}

// returns removedMain if there's main, else returns null
function renderProjectPage() {
  let body = document.querySelector("body");

  let main = document.querySelector(".main");
  let removedMain;
  if (main) {
    removedMain = body.removeChild(main);
  }

  renderProjects();

  projectsList.addEventListener("click", (event) => {
    // if it is inside of an item in project list
    let parentProject = event.target.closest("li.project");
    if (parentProject) {
      let projectId = parentProject.id.split("-").at(1);

      renderProjectTasks(projectId, projects);

      addDialogs.changeTaskDialogFor(projectId);
    }
  });

  projects.addEventListener("click", (event) => {
    // check if the button press comes from todo
    // closest("todo") returns null if no parent has todo class
    if (
      (event.target.classList.contains("delete-button") ||
        event.target.classList.contains("edit-button")) &&
      event.target.closest("todo")
    ) {
      let parentTodo = event.target.closest("todo");
      let parentTodoId = parentTodo.id.split("-");
      let projectId = parentTodoId.at(0);
      let todoId = parentTodoId.at(1);

      addDialogs.changeTaskDialogFor(projectId, todoId);
    }
  });

  body.appendChild(projects);

  return removedMain;
}

export default { renderProjectPage, renderProjectTasks };
