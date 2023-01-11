import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../services/actions/CounterAction';

const Counter = () => {
    const count =useSelector((state)=>state.count);
    const dispatch=useDispatch();
    console.log(count);
    const handleIncerment = ()=>{
        dispatch(incrementCounter());
    }
    const handleDecerment =()=>{
        dispatch(decrementCounter());
    }
   
    return (
        <div>
           <h2>Counter :{count}</h2> 
           <button onClick={handleIncerment}>Incerment</button>
           <button onClick={handleDecerment}>Decerment</button>
           <button onClick={handleIncerment}>Incerment</button>
        </div>
    );
};

export default Counter;