class Todo {
  // looks like we already have ids in projects for each todos
  // all todo's have a ID,
  // might be better if we had seperate todo Id's for seperate users
  // // but we won't have many todos, so we might not need that
  //newId = 0;

  constructor(id, title, description, duedate, priority, notes) {
    //newId = newId + 1;
    this.id = id;

    // todo should be created even if title is not given, project should check for title
    this.title = title || `${id}`;
    this.description = description || "No description";

    // have to check if valid duedate
    // if it is not, set today's date
    this.duedate = duedate ? new Date(duedate) : new Date();

    this.priority = +priority | 3;
    this.notes = notes || "No notes";

    // status stores if todo is done
    this.status = false;
  }

  toggleStatus() {
    this.status = this.status ? false : true;
  }

  edit(title, description, duedate, priority, notes) {
    // only edit if given, if not, don't edit
    this.title = title || this.title;
    this.description = description || this.description;
    this.duedate = duedate ? new Date(duedate) : new Date();
    this.priority = priority || this.priority;
    this.notes = notes || this.notes;
  }
}

export default Todo;
