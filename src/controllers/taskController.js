const { validate: uuidValidate } = require('uuid');

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

module.exports = {
    getAllTasks,
    getOneTask,
}