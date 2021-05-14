import {useEffect,useState} from 'react'
import {db} from './Firebase'
import './style.css'



function FeedbackList(){
    const [item , setItem] = useState([])
    useEffect(()=>{
        db.ref('/feedback').on("value",snapshot=>{
            let data = []
            var list
            snapshot.forEach(value=>{
                list =  value.val()
                data.push(list)
            })
            setItem(data)
        })
    },[])
    return(
        <div className="feedback-super">
        <div className="feedback-parent">
            {item.map(data=>(
                <div className="feedback-box">
                    <h3>{data.FeedName}</h3>
                    <p>{data.FeedFeedback}</p>
                    <a href={'mailto:'+data.FeedEmail}><h5>{data.FeedEmail}</h5></a>
                </div>
            ))}
        </div>
        </div>
    )
}

export default FeedbackList
