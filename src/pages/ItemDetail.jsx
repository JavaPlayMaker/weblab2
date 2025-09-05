import {useParams, useNavigate} from 'react-router-dom'
import ItemDetail from '/pages/ItemDetail.jsx';

import { useParams } from 'react-router-dom';

export default function ItemDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Item Detail</h1>
      <p>Item ID: {id}</p>
    </div>
  );
}