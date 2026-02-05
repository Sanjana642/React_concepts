

function List(){

    // const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

    // const listItems = fruits.map((fruit) => <li key={fruit}>{fruit}</li>);
    // return(<ol>{listItems}</ol>);
    // result - ordered list of fruits

    const fruits = [
        {id: 1, name: "Apple", calories : 95},
        {id: 2, name: "Banana", calories : 105},
        {id: 3, name: "Cherry", calories : 50},
        {id: 4, name: "Date", calories : 165},
        {id: 5, name: "Elderberry", calories : 70}
    ];

    fruits.sort((a, b) => a.name.localeCompare(b.name)); //alphabetical order
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // reverse alphabetical 
    // fruits.sort((a, b) => a.calories - b.calories); // ascending order of calories
    // fruits.sort((a, b) => b.calories - a.calories); // descending order of calories

    // const lowCalorieFruits = fruits.filter((fruit) => fruit.calories < 100);
    const highCalorieFruits = fruits.filter((fruit) => fruit.calories >= 100);
    
    const listItems = highCalorieFruits.map((fruit) => 
        <li key={fruit.id}>
            {fruit.name} : &nbsp; 
            <b>{fruit.calories}</b>
        </li>
    );
    return(<ol>{listItems}</ol>);

}

export default List;