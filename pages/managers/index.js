import {useContext} from "react";
import {UserContext} from "../../components/UserContext";
import styles from '../../styles/Managers.module.css';
const Managers = () => {
    const [user, setUser] = useContext(UserContext);
    if(!user){
        setUser({});
    }
    return (
        <>
            <div className={styles.header}>Welcome to your manager profile, {user && user.username}</div>
            <div className={styles.generalInfo}>
                <div className={styles.photo}><img src="/profile-photo.jpeg" alt="profile-photo"/></div>
                <div>
                    <p>Name: {user && user.name}</p>
                    <p>Surname: {user && user.surname}</p>
                    <p>Positon: manager</p>
                </div>
            </div>
        </>

    )
}

export default Managers;