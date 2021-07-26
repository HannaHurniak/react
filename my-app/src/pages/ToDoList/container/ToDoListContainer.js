import { useCallback, useState } from 'react'
import ToDoListComponent from './../components/index'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_NEW_TASK } from './../actions/index'

const ToDoListContainer = () => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const inputValueState = useSelector((state) => state.managerReducer.inputValue)

    const handleChange = useCallback((event) => {
        setInputValue(event.target.value)
    }, [])

    const handleAddTask = useCallback((event) => {
        dispatch(ADD_NEW_TASK());
        event.preventDefault();
    }, [dispatch])

    return (<ToDoListComponent inputValue={inputValue} 
        handleChange={handleChange}
        handleAddTask={handleAddTask}
        inputValueState={inputValueState}
        />)
}

export default ToDoListContainer;