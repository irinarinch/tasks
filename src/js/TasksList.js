export default class TaskList {
  constructor() {
    this.array = [];
  }

  addTask(task) {
    this.array.push(task);
  }

  findTask(value) {
    return this.array.find((task) => task.content.toLowerCase() === value);
  }

  filterTasks(value) {
    this.array.forEach((task) => {
      this.task = task;

      if (this.task.content.toLowerCase().startsWith(value.toLowerCase().trim())) {
        this.task.hidden = false;
      } else {
        this.task.hidden = true;
      }
    });
  }

  removeFilter() {
    this.array.forEach((task) => {
      this.task = task;

      this.task.hidden = false;
    });
  }
}
