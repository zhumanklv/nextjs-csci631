import styles from "../../styles/Managers.module.css";
import {UserContext} from "../../components/UserContext";
import {useContext} from "react";

const DeskClerk = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <>
            <div className={styles.header}>Welcome to your desk-clerk profile, {user && user.username}</div>
            <div className={styles.generalInfo}>
                <div className={styles.photo}><img src="/profile-photo.jpeg" alt="profile-photo"/></div>
                <div>
                    <p>Name: {user && user.name}</p>
                    <p>Surname: {user && user.surname}</p>
                    <p>Positon: desk-clerk</p>
                </div>
            </div>
        </>
    )
}

export default DeskClerk;