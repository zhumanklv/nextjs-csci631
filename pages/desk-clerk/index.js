import styles from "../../styles/Managers.module.css";
import {UserContext} from "../../components/UserContext";
import {useContext, useEffect, useState} from "react";
import Cookies from "js-cookie";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";


const DeskClerk = () => {
    const [arr, setArr] = useState([]);
    useEffect(() => {
        $.ajax({
            method: "GET",
            url: "http://localhost:8080/hotel/reservations?hotel=1",
            headers : {
                "Authorization" : "Bearer "+Cookies.get('access_token')
            },
            success: function (e) {
                setArr(e);
                console.log(e);
            }
        });
    }, []);
    return (
        <>
            <div className={styles.header}>Welcome to your desk-clerk profile, {Cookies.get('name')}</div>
            <div className={styles.generalInfo}>
                <div className={styles.photo}><img src="/profile-photo.jpeg" alt="profile-photo"/></div>
                <div>
                    <p>Name: {Cookies.get('name')}</p>
                    <p>Surname: {Cookies.get('surname')}</p>
                    <p>Positon: desk-clerk</p>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Hotel Name</TableCell>
                            <TableCell align="right">Room number</TableCell>
                            <TableCell align="right">Day of Week</TableCell>
                            <TableCell align="right">Guest id</TableCell>
                            <TableCell align="right">Check In</TableCell>
                            <TableCell align="right">Check Out</TableCell>
                            <TableCell align="right">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {arr.map((row) =>{
                            return (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.hotel_id}
                                </TableCell>
                                <TableCell align="right"><input value={row.room_number}/></TableCell>
                                <TableCell align="right">{row.day_of_week}</TableCell>
                                <TableCell align="right">{row.guest_id}</TableCell>
                                <TableCell align="right"><input value={row.check_in} /></TableCell>
                                <TableCell align="right"><input value={row.check_out}/></TableCell>
                                <TableCell align="right">{row.total_price}</TableCell>
                            </TableRow>
                            )})}
                    </TableBody>
                </Table>
            </TableContainer>
            {
                !arr && !arr.length && (
                    <div>you have no reservations</div>
                )
            }
        </>
    )
}

export default DeskClerk;