import React, { Component } from 'react'
import Service from '../reactserviceapp/service'
export default class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id:this.props.match.params.id,
            employee : {}
    }
    }
    componentDidMount(){
        Service.getUmployeeById(this.state.id).then((resp) =>{
            this.setState({employee:resp.data})
            console.log(this.state.employee)
        })
    }
    render() {
        return (
            <div>
                 <label>
                      <h6>First Name : {this.state.employee.firstName} </h6>
                 </label><br></br>
                 <label>
                      <h6>Last Name : {this.state.employee.lastName} </h6>
                 </label><br></br>
                 <label>
                      <h6>Gmail : {this.state.employee.emailId} </h6>
                 </label>
            </div>
        )
    }
}
