import { useState } from 'react';

interface Props {
    initialValue?: number
}

export const CounterBy = ({initialValue = 0}: Props) =>{

    const [counterState, setCounterState] = useState({
            counter: initialValue,
            clicks: 0
        });

    const {counter, clicks} = counterState;

    const handleClick = (value: number) => {
        setCounterState( prev => {
            return {
                counter: prev.counter + value,
                clicks: prev.clicks + 1
            }
        })
    }

     return (
            <>
                <h1>Contador 2: {counter}</h1>
                <h1>Clicks: {clicks}</h1>
                <button onClick={() => handleClick(1)}>+1</button>
                <button onClick={() => handleClick(5)}>+5</button>
            </>
     );
}