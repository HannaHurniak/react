import React from 'react'
// import PropTypes from 'prop-types'
import styles from './styles.module.sass'
import TasksComponent from './../../Tasks/components/TasksComponents'
import { v4 as uuidv4 } from 'uuid';

const ToDoListComponent = ({inputValue, handleChange, 
    handleAddTask, tasks, 
    handleDeleteTask, handleCompleteTask}) => {
    return (
        <div className={styles.wrapper}>
            <div>
                {tasks.map((input, index) => (<TasksComponent key={uuidv4()} index={index} 
                    inputValue={input.taskText} 
                    handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask}
                    tasks={tasks}/>))}
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

