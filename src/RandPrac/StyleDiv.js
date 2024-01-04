import styled, { css } from 'styled-components';
import React, {useRef} from 'react';

function StyleDiv(){
    const btnMessage = useRef();

    const Button = styled.button`
        border-radius: 3px;

    `;

    const myBtnEvent = (event) => {
        //let button = event.target;
        alert(btnMessage.current.value);
    }
    
    return (
        <div>
            <input type='text' ref={btnMessage} />    
            <Button id="mom" onClick={myBtnEvent}>Go to help</Button>
        </div>
    );
}

//Maps galore
//preventDefault() is cool



export default StyleDiv;