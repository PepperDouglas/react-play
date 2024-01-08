import React, { useEffect, useState, useRef } from "react";
import styled, { css } from 'styled-components';
import PersonData from "./PersonData";

export default function EventRef() {
    const Div = styled.div`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #BF4F74;
        color: #BF4F74;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `

    
    
    const [data, setData] = useState([15, 25, 16]);
    const [persons, setPeople] = useState([]);
    const inputs = useRef();
    const nameField = useRef();
    const emailField = useRef();
    let [counter, adder] = useState(0);
    let [plusCount, plusAdd] = useState(0);

    const transformData = () => {
        adder(counter < 2 ? counter += 1 : counter = 0);
    };

    const plus = () => {
        plusAdd(plusCount + 1);
    }

    const minus = () => {
        plusAdd(plusCount - 1);
    }

    const AddNum = () => {
        const num = parseInt(inputs.current.value);
        setData([...data, num]);
    }

    const SumAll = () => {
        console.log(data);
        const val = data.reduce((a, b) => a + b);
        alert(val);
    }

    const SavePerson = () => {
        const person = new PersonData(nameField.current.value, emailField.current.value);
        setPeople([...persons, person]);
        console.log(persons);
    }

    const dataMapper = () => {
        if (persons.length > 0){
            return(
                <ul>
                    {persons.map(p => <li>Name: {p.Name}, Email: {p.Email}</li>)}
                </ul>
            );
        } else {
            return(
                <p>No data</p>
            )
        }
    }

    const liMapper = (() => {
        console.log(counter);
        switch(counter){
            case 0:
                return (
                    <>
                        <p>{plusCount}</p>
                        <button onClick={plus}>+1</button>
                        <button onClick={minus}>-1</button>
                    </>
            );
            case 1:
                return (
                    <>
                        <input ref={inputs}></input>
                        <button onClick={AddNum}>Add Num</button>
                        <button onClick={SumAll}>Sum All</button>
                    </>
            );
            case 2:
                return (
                    <>
                        <input ref={nameField}></input>
                        <input ref={emailField}></input>
                        <br></br>
                        <button onClick={SavePerson}>Save</button>
                        <div>
                            {dataMapper()}
                        </div>
                    </>
            );
        }
    });
    
    return (
    <Div>
        <div>
            <button onClick={transformData}>Next</button>
        </div>
        <div>
            {liMapper()}
        </div>
        
    </Div>
    );
}