import React, { Component } from 'react'
import { FaCocktail,FaHiking,FaShuttleVan,FaBeer } from "react-icons/fa";
import Title from "./Title"

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"FREE COCKTAILS",
                info : 'Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text'
                 
            },

            {
                icon:<FaHiking/>,
                title:"ENDLESS HIKING",
                info : 'Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text'
                 
            },

            {
                icon:<FaShuttleVan/>,
                title:"FREE SHUTTLE",
                info : 'Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text'
                 
            },

            {
                icon:<FaBeer/>,
                title:"STRONGEST BEER",
                info : 'Lorem Ipsum is simply dummy text of the printing and typesetting Lorem Ipsum is simply dummy text'
                 
            }
        ]
    }
    render() {
        return (
        <section className="services">

              <Title title='SERVICES'/>
              <div className="services-center">
                  {this.state.services.map((item,index) => {
                      return <article key={index} className="service">
                          <span>{item.icon}</span>
                          <h6>{item.title}</h6>
                          <p>{item.info}</p>
                      </article>

                  })}
              </div>
        </section>   
            
        )
    }
}
