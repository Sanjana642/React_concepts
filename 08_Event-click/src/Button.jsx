

function Button(){

    // const handleClick = () => {
    //     alert("Button was clicked!")
    // }

    // const handleClick2 = (name) => {
    //     alert(`Hello, ${name}!`)
    // }

    let count = 0;

    const handleClick = (name) =>{
        if (count < 3){
            count++;
            console.log(`${name} you have clicked ${count} times`);
        }
        else{
            console.log(`${name}, you have reached the maximum click limit.`);
        }
    }

    return <button onClick={() => handleClick("Sanjana")}>Click Me</button>

    // return <button onClick={() => handleClick2("Sanjana")}>Click Me</button> // Updated to use handleClick2 with a name argument in arrow function
}

export default Button