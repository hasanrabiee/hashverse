import {Drawer, DrawerHeader} from "./styles/mainLayout.style";
import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemText from "@mui/material/ListItemText";
import {useTheme} from "@mui/material/styles";
import {Link} from "react-router-dom";

const Sidebar = ({setOpen, open}) => {
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const theme = useTheme();

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>

                <Link style={{textDecoration: 'none', color: "#333"}} to={"/"}>
                    <ListItem button>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Dashboard"}/>
                    </ListItem>
                </Link>

                <Link style={{textDecoration: 'none', color: "#333"}} to={"/tickers"}>
                    <ListItem button>
                        <ListItemIcon>
                            <MailIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Tickers"}/>
                    </ListItem>
                </Link>
            </List>

        </Drawer>
    );
};

export default Sidebar;
