import React from 'react'
import LoadingGif from "../images/gif/loading-gear.gif"
export default function Loading() {
    return (
        <div className="loading">
            <h4>Rooms Data Loading..</h4>
            <img src={LoadingGif} alt=""/>

            
        </div>
    )
}
