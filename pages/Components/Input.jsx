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
        console.log(task);
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
        </>
    );
}

export default Input;
