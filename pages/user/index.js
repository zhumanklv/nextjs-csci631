import {useContext} from "react";
import {UserContext} from "../../components/UserContext";
import styles from "../../styles/User.module.css";
import Link from "next/link";


const User = () => {
    const [user, setUser] = useContext(UserContext);

    const onLogOut = () => {
        alert('hello world');
    }
    return (
        <>
            <div className={styles.outro}>
                <nav className={styles.navBar}>
                    <ul className={styles.navBarList}>
                        <li className={styles.navBarListItem}><Link href="/">Home</Link></li>
                        <li className={styles.navBarListItem}><Link href="/rooms">Rooms</Link></li>
                        <li className={styles.navBarListItem + " " + styles.listLogOut}><button onClick={onLogOut} className={styles.logOut}>Log out</button></li>
                    </ul>
                </nav>
                <div className={styles.title}>Welcome to FIZMAT hotels, {user && user.name}. We hope you enjoy our hotel!</div>
                <div className={styles.generalInfo}>
                    <div className={styles.photo}><img src="/profile-photo.jpeg" alt="profile-photo"/></div>
                    <div className={styles.outerText}>
                        <p>Name: {user && user.name}</p>
                        <p>Surname: {user && user.surname}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User;