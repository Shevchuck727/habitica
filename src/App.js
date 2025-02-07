import { useState, useEffect } from "react";
import Autorization from "./UI/Objects/Autorization";
import MainWindow from "./UI/Windows/User/MainWindow";
import { getCurrentUser } from "./DB/auth";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getCurrentUser().then(setUser);
    }, []);

    return (
        <div className="app-container">
            {user ? (
                <MainWindow />
            ) : (
                <Autorization onAuthSuccess={() => getCurrentUser().then(setUser)} />
            )}
        </div>
    );
}

export default App;
