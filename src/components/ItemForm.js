import React , {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

    const [inputValue, setInputValue] = useState("");
    const [selectCategory, setSelectCategory] = useState("Product");
   
  function  onHandelItemFormSubmit(event){
        event.preventDefault();
        
        const newItem = {
            id: uuid(), // the `uuid` library can be used to generate a unique id
            name: inputValue,
            category: selectCategory,
          }; 
          onItemFormSubmit(newItem);
        
    }
    
    function handleChange(e){
        setInputValue(e.target.value)
    }
    function handleChangeSelect(e){
        setSelectCategory(e.target.value)
    }


  return (
    <form className="NewItem" onSubmit={onHandelItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={inputValue}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChangeSelect} value={selectCategory}> 
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
