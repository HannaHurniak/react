import { useState } from 'react'
import { useCallback } from 'react';
import FunctionalButtons from './../components/FunctionalButtons'
import FunctionalCounterContainers from './../../FunctionalCounter/container/FunctionalCounterContainer'

const CounterOfCounter = () => { 
    const [countValue, setCountValue] = useState({
        countValue: 0
    })
    const countClick = [];
    // const addCounter = useCallback (() => {
        //     setCountValue(countValue + 1);
        // }, [countValue])
    const addCounter = () => {
        countClick.push(countValue);
        console.log(countClick)
    }
    return (<FunctionalButtons
        countValue={countValue}
        addCounter={addCounter}
        countClick={countClick}
        // countClick={countClick.map(() => <FunctionalCounterContainers />)}
        />)
}
export default CounterOfCounter;