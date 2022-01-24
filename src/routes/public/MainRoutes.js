import React from 'react';
import {Route, Routes} from "react-router-dom";
import Dashboard from "../../pages/Dashboard";
import Tickers from "../../pages/Tickers";

const MainRoutes = () => {
    return (
        <Routes>
            <Route index element={<Dashboard/>}/>
            <Route path={"/tickers"} element={<Tickers/>}/>
        </Routes>
    );
};

export default MainRoutes;
