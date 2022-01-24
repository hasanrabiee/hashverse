import React from 'react';
import {Paper} from "@mui/material";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import {useSelector} from "react-redux";

const TickerTable = () => {
    const tickers = useSelector(state => state.tickers)

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 500}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Highest Price</TableCell>
                        <TableCell>LowerPrice</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell>{tickers?.ticker}</TableCell>
                        <TableCell>{tickers?.results?.[0].h} $</TableCell>
                        <TableCell>{tickers?.results?.[0].l} $</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TickerTable;
