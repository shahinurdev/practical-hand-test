import React, { useEffect, useState } from 'react';
import Categorie from './Categories/Categorie';
const Home = () => {
   const [categories, setCategories] = useState([]);
   console.log('check',categories)
   useEffect(() => {
    fetch('https://www.test.api.liker.com/get_categories')
    .then(res => res.json())
    .then(data =>setCategories(data.categories))
},[])
    return (
        <div>
            <h2>All Categories</h2>
            {
                categories.map(categorie=> <Categorie categorie={categorie}></Categorie>)
            }
        </div>
    );
};

export default Home;