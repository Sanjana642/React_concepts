//useContext = React hooks that allows you to share values between multiple levels of component without passing props through each level

//PROVIDER COMPONENT :-
// 1.import {createContext} from React;
// 2.export const myContext = createContext();
// 3.<MyContext.Provider value={}>
//     <Child />
//     </MyContext.Provider>


//CONSUMER COMPONENT:-
// 1.import {useContext}...
// 2.import {MyContext} from './ComponentA'
// 3.const value = useContext(MyContext);


import { useState, createContext } from "react"
import ComponentB from "./ComponentB"

export const UserContext = createContext();

function ComponentA(){

    const [user, setUser] = useState("OneWomanShow")

    return(
        <div className="box">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
             < ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    );
}

export default ComponentA