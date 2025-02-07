import Button from '../../Objects/Button';
import Completed from '../Challenges/Completed';
import Tasks from '../Challenges/Tasks';
import './MainWindow.css';
import React, { useState } from "react";

function MainWindow({login}){

  const [currentWindow, setCurrentWindow] = useState("tasks");

  const renderWindow = () => {
    switch (currentWindow) {
      case "completed":
        return <Completed login={login} />;
      case "tasks":
        return <Tasks login={login} />;
      default:
        return <div>Сторінку не знайдено</div>;
    }
  };
  
  return (
    <div className="MainWindow">
      <header>{renderWindow()}</header>
      <main>
        <Button 
          type={currentWindow === "tasks" ? "active" : "passive"} 
          text="Tasks" 
          onClick={() => setCurrentWindow("tasks")} 
        />
        <Button 
          type={currentWindow === "completed" ? "active" : "passive"} 
          text="Completed" 
          onClick={() => setCurrentWindow("completed")} 
        />
      </main>
    </div>
  );
  
}

export default MainWindow;