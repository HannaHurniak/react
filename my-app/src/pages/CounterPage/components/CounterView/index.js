import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.sass'


const CounterView = ({countValue, handleIncrement, handleDecrement, resetCountValue, onRemove}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.buttonDelete}><button onClick={onRemove}>Delete</button></div>
            <div className={styles.display}>{countValue}</div>
            <div className={`${countValue % 2 === 0 ? styles.isOdd : styles.isEven}`}>
                {`${countValue % 2 === 0 ? 'number is even' : 'number is odd'}`}
                </div>
            <div className={styles.buttonsWrapper}>
                <button onClick={handleDecrement}>-</button>
                <button onClick={resetCountValue}>Reset</button>
                <button onClick={handleIncrement}>+</button>
            </div>
        </div>
    )
}

CounterView.propTypes = {
    countValue: PropTypes.number.isRequired,
}

export default React.memo(CounterView);
