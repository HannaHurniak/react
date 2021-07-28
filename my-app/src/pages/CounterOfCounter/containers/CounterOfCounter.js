import { useState, useCallback, useMemo } from 'react'
import FunctionalCounters from '../components'

const CounterOfCounter = () => { 
    const [counters, setCounters] = useState([])

    const handelAddCounter = useCallback(() => {
        const updateCounters = counters.map((counter) => ({
            countValue: counter.countValue % 2 === 0 ? counter.countValue + 1 : counter.countValue
        }))
        setCounters([...updateCounters, {countValue: 0}])
    }, [counters]);

    const handelResetAllCounters = useCallback(() => {
        setCounters([]);
    }, []);

    const handleCounterDelete = useCallback((index) => {
        const countersCopy = [...counters];
        countersCopy.splice(index, 1);
        const updateCountersDelete = countersCopy.map((counter) => ({
            countValue: counter.countValue % 2 !== 0 ? counter.countValue - 1 : counter.countValue
        }))
        setCounters(updateCountersDelete);
    }, [counters]);

    const handleIncrement = useCallback((index) => {
        const copyCounters = [...counters];
        const foundCounter = copyCounters[index];
        foundCounter.countValue = foundCounter.countValue + 1;
        setCounters(copyCounters);
    }, [counters]);

    const handleDecrement = useCallback((index) => {
       if (counters[index].countValue > 0){
        const copyCounters = [...counters];
        const foundCounter = copyCounters[index];
        foundCounter.countValue = foundCounter.countValue - 1;
        setCounters(copyCounters);
        }
    }, [counters]);

    const resetCountValue = useCallback((index) => {
        const copyCounters = [...counters];
        const findCounter = copyCounters[index];
        findCounter.countValue = 0;
        setCounters(copyCounters);
    }, [counters]);

    const totalSum = useMemo(() => counters.reduce((acc, counter) => acc + counter.countValue, 0), [counters])
    
    return (<FunctionalCounters
        counters={counters}
        handelAddCounter={handelAddCounter}
        handleCounterDelete={handleCounterDelete}
        handleIncrement={handleIncrement}
        handelResetAllCounters={handelResetAllCounters}
        handleDecrement={handleDecrement}
        resetCountValue={resetCountValue}
        totalSum={totalSum}
        />)
}
export default CounterOfCounter;