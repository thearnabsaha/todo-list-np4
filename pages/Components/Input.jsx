import { MdSend } from "react-icons/md";
const Input = () => {
    return (
        <>
            <div className="input">
                <form action="">
                    <input type="text" placeholder="Add Your Tasks..."/>
                    <button type="submit"><MdSend/></button>
                </form>
            </div>
        </>
    );
}

export default Input;
<MdSend/>
