import {Component} from 'react'
import {user} from './Login'
import {db} from './Firebase'
import './style.css'

// import firebaseDb from 'firebase'

class Add extends Component{
    constructor(props){
        super(props)
        this.state = {
            taskDate : '',
            taskName : '',
            taskDesc : '',
            message : ''
        }
    }
    submitHandler  = (e) =>{
        e.preventDefault();
        const addRef = db.ref('/root')
        const addTodo = {
            TaskUser : user,
            TaskName : this.state.taskName,
            TaskDate : this.state.taskDate,
            TaskDesc : this.state.taskDesc,
            TaskStatus : false
        }
        addRef.push(addTodo)
        .then(()=>{
            this.setState({
                message : 'Task Added Sucessfully'
            })
        })
        .catch((error)=>{
            this.setState({
                message : error.message
            })
        })
        this.setState({
            // message : 'Task Added Sucessfully',
            taskDate : '',
            taskName : '',
            taskDesc : ''
        })
        // this.props.history.push('/dashboard')
    }
        
    render(){
        if(user!== ''){        
        return (
                <div>
                    <h3>Add a new To-Do</h3>
                    <div className="login">
                        <h4>{this.state.message}</h4>
                        <form onSubmit={this.submitHandler}>
                            <label>Task Name</label><br/>
                            <input type="text" value={this.state.taskName} onChange={
                                this.handler=(e)=>{this.setState({taskName : e.target.value})}
                                } placeholder="Task Name" required/><br/>
                            <label>Task Date</label><br/>
                            <input type="Date" value={this.state.taskDate} onChange={
                                this.handler=(e)=>{this.setState({taskDate : e.target.value})}
                                }  required/><br/>
                            <label>Task Description</label><br/>
                            <textarea value={this.state.taskDesc} onChange={
                                this.handler=(e)=>{this.setState({taskDesc : e.target.value})}
                            } placeholder="Description" required></textarea><br/>  
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )
        }else{
            return(
                <div>
                    <h3>Please Login to access this App</h3>
                </div>
            )
        }
    }
    
}

export default Add 
