import { MdOutlineDeleteOutline,MdOutlineDriveFileRenameOutline} from "react-icons/md";
const List = () => {
    return (
        <>
            <div className="lists">
                <div className="list">
                    <div className="task">
                        <h1>Arnab Saha Is Best...</h1>
                        <button><MdOutlineDriveFileRenameOutline className="rename"/></button>
                        <button><MdOutlineDeleteOutline className="remove"/></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default List;
