import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useSelector} from "react-redux";
import Chart from "../utilities/Chart";


export default function BasicTable() {
    const appleStock = useSelector(state=>state.appleStock)
    const DIAStock = useSelector(state=>state.DIAStock)
    const SPYStock = useSelector(state=>state.SPYStock)

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Highest Price</TableCell>
                        <TableCell>LowerPrice</TableCell>
                        <TableCell>Chart</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell>{appleStock?.ticker}</TableCell>
                        <TableCell>{appleStock?.results?.[0].h} $</TableCell>
                        <TableCell>{appleStock?.results?.[0].l} $</TableCell>
                        <TableCell><Chart  width={730/2} height={250/2} data={appleStock?.results} color={"#8884d8"}/></TableCell>
                    </TableRow>

                    <TableRow
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell>{DIAStock?.ticker}</TableCell>
                        <TableCell>{DIAStock?.results?.[0].h} $</TableCell>
                        <TableCell>{DIAStock?.results?.[0].l} $</TableCell>
                        <TableCell><Chart width={730/2} height={250/2} data={DIAStock?.results} color={"#e0cd1e"}/></TableCell>
                    </TableRow>

                    <TableRow
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell>{SPYStock?.ticker}</TableCell>
                        <TableCell>{SPYStock?.results?.[0].h} $</TableCell>
                        <TableCell>{SPYStock?.results?.[0].l} $</TableCell>
                        <TableCell><Chart  width={730/2} height={250/2} data={SPYStock?.results} color={"#18d22c"}/></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
