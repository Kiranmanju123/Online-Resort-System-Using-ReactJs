import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import RoomContainer from '../components/RoomContainer';
import Navbar from '../components/Navbar';

export default function Rooms() {
    return (
       <>
       <Navbar/>
       <Hero hero="roomsHero">
            <Banner title="OUR ROOMS" subtitle="SEARCH YOUR ROOMS">
               <Link to='/home' className="btn-primary">RETURN HOME</Link>
            </Banner>
       </Hero>
       <RoomContainer/>
       </>
       
    )
}
