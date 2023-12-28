import React, { useState } from "react";
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
    let [total, totalSum] = useState(0);

    const transformData = () => {
        adder(counter < 6 ? counter += 1 : counter = 0);
        switch (counter){
            case 0:
                setMutable(data);
                break;
            case 1:
                //medelvärdet
                function redFn(a, b){
                    return a + b;
                }
                const sum = data.reduce(redFn);
                totalSum(sum);
                alert(total);
                const avg = total / data.length;
                setMutable([avg]);
                break;
            case 2:
                //Ta fram det största av alla tal 
                setMutable([(data.filter(band => band[0] === "M")).length]);
                break;
            case 3:
                //Beräkna summan av alla tal
                setMutable((data.filter(band => band.length > 10)).toSorted((a, b) => {
                    return a.localeCompare(b);
                }));
                break;
            case 4:
                //Ta fram summan av alla tal större än 70
                setMutable(data.toSorted((a, b) => b.length - a.length));
                break;
            case 5:
                //Ta fram alla jämna tal 
                setMutable(data.toSorted((a, b) => b.length - a.length));
                break;
            case 6:
                //ny array från denna array där alla värden ökats med 2
                setMutable(data.toSorted((a, b) => b.length - a.length));
                break;
        }
        //setData([...data, counter + ',']) ;
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