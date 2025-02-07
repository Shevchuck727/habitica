import { useState } from "react";
import { loginUser } from "../../../DB/auth";
import "./Login.css";
import Button from "../../Objects/Button";

const Login = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const user = await loginUser(email, password);
        if (user) {
            onLoginSuccess();
        } else {
            setError("Невірний email або пароль.");
        }
    };

    return (
        <div className="container">
        <div className="login-container">
            <h2>Вхід</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                {error && <p className="error">{error}</p>}
                <Button tType="submit" type="menu" text="Увійти"/>
            </form>
        </div>
        </div>
    );
};

export default Login;
