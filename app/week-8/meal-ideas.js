"use client"
import { useEffect, useState } from "react"

const fetchMealIdeas = async (ingredient) => 
{
    try 
    {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals || [];
    } 
    catch (error) 
    {
      console.error("Error fetching meal ideas:", error);
      return [];
    }
};

export default function MealIdeas({ingredient})
{
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () =>
    {
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals);
    };

    useEffect(() => 
    {
        loadMealIdeas(ingredient);
    }, [ingredient]);

    return (
        <section>
            <h2 className="text-xl font-bold">Meal Ideas with {ingredient}</h2>
            <ul>
                {meals.map((meal) => (
                <li key={meal.idMeal} className="p-1 m-2">
                    <div className="bg-teal-200 p-1 m-2 rounded-md w-80">
                    <h2 className="font-bold text-lg">{meal.strMeal}</h2>
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="w-40 h-40" />
                    </div>
                </li>
                ))}
            </ul>
        </section>
    );
}