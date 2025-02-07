import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebace";

export const registerUser = async (email, password, name) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        console.log("Користувач створений:", user); 
        await setDoc(doc(db, "Users", user.uid), {
            Name: name,
            Email: email
        });

        console.log("Користувач доданий у Firestore"); 
        return user;
    } catch (error) {
        console.error("Помилка реєстрації:", error.message);
        return null;
    }
};


export const loginUser = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Помилка входу:", error.message);
        return null;
    }
};

export const logoutUser = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Помилка виходу:", error.message);
    }
};

export const getCurrentUser = () => {
    return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
            resolve(user);
        });
    });
};
