import { useCallback, useState } from 'react'
import ToDoListComponent from './../components/index'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_NEW_TASK } from './../actions/index'

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
    }, [dispatch, inputValue])

    return (<ToDoListComponent inputValue={inputValue} 
        handleChange={handleChange}
        handleAddTask={handleAddTask}
        tasks={tasks}
        />)
}

export default ToDoListContainer;