import { Outlet } from "react-router-dom";
import TopBar from './Navbar'

const Layout = (args) => {


    return (
    <>
    <TopBar/>
    <Outlet style={{}}/>
    </>
    )
};

export default Layout;