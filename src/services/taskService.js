const Task = require("../database/Task");
const { v4: uuid } = require('uuid');

const getAllTasks = (completed, sort) => {
    const allTasks = Task.getAllTasks(completed, sort);
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
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
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

const getTasksWithPriority = (level) => {
    //TODO : validate the level and handle errors and also conver it to lowercase
    return;
}

module.exports = {
    getAllTasks,
    getOneTask,
    createNewTask,
    updateOneTask,
    deleteOneTask,
    getTasksWithPriority
}