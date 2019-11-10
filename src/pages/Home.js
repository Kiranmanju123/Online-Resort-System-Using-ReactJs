import React from 'react'
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRoom';
import Navbar from '../components/Navbar';


export default function Home() {
    return (
        <>
       <Navbar/>
        <Hero>
            <Banner title="LUXURIOUS ROOM" subtitle="DELUXE ROOMS STARTING AT $500">
            <Link to='/rooms' className="btn-primary">OUR ROOMS</Link>

            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        
        </>
    )
}

