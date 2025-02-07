import { useState } from "react";
import Registration from "../Windows/Autorization/Registration";
import Login from "../Windows/Autorization/Login";
import "./Autorization.css"

const Autorization = ({ onAuthSuccess }) => {
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <div className="auth-container">
            {isRegistering ? (
                <Registration onRegisterSuccess={() => setIsRegistering(false)} />
            ) : (
                <Login onLoginSuccess={onAuthSuccess} />
            )}
            <p onClick={() => setIsRegistering(!isRegistering)} className="toggle-auth">
                {isRegistering ? "Уже маєте аккаунт? Увійти" : "Немає аккаунта? Зареєструватися"}
            </p>
        </div>
    );
};

export default Autorization;
