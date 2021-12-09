import styles from '../../styles/Rooms.module.css';
import {useRouter} from "next/router";
import {createContext, useEffect, useState} from "react";
import {Checkbox} from "@mui/material";
import DatePicker from "sassy-datepicker";
import Link from "next/link";
import Cookies from "js-cookie";

const fillInfo = createContext();
const Rooms = () => {
    const [fill, setFill] = useState({});
    const [calendar1, setCalendar1] = useState(false);
    const [calendar2, setCalendar2] = useState(false);
    const [checkIn, setCheckIn] = useState((new Date).getDate()+"."+ (new Date).getMonth()+"." +(new Date).getFullYear());
    const [checkOut, setCheckOut] = useState((new Date).getDate()+"."+ (new Date).getMonth()+"." +(new Date).getFullYear());
    const [dayOfWeek, setDay] = useState(0);
    const router = useRouter();
    const [arr, setArr] = useState([]);
    useEffect(()=>{
        console.log(arr, arr);
    }, [arr]);
    const [aktau, setAktau] = useState(false);
    const [alakol, setAlakol] = useState(false);
    const [value, onChange] = useState(new Date());
    const bookRoom = () => {
        if(!Cookies.get('access_token')) {
            alert('Please log in first');
            router.push('/login');
        }else{
            router.push('/fill-info');
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
        if (!aktau && alakol) {
            path = '&hotel=1';
        } else if (!alakol && aktau) {
            path = '&hotel=2';
        } else {
            path = '&hotel=1';
        }
        let cin = checkIn.split('.').reverse();
        let cout = checkOut.split('.').reverse();
        const s1 = cin[0] + "-" + cin[1] + "-" + cin[2];
        const s2 = cout[0] + "-" + cout[1] + "-" + cout[2];
        console.log('cin', cin);
        console.log('cout', cout);
        $.ajax({
            method: "POST",
            url: "http://localhost:8080/hotel/rooms?reserve=free" + path,
            headers : {
                "content-type": "text/plain;charset=UTF-8" // Add this line
            },
            data: JSON.stringify({
                "cin": s1,
                "cout": s2
            }),
            success: function (e) {
                setArr(e[0].rooms);
                console.log(e);
            }
        });
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
                        Array.isArray(arr) && arr.map((room, i) => {
                            return (
                                <li className={styles.listItem} key={i}>
                                    <div className={styles.roomOuter}>
                                        <div className={styles.listImg}><img src="/download.jpeg" alt="room"/></div>
                                        <div>
                                            <p>Room number: {room.room_number}</p>
                                            <p>Floor: {room.floor}</p>
                                            <p>Type: {room.type}</p>
                                            <button onClick={bookRoom} className={styles.bookNow}>Book it now!</button>
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
                                    setDay(d.getDay());
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