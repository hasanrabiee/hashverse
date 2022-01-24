import {useState} from 'react';
import {Alert, Box, Button, Divider, Grid, Paper, TextField} from "@mui/material";
import DatePicker from '@mui/lab/DatePicker';
import {LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {useDispatch, useSelector} from "react-redux";
import {getTicker} from "../redux/actions/tickers";
import Chart from "../components/utilities/Chart";
import TickerTable from "../components/tickers/Table";

const Tickers = () => {
    const [fromDate, setFromDate] = useState(new Date())
    const [toDate, setToDate] = useState(new Date())
    const [ticker, setTicker] = useState("")
    const dispatch = useDispatch()
    const tickers = useSelector(state => state.tickers)
    const loading = useSelector(state => state.loading)
    const handleChange = (event) => {
        setTicker(event.target.value);
    };

    const handleSubmit = (ticker, fromDate, toDate) => {
        dispatch(getTicker(ticker, fromDate, toDate))
    }

    function formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }
    return (
        <Box>
            <Alert style={{marginBottom: "30px"}} severity="warning">Select Valid Stock Ticker and dates then submit to
                show their details in charts and table</Alert>

            <Grid container spacing={2}>
                <Grid item xs={6} md={6}>
                    <TextField
                        fullWidth
                        id="outlined-helperText"
                        label="Stocks Ticker"
                        helperText="The ticker symbol of the stock/equity."
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="From Date"
                            value={fromDate}
                            onChange={(newValue) => {
                                setFromDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            fullWidth
                        />
                    </LocalizationProvider>
                </Grid>

                <Grid item xs={6} md={6}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="To Date"
                            value={toDate}
                            onChange={(newValue) => {
                                setToDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Grid>
            </Grid>
            {loading ? "loading" : (
                <Button onClick={() => handleSubmit(ticker, formatDate(fromDate), formatDate(toDate))}
                        style={{marginTop: 20}}
                        variant={"contained"}>
                    Submit
                </Button>

            )}


            <Divider style={{margin: "20px 0px"}}/>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6}>
                        <TickerTable/>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Chart data={tickers?.results} width={730 / 1.25} height={250 / 1.25} color={"#e0cd1e"}/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Tickers;
