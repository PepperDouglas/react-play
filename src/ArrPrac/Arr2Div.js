import React, { useState } from "react";
import styled, { css } from 'styled-components';

export default function Arr2Div() {
    const Div = styled.div`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #BF4F74;
        color: #BF4F74;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `
    const [data, setData] = useState(["ACDC", "Queen", "Aerosmith", "Iron Maiden", "Megadeth",
    "Metallica", "Pearl Jam", "Oasis", "Kiss", "Blur", "Eurythmics", "Genesis",
    "INXS", "Midnight Oil", "Kent", "Madness", "Manic Street Preachers", "The " + 
    "Offspring", "Pink Floyd", "Rammstein", "Red Hot Chili Peppers", "Deep Purple",
    "U2"]);
    const [mutableData, setMutable] = useState(data);
    let [counter, adder] = useState(0);
    
    const addData = () => {
        adder(counter += 1);
        setData([...data, counter + ',']) ;
    };

    const transformData = () => {
        adder(counter < 4 ? counter += 1 : counter = 0);
        switch (counter){
            case 0:
                setMutable(data);
                break;
            case 1:
                const sortedBands = data.toSorted((a, b) => b.length - a.length);
                setMutable([sortedBands[0]]);
                break;
            case 2:
                setMutable([(data.filter(band => band[0] === "M")).length]);
                break;
            case 3:
                setMutable((data.filter(band => band.length > 10)).toSorted((a, b) => {
                    return a.localeCompare(b);
                }));
                break;
            case 4:
                setMutable(data.toSorted((a, b) => b.length - a.length));
                break;
        }
        //setData([...data, counter + ',']) ;
    };

    const liMapper = ((array) => {
        return (
            <div><ul>
                {array.map((car, i) => <li key={i}>{car}</li>)} 
            </ul></div>
        );
    });

    return (
    <Div onClick = {transformData}>{liMapper(mutableData)} </Div>
    );
}