import List from "./List"

function App() {

  const fruits = [
        {id: 1, name: "Apple", calories : 95},
        {id: 2, name: "Banana", calories : 105},
        {id: 3, name: "Cherry", calories : 50},
        {id: 4, name: "Date", calories : 165},
        {id: 5, name: "Elderberry", calories : 70}
    ];
  
  const vegetables = [
        {id: 1, name: "Asparagus", calories : 20},
        {id: 2, name: "Broccoli", calories : 55},
        {id: 3, name: "Carrot", calories : 25},
        {id: 4, name: "Daikon", calories : 18},
        {id: 5, name: "Eggplant", calories : 35}
    ];

  return (
  <>
    {fruits.length > 0 ? <List items={fruits} category="Fruits"/>: null}
    
    {vegetables.length > 0 ? <List items={vegetables} category="Vegetables" /> : null}
    
  </>)
}

export default App
