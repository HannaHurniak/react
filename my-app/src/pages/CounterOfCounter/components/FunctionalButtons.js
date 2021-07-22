import React from 'react'
import styles from './styles.module.sass'
import CounterView from '../../CounterPage/components/CounterView'


const FunctionalButtons = ({counters, handelAddCounter, handleCounterDelete, handleIncrement, handelResetAllCounters, handleDecrement, resetCountValue, totalSum}) => {
    return (
        <div>
            <div className={styles.menuButtons}>
                <button onClick={handelAddCounter}>Add Counter</button> 
                <button onClick={handelResetAllCounters}>Reset</button>
            </div>
            <div className={styles.counters}>
                {counters.map(({countValue}, index) => <CounterView 
                    countValue={countValue} 
                    onRemove={() => handleCounterDelete(index)} 
                    handleIncrement={() => handleIncrement(index)}
                    handleDecrement={() => handleDecrement(index)}
                    resetCountValue={() => resetCountValue(index)}/>)}
            </div>
            <div className={styles.valuesCounters}>
                <p>Number of counters: {counters.length}</p>
                <p>Sum of counters: {totalSum}</p>
            </div>
        </div>
    )
}

export default React.memo(FunctionalButtons);