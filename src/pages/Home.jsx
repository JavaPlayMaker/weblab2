import { Link } from "react-router-dom";
import ItemDetail from '/pages/ItemDetail.jsx';


const items = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Item Two' },
];

export default function Home() {
    return (
        <div>
            <h1>Items </h1>
            <ul>
                {ItemDetail.map(ItemDetail =>(
            <li key={item.id}>
            <Link to={`/ItemDetail/${item.id}`}>{item.name}</Link>
                </li>
                ))}
            </ul>
        </div>
    )
}