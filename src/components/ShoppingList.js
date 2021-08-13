import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
function ShoppingList({ items ,onItemFormSubmit }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchName, setSearchName] = useState('');
  const [filterType , setFilterType] = useState(false);
// false -->  category filter  true --> search filter
  
function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
    setFilterType(false)
  }

  function handleNameSearch(event) {
    setSearchName(event.target.value);
     setFilterType(true)
  }
  
  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" ) return true;
    
    return item.category === selectedCategory; //return true that meet this condition
  });
    
  
  const itemsToDisplayAfterSearch = items.filter((item) => {
    if (searchName === "" ) return true;
   return item.name.toLowerCase().indexOf(searchName.toLocaleLowerCase() ) !== -1
     })  

    return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/> 
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleNameSearch}  search={searchName}/>

      <ul className="Items">
        {

filterType?
itemsToDisplayAfterSearch.map((item) => (
  <Item key={item.id} name={item.name} category={item.category} /> ))
  :
itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} /> ))    
  }      
     </ul>
       </div>
  );
}
export default ShoppingList;