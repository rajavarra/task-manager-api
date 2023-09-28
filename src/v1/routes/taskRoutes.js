const express = require("express");
const taskController = require("../../controllers/taskController");
const router = express.Router();


router.get("/", taskController.getAllTasks);
router.get("/:taskId", taskController.getOneTask);
//TODO: POST, PUT , DELETE task 
/**
 * GET /tasks: Retrieve all tasks.

GET /tasks/:id: Retrieve a single task by its ID.

POST /tasks: Create a new task.

PUT /tasks/:id: Update an existing task by its ID.

DELETE /tasks/:id: Delete a task by its ID.
 */

module.exports = router;