import swal from 'sweetalert';
import Task from './Task';
import showMessages from './messages';

export default class Widget {
  constructor(taskList, elementsList) {
    this.taskList = taskList;
    this.elementsList = elementsList;
    this.input = document.querySelector('.input');
    this.form = document.querySelector('.form');
    this.allTasksContainer = document.querySelector('.all-tasks-container');
    this.pinnedTasksContainer = document.querySelector('.pinned-tasks-container');
  }

  init() {
    this.onSubmit = this.onSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onInput = this.onInput.bind(this);

    this.form.addEventListener('submit', this.onSubmit);
    this.input.addEventListener('input', this.onInput);
  }

  renderTasks() {
    this.taskList.array.forEach((item) => {
      if (!item.pinned && !item.rendered) {
        const newTask = this.elementsList.createElement(item);
        const task = this.taskList.findTask(item.content);

        task.rendered = true;
        this.allTasksContainer.appendChild(newTask);
      }

      const el = this.elementsList.findElement(item);

      if (item.pinned) {
        this.pinnedTasksContainer.appendChild(el);
      } else {
        this.allTasksContainer.appendChild(el);
      }

      if (!item.pinned && item.hidden) {
        el.classList.add('hidden');
      }

      if (!item.hidden) {
        el.classList.remove('hidden');
      }
    });

    showMessages(this);
  }

  onInput(e) {
    e.preventDefault();

    this.taskList.filterTasks(this.input.value);
    this.renderTasks();
  }

  onSubmit(e) {
    e.preventDefault();

    const task = new Task(this.input.value.trim());
    const value = this.input.value.toLowerCase().trim();
    const rendered = this.taskList.findTask(value);

    if (rendered !== undefined && value === rendered.content.toLowerCase()) {
      swal('Такая задача уже есть');
    } else if (value.length > 0) {
      this.taskList.addTask(task);
    } else {
      swal('Напишите что-то');
    }

    this.taskList.removeFilter();
    this.renderTasks();
    this.input.value = '';

    this.checkbox = document.querySelectorAll('.task-checkbox');
    this.checkbox.forEach((el) => {
      el.addEventListener('click', this.onClick);
    });
  }

  onClick(e) {
    const checkbox = e.target;
    const target = checkbox.closest('.task');
    const task = this.taskList.findTask(target.textContent);

    if (!task.pinned) {
      this.elementsList.activate(checkbox);
      task.pinned = true;
    } else {
      this.elementsList.deactivate(checkbox);
      task.pinned = false;
    }

    this.renderTasks();
  }
}
