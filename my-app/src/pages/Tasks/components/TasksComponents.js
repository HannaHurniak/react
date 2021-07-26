import React from 'react'
// import PropTypes from 'prop-types'
import styles from './styles.module.sass'

const TasksComponent = ({ inputValue }) => {
    return ( 
        <div className={styles.wrapper}>
            <p>{inputValue}</p>
            <button>Edit</button>
            <button>Delete</button>
            <button>Done</button>
        </div>
     );
}
 
export default TasksComponent;