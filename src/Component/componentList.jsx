import React, { Component } from 'react'
import Service from '../reactserviceapp/service'



export default class componentList extends Component {
    const 
         constructor(props){
               super(props)

               this.state={
                   employees :[]
               }
               this.addEmployee=this.addEmployee.bind(this)
               this.editEmployee=this.editEmployee.bind(this);
               this.deleteEmployee=this.deleteEmployee.bind(this);
               this.viewEmployee=this.viewEmployee.bind(this);
         }
         viewEmployee(id){
            this.props.history.push(`/view_employee/${id}`)
         }
         deleteEmployee(id){
            Service.deletUmployeeById(id).then((res)=>{
                this.setState({employees: this.state.employees.filter((employee) =>employee.id !== id)})
            })
         }
        editEmployee(id){
            this.props.history.push(`/add_employee/${id}`)
         }      
    componentDidMount(){
        Service.getAllEmployees().then((resp) =>{
            this.setState({employees: resp.data})
        })
    }
    addEmployee(){
        this.props.history.push("/add_employee/-1")
    }
    render() {
        return (
            <div>
                <div>
                     <button onClick={this.addEmployee}>add Employee</button>
                </div>
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
                                       <td>
                                         <button onClick={() =>this.editEmployee(id)}>Update</button>
                                         <button onClick={() =>this.deleteEmployee(id)}>Delete</button>
                                         <button onClick={() =>this.viewEmployee(id)}>View Employee</button>
                                        </td>
                                            </tr>
                             })
                         }
                    </tbody>
                </table>
            </div>
        )
    }
}

