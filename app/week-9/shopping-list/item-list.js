"use client";
import Item from "./item";
import itemsData from "./items.json";
import { useState } from "react";

const ItemList = ({items, onItemSelect}) => 
{
    const [selectedItem, setSelectedItem] = useState("");
    const [sortBy, setSortBy] = useState("name");
    const sortItems = [...items].sort((a, b) => 
    {
        if (sortBy === "name") 
        {
            return a.name.localeCompare(b.name);
        } 
        else if (sortBy === "category") 
        {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });
    return(
        <section className="p-1 -ml-1">
            <div className="p-4 m-1">
                <button onClick={(n) => setSortBy("name")}className={`px-4 py-2 rounded-md w-40 ${sortBy === "name" ? "bg-teal-600 text-white" : "bg-slate-500"}`}>Sort by Name</button>
                <button onClick={(n) => setSortBy("category")}className={`px-4 py-2 rounded-md w-40 ${sortBy === "category" ? "bg-teal-600 text-white" : "bg-slate-500"}`}>Sort by Category</button>
            </div>
            <ul>
                {sortItems.map((item) =>
                ( 
                    <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
                ))}
            </ul>
        </section>
    );
}
export default ItemList;