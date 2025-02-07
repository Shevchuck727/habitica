import React from "react";
import Button from "../../Objects/Button";
import List from "../../Objects/List";
import { useTasks } from "../../../DB/useTasks";
import { logoutUser } from "../../../DB/auth"; 
import "./Windows.css";

function Tasks({ login }) {
    const { newTask, handleInputChange, addTask } = useTasks();

    const handleLogout = async () => {
        await logoutUser(); 
        window.location.reload(); 
    };

    return (
        <div className="Everydays">
            <div className="space" />

            <div className="header">
                <List />
            </div>

            <div className="main">
                <div className="regWindow">
                    <input
                        type="text"
                        value={newTask}
                        onChange={handleInputChange}
                        placeholder="Введіть нове завдання"
                        className="input"
                    />
                    <Button onClick={addTask} text="Додати" type="menu" />
                </div>
            </div>

            <div className="space">
                <Button type="logout" onClick={handleLogout} text="Вийти"/>
            </div>
        </div>
    );
}

export default Tasks;
