import { useState, useEffect } from 'react';
import { IoIosSend } from 'react-icons/io';

function Form(props) {
    const [item, setItem] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        if(item.trim().length <= 0) {
            setIsFormValid(false);
        }else {
            setIsFormValid(true);
        }
    }, [item]);

    const submitHandler = (event) => {
        event.preventDefault();

        if(isFormValid) {
            const newItem = {
                id: Number(Math.random().toFixed(4).toString()),
                item: item,
            }
    
            props.onAddNewItem(newItem);
            setItem('');
        }
    };

    const keyStrokeHandler = (event) => {
        event.preventDefault();
        setItem(event.target.value);
    };

    return (
        <form onSubmit={submitHandler} className="flex border-2 border-slate-300 py-10 m-7 px-9 rounded-md space-x-3 items-center">
            <div>
                <label htmlFor="item" className="font-semibold">Enter : </label>
                <input type="text" name="item" id="item" value={item} onChange={keyStrokeHandler} className="border-solid border-2 border-slate-200 rounded-md ml-2 py-2 px-6" placeholder="Enter a value..."/>
            </div>
            <div>
                <button type="submit" className="border-solid border-2 bg-blue-500 border-blue-500 text-white py-1 px-3 rounded-sm hover:border-blue-400 flex items-center space-x-1">Add<IoIosSend/></button>
            </div>
        </form>
    );
}

export default Form;