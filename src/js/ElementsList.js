export default class ElementsList {
  constructor() {
    this.array = [];
  }

  createElement(task) {
    const newEl = document.createElement('div');
    newEl.classList.add('task');
    newEl.textContent = task.content;

    const checkbox = document.createElement('div');
    checkbox.classList.add('task-checkbox');
    newEl.appendChild(checkbox);

    this.array.push(newEl);

    return newEl;
  }

  findElement(task) {
    return this.array.find((el) => el.textContent === task.content);
  }

  activate(checkbox) {
    this.img = document.createElement('img');
    this.img.classList.add('image');
    this.img.src = 'https://w7.pngwing.com/pngs/897/401/png-transparent-check-illustration-computer-icons-check-mark-checkbox-green-tick-miscellaneous-angle-white.png';

    checkbox.appendChild(this.img);
  }

  deactivate(checkbox) {
    checkbox.remove(this.img);
  }
}
