import { FC, useEffect, useState } from "react";
import styles from "./App.module.scss";
import { Search } from "./components/Search/Search";
import { UserList } from "./components/UsersList/UsersList";
import { User } from "./types";

export const App: FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    // Fetch users from API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                const data = await response.json();
                setUsers(data);
                setFilteredUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    // Handle filtering by name, email, phone, website
    useEffect(() => {
        const lowercasedFilter = searchTerm.toLowerCase();
        const filteredData = users.filter((user) =>
            ["name", "email", "phone", "website"].some((key) =>
                (user as any)[key].toLowerCase().includes(lowercasedFilter)
            )
        );
        setFilteredUsers(filteredData);
    }, [searchTerm, users]);

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>User Dashboard</h1>

            <div className={styles.actions}>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <UserList users={filteredUsers} />
        </div>
    );
};

export default App;
