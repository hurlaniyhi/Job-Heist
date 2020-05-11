import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./editProfile.css"

var EditProfile = createReactClass({
    render: function(){
        return(
            <div>
                <div style={{backgroundColor: "#EB4844", marginLeft:"7%",width:"86%", marginTop: "90px",height: "45px",marginRight: "7%"}}>
                    <h4 style={{textAlign: "left", color: "whitesmoke",paddingLeft: "7%",paddingTop: "5px"}}>PERSONAL INFORMATION FORM</h4>
                </div>
                <div className="outerBlock">
                    <br/><br/>
                <div className="formBlock">
                <form action="/" method="POST" autocomplete="off">
                <br/><br/>
                <h3 style={{textAlign: "center"}}>Personal Information</h3>
                <br/><br/>
                <input name="Firstname" className="fn" type="text" placeholder = "First Name" required/><br/><br/>
                <input name="Lastname" className="ln" type="text" placeholder = "Last Name" required/><br/><br/>
                <input name="DateOfBirth" className="DOB" type="date" placeholder = "Date of Birth" required/>
                <select name="Gender" className="gender" required>
                    <option>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select><br/><br/>
                <input name="Email" className="em" type="Email" placeholder = "Email" required/><br/><br/>
                <input name="Address" className="ha" type="text" placeholder = "Home Address" required/><br/><br/>
                <input name="Country" className="cty" type="text" placeholder = "Country" required/> 
                <input name="State" className="st" type="text" placeholder = "State of Origin" required/><br/><br/>
                <select name="Status" className="status" required>
                    <option>Select Status</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorcee">Divorcee</option>
                    <option value="Widow">Widow</option>
                </select>
                <input name="NYSC" className="nysc" type="text" placeholder = "NYSC Number" required/><br/><br/>
                <input name="PhoneNumber" className="pn" type="number" placeholder = "Phone Number" required/>
                <input name="HomeNumber" className="hn" type="number" placeholder = "Home Number" /><br/><br/>
                <input name="Institution" className="ia" type="text" placeholder = "Institution Attended" required/><br/><br/>
                <input name="Course" className="cs" type="text" placeholder = "Course Studied" required/><br/><br/>
                <select name="ClassOfDegree" className="cod" required>
                    <option>Grade</option>
                    <option value="Single">First Class</option>
                    <option value="Married">Upper Class</option>
                    <option value="Divorcee">Lower Class</option>
                    <option value="Widow">Third Class</option>
                    <option value="Widow">Pass</option>
                </select>
                <input name="Experience" className="yoe" type="text" placeholder = "Year of Experience" required/> <br/><br/><br/>
                
                <h5 style={{textAlign: "left",paddingLeft: "8%"}}>Work Experience</h5><br/>
                <input name="Employers" className="noo" type="text" placeholder = "Name of Organizations" required/> <br/><br/>
                <input name="JobRole" className="jr" type="text" placeholder = "Job Role" required/> <br/><br/><br/>
                <h5 style={{textAlign: "left",paddingLeft: "8%"}}>Sell Yourself (not more than 3 lines)</h5><br/>
                <textarea name="AboutYou" className="about" type="text" placeholder = "About you" required></textarea><br/>
               <br/><br/>
                <button className="savebutt" value = "submit">Save</button>
                <br/>
               
                </form>

                    </div>
                    <br/><br/>
                </div>
            </div>
        )
    }
})

export default EditProfile