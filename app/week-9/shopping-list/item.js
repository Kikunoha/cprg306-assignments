export default function Item(props)
{
    const {name, quantity, category, onSelect} = props
    return(
        <section onClick={() => onSelect(name)}>
            <ul className = "p-3 m-3 bg-teal-200 rounded-md cursor-pointer hover:bg-gray-400">
                <li className = "text-lg font-bold italic">{name}</li>
                <li className = "text-sm">Buying {quantity} in category: {category}</li>
            </ul>
        </section>
    );
}