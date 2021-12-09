import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";


const Cleaning = () => {
    return (
        <>
        <div style={{fontSize: '32px', marginTop: '30px', marginBottom: '70px', textAlign: 'center'}}>For cleaning staff</div>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Hotel Name</TableCell>
                    <TableCell align="right">Room number</TableCell>
                    <TableCell align="right">Date</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                        <TableRow
                            key={1}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                FIZMAT ALAKOL
                            </TableCell>
                            <TableCell align="right">301</TableCell>
                            <TableCell align="right">2021-12-05</TableCell>
                        </TableRow>
                <TableRow
                    key={2}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        FIZMAT ALAKOL
                    </TableCell>
                    <TableCell align="right">202</TableCell>
                    <TableCell align="right">2021-11-05</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer>
            </>)
}



export default Cleaning;