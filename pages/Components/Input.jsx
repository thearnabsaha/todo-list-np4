import { useState } from "react";
import { MdSend } from "react-icons/md";
const Input = () => {
    const [task, setTask] = useState("");
    const [records, setRecords] = useState([]);
    const handleChange=(e) => {
        setTask(e.target.value)
    }
    const handleSubmit =(e) => {
        e.preventDefault()
        if(task){
            const newRecord={task:task,id:new Date().getTime()}
            setRecords([...records,newRecord])
        }else{
            alert("Input is empty")
        }
        setTask("")
    }
    return (
        <>
            <div className="input">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Add Your Tasks..." value={task} onChange={handleChange}/>
                    <button type="submit"><MdSend className="send"/></button>
                </form>
            </div>
            {
                records.map((e)=>{
                    return(
                        <h1 key={e.id}>{e.task}</h1>
                    )
                })
            }
        </>
    );
}

export default Input;