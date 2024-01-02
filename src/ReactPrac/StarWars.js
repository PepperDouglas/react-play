import React, { useEffect, useState } from "react";
import styled, { css } from 'styled-components';

//this component recieves props as props, doesn't import them

export default function StarWars(props){
    const Div = styled.div`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #B32AF1;
        color: #B14CDD;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `

    const [data, setData] = useState({name: "???", height: "???"});
    const [films, setFilms] = useState("???");

    const getFilmNamesFromArray = async (arrOfUrls) => {
        let dynamic = [];
        for(let i = 0; i < arrOfUrls.length; i++){
            dynamic[i] = fetch(arrOfUrls[i]).then(res => res.json()).then(res => res.title);
        }
        let arrname2 = await Promise.all(dynamic);
        setFilms(arrname2)
    }

    async function getPersonData(){
        fetch(`https://swapi.dev/api/people/${props.personId}`)
        .then(res => res.json())
        .then(res2 => {
            setData(res2);
            getFilmNamesFromArray(res2.films);
        })
    };

    const filmMapper = (elements) => {
        return(
            Array.from({length: elements}).map((_item, i) => <p key={i}>
                {films[i]}
            </p>)
        )
    }
    
    return(
        <Div onClick={getPersonData}>
            {<div>
                <h3>Name</h3>
                <p>{data.name}</p>
                <h3>Height</h3>
                <p>{data.height}</p>
                <h3>Films</h3>
                {filmMapper(films.length)}
            </div>}
        </Div>
    )

}