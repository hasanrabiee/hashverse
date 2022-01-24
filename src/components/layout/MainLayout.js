import {useState} from "react"
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import {DrawerHeader} from "./styles/mainLayout.style";
import Sidebar from "./Sidebar";
import Header from "./Header";


export default function MainLayout({children}) {
    const [open, setOpen] = useState(false);
    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header setOpen={setOpen} open={open}/>
            <Sidebar setOpen={setOpen} open={open}/>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <DrawerHeader/>
                {children}
            </Box>
        </Box>
    );
}
