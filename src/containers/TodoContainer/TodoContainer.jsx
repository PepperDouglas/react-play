import { useState } from 'react';
import AddTodoItem from '../../components/AddTodoItem/AddTodoItem.jsx';
import DoneList from '../../components/DoneList/DoneList.jsx';
import TodoList from '../../components/TodoList/TodoList.jsx';


const TodoContainer = () => {

    const [todoList, setTodoList] = useState([]);
    const [doneList, setDoneList] = useState([]);
    
    const addTodoItem = (item) => {
        setTodoList([...todoList, item]);

    }

    const moveItem = (item) => {
    }

    //Skickar en callback funktion till AddtodoItem (pekare till containerns funktion)
    //Så att vi kan använda den i childen (utan context)
    return(
        <div>
            <AddTodoItem addTodoItem={addTodoItem}></AddTodoItem>
            <TodoList items={todoList}></TodoList>
            <DoneList items={doneList}></DoneList>
        </div>
        
    );
}

export default TodoContainer;