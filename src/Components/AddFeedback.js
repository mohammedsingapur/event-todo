import {Component} from 'react'
import {user} from './Login'
import {db} from './Firebase'
import {Link} from 'react-router-dom'
import './style.css'

class AddFeedback extends Component{
    constructor(props){
        super(props);
        this.state={
            feedEmail : user,
            feedName : '',
            feedFeedback : '',
            message : ''
        }
    }
    submitHandler=(e)=>{
        e.preventDefault()
        const feedRef = db.ref('/feedback')
        const data = {
            FeedEmail : this.state.feedEmail,
            FeedName : this.state.feedName,
            FeedFeedback : this.state.feedFeedback
        }
        feedRef.push(data)
        .then(()=>{
            this.setState({
                feedName : '',
                feedFeedback : '',
                message : 'Feedback Recorded Sucessfully'
            })
        })
        .catch((error)=>{
            this.setState({
                feedName : '',
                feedFeedback : '',
                message : error.message
            })
        })
    }
    render(){
        if(user!==''){
            return(
                <div>
                    <div className="login">
                        <h5>{this.state.message}</h5>
                        <form onSubmit={this.submitHandler}>
                            <label>Email</label><br/>
                            <input type="text" disabled="true" value={this.state.feedEmail}/><br/>
                            <label>Full Name</label><br/>
                            <input type="text" value={this.state.feedName} onChange={(e)=>{
                                this.setState({feedName : e.target.value})
                            }} placeholder="Full Name" required/><br/>
                            <label>Feedback</label><br/>
                            <textarea value={this.state.feedFeedback} onChange={((e)=>{
                                this.setState({feedFeedback : e.target.value})
                            })} placeholder="Feedback..." required ></textarea><br/>
                            <button  type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div>
                    <h3>You Need to <Link to="/login"> Login </Link> to your account for giving a Feedback</h3>
                    
                </div>
            )
        }
    }
}

export default AddFeedback
