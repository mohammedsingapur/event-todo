import {user} from './Login'
import {db} from './Firebase'
import {useState, useEffect} from 'react'
import finished from './image/finished.png'
import deletes from './image/delete.jpg'


function List(){
    const [item, setItem] = useState([])
    const [id, setId] = useState([])
    var list,key
    useEffect(()=>{
        if(user !== ''){
            db.ref('/root').on('value',snapshot=>{
                let data = []
                let keys = []
                snapshot.forEach(value=>{// eslint-disable-next-line
                        key = value.key // eslint-disable-next-line
                        list = value.val()// eslint-disable-next-line
                    data.push(list)
                    keys.push(key)
                })
                setItem(data)
                setId(keys)
                
            })
        }
            
    },[])
    console.log(item)
    if(user !== ''){
        return (
            <div className="list">
                <h1>My To-Do List</h1> 
                <div className="list-parent">
                {item.filter(mail=> mail.TaskUser===user).map((data,index)=>
                    (   <div className="list-box">
                            <div className={data.TaskStatus?'fin':'pen'}>               
                            <div className="box"><div className="lt"><h3>{data.TaskName} </h3>
                            </div>
                            <div className="rt"><h3> {data.TaskDate}</h3></div>
                            </div>
                            <div className="p-b">
                                <div className="para"><p>{data.TaskDesc}</p></div>
                                <div className="btn">
                                    <button className={!data.TaskStatus?'show':'hide'} onClick={()=>{
                                        db.ref('/root').child(id[index]).update({
                                            TaskStatus : true
                                        })
                                    }}><img src={finished} alt="Task Finished" /></button>
                                    <button onClick={()=>{
                                        db.ref('/root').child(id[index]).remove()
                                    }}><img src={deletes} alt="Task Finished" /></button>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <h3>Please Login to check the To-Do List</h3>
                    
            </div>
        )
    }
}
export default List 


// disabled={data.TaskStatus?'false':'true'}