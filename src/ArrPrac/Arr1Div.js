import React, { useState } from "react";
import styled, { css } from 'styled-components';

export default function Arr1Div() {
    const Div = styled.div`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #BF4F74;
        color: #BF4F74;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `
    const [data, setData] = useState(["Volvo", "BMW", "Audi", "Skoda",
    "Toyota", "Ford", "Mercedes","Seat", "Honda",
    "Volkswagen","Opel", "Mazda","Suzuki"]);
    const [mutableData, setMutable] = useState(data);
    let [counter, adder] = useState(0);
    
    const transformData = () => {
        adder(counter < 4 ? counter += 1 : counter = 0);
        switch (counter){
            case 0:
                setMutable(data);
                break;
            case 1:
                setMutable(data.filter(car => car.length >= 5));
                break;
            case 2:
                setMutable(data.filter(car => car[0] === "V"));
                break;
            case 3:
                setMutable(data.filter(car => car.includes("da")));
                break;
            case 4:
                setMutable(data.filter(car => car[0] === "M" || car[car.length - 1] === "i"));
                break;
        }
        //setData([...data, counter + ',']) ;
    };

    const carText = () => {
        alert("im in cartext");
        let text = "asd";
        switch (counter){
            case 0:
                text = "All cars:";
                break;
        }
        return text;
    };

    const CarTextComponent = ((text) => {
        return(
            <p>{text}</p>
        );
    });
   

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