import { Component } from 'react';
import {auth} from './Firebase'
import {Link} from 'react-router-dom'
import './style.css'

export var user = ''
var status = ''


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            pass : '',
            conPass : '',
            error : '',

        };
    }
    submitHandler = (e) => {
        e.preventDefault()
        status = 'Loading ...'
        
        this.setState({
            error : ''
        })
        
        auth.signInWithEmailAndPassword(this.state.email,this.state.pass)
        .then((userCredential) => {
            user = this.state.email
            status = 'Login Successful'
            console.log("welcome")
            this.props.history.push("/dashboard")
            status = ''
        })
        .catch((error) => {
            status = ''
            this.setState({
                error : error.message
            })
        })
                   
    }
    render(){
        return(
            <div className="box">
                <h1>Login</h1>
                <div className="login">
                    <h5>{this.state.error}{status}</h5>
                    <form onSubmit={this.submitHandler}>
                        <label>Email Id</label>
                        <input type="email" value={this.state.email} onChange={
                            this.handler=(e)=>{
                                this.setState({email : e.target.value})
                            }
                        } placeholder="E-mail" required/><br/>
                        <label>Password</label>
                        <input type="password" value={this.state.pass} onChange={
                            this.handler=(e)=>{
                                this.setState({pass : e.target.value})
                            }
                        } placeholder="Passowrd" required/><br/>
                        <button type="submit">Log in</button>
                    </form>
                    <h4>Don't have an account?<Link to="/signup"> Sign Up</Link></h4>
                </div>
            </div>
        )
    }
}

export default Login
