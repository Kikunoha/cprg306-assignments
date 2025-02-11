"use client"
import { useState } from "react"
export default function NewItem()
{
    const [quantity, setQuantity] = useState(1);
    const decrement = () => {if (quantity > 1) {setQuantity(quantity - 1)}};
    const increment = () => {if (quantity < 20) {setQuantity(quantity + 1)}};
    return(
        <main className = "w-80 h-40 bg-teal-200 p-1 m-5 flex-1 justify-items-center">
            <p className = "text-lg font-bold m-5 text-center">{quantity}</p>
            <div>
                <button onClick = {decrement} className = "w-25 p-3 mr-5 bg-teal-600 hover:bg-slate-500 rounded-md" disabled = {quantity <= 1}>Decrement</button>
                <button onClick = {increment} className = "w-25 p-3 ml-5 bg-teal-600 hover:bg-slate-500 rounded-md" disabled = {quantity >= 20}>Increment</button>
            </div>
        </main>
    );
}