import './TodoList.css'

const TodoList = ({items}) => {


    const list = items.map((item, i) => {
        return <li key={i}>{item}</li>
    });


    return(
        <div className="todoDivStyle">
            <ul>{list}</ul>


        </div>
    );
}

export default TodoList;