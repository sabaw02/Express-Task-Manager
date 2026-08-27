const express = require("express");
const crypto = require("crypto");
const { uploader } = require("../../utils/files.utils");

const tasksRouter = express.Router();

// tasks array
let allData = [
  {
    id: 1,
    title: "Learn Express",
    desc: "Learn the basics of Express.js and build a REST API.",
    isComplete: false,
    duration: 120,
    category: "Programming",
    priority: "high",
    // img: "https://example.com/images/express.jpg",
  },
  {
    id: 2,
    title: "Go to the gym",
    desc: "Complete a one-hour workout session.",
    isComplete: true,
    duration: 60,
    category: "Health",
    priority: "medium",
    // img: "https://example.com/images/gym.jpg",
  },
];

// get all tasks
tasksRouter.get("/getAllTasks", (request, response) => {
  const data = allData;
  response.json(data);
});

// get detail
tasksRouter.get("/getAllTasks/:id", (request, response) => {
  const id = request.params.id;
  const data = allData.find((el) => el.id == id);

  if (!data) {
    response.status(404).json({ message: "id is not found" });
  } else {
    response.json(data);
  }
});

// create new task
tasksRouter.post("/createTask", (request, response) => {
  const body = request.body;
  const newData = {
    id: crypto.randomInt(1, 1000),
    title: body.title,
    desc: body.desc,
    isComplete: false,
    duration: body.duration,
    category: body.category,
    priority: body.priority,
  };
  allData.push(newData);
  response.json({ message: "done", newData });
});

// update tasks
tasksRouter.put("/updateTasks/:id", (request, response) => {
  const id = request.params.id;
  const newTitle = request.body.title;
  const newDesc = request.body.desc;
  const newStatus = request.body.isComplete;
  const newDuration = request.body.duration;
  const newCategory = request.body.category;
  const newPriority = request.body.priority;

  const newData = {
    title: newTitle,
    desc: newDesc,
    isComplete: newStatus,
    duration: newDuration,
    category: newCategory,
    priority: newPriority,
  };

  allData.filter((el) => el.id == id);

  allData.push(newData);
  response.json({ message: "done", newData });
});

// delete task
tasksRouter.delete("/deleteTask/:id", (request, response) => {
  const id = request.params.id;
  allData = allData.filter((el) => el.id != id);
  response.json({ message: "done", allData });
});

// attache file to task
tasksRouter.post(
  "/attachment",
  uploader.single("file"),
  (request, response) => {
    const file = request.file;
    // console.log("file", file);
    response.send(`files/${file.filename}`);
  },
);

module.exports = { tasksRouter };
