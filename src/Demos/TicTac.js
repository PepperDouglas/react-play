import React, { useEffect, useState, useRef } from "react";
import styled, { css } from 'styled-components';

export default function TicTac() {
    const Div = styled.div`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #BF4F74;
        color: #BF4F74;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `

    const [data, setData] = useState([" ", " ", " ", " ", " ", " ", " ", " ", " "]);
    const inputs = useRef();
    let [counter, adder] = useState(0);

    //Count-up for iterating the sub-parts
    const transformData = () => {
        adder(counter < 2 ? counter += 1 : counter = 0);
    };

    const renderBoard = () => {
        const view = [[], [], []];
        for(let i = 0; i < 3; i++){          
            for(let j = 0; j < 3; i++){
                view[i].push(<button>{data[j]}</button>);
            }
        }
        return(
            <div>
                <div>{view[0]}</div>
                <div>{view[1]}</div>
                <div>{view[2]}</div>
            </div>
        )
    }

    //Every sub-part of the component that will be presented
    const liMapper = (() => {
        switch(counter){
            case 0:
                return (
                    <>
                        <p>First comp</p>
                        {renderBoard()}
                    </>
            );
            case 1:
                return (
                    <>
                        <p>Second comp</p>
                    </>
            );
            case 2:
                return (
                    <>
                        <p>Third comp</p>
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