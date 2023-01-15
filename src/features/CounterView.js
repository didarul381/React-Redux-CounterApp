import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './counter/counterSlice';

const CounterView = () => {
    const count =useSelector((state)=>state.counter.count)
    const dispatch=useDispatch();
    return (
        <div>
           <h1>Counter View.....</h1> 
           <h1>count:{count}</h1>
           <button onClick={()=>{dispatch(increment())}}>Incerment</button>
        </div>
    );
};

export default CounterView;