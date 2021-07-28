import CounterView from './../../CounterPage/components/CounterView/index';
import { useCounter } from './../../../hooks'

const FunctionalCounterContainers = () => { 
    const [countValue, handleIncrement, resetCountValue, handleDecrement ] = useCounter(0);

    return (<CounterView
        countValue={countValue}
        handleIncrement={handleIncrement}
        resetCountValue={resetCountValue}
        handleDecrement={handleDecrement}
        />)
}



export default FunctionalCounterContainers;