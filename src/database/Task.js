const DB = require("./tasksDb.json");


const getAllTasks = () => {
    return DB.tasks;
}

const getOneTask = (taskId) => {
    const task = DB.tasks.find((task) => task.id === taskId);
    if (!task) {
        return;
    }
    return task;
}

module.exports = {
    getAllTasks,
    getOneTask,
}