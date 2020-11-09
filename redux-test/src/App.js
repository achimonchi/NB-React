import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';

import {connect} from 'react-redux'

function App(props) {
  return (
    <div className="App">
      <h2>Todo List</h2>  
      <Form/>      
      <List todos={props.todos}/>
    </div>
  );
}

const stateToProps = (state) =>{
  return {
    todos : state.todos
  }
}

export default connect(stateToProps)(App);
