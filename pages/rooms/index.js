import styles from '../../styles/Rooms.module.css';
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {Checkbox} from "@mui/material";
import DatePicker from "sassy-datepicker";
import Link from "next/link";
import Cookies from "js-cookie";
const Rooms = () => {
    const [calendar1, setCalendar1] = useState(false);
    const [calendar2, setCalendar2] = useState(false);
    const [checkIn, setCheckIn] = useState((new Date).getDate()+"."+ (new Date).getMonth()+"." +(new Date).getFullYear());
    const [checkOut, setCheckOut] = useState((new Date).getDate()+"."+ (new Date).getMonth()+"." +(new Date).getFullYear());
    const router = useRouter();
    const arr = [{occupied : true, price: 45000}, {occupied: false, price: 200000}];
    const [aktau, setAktau] = useState(false);
    const [alakol, setAlakol] = useState(false);
    const [value, onChange] = useState(new Date());
    const bookRoom = () => {
        if(!Cookies.get('access_token')) {
            alert('Please log in first');
            router.push('/login');
        }
    }

    const onLogOut = () => {
        Cookies.remove('access_token');
        Cookies.remove('name');
        Cookies.remove('surname');
        router.push('/');
    };

    const onSearch = async () => {
        let path;
        if(!aktau && alakol){
            path = '&hotel=1';
        }else if(!alakol && aktau){
            path = '&hotel=2';
        }else{
            path='';
        }
        let cin = checkIn.split('.').reverse();
        let cout = checkOut.split('.').reverse();
        console.log('cin', cin);
        console.log('cout', cout);
        $.get({
            url: "http://localhost:8080/hotel/rooms?reserve=free" + path,
            body: JSON.stringify({
                cin: cin[0] + "-" + cin[1] + "-" + cin[2],
                cout: cout[0] + "-" + cout[1] + "-" + cout[2]
            })
        }).done(
            function(data) {
                console.log(data);
            }
        );
    }
    return (
        <>
        <div className={styles.outer}>
            <nav className={styles.navBar}>
                <ul className={styles.navBarList}>
                    <li className={styles.navBarListItem} key="11"><Link href="/">Home</Link></li>
                    <li className={styles.navBarListItem} key="22"><Link href="/rooms">Rooms</Link></li>
                    { !Cookies.get('access_token') &&
                    (<li className={styles.navBarListItem + " " + styles.listLogOut} key="33"><button onClick={() => {router.push('/login')}} className={styles.logIn}>Log In</button></li>)
                    }
                    {
                        Cookies.get('access_token') &&
                        (<li className={styles.navBarListItem + " " + styles.listLogOut} key="44"><button onClick={onLogOut} className={styles.logIn}>Log Out</button></li>)
                    }
                </ul>
            </nav>
            <div className={styles.filters}>
                <div className={styles.labels}>
                    <div className={styles.aktau}>
                        <label htmlFor="1"> Fizmat Aktau </label>
                        <Checkbox checked={aktau} onChange={()=>{setAktau(!aktau)}} />
                    </div>
                    <div className={styles.alakol}>
                        <label htmlFor="2"> Fizmat Alakol </label>
                        <Checkbox checked={alakol} onChange={() => {setAlakol(!alakol)}}/>
                    </div>
                </div>
                <div className={styles.checkContainer}>
                    <div>Check In:</div>
                    <div className={styles.checkInnerContainer}>
                        <div onClick={() => {setCalendar1(!calendar1)}}><img src="/calendar.png" alt="calendar" className={styles.checkImg}/></div>
                        <div className={styles.checkButton}>{checkIn}</div>
                    </div>
                </div>
                <div className={styles.checkContainer}>
                    <div>Check Out:</div>
                    <div className={styles.checkInnerContainer}>
                        <div onClick={() => {setCalendar2(!calendar2)}}><img src="/calendar.png" alt="calendar" className={styles.checkImg}/></div>
                        <div className={styles.checkButton}>{checkOut}</div>
                    </div>
                </div>
                <button className={styles.searchButton} onClick={onSearch}>
                    Search
                </button>
            </div>
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
            {calendar1 && (<div className={styles.calendar1}>
                                <DatePicker onChange={(d) => {
                                    let date = d.getDate();
                                    if(date < 10){
                                        date = "0" + date;
                                    }
                                    let month = d.getMonth()+1;
                                    if(month < 10){
                                        month = "0" + month;
                                    }
                                    setCheckIn(date+"." + month+"."+d.getFullYear());
                                }}/>
                            </div>)}
            {calendar2 && (<div className={styles.calendar2} >
                                <DatePicker  onChange={(d) => {
                                    let date = d.getDate();
                                    if(date < 10){
                                        date = "0" + date;
                                    }
                                    let month = d.getMonth()+1;
                                    if(month < 10){
                                        month = "0" + month;
                                    }
                                    setCheckOut(date+"." + month+"."+d.getFullYear());
                                }}/>
                            </div>)}
        </div>
    </>
    )
}

export default Rooms;