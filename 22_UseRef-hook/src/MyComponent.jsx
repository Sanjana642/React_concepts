//useState = Re-renders the component where the state value changes

//useRef = "Use Reference" does not cause re-renders when its value changes.When you want a component to "remember" some information, but you dont want that information to trigger new renders.

//USES :-
// 1.Accessing/Interacting with DOM elements.
// 2.Handling Focus,Animations and Transistions
// 3.Managing Timers and Intervals

//useRef returns a ref object with a single current property initially set to the initial value you provided.

import { useState, useEffect, useRef } from "react";

function MyComponent(){

    // let [number,setNumber] = useState(0);  //output(when clicked) - component rendered - no (in circle how many times we click)
    // const ref = useRef("Pizza"); - the current object will be pizza

    const inputRef1 = useRef(null);  
    const inputRef2 = useRef(null);  
    const inputRef3 = useRef(null);  

    //output(when clicked) - 1 2 3 only once it will render.

    useEffect(()=>{
        console.log("component rendered...")
        // console.log(inputRef);
    })

    function handleClick1(){
        // setNumber(n => n + 1)
        // ref.current++;
        // console.log(ref.current);
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return(
        <div>
            <button onClick={handleClick1}>
              Click Me 1 !
            </button>
            <input ref={inputRef1}/><br />

            <button onClick={handleClick2}>
              Click Me 2 !
            </button>
            <input ref={inputRef2}/><br />

            <button onClick={handleClick3}>
              Click Me 3 !
            </button>
            <input ref={inputRef3}/><br />
        </div>
    )
}

export default MyComponent