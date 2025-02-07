import { useState, useEffect } from "react";
import { collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot, query, where, getDoc } from "firebase/firestore";
import { db } from "./firebace";
import { getCurrentUser } from "./auth";

export function useTasks() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [userId, setUserId] = useState(null);

    // Отримуємо поточного користувача
    useEffect(() => {
        getCurrentUser().then(user => {
            if (user) {
                setUserId(user.uid);

                // Завантажуємо тільки його завдання
                const tasksQuery = query(collection(db, "tasks"), where("userId", "==", user.uid));
                const unsubscribe = onSnapshot(tasksQuery, (snapshot) => {
                    const tasksArray = snapshot.docs.map(doc => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setTasks(tasksArray);
                });

                return () => unsubscribe();
            }
        });
    }, []);

    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = async () => {
        if (newTask.trim() === "" || !userId) return;

        await addDoc(collection(db, "tasks"), {
            text: newTask,
            completed: false,
            createdAt: new Date(),
            userId // Прив'язуємо до конкретного користувача
        });

        setNewTask("");
    };

    const deleteTask = async (id) => {
        await deleteDoc(doc(db, "tasks", id));
    };

    const toggleTaskCompletion = async (id) => {
        const taskRef = doc(db, "tasks", id);
        const taskSnap = await getDoc(taskRef);

        if (taskSnap.exists()) {
            const currentCompleted = taskSnap.data().completed;
            await updateDoc(taskRef, { completed: !currentCompleted });
        }
    };

    return {
        tasks,
        newTask,
        handleInputChange,
        addTask,
        deleteTask,
        toggleTaskCompletion
    };
}
