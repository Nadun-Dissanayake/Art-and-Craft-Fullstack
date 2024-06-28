import { Outlet } from "react-router-dom";
import Header from "./common_components/header";
import Home_hero from "./home_components/home_hero";
import Footer from "./common_components/footer";

export default function Layout(){
    return(
        <main>
            <Header/>
            <Outlet/>
            <Footer/>
        </main>
    );
}