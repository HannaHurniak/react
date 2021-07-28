import React from 'react'
import styles from './styles.module.sass'

const EditTaskComponent = ({ inputValue, handleCancelEditTask, index, handleSaveEditTask, handleEditChange, inputEditValue}) => {
    return ( 
        <div className={styles.wrapper}>
            <input type='text' value={inputEditValue} onChange={handleEditChange}/>
            <div>
                <button onClick={() => handleSaveEditTask(index)}>Save</button>
                <button onClick={() => handleCancelEditTask(index)}>Cancel</button>
            </div>
        </div>
     );
}
 
export default EditTaskComponent;