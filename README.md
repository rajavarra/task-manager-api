# Task Management RESTful API

This project demonstrates the creation of a RESTful API using Node.js and Express.js for managing tasks. Users can perform CRUD operations (Create, Read, Update, and Delete) on tasks, where each task consists of a title, description, priority and a completion status flag.

## Getting Started

To set up and run the project on your local machine, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/rajavarra/task-manager-api.git
   cd task-manager-api
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the Server:**
   ```bash
   npm start
   ```
   or, start dev with nodemon
   ```bash
   npm run dev
   ```
   The API will be accessible at http://localhost:3000/api/v1.

## Endpoints

- **GET /tasks:** Retrieve all tasks.
- **GET /tasks/:id:** Retrieve a single task by its ID.
- **POST /tasks:** Create a new task.
  - **Body:**
    `{ "title": "Task Title", "description": "Task Description", "completed": false ,"priority": "high or low or medium"}`
- **PUT /tasks/:id:** Update an existing task by its ID.
  - **Body:**
    `{ "title": "Updated Task Title", "description": "Updated Task Description", "completed": false ,"priority": "high or low or medium"}`
- **DELETE /tasks/:id:** Delete a task by its ID.

## Data Storage

Tasks are stored in-memory using an array in json file as the data store. Data persistence is not implemented, so tasks are not saved between server restarts.

## Error Handling

The API includes proper error handling for invalid requests. Common HTTP status codes are used to indicate the result of each request:

- **200 OK**: Successful request.
- **201 Created**: Task successfully created.
- **204 No Content**: Task successfully deleted.
- **400 Bad Request**: Invalid request or validation error.
- **404 Not Found**: Task not found.
- **500 Internal Server Error**: Server error.

## Input Validation

Input validation is implemented for task creation and updates. The following validations are applied:

- Title and description are required fields and must not be empty.
- The completion status must be a valid boolean value.

## Testing

You can test the API using tools like Postman or Curl to ensure it works as expected. Use the provided endpoints and their respective HTTP methods to perform CRUD operations on tasks.

For example, to create a new task using Curl:

```bash
curl --location 'http://localhost:3000/api/v1/tasks' \
--header 'Content-Type: application/json' \
--data '{
    "title": "Morning Routine Before Breakfast",
    "description": "Start the day with a short workout.",
    "completed": false,
    "priority": "high"
}'
```
