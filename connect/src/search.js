import React from 'react';
import {NavLink} from 'react-router-dom'
import createReactClass from 'create-react-class'
import axios from 'axios'
// import {FaGlobe} from 'react-icons/fa'
// import {FaSignOutAlt} from 'react-icons/fa'

import "./search.css"


var Search = createReactClass({
    getInitialState: function(){
        return{
            CourseOfStudy: "",
            ClassOfDegree: "",
            information: [],
        }
    },
    post: function(e){

        e.preventDefault()
        
        const data = {
            CourseOfStudy: this.state.CourseOfStudy,
            ClassOfDegree: this.state.ClassOfDegree,
        }

        axios.post('http://localhost:3001/search', data).then((res)=>{
            
            
            if(res.data.comment == "good"){
                
                this.setState({
                    information: res.data.list
                })
               
                document.querySelector("#searchForm").style.display = "none"
                document.querySelector("#listTable").style.display = "block"
            }
          
            else{
                alert(res.data.list)
            }
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
    },
    handleChange: function(e){
        this.setState({
            [e.target.name]: e.target.value
        }) 
    },
    sendMail: function(e){
      const data = {
          sendTo: e.target.value,
          Username: localStorage.getItem("requiter")
      }  

      axios.post('http://localhost:3001/sendMail', data).then((res)=>{
            
            
            if(res.data.comment == "good"){
                
               alert("Mail successfully sent")
            }
          
            else{
                alert("Mail could not be sent")
            }
            
        }).catch((err)=>{
            alert("error occurred")
            console.log(err)
        })
    },
    profile: function(e){

        localStorage.setItem("user",e.target.value)
        this.props.history.push("/signin/requiter/preview.js")
    },
    render: function(){
        return(
            <div>
               
                <br/><br/><br/>
                <div className="formBlock">
                    <br/>
                <div id="searchForm">
                <form onSubmit={this.post}>
                <br/><br/><br/>
                <select name="CourseOfStudy" onChange={this.handleChange} className="sub" placeholder="course of study" required>
                    <option>Course of study</option>
                    <option value="Electrical/Electronics Engineering">Electrical/Electronics Engineering</option>
                    <option value="Mechanical Engineering<">Mechanical Engineering</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Civil Engineering">Civil Engineering</option>
                    <option value="Medicine and surgery">Medicine and surgery</option>
                   
                </select>
                <select name="ClassOfDegree" onChange={this.handleChange} className="sub" placeholder="class of degree" required>
                    <option>Grade</option>
                    <option value="First Class">First Class</option>
                    <option value="Upper Class">Upper Class</option>
                    <option value="Lower Class">Lower Class</option>
                    <option value="Third Class">Third Class</option>
                    <option value="Pass">Pass</option>
                    
                </select><br/><br/>
                <br/>
                <button className="supload" value="submit">Search</button><br/><br/><br/><br/>
                </form>
                </div>
               <div id="listTable" style={{display:"none"}}>
                <table>
                    <thead>
                        <tr style={{borderBottomStyle: "1px solid"}}>
                            <th id="colon1">
                                Name
                            </th>
                            <th id="colon2">
                                Profile
                            </th>
                            <th id="colon3">
                                Send Mail
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.information.map(list =>(
                                <tr key={list._id}>
                                    <td ><button id="but1">{list.Fullname}</button></td>
                                    <td><button id="but2" onClick={this.profile} value={list.Username} >View Profile</button></td>
                                    <td ><button onClick={this.sendMail} value={list.Email} id="but3">Send Mail</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <br/><br/>
                </div>

                </div>
                <br/><br/>
                
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
})

export default Search