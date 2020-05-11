import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
import {FaGlobe} from 'react-icons/fa'
import {FaSignInAlt} from 'react-icons/fa'
// import {FaInstagram} from 'react-icons/fa'
// import {FaFacebook} from 'react-icons/fa'
// import {FaTwitter} from 'react-icons/fa'
import "./signUp.css"

var SignUp = createReactClass({
    render: function(){
        return (
            <div>
                <div className="button_feedcont">
    
      
    <FaGlobe style={{width: "100px",height: "40px"}} /><p className="pp" style={{textAlign: "left",fontWeight: "bold", display: "inline-block", color: "black"}}>Job Heist</p>

    <button id="menu1_feedbutton" ><NavLink exact to = "./signin" style={{textDecoration: "none"}}><FaSignInAlt />LogIn</NavLink></button>

  </div>
            <div className="signupcap">
            <div className="signupcontainer">
                <h2 className="h2">Create Account</h2>
                <br/>
                <form action="/" method="POST" autocomplete="off">
                
                <input id="signupinp1" name="Fullname" className="signupinp1" type="text" placeholder = "Enter Full Name" required/><br/><br/>
                <input id="signupinp1" name="Username" className="signupinp1" type="text" placeholder = "Enter Username" required/><br/><br/>
                <input id="signupinp1" name="Email" className="signupinp1" type="text" placeholder = "Enter Email" required/><br/><br/>
                <input id="signupinp1" name="Website" className="signupinp1" type="text" placeholder = "Enter website (Requiter only)" required/><br/><br/>
                <input id="signupinp1" name="Password" className="signupinp1" type="text" placeholder = "Enter Password" required/><br/><br/>
                <input id="too" name="Confirm password" className="signupinp" type="password" placeholder = "Confirm Password" required/> <br/><br/><br/><br/>
               
                <button className="signupbutt" value = "submit">Sign Up</button>
                <br/>
               
                </form>
                <br/>
                               
            </div>
            <div className="signupoverlay"></div>
        </div>
        </div>
        )
    }
})

export default SignUp