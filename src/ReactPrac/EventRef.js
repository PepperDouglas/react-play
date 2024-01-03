import React, { useEffect, useState, useRef } from "react";
import styled, { css } from 'styled-components';
import { userNames } from './rpracData';

export default function EventRef() {
    const Div = styled.div`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #BF4F74;
        color: #BF4F74;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `

    const Red = styled.div`
        background: transparent;
        background-color: red;
        min-width: 130px;
        min-height: 130px;
        float: left;
    `

    const Green = styled.div`
        background: transparent;
        background-color: green;
        min-width: 130px;
        min-height: 130px;
        float: right;
    `
    
    const [data, setData] = useState([]);
    const inputMsg = useRef();
    const nameInput = useRef();
    let [isNameTaken, setNameTaken] = useState('Name available');
    let [mom, setMom] = useState('No hovering')
    let [counter, adder] = useState(0);

    const transformData = () => {
        adder(counter < 2 ? counter += 1 : counter = 0);
    };

    const alertMsg = () => {
        alert(inputMsg.current.value);
    }

    const checkNames = () => {
        for (let name of userNames){
            if (name.toLowerCase() === nameInput.current.value.toLowerCase()){
                console.log('THey are same')
                setNameTaken('Name unavailable');
                return;
            }
        }
        setNameTaken('Name available');
    }

    //ComponentDidUpdate refocus after re-render!
    useEffect(() => {
        if(nameInput.current != undefined){
            nameInput.current.focus();
        }
    }, [isNameTaken]);
    
    const message = ((color, bool) => {
        let message = '';
        message += bool ? "You have left the " : "You are over the ";
        message += color === 'red' ? "Red Square!" : "Green Square!";
        setMom(message);
    });

    const liMapper = (() => {
        switch(counter){
            case 0:
                return (
                    <div>
                        <input type="text" ref={inputMsg} />
                        <button id="alrBtn" onClick={alertMsg}>Show Text</button>
                    </div>
            );
            case 1:
                return (
                    <div>
                        <p>Set username: </p>
                        <input type="text" ref={nameInput} onChange={checkNames}/>
                        <p>{isNameTaken}</p>
                    </div>
            );
            case 2:
                return (
                    <div>
                        <p>{mom}</p>
                        <Red onMouseOver={() => message('red', false)} onMouseOut={() => message('red', true)}></Red>
                        <Green onMouseOver={() => message('green', false)} onMouseOut={() => message('green', true)}></Green>
                    </div>
            );
        }
    });
    
    return (
    <Div>
        <div>
            {liMapper()}
        </div>
        <div>
            <button onClick={transformData}>Next</button>
        </div>
    </Div>
    );
}