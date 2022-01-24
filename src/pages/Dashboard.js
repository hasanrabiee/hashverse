import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getAppleStock, getDIAStock, getSPYStock} from "../redux/actions/dashboard";
import BasicTable from "../components/dashboard/Table";

const Dashboard = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAppleStock())
        dispatch(getDIAStock())
        dispatch(getSPYStock())
    }, [])
    return (
        <div>
            <BasicTable/>
        </div>
    );
};

export default Dashboard;
