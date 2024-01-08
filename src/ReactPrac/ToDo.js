import React, { useEffect, useState, useRef } from "react";
import styled, { css } from 'styled-components';
import NoteData from "./NoteData";

export default function ToDo() {
    const Div = styled.div`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #BF4F74;
        color: #BF4F74;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `

    const ToDoDiv = styled.div`
        min-width: 200px;
        min-height: 200px;
        border: 2px solid #BF4F74;
        float: left;
    `

    const DoneDiv = styled.div`
        min-width: 200px;
        min-height: 200px;
        border: 2px solid #BF4F74;
        float: left;
    `

    //First plan, have two states: todos and dones. whole..
    //This has proven difficult since deleting them relies on shared array but their pos is split

    const itemInput = useRef();
    const [todos, updateTodos] = useState([new NoteData("Not done", false), new NoteData("Done", true)]);

    const DisplayTodos = (checkval) => {
        return(
            <ol>
                {todos.filter(u => u.IsDone === checkval).map((t, i) => 
                    <li key={i}>
                        
                        {GetButton(checkval, i)}
                        
                        
                        {t.Message}
                    </li>)}
            </ol>
        )
    }

    const DeleteItem = () => {
        
        updateTodos(todos)
    }

    const MakeItemDone = () => {

    }

    const GetButton = (checkval, i) => {
        if(!checkval){
            return(
                <button onClick={MakeItemDone}>✓</button>
            )
        } else {
            return(
                <button onClick={DeleteItem}>𐄂</button>
            )
        }
    }

    return(
        <Div>
            <button>Add Item</button>
            <input ref={itemInput}></input>
            <br></br>
            <ToDoDiv>Things to do{DisplayTodos(false)}</ToDoDiv>
            <DoneDiv>Done{DisplayTodos(true)}</DoneDiv>
        </Div>
    )

}