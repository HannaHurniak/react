import React from 'react'
// import PropTypes from 'prop-types'
import styles from './styles.module.sass'
import TasksComponent from './../../Tasks/components/TasksComponents'
import { v4 as uuidv4 } from 'uuid';

const ToDoListComponent = ({inputValue, handleChange, handleAddTask, inputValueState}) => {
    return (
        <div className={styles.wrapper}>
            <div>
                {inputValueState.map((input) => (<TasksComponent key={uuidv4()} inputValue={inputValue.inputValue}/>))}
            </div>
            <div className={styles.form}>
                <form>
                    <label>
                        <input type='text' value={inputValue} onChange={handleChange} />
                    </label>

                    <button onClick={handleAddTask}>Add</button>
                </form>
            </div>
        </div>
    )
}
export default ToDoListComponent;

