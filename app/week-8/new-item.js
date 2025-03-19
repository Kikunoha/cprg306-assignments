"use client"
import { useState } from "react"
export default function NewItem({onAddItem})
{
    const genId = () => Math.floor(Math.random() * 1000000);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState("produce")
    const handleSubmit = (e) => 
    {
        e.preventDefault();
        const newItem = {id: genId(), name: name, quantity: quantity, category: category};
        onAddItem(newItem);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }
    const decrement = () => {if (quantity > 1) {setQuantity(quantity - 1)}};
    const increment = () => {if (quantity < 20) {setQuantity(quantity + 1)}};

    return(
        <main className = "w-80 rounded-md bg-teal-200 p-1 m-5 flex">
            <form onSubmit = {handleSubmit} className = "p-4">
                <input name = "name" type = "text" value = {name} onChange = {(n) => setName(n.target.value)} placeholder = "Item Name" required className = "w-full rounded-md p-2 mb-4 text-black"/>

                <select name = "category" value = {category} onChange = {(n) => setCategory(n.target.value)} className = "w-full rounded-md p-2 mb-4 text-black">
                    <option value = "produce">Produce</option>
                    <option value = "dairy">Dairy</option>
                    <option value = "bakery">Bakery</option>
                    <option value = "meat">Meat</option>
                    <option value = "frozen foods">Frozen Foods</option>
                    <option value = "canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value = "beverages">Beverages</option>
                    <option value = "snacks">Snacks</option>
                    <option value = "household">Household</option>
                    <option value = "other">Other</option>
                </select>

                <div className="flex">
                    <p className = "text-lg font-bold m-5 -translate-y-2 -translate-x-1 text-center">{quantity}</p>
                    <div>
                    <button type="button" onClick = {(n) => setQuantity(decrement)} className = "p-3 mr-3 bg-teal-600 hover:bg-slate-500 rounded-md" disabled = {quantity <= 1}>Decrement</button>
                    <button type="button" onClick = {(n) => setQuantity(increment)} className = "p-3 ml-3 bg-teal-600 hover:bg-slate-500 rounded-md" disabled = {quantity >= 20}>Increment</button>
                    </div>
                </div>

                <button type="submit" className="w-full mt-1 py-1 p-4 bg-orange-400 text-white font-bold rounded-md hover:bg-orange-600">Add to List</button>
            </form>
        </main>
    );
}
