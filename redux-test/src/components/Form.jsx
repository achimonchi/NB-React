import React, { useState } from 'react';
import {connect} from 'react-redux';

export default function Form(props){
    const [todo, setTodo] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.setTodos([todo, ...props.todos]);
        setTodo("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input autoFocus={true} type="text" value={todo} onChange={(e)=>setTodo(e.target.value)} />
            <button>Tambah Data</button>
        </form>
    )
}