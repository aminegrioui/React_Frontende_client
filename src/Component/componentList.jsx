import React, { Component } from 'react'
import axios from 'axios'
const url="http://localhost:8080/"

const getAllEmployees =()=>{
     return axios.get(url)
}
export default class componentList extends Component {
    const 
         constructor(props){
               super(props)

               this.state={
                   employees :[]
               }
         }
          
    componentDidMount(){
        getAllEmployees().then((resp) =>{
            this.setState({employees: resp.data})
        })
    }
    render() {
        return (
            <div>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>First Name of Employee</th>
                            <th>Last Name of Employee</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                             this.state.employees.map((employee)=> {
                                 const {id,firstName,lastName,emailId}=employee
                                 return <tr key={id}>
                                       <td>{firstName}</td>
                                       <td>{lastName}</td>
                                       <td>{emailId}</td>
                                 </tr>
                             })
                         }
                    </tbody>
                </table>
            </div>
        )
    }
}

