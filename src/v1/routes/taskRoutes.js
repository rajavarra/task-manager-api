const express = require("express");
const taskController = require("../../controllers/taskController");
const router = express.Router();

router.get("/", taskController.getAllTasks);

router.get("/:taskId", taskController.getOneTask);
router.post("/", taskController.createNewtask);
router.put("/:taskId", taskController.updateOneTask);
router.delete("/:taskId", taskController.deleteOneTask);

module.exports = router;