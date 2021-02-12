import React, { useState } from 'react'
import Form from './formtodo'
import TaskList from './tasklist'
import CheckBox from './checkbox'

function Container(){

    const [list, setList] = useState([]);

    const handleAddItem = addItem => {
        setList([...list, addItem]);
    }

    return(
        <div>
        <h2 className="display-2">To do list!</h2>
        <Form handleAddItem={handleAddItem}/>
        <TaskList list={list} setList={setList}/>
        <CheckBox />
        </div>
    )
}

export default Container;