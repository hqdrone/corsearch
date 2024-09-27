import { FC } from "react";
import styles from "./Search.module.scss";

interface SearchProps {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
}

export const Search: FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <input
            className={styles.search}
            type="text"
            placeholder="Search users by name, email, phone, or website..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
};
