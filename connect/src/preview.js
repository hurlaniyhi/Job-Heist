import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./preview.css"
import axios from 'axios'

var Preview = createReactClass({
    getInitialState: function(){
        return{
            Fullname: "",
            DateOfBirth: "",
            Gender: "",
            Email: "",
            Address: "",
            Country: "",
            State: "",
            Status: "",
            NYSC: "",
            PhoneNumber: "",
            HomeNumber: "",
            Institution: "",
            Course: "",
            ClassOfDegree: "",
            Experience: "",
            Employers: "",
            JobRole: "",
            AboutYou: "",
            CV: "",
            SchoolCert: "",
            Waec: "",
            NyscFile: ""
        }
    },
    componentDidMount: function(){

        const data = {
            Username: localStorage.getItem("user")
        }

        axios.post('http://localhost:3001/fetchInfo', data).then((res)=>{
            
        if(res.data == "bad"){
            alert("could not retrieve your information from the database")
        }
        else{
            this.setState({
                Fullname: res.data.Fullname,
                DateOfBirth: res.data.DateOfBirth,
                Email: res.data.Email,
                Gender: res.data.Gender,
                Address: res.data.Address,
                Country: res.data.Country,
                State: res.data.State,
                Status: res.data.Status,
                NYSC: res.data.NYSC,
                PhoneNumber: res.data.PhoneNumber,
                HomeNumber: res.data.HomeNumber,
                Institution: res.data.Institution,
                Course: res.data.Course,
                ClassOfDegree: res.data.ClassOfDegree,
                Experience: res.data.Experience,
                Employers: res.data.Employers,
                JobRole: res.data.JobRole,
                AboutYou: res.data.AboutYou,
                CV: res.data.CV,
                SchoolCert: res.data.SchoolCert,
                Waec: res.data.Waec,
                NyscFile: res.data.NyscFile

            })
            alert(res.data.ClassOfDegree)
        }
            
            
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })

    },

    
    render: function(){
        return(
            <div>
                <div style={{backgroundColor: "#EB4844", marginLeft:"7%",width:"86%", marginTop: "90px",height: "45px",marginRight: "7%"}}>
                    <h4 className="ph4" style={{textAlign: "left", color: "whitesmoke",paddingLeft: "7%",paddingTop: "5px"}}>USER INFORMATION PREVIEW</h4>
                </div>
                <div className="outerBlock">
                    <br/><br/>
                <div className="formBlock">
                
                <br/><br/>
                <h3 className="ph3" style={{textAlign: "center"}}>Preview Information</h3>
                <br/><br/>
                <label for="pfn" id="pfn" style={{fontSize: "15px"}}>Full Name</label>
                <p id="pfn" className="pfn" style={{paddingTop:"17px"}}>{this.state.Fullname}</p><br/>


                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Date of Birth</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.DateOfBirth}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Gender</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Gender}</p><br/>

                <label for="epln" id="epln" id="pfn" style={{fontSize: "15px"}}>Email Address</label>
                <p id="epln" className="epln" style={{paddingTop:"17px"}}>{this.state.Email}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Home Address</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Address}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Country</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Country}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>State of Origin</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.State}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Status</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Status}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>NYSC Number</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.NYSC}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Phone Number</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.PhoneNumber}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Home Number</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.HomeNumber}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Institution Attended</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Institution}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Course of Study</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Course}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Class of Degree</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.ClassOfDegree}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Year of Experience</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Experience}</p><br/>

                <h5 style={{textAlign: "left",paddingLeft: "8%"}}>Work Experience</h5><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Name of Organization</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.Employers}</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>Job Role</label>
                <p id="pln" className="pln" style={{paddingTop:"17px"}}>{this.state.JobRole}r</p><br/>

                <label for="pln" id="pln" id="pfn" style={{fontSize: "15px"}}>About Me</label>
                <p id="pln" className="pln" style={{paddingTop:"10px", lineHeight:"27px"}}>{this.state.AboutYou}</p><br/>


               <br/><br/>
                
               <a href = {this.state.CV} download><button style={{width: "15%",marginLeft:"10%",marginRight: "5%",backgroundColor: "blue", hight:"45px",display:"inline-block"}}>CV</button></a>
               <a href = {this.state.SchoolCert} download><button style={{width: "15%",marginRight: "5%",backgroundColor: "blue", hight:"45px",display:"inline-block"}}>SchoolCert</button></a>
               <a href = {this.state.NyscFile} download><button style={{width: "15%",marginRight: "5%",backgroundColor: "blue", hight:"45%",display:"inline-block"}}>Nysc</button></a>
               <a href = {this.state.Waec} download><button style={{width: "15%",marginRight: "5%",backgroundColor: "blue", hight:"45px",display:"inline-block"}}>O'Level</button></a>
                <br/><br/>
                    </div>
                    <br/><br/>
                </div>
                <br/>
            </div>
        )
    }
})

export default Preview