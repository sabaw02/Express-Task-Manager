# Get all tasks

GET ====> "/tasks/getAllTasks" ====> id / title / desc / isComplete / duration / category / priority / img

# Get each task detail

GET ====> "/tasks/:id ====> id / title / desc / isComplete / duration / category / priority /img

# Create new task

POST ====> "/task/createTask" ====> title / isComplete = false

# Update task

PUT ====> "/task/updateTask" ====> title / desc / isComplete / duration / category / priority / img

# Delete task

DELETE ====> "/task/deleteTask"

# Add image for each task

POST ====> "/image" ====> img
