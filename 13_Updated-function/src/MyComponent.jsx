//Updater function = A function that is passed as an argument to setState() usually, the state setter function (the function returned by useState) and receives the previous state as its argument. 
// It allows you to update the state based on the previous state, which can be useful when the new state depends on the old state. eg- setYear(year + 1)

import React, { useState } from 'react';

function MyComponent() {
    const [count, setCount] = useState(0);

    function increment() {

        // Using the updater function to ensure we get the latest state value
        // Uses the current state to calculate the next state, which is important when the new state depends on the old state.
        // set functions do not trigger the updates
        // React batches together state updates for performance reasons, so if you call setCount multiple times in a row, React may batch those updates together and only apply the last one.
        // NEXT state becomes the CURRENT state after an update.

        setCount(c => c + 1); 
        setCount(c => c + 1); 
        setCount(c => c + 1); 
        // This will take the PENDING state (not CURRENT state) to calculate the NEXT state.
        //REact puts the updater function in a queue.(waiting in line)
        //During the next render, React will process the queue of updater functions and apply them in order, using the most up-to-date state value for each calculation.        
        
    };

    function decrement() {
        setCount(c => c - 1); 
        setCount(c => c - 1); 
        setCount(c => c - 1); 

        // Using the updater function to ensure we get the latest state value
    };

    function reset() {
        setCount(c => c = 0); // Resetting the count to 0
    }

    return(
        <div className="counter-container">
            <p className="counter-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    )
}

export default MyComponent;