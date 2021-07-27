import React from 'react'
// import PropTypes from 'prop-types'
import styles from './styles.module.sass'

const TasksComponent = ({ inputValue, index, handleDeleteTask, handleCompleteTask, tasks }) => {
    return ( 
        <div className={`${tasks[index].isCompleted === true ? styles.done : styles.wrapper}`}>
            <div className={styles.infoTask}>
                <p>{index + 1}.</p>
                <p>{inputValue}</p>
            </div>
            <div>
                <button>Edit</button>
                <button onClick={() => handleDeleteTask(index)}>Delete</button>
                <button onClick={() => handleCompleteTask(index)}>Done</button>
            </div>
        </div>
     );
}
 
export default TasksComponent;