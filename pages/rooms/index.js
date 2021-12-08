import styles from '../../styles/Rooms.module.css';
import {useRouter} from "next/router";

const Rooms = () => {
    const router = useRouter();
    const arr = [{occupied : true, price: 45000}, {occupied: false, price: 200000}];
    const bookRoom = () => {
        if(!localStorage.getItem('access_token')) {
            alert('Please log in first');
            router.push('/login');
        }else{

        }
    }
    return (
        <div className={styles.outer}>
            <div className={styles.main}>
                <ul className={styles.list}>
                    {
                        arr && arr.map(room => {
                            return (
                                <li className={styles.listItem}>
                                    <div className={styles.roomOuter}>
                                        <div className="listImg"><img src="/download.jpeg" alt="room"/></div>
                                        <div>
                                            <p>Price: {room.price}</p>
                                            <p>Occupied: {room.occupied}</p>
                                            <button onClick={bookRoom}>Book it now!</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

export default Rooms;