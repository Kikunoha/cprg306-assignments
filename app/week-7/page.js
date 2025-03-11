"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
export default function Page()
{
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (NewItem) => 
    {
        setItems([...items, NewItem]);
    };

    return(
        <main>
            <h1 className = "text-2xl font-bold italic m-3">Shopping List</h1>
            <NewItem onAddItem = {handleAddItem}/>
            <ItemList items={items}/>
        </main>
    )
}