import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../utilis/data';
import './productList.scss';

function ProductsLists() {
    const { category } = useParams();
    const newcategory = category.replace("-", " ");
    let newData = data.products.filter(product => product.category === category)
    const [search, setSearch] = useState('');

    return (

        <div className='productsLists'>
            <h1>{newcategory}</h1>
            <div className='mainBlock'>
                <div className="search">
                    <input className='search-input' type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value.toLowerCase())} />
                </div>
                <div className="upwards">
                    {newData.filter(user => user.name.includes(search)).map((filtered) => (

                        <div key={filtered.id} className="insideBlock">
                            <div className="image">
                                <img src={filtered.image} alt={filtered.name} />
                            </div>
                            <div className="content">
                                <h3>{filtered.name}</h3>
                                <p>{filtered.description}</p>
                                <p>Rs.{filtered.price}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductsLists