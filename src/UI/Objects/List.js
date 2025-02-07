import React from "react";
import { useTasks } from "../../DB/useTasks";
import "./List.css";

function List({ sortTask = false }) {
    const { tasks, deleteTask, toggleTaskCompletion } = useTasks();

    return (
        <ul>
            {tasks
                .filter(task => !sortTask || task.completed) 
                .map((task) => (
                    <li key={task.id}
                        className={task.completed ? "completed" : ""}
                        onClick={() => {
                            if (!sortTask) { 
                                toggleTaskCompletion(task.id, task.completed);
                            }
                        }}
                    >
                        {task.completed ? "✅" : "❌"} {task.text}
                        <button onClick={(e) => {
                            e.stopPropagation(); 
                            deleteTask(task.id);
                        }}>
                            🗑️
                        </button>
                    </li>
                ))}
        </ul>
    );
}

export default List;
