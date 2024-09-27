import { FC, useEffect, useState } from "react";
import styles from "./App.module.scss";
import { UserList } from "./components/UsersList/UsersList";
import { User } from "./types";

export const App: FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    // Fetch users from API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>User Dashboard</h1>
            <UserList users={users} />
        </div>
    );
};

export default App;
