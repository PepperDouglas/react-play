import React, { useEffect, useState } from "react";
import styled, { css } from 'styled-components';

export default function Arr3Div() {
    const Div = styled.div`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #BF4F74;
        color: #BF4F74;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `
    const [data, setData] = useState([54, 23, 76, 123, 93, 7, 3489, 88]);
    const [mutableData, setMutable] = useState(data);
    let [counter, adder] = useState(0);
    //Why doesn't having the next useState as a middle-hand work for case 1?
    const [total, totalSum] = useState([]);

    const transformData = () => {
        adder(counter < 6 ? counter += 1 : counter = 0);
        switch (counter){
            case 0:
                setMutable(data);
                break;
            case 1:
                const sum = data.reduce((a, b) => a + b);
                const avg = sum / data.length;
                const message = Number.isInteger(avg) ? "Exactly: " : "Aprox: ";
                setMutable([message + avg.toFixed(0)]);
                break;
            case 2:
                setMutable([Math.max(...data)]);
                break;
            case 3:
                setMutable([data.reduce((a, b) => a + b)]);
                break;
            case 4:
                setMutable([data.filter(num => num > 70).reduce((a, b) => a + b)]);
                break;
            case 5:
                setMutable(data.filter(num => num % 2 === 0));
                break;
            case 6:
                setMutable(data.map(num => num + 2));
                break;
        }
    };

    const liMapper = ((array) => {
        return (
            <div><ul>
                {array.map((num, i) => <li key={i}>{num}</li>)} 
            </ul></div>
        );
    });

    return (
    <Div onClick = {transformData}>{liMapper(mutableData)} </Div>
    );
}