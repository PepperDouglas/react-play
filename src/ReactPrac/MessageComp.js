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

    const [fruits, setFruits] = useState(props.fruitsArr);
    const [contacts, setContacts] = useState(props.contactsArr);
    const [news, setNews] = useState(props.newsArr);


    const listItem = ((array) => {
        return(
            <div><ul>
                {array.map((item, i) => 
                    <li key={i}>{item}</li>
                )} 
            </ul></div>
        );
    });

    //would be nice to make this dynamic!
    const tableItem = ((array) => {
        console.log(array);
        return(
            <div><table>
                <tr>
                    {Object.keys(array[0]).map(keys => <td>{keys}</td>)}   
                </tr>
                {array.map((obj, i)=> <tr>
                    <td>{obj.name}</td>
                    <td>{obj.email}</td>
                    <td>{obj.phone}</td>
                </tr>)}    
            </table></div>
        );
    });

    const newsItem = (array) => {
        return(
            <div>
                {array.map((news, i) => <div key={i}><h3>{news.title}</h3><p>{news.text}</p></div>)}
            </div>
        )
    }


    return(
        <Div>
            <h3>{props.text}</h3>
            <p>{props.date}</p>
            <div>
                {listItem(fruits)}
            </div>
            <div>
                {tableItem(contacts)}    
            </div>
            <div>
                {newsItem(news)}    
            </div>
        </Div>
    )

}