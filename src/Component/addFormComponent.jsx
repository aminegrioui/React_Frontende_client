import React, { Component } from 'react'
import Service from '../reactserviceapp/service'
export default class addFormComponent extends Component {
    constructor(props){
        super(props)
        this.state={
                id:this.props.match.params.id,
                firstName:'',
                lastName:'',
                email:''
        }
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this)
        this.changeLastNameHandler=this.changeLastNameHandler.bind(this)
        this.changeEmailHandler=this.changeEmailHandler.bind(this)
        this.saveEmployee=this.saveEmployee.bind(this)
    }
    changeFirstNameHandler(event){
        this.setState({firstName: event.target.value})
    }
    changeLastNameHandler(event){
        this.setState({lastName: event.target.value})
    }
    changeEmailHandler(event){
        this.setState({email: event.target.value})
    
    }
    componentDidMount(){
        if(this.state.id == -1){
             return
        }
        else{
            Service.getUmployeeById(this.state.id).then((res)=>{
                let employee=res.data
                this.setState({firstName:employee.firstName,lastName:employee.lastName,
                    email:employee.emailId
                })
            })
        }
       
    }
    saveEmployee(e){
        e.preventDefault()
        let emplyee={firstName:this.state.firstName, lastName: this.state.lastName,emailId:this.state.email}
       if(this.state.id == -1){
        Service.createEmployee(emplyee).then((res)=>{
            console.log("createEmployee "+this.state.id)
            this.props.history.push("/")
           })
       }
       else{
        Service.updateEmployee(emplyee,this.state.id).then((res)=>{
            this.props.history.push("/")
        })
       }
      
       
    }
    cancel(){
        this.props.history.push("/")
    }
    render() {
        return (
           <div>
            <h4>Add an Employee </h4>
              <from class="container">
              <div className="row">
                        <div className="col-25">
                        <label for="fname">First Name</label>
                        </div>
                        <div className="col-75">
                        <input type="text" id="fname" name="firstname"
                        value={this.state.firstName} 
                        onChange={this.changeFirstNameHandler}
                        placeholder="Your name.."></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label for="lname">Last Name</label>
                        </div>
                        <div className="col-75">
                        <input type="text" id="lname" name="lastname" p
                        value={this.lastName}
                        onChange={this.changeLastNameHandler}
                        laceholder="Your last name.."/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                        <label for="country">Email</label>
                        </div>
                        <div className="col-75">
                        <input type="text" id="lname" name="email" 
                        value={this.state.email} 
                        onChange={this.changeEmailHandler}
                        placeholder="Email.."/>
                        </div>
                    </div>
                   
                    <div className="row">
                    <input type="submit" value="Save" onClick={this.saveEmployee}/>
                    <input type="submit" value="remove" onClick={this.cancel.bind(this)}/>
                    </div>
             </from> 
           </div>
        )
    }
}
