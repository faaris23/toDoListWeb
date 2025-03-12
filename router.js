const express = require('express');
const router = express.Router();
const taskController = require('./controller');
const { getAll } = require('./model');

router.get("/", controller.findall);
router.post("/", controller.create);
router.get("/:id", controller.findById);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);
