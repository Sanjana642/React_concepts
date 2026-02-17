//UseEffect -  React hook that tells React that your component needs to do something after render. To do some code when (any) - 1. Component is mounted 2. Component is updated 3. Component is unmounted.
// useEffect (function,[dependencies])

import React, { useState, useEffect } from 'react';

//1. useEffect(() => {}) //Runs on every render (mount and update)
//2. useEffect(() => {}, []) //Runs only on the first render (mount)
//3. useEffect(() => { return () => {} }, []) //Runs only on the first render (mount) and when component unmounts
//4. useEffect(() => {}, [value]) //Runs on the first render and every time 'count' changes     

// USES :-
// 1.Event Listeners
// 2.DOM manipulation
// 3.Subscriptions(real time updates)
// 4.Fetching data from API
// 5.Cleanup when component unmounts

function MyComponent() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');

    function addCount() {
        setCount(c => c + 1);
    }

    function subtractCount() {
        setCount(c => c - 1);    
    }

    function changeColor() {
        setColor(c => c === 'green' ? 'red' : 'green');
    }
    
    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);    //if second argument is [] then title will be set to 'Count: 0' and will not change on button click. If second argument is not provided then title will be updated on every render.

    // second argument is [count] - color is not updated in title when we change the color if we write [count,color] then title will be updated when we change the color also.

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={changeColor}>Change color</button>
        </>
    )
}

export default MyComponent;