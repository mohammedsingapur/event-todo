import { Component } from 'react';
import {auth} from './Firebase'
import {Link} from 'react-router-dom'
import './style.css'

var status = ''

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            pass : '',
            conPass : '',
            error : '',
            load : ''
        };
    }
    submitHandler = (e) => {
        e.preventDefault()
        status =  'Loading...'
        if(this.state.pass !== this.state.conPass){
            this.setState({error : 'Password and confirm Password should be same'})
        }
        else{
            this.setState({
                error : '',
                load : 'true'
            })
            auth.createUserWithEmailAndPassword(this.state.email,this.state.pass)
            .then((userCredential) => {
                status = 'Sign-up Success'
                this.props.history.push("/login")
                console.log("welocme")
            })
            .catch((error) => {
                status = ''
                this.setState({
                    error : error.message
                })
            })
            this.setState({
                load : 'false'
            })

        }
    }
    render(){
        return(
            <div className="box">
                <h1>Sign Up</h1>
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
                        <label>Confirm  Password</label>
                        <input type="password" value={this.state.conPass} onChange={
                            this.handler=(e)=>{
                                this.setState({conPass : e.target.value})
                            }
                        } placeholder="Confirm Password" required/><br/>
                        <button type="submit">Sign up</button>
                    </form>
                    <h4>Already have an account?<Link to="/login"> Log in</Link></h4>
                </div>
            </div>
        )
    }
}
export default Signup
