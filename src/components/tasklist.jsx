import React from 'react'
import CheckBox from './checkbox';

function TaskList(props){
    const {list, setList} = props;

    const onChangeStatus = e => {
        const {name, checked} = e.target;

        const updateList = list.map(item => ({
            ...item,
            done: item.id === name ? checked : item.done
        }))
        setList(updateList)
    }

    const onClickRemoveItem = e => {
        const updateList = list.filter(item => !item.done)
        setList(updateList)
    }

    const check = list.map(item => (
        <CheckBox key={item.id} data={item} onChange={onChangeStatus}/>
    ))

    return(
        <div className="todo-list">
        { }
            {list.length ? check : "No tasks"}
        { }
            {list.length ? (
                <p>
                    <button 
                    className="btn btn-danger"
                    onClick={onClickRemoveItem}>
                        Delete all done
                    </button>
                </p>
            ) : null}
        </div>
    )
}

export default TaskList;