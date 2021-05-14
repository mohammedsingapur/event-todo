import { Component } from "react";
import {Link} from 'react-router-dom'
import './style.css'
import HomePara from './HomePara'

class Home extends Component{
    render(){
        return(
            <div>
                <div className="dash"> 
                <Link to="/signup"><button>Sign up</button></Link>
                <Link to="/login"><button>Login</button></Link>
                <Link to="dashboard/feedback"><button>Feedback</button></Link>
                </div>
                <HomePara />
            </div>
        )
    }
}
export default Home 
