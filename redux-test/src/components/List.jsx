import React from 'react';

export default function List(props){
    return(
        <ul>
            {props.todos.map((t,i)=>(
                <li key={i}>{t}</li>
            ))}
        </ul>
    )
}