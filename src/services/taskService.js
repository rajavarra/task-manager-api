const Task = require("../database/Task");

const getAllTasks = () => {
    const allTasks = Task.getAllTasks();
    return allTasks;
}

const getOneTask = (taskId) => {
    const task = Task.getOneTask(taskId);
    return task;
}

module.exports = {
    getAllTasks,
    getOneTask,
}