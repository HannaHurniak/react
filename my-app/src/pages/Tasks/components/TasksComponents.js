import React from 'react'
// import PropTypes from 'prop-types'
import styles from './styles.module.sass'

const TasksComponent = ({ inputValue, index }) => {
    return ( 
        <div className={styles.wrapper}>
            <div className={styles.infoTask}>
                <p>{index + 1}.</p>
                <p>{inputValue}</p>
            </div>
            <div>
                <button>Edit</button>
                <button>Delete</button>
                <button>Done</button>
            </div>
        </div>
     );
}
 
export default TasksComponent;