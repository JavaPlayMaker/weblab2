import { useEffect, useState } from 'react';

export default function Favorites() {
    connst [favorites, setFavorites] = useState([])
}

useEffect(()=> {
    const stored = localStorage.getItem('favirotes')
    if (stored) {
        setFavorites(JSON.parse(stored))
       }
  }, []);
 
return (
    <div>
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites items saved.</p>
      ) : (
        <ul>
          {favorites.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
