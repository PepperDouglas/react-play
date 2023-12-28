import userEvent from "@testing-library/user-event";
import React, { useState, useEffect } from "react";
import styled, { css } from 'styled-components';

export default function ChessContainer(props) {
    const Div = styled.div`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #B32AF1;
        color: #B14CDD;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `
    const [data, setData] = useState([]);


    useEffect(() => {
        (async function fetchChessData(){
            fetch(`https://api.chess.com/pub/player/${props.player}/games/2023/08`)
            .then(res => res.json())
            .then(allgames => {
                return allgames.games[Object.keys(allgames.games).length - 1]})
            .then((as) => {
                console.log(as.white)
                if (as.white.result === "win" && as.white.username === props.player){
                    setData("Won last game!");
                } else if (as.black.result === "win"){
                    setData("Won last game!");
                } else {
                    setData("Did'nt win!");
                }
            });
        })();
    });
    

    return (
    <Div>Last chess game result: {data} </Div>
    );
}