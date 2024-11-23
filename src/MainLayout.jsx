import { Header } from "./Pages/Header"
import { Footer } from "./Pages/Footer"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}