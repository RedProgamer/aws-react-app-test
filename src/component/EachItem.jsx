function EachItem(props) {

    const onEditClickHandler = () => {
        // console.log('Calling from eachItem : ' + props.id);
        props.onEditHandler(props.id);
    };

    const onDeleteClickHandler = () => {
        // console.log('Calling from eachItem : ' + props.id);
        props.onDeleteHandler(props.id);
    };

    return (
        <li key={props.id} className="w-96 h-20 flex border-solid border-1 rounded-xl mt-3 drop-shadow-md shadow-lg shadow-stone-500 justify-around items-center">
            <div>
                <span className="subpixel-antialiased font-semibold">{props.name}</span>
            </div>
            <div className="space-x-1.5">
                <button onClick={onEditClickHandler} className="border-solid border-1 bg-green-400 text-white py-1 px-4 rounded-sm hover:bg-green-500">Edit</button>
                <button onClick={onDeleteClickHandler} className="border-solid border-1 bg-red-400 text-white py-1 px-4 rounded-sm hover:bg-red-500">Delete</button>
            </div>
        </li>
    );
}

export default EachItem;