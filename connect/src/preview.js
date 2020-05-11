import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./preview.css"

var Preview = createReactClass({
    render: function(){
        return(
            <div>
                <div style={{backgroundColor: "#EB4844", marginLeft:"7%",width:"86%", marginTop: "90px",height: "45px",marginRight: "7%"}}>
                    <h4 style={{textAlign: "left", color: "whitesmoke",paddingLeft: "7%",paddingTop: "5px"}}>USER INFORMATION PREVIEW</h4>
                </div>
                <div className="outerBlock">
                    <br/><br/>
                <div className="formBlock">
                
                <br/><br/>
                <h3 style={{textAlign: "center"}}>Preview Information</h3>
                <br/><br/>
                <label for="pfn" id="pfn" style={{fontSize: "15px"}}>First Name</label>
                <p id="pfn" className="pfn" style={{paddingTop:"17px"}}>Ridwan</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Last Name</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>Kolawole</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Date of Birth</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>27/04/1993</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Gender</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>Male</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Email Address</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>olaniyi.jibola152@gmail.com</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Home Address</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>2A, Kano street Oyingbo lagos</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Country</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>Nigeria</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>State of Origin</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>Kwara state</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Status</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>Male</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>NYSC Number</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>A40003521</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Phone Number</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>07087994127</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Home Number</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>08156170991</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Institution Attended</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>Kwara State University</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Course of Study</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>Electrical and Electronics Engineering</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Class of Degree</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>First Class</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Year of Experience</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>3 years</p><br/>

                <h5 style={{textAlign: "left",paddingLeft: "8%"}}>Work Experience</h5><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Name of Organization</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>Transmission Company of Nigeria, GTbank</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Job Role</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>System Development Officer</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>About Me</label>
                <p id="pln" className="pln" style={{paddingTop:"10px", lineHeight:"27px"}}>I am software Engineer that can work both independently and in a Team</p><br/>


               <br/><br/>
                

                    </div>
                    <br/><br/>
                </div>
            </div>
        )
    }
})

export default Preview