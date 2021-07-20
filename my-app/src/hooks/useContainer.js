import { useState, useCallback } from 'react';

const useContainer = (initialValue) => {
    const [countValue, setCountValue] = useState(initialValue);

    const handleIncrement = useCallback(() => {
        setCountValue(countValue + 1);
    }, [countValue]);

    const resetCountValue = useCallback(() => {
        setCountValue(0);
    }, []);

    const handleDecrement = useCallback(() => {
        if (countValue > 0) {
            setCountValue(countValue - 1);
        } 
    }, [countValue]);

    return [countValue, handleIncrement, resetCountValue, handleDecrement];

}
export default useContainer;