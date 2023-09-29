const Task = require("../database/Task");
const { v4: uuid } = require('uuid');

const getAllTasks = () => {
    const allTasks = Task.getAllTasks();
    return allTasks;
}

const getOneTask = (taskId) => {
    const task = Task.getOneTask(taskId);
    return task;
}
const createNewTask = (newTask) => {

    const task = {
        ...newTask,
        id: uuid(),
    }
    try {
        const createdTask = Task.createNewTask(task);
        return createdTask;
    } catch (error) {
        throw error;
    }
}

const updateOneTask = (taskId, taskBodyToUpdate) => {
    try {
        const updatedTask = Task.updateOneTask(taskId, taskBodyToUpdate);
        return updatedTask;
    } catch (error) {
        throw error;
    }

};

const deleteOneTask = (taskId) => {
    try {
        Task.deleteOneTask(taskId);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllTasks,
    getOneTask,
    createNewTask,
    updateOneTask,
    deleteOneTask,
}