import CounterView from './../../CounterPage/components/CounterView/index';
import { useContainer } from './../../../hooks'

const FunctionalCounterContainers = () => { 
    const [countValue, handleIncrement, resetCountValue, handleDecrement ] = useContainer(0);

    return (<CounterView
        countValue={countValue}
        handleIncrement={handleIncrement}
        resetCountValue={resetCountValue}
        handleDecrement={handleDecrement}
        />)
}
export default FunctionalCounterContainers;