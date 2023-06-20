export default function showMessages(widget) {
  const hidden = widget.allTasksContainer.querySelectorAll('.task.hidden');
  const rendered = widget.allTasksContainer.querySelectorAll('.task');
  const pinned = widget.pinnedTasksContainer.querySelectorAll('.task');

  const noFound = document.querySelector('.noTasks');
  const noPinned = document.querySelector('.empty');

  if ((rendered.length === 0) || (rendered.length === hidden.length)) {
    noFound.classList.remove('hidden');
  } else {
    noFound.classList.add('hidden');
  }

  if (pinned.length > 0) {
    noPinned.classList.add('hidden');
  } else {
    noPinned.classList.remove('hidden');
  }
}
