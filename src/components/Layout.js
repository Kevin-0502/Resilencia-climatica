import { Outlet } from "react-router-dom";
import TopBar from './Navbar'

const Layout = (args) => {


    return (
    <>
    <TopBar/>
    <Outlet/>
    </>
    )
};

export default Layout;