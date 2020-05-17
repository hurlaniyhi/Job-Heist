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
            
            alert(res.data.list)
            if(res.data.comment == "good"){
                alert("good")
                this.setState({
                    information: res.data.list
                })
                document.querySelector("#listForm").style.display = "none"
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
    render: function(){
        return(
            <div>
               
                <br/><br/><br/>
                <div className="formBlock">
                    <br/>
                <form id="searchForm" onSubmit={this.post}>
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

                <table id="listTable" style={{display:"none"}}>
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>
                                Profile
                            </th>
                            <th>
                                Send Mail
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.information.map(list =>(
                                <tr key={list._id}>
                                    <td>{list.Fullname}</td>
                                    <td value={list.Fullname}>View Profile</td>
                                    <td value={list.Email}>Send Mail</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                </div>
                <br/><br/>
                
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
        )
    }
})

export default Search