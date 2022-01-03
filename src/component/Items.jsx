import EachItem from "./EachItem";

function Items(props) {
    const editHandler = (id) => {
        props.onEditCall(id);
    };

    const deleteHandler = (id) => {
        props.onDeleteCall(id);
    };

    return (
        <ul className="list-none">
            {props.items.map(item => {
                return <EachItem key={item.id} id={Number(item.id)} name={item.item} onEditHandler={editHandler} onDeleteHandler={deleteHandler}/>
            })}
        </ul>
    );
}

export default Items;