import { FC } from "react";
import { User } from "../../types";
import { UserCard } from "../UserCard/UserCard";
import styles from "./UsersList.module.scss";

interface UserListProps {
    users: User[];
}

export const UserList: FC<UserListProps> = ({ users }) => {
    return (
        <div className={styles.userList}>
            {users.map((user) => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};
