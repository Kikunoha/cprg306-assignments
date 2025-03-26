"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";
export default function Page()
{
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    const handleAddItem = (NewItem) => 
    {
        setItems([...items, NewItem]);
    };
    
    const handleItemSelect = (item) => 
    {
        let cleanName = item.name.split(",")[0].trim();
        cleanName = cleanName.replace(/[^\w\s]/gi, "");
        console.log("Selected ingredient:", cleanName);
        setSelectedItemName(cleanName);
    }
    return(
        <main className="flex">
            <div>
                <h1 className = "text-2xl font-bold italic m-3">Shopping List</h1>
                <NewItem onAddItem = {handleAddItem}/>
                <ItemList items={items} onItemSelect={(itemName) => handleItemSelect(itemName)}/>
            </div>
            <div className = "flex-1">
                <MealIdeas ingredient={selectedItemName}/>
            </div>
        </main>
    )
}