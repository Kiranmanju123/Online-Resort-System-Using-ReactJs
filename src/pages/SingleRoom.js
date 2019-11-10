import React, { Component } from 'react';
import defaultBcg from '../images/room-1.jpeg';
//import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import styledcomponet from '../components/StyledHero';
import StyledHero from '../components/StyledHero';
import Navbar from '../components/Navbar';


export default class SingleRoom extends Component {
    constructor(props) {
        super(props) ;
        //console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = RoomContext;
    render() {
        
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        if(!room) {
            return <div className="error">
                <h3>NO SUCH ROOM COULD BE FOUND</h3>
                <Link to='/rooms' className="btn-primary">BACK TO ROOMS</Link>
            </div>
        }
        //console.log(room);
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        const [mainImg,...defaultImg]=images;
        console.log(defaultImg)
      
        return (
            <>
             <Navbar/>
            <StyledHero img={mainImg || this.state.defaultBcg}> 
            <Banner title={`${name} room`}>
                <Link to="/rooms" className="btn-primary">
                    BACK TO ROOMS
                </Link>
            </Banner>

            </StyledHero>

            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item,index) => {
                       return <img key={index} src={item} alt={name}/>
                    })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>DETAILS</h3>
                        <p> 
                            {description}
                        </p>
                    </article>
                    <article className="info">
                        <h3>
                            INFO
                        </h3>
                        <h6>
                            PRICE : ${price}
                        </h6>
                        <h6>
                            SIZE : ${size} SQFT
                        </h6>
                        <h6>
                            MAX CAPACITY : {
                                capacity > 1? `${capacity} PEOPLE` : `${capacity} PERSON`
                            }
                        </h6>
                        <h6>
                            {pets?"PETS ALLOWED":"PETS ARE NOT ALLOWED"}
                        </h6>
                        <h6>
                            {breakfast && "FREE BREAKFAST INCLUDED"}
                        </h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>EXTRAS</h6>
                <ul className="extras">
                    {extras.map((item,index) =>{
                    return <li key={index}>-{item}</li>
                    })}
                </ul>
            </section>
            </>
        )
    }
}
