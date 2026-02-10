import React, {useState} from 'react'

function MyComponent(){
    const [name, setName] = useState();
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {  
        setName("John Doe");
    }

    const updateAge = () => {
        setAge(age + 1);
    }

    const toggleEmployment = () => {
        setIsEmployed(!isEmployed);
    }

    
    return(
        <div>
            <p>My name is <b>{name}</b></p>
            <button onClick={updateName}>Update Name</button> 

            <p>My age is <b>{age}</b></p>
            <button onClick={updateAge}>Increase Age</button> 

            <p>Employment Status: <b>{isEmployed ? "Yes" : "No"}</b></p>
            <button onClick={toggleEmployment}>Toggle Employment</button>

        </div>
    )
}
export default MyComponent  