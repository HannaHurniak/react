import { useState, useCallback, useMemo } from 'react'
import FunctionalButtons from './../components/FunctionalButtons'

const CounterOfCounter = () => { 
    const [counters, setCounters] = useState([])

    const handelAddCounter = useCallback(() => {
        const updateCounters = counters.map((counter) => ({
            countValue: counter.countValue % 2 === 0 ? counter.countValue + 1 : counter.countValue
        }))
        setCounters([...updateCounters, {countValue: 0}])
    }, [counters]);

    const handelResetAllCounters = useCallback(() => {
        const copyCounters = [...counters];
        copyCounters.splice(0, copyCounters.length);
        setCounters(copyCounters)
    }, [counters]);

    const handleCounterDelete = useCallback((index) => {
        const counterDelete = [...counters];
        counterDelete.splice(index, 1);
        const updateCountersDelete = counterDelete.map((counter) => ({
            countValue: counter.countValue % 2 !== 0 ? counter.countValue - 1 : counter.countValue
        }))
        setCounters(updateCountersDelete);
    }, [counters]);

    const handleIncrement = useCallback((index) => {
        const copyCounters = [...counters];
        const findCounter = copyCounters[index];
        findCounter.countValue = findCounter.countValue + 1;
        setCounters(copyCounters);
    }, [counters]);

    const handleDecrement = useCallback((index) => {
       if (counters[index].countValue > 0){
        const copyCounters = [...counters];
        const findCounter = copyCounters[index];
        findCounter.countValue = findCounter.countValue - 1;
        setCounters(copyCounters);
        }
    }, [counters]);

    const resetCountValue = useCallback((index) => {
        const copyCounters = [...counters];
        const findCounter = copyCounters[index];
        findCounter.countValue = 0;
        setCounters(copyCounters);
    }, [counters]);


    const totalSum = useMemo(() => {
        return counters.reduce((acc, counter) => acc + counter.countValue, 0)
    }, [counters])
    return (<FunctionalButtons
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