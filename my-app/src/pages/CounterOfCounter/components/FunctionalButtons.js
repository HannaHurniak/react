import React from 'react'
import styles from './styles.module.sass'
import FunctionalCounterContainers from './../../FunctionalCounter/container/FunctionalCounterContainer'


const FunctionalButtons = ({countValue, addCounter, countClick}) => {
    return (
        <div className={styles.menuButtons}>
            <button onClick={addCounter}>Add Counter</button>
            <button>Remove Counter</button>
            <button>Reset</button>
        </div>
        {[...Array(countClick)].map(() => <FunctionalCounterContainers />)}
    )
}

export default React.memo(FunctionalButtons);