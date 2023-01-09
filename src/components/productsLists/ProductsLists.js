import { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../../utilis/data';
import './productList.scss';

function ProductsLists() {
    const { category } = useParams();
    const newcategory = category.replace("-", " ");
    let newData = data.products.filter(product => product.category === category)
    const [search, setSearch] = useState('');
    console.log(search);
    // const handleChange = (e) => {
    //     Setsearch(e.target.value);
    //     newData = data.products.filter(product => product.name === Search);
    // }

    return (

        <div className='products' id='products'>
            <h1>{newcategory}</h1>
            <div className='mainBlock'>
                <div className="search">
                    <input className='search-input' type="text" placeholder='Search' onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className="upwards">
                    {newData.map((filtered) => (

                        <div key={filtered.id} className="insideBlock">
                            <div className="image">
                                <img src={filtered.image} alt={filtered.name} />
                            </div>
                            <div className="content">
                                <p>{filtered.name}</p>
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