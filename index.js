const express = require("express");
const { tasksRouter } = require("./routes/tasks");

const app = express();

app.use("/tasks", tasksRouter);

app.listen(3000, () => {
  console.log("started successfully");
});
