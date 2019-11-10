import React, { Component } from 'react'
import Hero from "../components/Hero";
import {Link} from 'react-router-dom';
import Title from '../components/Title';
import Nav from '../components/Nav'
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";


firebase.initializeApp({
    apiKey: "AIzaSyCYpawjbToW0bV7QqhMQgEEolqkIYX_h6Q",
    authDomain : "resort-login.firebaseapp.com"

})

export default class Login extends Component {
    state={isSignedIn:false}
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccess: () => false
        }
      }

      componentDidMount = () => {
       
        firebase.auth().onAuthStateChanged(user => {
          this.setState({ isSignedIn: !!user })
          console.log("user", user)
        })
      }



    render() {
        return (
          <>
      <Nav></Nav>
          <Hero>
            <div>
              {this.state.isSignedIn ?
              ( 
                  <span>
             
              <h1>Welcome  {firebase.auth().currentUser.displayName} </h1>
              <img className="imglogin" alt="Profile Pic" src={firebase.auth().currentUser.photoURL}/> 
              
              <div className="kiran">
              <button className="btn-primarya" onClick={()=>firebase.auth().signOut()}>SIGN OUT</button>
              <Link to='/home' className="btn-primaryb">HOME</Link>

              </div>
             

              </span>)

              : ( 
                  
                <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
              )}

            </div>
            </Hero>
            </>
        )
    }
}

