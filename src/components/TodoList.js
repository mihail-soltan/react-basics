import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("")

    const handleAddTask = () => {
        const addedTask = {
            id: Date.now(),
            text: newTask,
            completed: false,
        }
        setTasks([...tasks, addedTask])
        setNewTask("")
    }

    const onToggleComplete = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return { ...task, completed: !task.completed }
            }
            return task
        })
        setTasks(updatedTasks)
    }

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(updatedTasks)
    }
    return (
        <div>
            <h1>To Do List:</h1>
            <input type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={handleAddTask}>Add task</button>

            <ol>
                {
                    tasks.map((task) =>
                        <li key={task.id}>
                            <input type="checkbox" checked={task.completed} onChange={() => onToggleComplete(task.id)} />
                            <span style={{ textDecoration: task.completed ? 'line-through' : "none" }}>
                                {task.text}
                            </span>
                            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                        </li>
                    )}
            </ol>
        </div>
    )
}

export default ToDoList