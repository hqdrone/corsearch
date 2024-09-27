import { FC, useEffect, useState } from "react";
import styles from "./App.module.scss";
import { Search } from "./components/Search/Search";
import { Sort } from "./components/Sort/Sort";
import { UserList } from "./components/UsersList/UsersList";
import { User } from "./types";

export const App: FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sortField, setSortField] = useState<string>("");
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

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

    // Handle sorting by name or email
    const handleSort = (field: string) => {
        const order = sortOrder === "asc" ? "desc" : "asc";
        const sortedUsers = [...filteredUsers].sort((a, b) => {
            if (a[field as keyof User] < b[field as keyof User])
                return order === "asc" ? -1 : 1;
            if (a[field as keyof User] > b[field as keyof User])
                return order === "asc" ? 1 : -1;
            return 0;
        });
        setFilteredUsers(sortedUsers);
        setSortField(field);
        setSortOrder(order);
    };

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>User Dashboard</h1>

            <div className={styles.actions}>
                <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                <Sort
                    sortField={sortField}
                    sortOrder={sortOrder}
                    handleSort={handleSort}
                />
            </div>

            <UserList users={filteredUsers} />
        </div>
    );
};

export default App;
