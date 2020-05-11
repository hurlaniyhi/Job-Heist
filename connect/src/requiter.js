import React from 'react';
import {NavLink} from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import createReactClass from 'create-react-class'
import {FaGlobe} from 'react-icons/fa'
import {FaSignOutAlt} from 'react-icons/fa'
import {FaGripVertical} from 'react-icons/fa'
import {FaUserEdit} from 'react-icons/fa'
import {FaUser} from 'react-icons/fa'
import {FaUpload} from 'react-icons/fa'

import "./requiter.css"
import RDashboard from './Rdashboard.js'
import Compose from './compose.js'
import Search from './search.js'
// import UploadCert from './uploadCert.js'
// import NYSC from './nysc.js'
// import Waec from './waec.js'
// import Dashboard from './dashboard.js'
import Ridwan from './rid1.jpg'

//import SignIn from './signin.js'


var Requiter = createReactClass({
    getInitialState: function(){
        return {
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
            bk: "",
            cl: "#0000AB",
            bd: "blue"
        }
    },
    click1: function(){
        this.setState({
            bg1: "#EB4844",
            c1: "whitesmoke",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
        })
    },

    click2: function(){
        this.setState({
            bg2: "#EB4844",
            c2: "whitesmoke",
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
        })
    },
    click3: function(){
        this.setState({
            bg3: "#EB4844",
            c3: "whitesmoke",
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
        })
    },
    click4: function(){
        this.setState({
            bg4: "#EB4844",
            c4: "whitesmoke",
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
        })
    },
    click5: function(){
        this.setState({
            bg5: "#EB4844",
            c5: "whitesmoke",
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
        })
    },
    click6: function(){
        this.setState({
            bg6: "#EB4844",
            c6: "whitesmoke",
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg7: "#EEEEEE",
            c7: "#3C4858",
        })
    },
    click7: function(){
        this.setState({
            bg7: "#EB4844",
            c7: "whitesmoke",
            bg1: "#EEEEEE",
            c1: "#3C4858",
            bg2: "#EEEEEE",
            c2: "#3C4858",
            bg3: "#EEEEEE",
            c3: "#3C4858",
            bg4: "#EEEEEE",
            c4: "#3C4858",
            bg5: "#EEEEEE",
            c5: "#3C4858",
            bg6: "#EEEEEE",
            c6: "#3C4858",
        })
    },
    logOut: function(){
        
        this.props.history.push('/signin')
    },
    changeColor: function(){
        this.setState({
            bk: "#0000AB",
            cl: "whitesmoke",
            bd: "green"
        })
    },
    switchColor: function(){
        this.setState({
            bk: "",
            cl: "#0000AB",
            bd: "blue"
        })
    },
    render: function(){
        return (
            <Router>
                {/* <div className="button_feedcont">
                  <FaGlobe style={{width: "100px",height: "50px"}} /><p style={{textAlign: "left",fontWeight: "bold", display: "inline-block", color: "black"}}>Job Heist</p>
                  <button id="menu1_feedbutton" ><NavLink exact to = "./logout"><FaSignOutAlt />LogIn</NavLink></button>
                </div> */}

            <div className="samerow">
            <div className="mainContainer">
                
                {/* <img className="gtlogo" src="http://www.citypeopleonline.com/wp-content/uploads/2017/01/Guaranty-Trust-Bank-gtbank-logo.jpg" /> */}
                <img className="gtlogo" src={Ridwan} />
                <h4 style={{paddingTop: "10px",color: "green"}}><i>Kolawole Ridwan</i></h4>
                <hr/>
                <NavLink to = "/signin/requiter/Rdashboard.js" style={{textDecoration:"none"}}><button className="nav" name="Bcolor1" onClick={this.click1} style={{backgroundColor: this.state.bg1, color: this.state.c1}}><FaGripVertical style={{marginTop: "5px",height:"30px", marginLeft: "10%" }}/><i style={{paddingLeft: "10%", width: "60%", paddingRight: "20%",paddingTop: "6px"}}>Dashboard</i></button></NavLink><br/>
                <NavLink exact to = "/signin/requiter/compose.js" style={{textDecoration:"none"}}><button className="nav" name="Bcolor1" onClick={this.click2} style={{backgroundColor: this.state.bg2, color: this.state.c2}}><FaUserEdit style={{marginTop: "5px",height:"30px", marginLeft: "10%", width: "27px" }}/><i style={{paddingLeft: "10%", paddingRight: "20%",paddingTop: "6px"}}>Compose</i></button></NavLink><br/>
                <NavLink to = "/signin/requiter/search.js" style={{textDecoration:"none"}}><button className="nav" name="Bcolor1" onClick={this.click3} style={{backgroundColor: this.state.bg3, color: this.state.c3}}><FaUser style={{marginTop: "5px",height:"30px", marginLeft: "10%", width: "20px" }}/><i style={{paddingLeft: "10%", paddingRight: "20%",paddingTop: "6px"}}>Search</i></button></NavLink><br/>
                {/* <NavLink to = "/signin/userdashboard/uploadCv.js" style={{textDecoration:"none"}}><button className="nav" name="Bcolor1" onClick={this.click4} style={{backgroundColor: this.state.bg4, color: this.state.c4}}><FaUpload style={{marginTop: "5px",height:"30px", marginLeft: "10%", width: "20px" }}/><i style={{paddingLeft: "10%", paddingRight: "20%",paddingTop: "6px"}}>Upload CV</i></button></NavLink><br/>
                <NavLink to = "/signin/userdashboard/uploadCert.js" style={{textDecoration:"none"}}><button className="nav" name="Bcolor1" onClick={this.click5} style={{backgroundColor: this.state.bg5, color: this.state.c5}}><FaUpload style={{marginTop: "5px",height:"30px", marginLeft: "10%", width: "20px" }}/><i style={{paddingLeft: "10%", paddingRight: "20%",paddingTop: "6px"}}>Upload Cert.</i></button></NavLink><br/>
                <NavLink to = "/signin/userdashboard/nysc.js" style={{textDecoration:"none"}}><button className="nav" name="Bcolor1" onClick={this.click6} style={{backgroundColor: this.state.bg6, color: this.state.c6}}><FaUpload style={{marginTop: "5px",height:"30px", marginLeft: "10%", width: "20px" }}/><i style={{paddingLeft: "10%", paddingRight: "20%",paddingTop: "6px"}}>NYSC Cert.</i></button></NavLink><br/>
                <NavLink to = "/signin/userdashboard/waec.js" style={{textDecoration:"none"}}><button className="nav" name="Bcolor1" onClick={this.click7} style={{backgroundColor: this.state.bg7, color: this.state.c7}}><FaUpload style={{marginTop: "5px",height:"30px", marginLeft: "10%", width: "20px" }}/><i style={{paddingLeft: "10%", paddingRight: "20%",paddingTop: "6px"}}>O' Level Cert.</i></button></NavLink><br/>
                 */}
              
            </div>
            <div className="content">
                <div className="button_feedcont">
                  <FaGlobe style={{width: "100px",height: "40px"}} /><p style={{textAlign: "left",fontWeight: "bold", display: "inline-block", color: "black"}}>Job Heist</p>
                  <button id="menu1_feedbutton" onMouseOver={this.changeColor} onMouseLeave={this.switchColor} onClick={this.logOut} style={{backgroundColor: this.state.bk, color:this.state.cl, borderColor: this.state.bd}}><FaSignOutAlt />Logout</button>
                </div>

                <Switch>

                <Route path = "/signin/requiter/Rdashboard.js" component = {RDashboard} />
                <Route path = "/signin/requiter/compose.js" component = {Compose} />
                <Route path = "/signin/requiter/search.js" component = {Search} />
                
                
                                
                </Switch>
            </div>
        </div>
            </Router>
        )
    }
})

export default Requiter