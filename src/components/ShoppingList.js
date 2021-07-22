import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('Filter by category')
  const [cats, setCats] = useState(items)

  function setCategory(event){
    setSelectedCategory(event.target.value);  
  }

  const toDisplay = cats.filter((food) => {
    if(selectedCategory === 'Filter by category'){
      return true;
    }
    else {
      return (food.category === selectedCategory);
    }
  })
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange = {setCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {toDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
