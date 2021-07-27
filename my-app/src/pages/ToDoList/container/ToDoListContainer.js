import { useCallback, useState } from 'react'
import ToDoListComponent from './../components/index'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_NEW_TASK, DELETE_TASK, COMPLETE_TASK } from './../actions/index'

const ToDoListContainer = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const { tasks } = useSelector((state) => state.managerReducer)

    const handleChange = useCallback((event) => {
        setInputValue(event.target.value)
    }, [])

    const handleAddTask = useCallback((event) => {
        dispatch(ADD_NEW_TASK(inputValue));
        event.preventDefault();
        setInputValue('')
    }, [dispatch, inputValue])

    const handleDeleteTask = useCallback((index) => {
        dispatch(DELETE_TASK(index));
    }, [dispatch])

    const handleCompleteTask = useCallback((index) => {
        dispatch(COMPLETE_TASK(index));
    }, [dispatch])

    return (<ToDoListComponent inputValue={inputValue} 
        handleChange={handleChange}
        handleAddTask={handleAddTask}
        tasks={tasks}
        handleDeleteTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
        />)
}

export default ToDoListContainer;