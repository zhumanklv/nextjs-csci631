import styles from "../../styles/User.module.css";
import Link from "next/link";
import {useRouter} from "next/router";
import Cookies from "js-cookie";

const User = () => {
    const router = useRouter();

    const onLogOut = () => {
        Cookies.remove('access_token');
        Cookies.remove('name');
        Cookies.remove('surname');
        router.push('/');
    }
    return (
        <>
            {Cookies.get('access_token') && (<div className={styles.outro}>
                <nav className={styles.navBar}>
                    <ul className={styles.navBarList}>
                        <li className={styles.navBarListItem}><Link href="/">Home</Link></li>
                        <li className={styles.navBarListItem}><Link href="/rooms">Rooms</Link></li>
                        <li className={styles.navBarListItem + " " + styles.listLogOut}><button onClick={onLogOut} className={styles.logOut}>Log out</button></li>
                    </ul>
                </nav>
                <div className={styles.title}>Welcome to FIZMAT hotels, {Cookies.get('name')}. We hope you enjoy our hotel!</div>
                <div className={styles.generalInfo}>
                    <div className={styles.photo}><img src="/profile-photo.jpeg" alt="profile-photo"/></div>
                    <div className={styles.outerText}>
                        <p>Name: {Cookies.get('name')}</p>
                        <p>Surname: {Cookies.get('surname')}</p>
                    </div>
                </div>
            </div>)}
            {!Cookies.get('access_token') && <div>Please log in first <Link href="/login">Log in</Link></div>}
        </>
    )
}

export default User;