import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebace";

// Реєстрація нового користувача
export const registerUser = async (email, password, name) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("Користувач створений:", user); // 🔍 Лог для перевірки

        // Додаємо користувача в Firestore
        await setDoc(doc(db, "Users", user.uid), {
            Name: name,
            Email: email
        });

        console.log("Користувач доданий у Firestore"); // 🔍 Лог для перевірки
        return user;
    } catch (error) {
        console.error("Помилка реєстрації:", error.message);
        return null;
    }
};


// Вхід користувача
export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Помилка входу:", error.message);
        return null;
    }
};

// Вихід з аккаунта
export const logoutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Помилка виходу:", error.message);
    }
};

// Отримання поточного користувача
export const getCurrentUser = () => {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            resolve(user);
        });
    });
};
