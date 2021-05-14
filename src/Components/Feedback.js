import {Component} from 'react'
import AddFeedback from './AddFeedback'
import FeedbackList from './FeedbackList'
import './style.css'

class Feedback extends Component{
    constructor(props){
        super(props);
        this.state={
            formDisplay : false,
            button : 'Feedback Form'
        }
        this.submitHandler  = this.submitHandler.bind(this)
    }
    submitHandler(){
        if(this.state.formDisplay){
            this.setState({
                formDisplay : false,
                button : 'Feedback Form'
            })
        }
        else{
            this.setState({
                formDisplay : true,
                button : 'Hide Form'
            })
        }
    }
    render(){
        return(
            <div class="toggle-btn"><h3>Click  
                <button id="toggle" onClick={this.submitHandler}>{this.state.button}</button>
                 to give a feedback</h3>
                <div  >
                    {this.state.formDisplay? <AddFeedback />: null}
                    <FeedbackList />
                </div>
            </div>
        )
    }
}

export default Feedback
