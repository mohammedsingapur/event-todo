import {Component} from 'react'
import header from './image/Header.png'

class Welcome extends Component{
    render(){
        return(
            <div>
                <span>
                    <img src={header} alt="Welcome"/>
                                      
                </span>
            </div>
        )
    }
}

export default Welcome
