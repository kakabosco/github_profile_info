import styles from "./Profile.module.css";

const Profile = ({ username }) => {
    const user = {
        name: "Kaique",
        avatar: "https://github.com/kakabosco.png",
    };

    return (
        <header className={styles.header}>
            <img
                className={styles.avatar}
                src={`https://github.com/${username}.png`}
                alt=""
            />
            <h1 className={styles.name}>@{username}</h1>
        </header>
    );
};

export default Profile;
