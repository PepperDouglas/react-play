import React, { useState } from "react";
import styled, { css } from 'styled-components';

export default function Arr4Div() {
    const Div = styled.div`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #BF4F74;
        color: #BF4F74;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `
    const [data, setData] = useState([]);
    let [counter, adder] = useState(0);
    
    const addData = () => {
        adder(counter += 1);
        setData([...data, counter + ',']) ;
    };

    return (
    <Div onClick={addData}>The data: {data} </Div>
    );
}