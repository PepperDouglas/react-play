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
        width: 80%;
    `

    const ToDoDiv = styled.div`
        min-width: 49%;
        min-height: 200px;
        border: 2px solid #BF4F74;
        float: left;
    `

    const DoneDiv = styled.div`
        min-width: 49%;
        min-height: 200px;
        border: 2px solid #BF4F74;
        float: left;
    `

    //First plan, have two states: todos and dones. whole..
    //This has proven difficult since deleting them relies on shared array but their pos is split
    //Lets save having one state for a potential refactor

    const itemInput = useRef();
    const [todos, updateTodos] = useState([new NoteData("Handla mat", false), new NoteData("Ladda mobilen", false)]);
    const [dones, updateDones] = useState([new NoteData("Tvätta kläder", true), new NoteData("Vattna blomman", true)]);


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

    const DisplayDones = (checkval) => {
        return(
            <ol>
                {dones.filter(u => u.IsDone === checkval).map((t, i) => 
                    <li key={i}>
                        {GetButton(checkval, i)}              
                        {t.Message}
                    </li>)}
            </ol>
        )
    }

    const DeleteItem = (pos) => {
        let doneNotes = dones;
        doneNotes.splice(pos, 1);
        updateDones([...doneNotes]);
    }

    const MakeItemDone = (pos) => {
        let doingNotes = todos;
        //alert('I have pos' + pos + '\nMy mess is: ' + todos[pos].Message);
        const noteToMove = todos[pos];
        noteToMove.IsDone = true;
        updateDones([...dones, noteToMove]);
        //We cant take the return from splice, but we can use it later to refactor this code!
        doingNotes.splice(pos, 1);
        updateTodos([...doingNotes]);
    }

    const AddItem = () => {
        const newNote = new NoteData(itemInput.current.value, false);
        updateTodos([...todos, newNote]);
    }

    const GetButton = (checkval, i) => {
        if(!checkval){
            return(
                <button key={i} onClick={() => MakeItemDone(i)}>✓</button>
            )
        } else {
            return(
                <button key={i} onClick={() => DeleteItem(i)}>x</button>
            )
        }
    }

    return(
        <Div>
            <button onClick={AddItem}>Add Item</button>
            <input ref={itemInput}></input>
            <br></br>
            <ToDoDiv>Things to do{DisplayTodos(false)}</ToDoDiv>
            <DoneDiv>Done{DisplayDones(true)}</DoneDiv>
        </Div>
    )

}