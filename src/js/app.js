import TaskList from './TasksList';
import Widget from './Widget';
import ElementsList from './ElementsList';

const taskList = new TaskList();
const elementsList = new ElementsList();
const widget = new Widget(taskList, elementsList);

widget.init();
