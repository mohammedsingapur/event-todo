import {Component} from 'react'
import { Link } from 'react-router-dom'
import { user } from './Login'

class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={
             myUser : user
        }
    }
    render(){
        if(this.state.myUser === ''){
            return(
                <div>
                    <Link to="/login">Login</Link>
                </div>
            )
        }
        else {
            return (
                <div>
                    <div className="dash">
                        <Link to="/dashboard/add"><button>Add New</button></Link>
                        <Link to="/dashboard"><button>To-Do</button></Link>
                        <Link to="/dashboard/feedback"><button>Feedback</button></Link>
                    </div>
                </div>
            )     
        }
    }
}
export default Dashboard
