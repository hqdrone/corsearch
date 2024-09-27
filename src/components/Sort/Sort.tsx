import { FC } from "react";
import styles from "./Sort.module.scss";

interface SortProps {
    sortField: string;
    sortOrder: "asc" | "desc";
    handleSort: (field: string) => void;
}

export const Sort: FC<SortProps> = ({ sortField, sortOrder, handleSort }) => {
    return (
        <div className={styles.sortButtons}>
            <button onClick={() => handleSort("name")}>
                Sort by Name
                {sortField === "name" ? (sortOrder === "asc" ? "↓" : "↑") : ""}
            </button>
            <button onClick={() => handleSort("email")}>
                Sort by Email
                {sortField === "email" ? (sortOrder === "asc" ? "↓" : "↑") : ""}
            </button>
        </div>
    );
};
