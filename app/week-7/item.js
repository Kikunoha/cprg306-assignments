export default function Item(props)
{
    const {name, quantity, category} = props
    return(
        <ul className = "p-3 m-3 bg-teal-200">
            <li className = "text-lg font-bold italic">{name}</li>
            <li className = "text-sm">Buying {quantity} in category: {category}</li>
        </ul>
    );
}