const { validate: uuidValidate } = require('uuid');
const { customBodyValidator } = require('../database/utils');
const taskService = require("../services/taskService");

const getAllTasks = (req, res) => {
    try {
        const allTasks = taskService.getAllTasks();
        res.status(200).send(allTasks);
    } catch (error) {
        res.status(500).send({ error: "Internal server error" });
    }
}


const getOneTask = (req, res) => {
    const { params: { taskId }, } = req;
    if (!uuidValidate(taskId)) {
        return res.status(400).send({ error: "Invalid task ID parameter" });
    }
    try {
        const task = taskService.getOneTask(taskId);
        if (!task) {
            return res.status(404).send({ error: "Not Found" })
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send({ error: "Internal server error" })
    }
}

const createNewtask = (req, res) => {
    const { body } = req;
    // set task prioprity to low if user not provides the value
    const priority = body.priority || "low";
    const newTask = {
        title: body.title,
        description: body.description,
        completed: body.completed,
        priority: priority,
    }
    try {
        customBodyValidator(newTask);
        const createdTask = taskService.createNewTask(newTask);
        res.status(201).send(createdTask);
    } catch (error) {
        res.status(error?.status || 500).send({ error: error.message || error });
    }
}

const updateOneTask = (req, res) => {
    const { body, params: { taskId } } = req;
    if (!uuidValidate(taskId)) {
        return res.status(400).send({ error: "Invalid task ID parameter" });
    }

    const updateTask = {
        title: body.title,
        description: body.description,
        completed: body.completed,
        priority: body.priority,
    }
    try {
        customBodyValidator(updateTask);
        const updatedTask = taskService.updateOneTask(taskId, updateTask);
        res.status(201).send(updatedTask);
    } catch (error) {
        res.status(error?.status || 500).send({ error: error?.message || error });
    }
};

const deleteOneTask = (req, res) => {
    const { params: { taskId } } = req;
    if (!uuidValidate(taskId)) {
        return res.status(400).send({ error: "Invalid task ID parameter" });
    }
    try {
        taskService.deleteOneTask(taskId);
        res.status(204).send({});
    } catch (error) {
        res.status(error?.status || 500).send({ error: error?.message || error });
    }
};
module.exports = {
    getAllTasks,
    getOneTask,
    createNewtask,
    updateOneTask,
    deleteOneTask,
}