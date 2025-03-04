"use client";
import Item from "./item";
import { useState } from "react";
import itemsData from "./items.json";

export default function ItemList()
{
    const [sortBy, setSortBy] = useState("name");
    const items = [...itemsData].sort((a, b) => 
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
        <section className="p-1 m-5">
            <div className="px-4 m-1">
                <button onClick={(n) => setSortBy("name")}className={`px-4 py-2 rounded-md w-40 ${sortBy === "name" ? "bg-teal-600 text-white" : "bg-slate-500"}`}>Sort by Name</button>
                <button onClick={(n) => setSortBy("category")}className={`px-4 py-2 rounded-md w-40 ${sortBy === "category" ? "bg-teal-600 text-white" : "bg-slate-500"}`}>Sort by Category</button>
            </div>
            <ul>
            {items.map((item) => (
              <li key={item.id} className="p-1 m-2">
                <div className="bg-teal-200 p-1 m-2 rounded-md w-80">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p>Quantity: {item.quantity} in {item.category}</p>
                </div>
              </li>
            ))}
            </ul>
        </section>
    );
}