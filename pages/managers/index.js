import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../components/UserContext";
import styles from '../../styles/Managers.module.css';
import Cookies from "js-cookie";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Managers = () => {
    const [arr, setArr] = useState([]);
    const columns = [
        {
            title: 'Hotel Name',
            dataIndex: 'id',
            key: 'id',
            width: 200,
        },
        {
            title: 'Employee Name',
            dataIndex: 'name',
            key: 'name',
            width: 200,
        },
        {
            title: 'Employee Surname',
            dataIndex: 'surname',
            key: 'surname',
            width: 200,
        },
        {
            title: 'Postion',
            dataIndex: 'position',
            key: 'postion',
            width: 200,
        },
        {
            title: 'From',
            dataIndex: 'froom',
            key: 'froom',
            width: 200,
        },
        {
            title: 'To',
            dataIndex: 'too',
            key: 'too',
            width: 200,
        },
        {
            title: 'Salary',
            dataIndex: 'salary',
            key: 'salary',
            width: 150,
        }
    ]
    useEffect(() => {
        $.get('http://localhost:8080/hotel/employees?hotel=1', function (d){
            setArr(d);
        })
    }, []);
    return (
        <div className={styles.outro}>
            <div className={styles.header}>Welcome to your manager profile, {Cookies.get('name')}</div>
            <div className={styles.generalInfo}>
                <div className={styles.photo}><img src="/profile-photo.jpeg" alt="profile-photo"/></div>
                <div>
                    <p>Name: {Cookies.get('name')}</p>
                    <p>Surname: {Cookies.get('surname')}</p>
                    <p>Positon: manager</p>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Hotel Name</TableCell>
                            <TableCell align="right">Employee name</TableCell>
                            <TableCell align="right">Employee Surname</TableCell>
                            <TableCell align="right">Position</TableCell>
                            <TableCell align="right">From</TableCell>
                            <TableCell align="right">To</TableCell>
                            <TableCell align="right">Salary</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {arr.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.surname}</TableCell>
                                <TableCell align="right">{row.position}</TableCell>
                                <TableCell align="right"><input value={row.froom} /></TableCell>
                                <TableCell align="right"><input value={row.too}/></TableCell>
                                <TableCell align="right"><input value={row.salary}/></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>

    )
}

export default Managers;