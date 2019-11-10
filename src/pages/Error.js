import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Navbar from '../components/Navbar';
export default function Error() {
    return (
        <>
         <Navbar/>
        <Hero>
            <Banner title="404 ERROR" subtitle="PAGE NOT FOUND">
            <Link to='/home' className="btn-primary">RETURN HOME</Link>

            </Banner>
        </Hero>
        </>


    )
}


