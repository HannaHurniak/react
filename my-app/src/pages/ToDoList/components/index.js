import React from 'react'
// import PropTypes from 'prop-types'
import styles from './styles.module.sass'
import TasksComponent from '../../Tasks/components/TaskComponent/TasksComponents'
import EditTaskComponent from './../../Tasks/components/EditTaskComponent/EditTaskComponent'
import { v4 as uuidv4 } from 'uuid';

const ToDoListComponent = ({inputValue, handleChange, 
    handleAddTask, tasks, 
    handleDeleteTask, handleCompleteTask, 
    handleEditTask, handleCancelEditTask, handleSaveEditTask, handleEditChange, inputEditValue }) => {
    return (
        <div className={styles.wrapper}>
            <div>
                {tasks.map((task, index) => {
                      return task.isEditMode === true ? <EditTaskComponent key={uuidv4()} inputValue={task.taskText}
                        handleCancelEditTask={handleCancelEditTask} index={index} handleSaveEditTask={handleSaveEditTask}
                        handleEditChange={handleEditChange} inputEditValue={inputEditValue}/> 
                        : <TasksComponent key={uuidv4()} index={index} 
                          inputValue={task.taskText} 
                          handleDeleteTask={handleDeleteTask} handleCompleteTask={handleCompleteTask}
                          tasks={tasks}
                          handleEditTask={handleEditTask}/>
                    })
                }
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

