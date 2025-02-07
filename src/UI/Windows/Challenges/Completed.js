import React from "react";
import List from "../../Objects/List";
import { logoutUser } from "../../../DB/auth"; 
import Button from "../../Objects/Button";
import "./Windows.css";

function Completed({ login }) {

    const handleLogout = async () => {
            await logoutUser(); 
            window.location.reload(); 
        };
    

    return (
        <div className="Everydays">
            <div className="space" />

            <div className="header">
                <List sortTask="true"/>
            </div>

            <div className="main"/>

            <div className="space">
                <Button type="logout" onClick={handleLogout} text="Вийти"/>
            </div>
        </div>
    );
}

export default Completed;
