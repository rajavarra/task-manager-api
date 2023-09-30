const fs = require("fs");
const validator = require('validator');

const saveToDatabase = (DB) => {
    fs.writeFileSync(`${__dirname}/tasksDb.json`, JSON.stringify(DB, null, 2), { encoding: 'utf-8' });
}

const customBodyValidator = (task) => {


    const requiredFields = ['title', 'description', 'completed'];

    for (const field of requiredFields) {
        if (!task[field] || validator.isEmpty(String(task[field]))) {
            throw {
                status: 400,
                message: `${field} is required.`
            }
        }
    }

    if (typeof task.completed !== 'boolean') {
        throw {
            status: 400,
            message: 'Completed should be a boolean.'
        }
    }

}

module.exports = {
    saveToDatabase,
    customBodyValidator
}