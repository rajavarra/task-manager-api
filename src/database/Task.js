const DB = require("./tasksDb.json");
const { saveToDatabase } = require("./utils");

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

const createNewTask = (newTask) => {
    const taskExists = DB.tasks.findIndex((task) => task.title === newTask.title) > -1;

    try {
        if (taskExists) {
            throw {
                status: 400,
                message: `Task with title ${newTask.title} already exists`
            }
        }
        DB.tasks.push(newTask);
        saveToDatabase(DB);
        return newTask;
    } catch (error) {
        throw { status: error?.status || 500, error: error?.message || error }
    }
}

const updateOneTask = (taskId, bodyToUpdate) => {
    const taskExists = DB.tasks.findIndex((task) => task.title === bodyToUpdate.title) > -1;

    try {
        if (taskExists) {
            throw {
                status: 400,
                message: `Task with title ${bodyToUpdate.title} already exists`
            }
        }
        const indexFromDb = DB.tasks.findIndex((task) => task.id === taskId);
        if (indexFromDb === -1) {
            throw {
                status: 400,
                message: `Can't find task with id ${taskId}`,
            }
        }
        if (!bodyToUpdate.priority) {
            bodyToUpdate.priority = DB.tasks[indexFromDb].priority;
        }

        const updatedTask = {
            ...DB.tasks[indexFromDb],
            ...bodyToUpdate
        }
        DB.tasks[indexFromDb] = updatedTask;
        saveToDatabase(DB);
        return updatedTask;
    } catch (error) {
        throw { status: error?.status || 500, error: error?.message || error };
    }
}

const deleteOneTask = (taskId) => {
    try {
        if (!taskId) {
            throw {
                status: 400,
                message: `taksId param is required.`
            }
        }
        const indexToDelete = DB.tasks.findIndex((task) => task.id === taskId);

        if (indexToDelete === -1) {
            throw {
                status: 400,
                message: `Can't find task with id ${taskId}`,
            }
        }
        DB.tasks.splice(indexToDelete, 1)
        saveToDatabase(DB);
    } catch (error) {
        throw { status: error?.status || 500, error: error?.message || error };
    }
}

module.exports = {
    getAllTasks,
    createNewTask,
    getOneTask,
    updateOneTask,
    deleteOneTask,
}