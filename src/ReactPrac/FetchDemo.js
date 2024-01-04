import userEvent from "@testing-library/user-event";
import React, { useState, useEffect, useRef } from "react";
import styled, { css } from 'styled-components';

export default function FetchDemo(props) {
    const Div = styled.div`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #B32AF1;
        color: #B14CDD;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState([]);
    const countryInput = useRef();

    //In non-SPA the service and search filter are separated
    const searchCountry = async () => {
        const url = "https://restcountries.com/v3.1/name/" + countryInput.current.value;

        //GET so we only need to send the url, no body
        return await fetch(url).then(res => res.json())
        .then(res => {
            if(res[0] != undefined){
                setFlag(res[0].flags.png);
                return res[0].name.official;
            } else {
                return "No results found";
            }
        });
        
    }

    const search = async () => {
        let response = await searchCountry();
        setData(response);
    }

    const liMapper = () => {
        return(
            <div>
                <label>Ange namn på ett land </label>
                <input type="text" ref={countryInput}></input>
                <br></br>
                <button onClick={search}>Search</button>
                <br></br>
                <p>{data}</p>
                <img src={flag}></img>
            </div>
        )
    }

    return (
        <Div>{liMapper()}</Div>
    );
}