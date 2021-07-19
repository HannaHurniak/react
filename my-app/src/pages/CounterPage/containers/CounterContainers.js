import React, { Component, useState } from 'react'

import CounterView from './../components/CounterView'

export default class CounterContainers extends Component {
    constructor(props){
        super(props);
        this.state = {
            countValue: 0
        }
    }

    handleIncrement = () => {
        this.setState({ countValue: this.state.countValue + 1 });
    }
    handleDecrement = () => {
        if (this.state.countValue > 0){
            this.setState({ countValue: this.state.countValue - 1 });
        }
    }
    resetCountValue = () => {
        this.setState({countValue: 0});
    }


    render() {
        return (
            <CounterView countValue={this.state.countValue} 
            handleIncrement={this.handleIncrement} 
            handleDecrement={this.handleDecrement} 
            resetCountValue={this.resetCountValue}
            />
        )
    }
}
// const CounterContainers = () => { 
//     const [counterState] = useState({countValue: 0})
//     const handleIncrement = () => {
//         ({countValue: counterState.countValue + 1});
//     }

//     return (<CounterView 
//         handleIncrement={handleIncrement}
//         />)
// }
// export default CounterContainers;