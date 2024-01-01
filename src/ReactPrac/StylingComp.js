import React, { useState } from "react";
import styled, { css } from 'styled-components';

//this component recieves props as props, doesn't import them

export default function MessageComp(props){
    const Div = styled.div`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #B32AF1;
        color: #B14CDD;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
        
    `

    const StyledDiv = styled.div`
        width: 240px;
        height: 240px;
        background-color: ${props.color};
    `

    const FlagDiv = styled.div`
        background-color: red;
        width: ${props.flag[0].width * 1.0}px;
        height: ${props.flag[0].height * 1.0}px;
        margin: 0 auto;
    `

    const PrimaryColor = styled.div`
        width: ${(props.flag[0].width/3).toString()}px;
        height: ${(props.flag[0].height).toString()}px;
        background-color: ${props.flag[0].primary};
        float: left;
    `

    const SecondaryColor = styled.div`
        width: ${(props.flag[0].width/3).toString()}px;
        height: ${(props.flag[0].height).toString()}px;
        background-color: ${props.flag[0].secondary};
        float: left;
    `

    const TertiaryColor = styled.div`
        width: ${(props.flag[0].width/3).toString()}px;
        height: ${(props.flag[0].height).toString()}px;
        background-color: ${props.flag[0].tertiary};
        float: left;
    `

    //squares color container

    const SquareContainer = styled.div`
        width: 640px;
        height: 200px;
        margin-left: 22%;
        margin-top: 2%;
        margin-bottom: -3%;
    `
        
    const SquareUnit = styled.div`
        width: 60px;
        height: 90px;
        min-height: 90px;
        background-color: white;
        float: left;
    `
        
    const SquareColor = styled.div`
        width: 60px;
        height: 60px;
        min-height: 30px;
    `

    const flagItem = () => {
        return(
            <FlagDiv>
                <PrimaryColor></PrimaryColor>
                <SecondaryColor></SecondaryColor>
                <TertiaryColor></TertiaryColor>
            </FlagDiv>
        )
    }


    const colorSchemeItem = ((array) => {
        
        return(
            <SquareContainer>
                {array.map(color => 
                    <SquareUnit style={{fontSize : "small", color: "black"}}>
                        <SquareColor style={{backgroundColor: color, color: color}}>a</SquareColor>{color}
                    </SquareUnit>)}
            </SquareContainer>
        );
    });


    return(
        <Div>
          {flagItem()}
          {colorSchemeItem(props.colors)}
        </Div>
    )

}