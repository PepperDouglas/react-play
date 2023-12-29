import React, { useState } from "react";
import styled, { css } from 'styled-components';
import countries from "./countryData";

//this is different from the other arrdivs, here the mapping is made in
//the html-component-constructor, which there are several
export default function Arr4Div() {
    const Div = styled.div`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #BF4F74;
        color: #BF4F74;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `
    const [data, setData] = useState(countries);
    const [mutableData, setMutable] = useState(data);
    let [counter, adder] = useState(0);

    const transformData = () => {
        switch (counter){
            case 0:
                return liMapper(mutableData);
            case 1:
                return nameMapper(mutableData); 
            case 2:
                return popTotal(mutableData);
            case 3:
                return popTotalEurope(mutableData);
            case 4:
                return leastTotalPop(mutableData);
            case 5:
                return africaPopAvg(mutableData, mutableData.filter(country => country.continent.trim().toLowerCase() === "africa").length);
            case 6:
                return moreThan50milInhab(mutableData);
            case 7:
                return between8to15(mutableData);
        }
    };

    const increaseCounter = () => {adder(counter < 7 ? counter += 1 : counter = 0)};

    //case 0
    const liMapper = ((array) => {
        return (
            <div><ul>
                {array.map((country, i) => 
                <li key={i}>
                <p>{country.name}</p>
                <p>{country.continent}</p>
                <p>{country.population}</p>
                <p>{country.pFemale}</p>
                </li>
                )} 
            </ul></div>
        );
    });

    //case 1
    const nameMapper = (array) => {
        return(
            <div><ul>
                {array.map((country, i) =>
                    <li key={i}>{country.name}</li>
                )}    
            </ul></div>
        )
    }

    //case 2
    const popTotal = ((array) => {
        return(
            <div><ul>Population:
                {popTotalFormatter(array.map((country) => ({pop: country.population}))
                .reduce((a, b) => {
                    return a + b.pop;
                }, 0))}    
            </ul></div>
        )
    })
    
    const popTotalFormatter = (largeNum) => {
        let stringNum = largeNum.toString().split("");
        console.log(largeNum);
        for(let i = largeNum.toString().length - 3; i > 0; i-=3){
            stringNum.splice(i, 0, ",");
        }
        console.log(stringNum);
        stringNum.join("");
        return stringNum;
    }

    //case 3 how many live in europe?
    const popTotalEurope = ((array) => {
        return(
            <div><ul>Europe Population: 
                {popTotalFormatter(array.filter(country => country.continent.trim().toLowerCase() === "europe")
                .map((eucountry) => ({pop: eucountry.population}))
                .reduce((a, b) => {
                    return a + b.pop;
                }, 0))}
            </ul></div>
        )
    })

    //case 4 least population whole world
    const leastTotalPop = ((array) => {
        return(
            <div><ul>Least population:
                {array.reduce((a, b) => {
                    return a.population < b.population ? a : b;
                }).name}
            </ul></div>
        )
    })

    //case 5 avg pop countries africa
    const africaPopAvg = ((array, afNations) => {
        return(
            <div><ul>Avg. pop Africa:
                {popTotalFormatter(divisionFn(array.filter(country => country.continent.trim().toLowerCase() === "africa")
                .reduce((a, b) => a + b.population, 0)
                , afNations))}
            </ul></div>
        )
    })

    const divisionFn = (num, divider) => {
        return num / divider;
    }

    //case 6 any country more than 50mil inhabitants
    const moreThan50milInhab = (array) => {
        return(
            <div><ul>More than 50 mil? :
                {array.filter(country => country.population > 50000000).length > 0 ? "Yes" : "No"}    
            </ul></div>
        )
    }

    //case 7 which countries between 8-15mil inhabitants
    const between8to15 = (array) => {
        return(
            <div><ul>Between 8-15 mil inhab.
                {array.filter(country => country.population > 8000000 && country.population < 15000000)
                .map((btw, i) => <li key={i}>{btw.name}</li>)}
            </ul></div>
        )
    }

    //Here the component is called, becase the function doesn't directly return JSX
    return (
    <Div onClick = {increaseCounter}>{transformData()} </Div>
    );

}