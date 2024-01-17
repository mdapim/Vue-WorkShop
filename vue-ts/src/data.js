const tasksKey = "tasks";

let taskJson = localStorage.getItem(tasksKey);
let taskList = JSON.parse(taskJson);

function save() {
	localStorage.setItem(tasksKey, JSON.stringify(taskList));
}

export default {
	getAllTasks() {
		return taskList;
	},

	getSingleTask(index) {
		return taskList[index];
	},

	editTask(index, page) {
		taskList[index] = page;

		save();
	},

	addTask(page) {
		taskList.push(page);
		save();
	},

	removeTask(index) {
		taskList.splice(index, 1);
		save();
	},
};
