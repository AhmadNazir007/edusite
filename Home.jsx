import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import web from './Types-of-Web-Development-for-your-Project-768x389.jpg'



const Home = () =>{

    return(
        <>

        <Common name='Welcome to Home' imgsrc={web} visit="/services" btname='Get started' />
    
        </>
    )
}

export default Home;

