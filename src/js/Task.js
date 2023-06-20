export default class Task {
  constructor(content) {
    this.content = content;
    this.rendered = false;
    this.pinned = false;
    this.hidden = false;
  }
}
