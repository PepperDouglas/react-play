import './AddTodoItem.css';
import { useRef } from 'react';

const AddTodoItem = ({addTodoItem}) => {

    //Pekare till textboxen
    const textVal = useRef();



    return(
        <div className="todoHeaderStyle">
            <div className="todoHeaderForm">
                <input type="text" placeholder="Enter something..." ref={textVal}></input>
                <button onClick={() => addTodoItem(textVal.current.value)}>ADD ITEM</button>


            </div>

        </div>
    );


}

export default AddTodoItem;