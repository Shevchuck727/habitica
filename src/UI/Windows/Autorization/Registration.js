import { useState } from "react";
import { registerUser } from "../../../DB/auth";
import "./Registration.css";
import Button from "../../Objects/Button";

const Registration = ({ onRegisterSuccess }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        const user = await registerUser(email, password, name);
        if (user) {
            onRegisterSuccess();
        } else {
            setError("Не вдалося зареєструватися. Перевірте дані.");
        }
    };

    return (
        <div className="container">
            <div className="registration-container">
                <h2>Реєстрація</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Ім'я"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
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
                    <Button tType="submit" type="menu" text="Зареєструватися"/>
                </form>
            </div>
        </div>
    );
};

export default Registration;
