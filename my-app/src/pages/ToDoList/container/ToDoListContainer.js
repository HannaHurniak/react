import { useCallback, useState } from 'react'
import ToDoListComponent from './../components/index'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_NEW_TASK, DELETE_TASK, COMPLETE_TASK, EDIT_TASK, CANCEL_EDIT_TASK, SAVE_EDIT_TASK, } from './../actions/index'

const ToDoListContainer = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputEditValue, setEditInputValue] = useState();

    const dispatch = useDispatch();
    
    const { tasks } = useSelector((state) => state.managerReducer)

    const handleChange = useCallback((event) => {
        setInputValue(event.target.value)
    }, [])

    const handleAddTask = useCallback((event) => {
        event.preventDefault();
        if (inputValue !== '') {
            dispatch(ADD_NEW_TASK(inputValue));
            setInputValue('')
        }
    }, [dispatch, inputValue])

    const handleDeleteTask = useCallback((index) => {
        dispatch(DELETE_TASK(index));
    }, [dispatch])

    const handleCompleteTask = useCallback((index) => {
        dispatch(COMPLETE_TASK(index));
    }, [dispatch])

    const handleEditTask = useCallback((index) => {
        dispatch(EDIT_TASK(index))
    }, [dispatch])

    const handleCancelEditTask = useCallback((index) => {
        dispatch(CANCEL_EDIT_TASK(index))
    }, [dispatch])

    const handleSaveEditTask = useCallback((index) => {
        dispatch(SAVE_EDIT_TASK(index))
    }, [dispatch])

    const handleEditChange = useCallback((event) => {
        setEditInputValue(event.target.value)
        console.log('handleEditChange');
    }, [])

    return (<ToDoListComponent inputValue={inputValue} 
        handleChange={handleChange}
        handleAddTask={handleAddTask}
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
        handleEditTask={handleEditTask}
        handleCancelEditTask={handleCancelEditTask}
        handleSaveEditTask={handleSaveEditTask}
        handleEditChange={handleEditChange}
        inputEditValue={inputEditValue}
        />)
}

export default ToDoListContainer;