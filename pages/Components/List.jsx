import { MdOutlineDeleteOutline,MdOutlineDriveFileRenameOutline} from "react-icons/md";
const List = () => {
    const tasks=[{task:"arnab",id:new Date().getTime()},]
    return (
        <>
            {
                tasks.map((e)=>{
                    return(
                        <div className="lists" key={e.id}>
                            <div className="list" >
                                <div className="task" >
                                    <h1>{e.task}</h1>
                                    <button><MdOutlineDriveFileRenameOutline className="rename"/></button>
                                    <button><MdOutlineDeleteOutline className="remove"/></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
}

export default List;
