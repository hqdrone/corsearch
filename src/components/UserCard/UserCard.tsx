import styles from "./UserCard.module.scss";

export interface UserCardProps {
    user: {
        name: string;
        email: string;
        phone: string;
        website: string;
        address: {
            street: string;
            city: string;
            suite: string;
            zipcode: string;
        };
    };
}

export const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <div className={styles.card}>
            <h2 className={styles.name}>{user.name}</h2>
            <p className={styles.email}>
                <span>Email:</span> {user.email}
            </p>
            <p className={styles.phone}>
                <span>Phone:</span> {user.phone}
            </p>
            <p className={styles.website}>
                <span>Website:</span> {user.website}
            </p>
            <p className={styles.address}>
                <span>Address:</span> {user.address.street},{" "}
                {user.address.suite}, {user.address.city} {user.address.zipcode}
            </p>
        </div>
    );
};
