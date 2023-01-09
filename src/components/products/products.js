import './products.scss'

function products({ data }) {
    return (
        <div className='products' id='products'>
            <h1>Products</h1>
            <div className='mainBlock'>
                <div className="upwards">
                    {data.categories.map((category) => (
                        <a href={category.slug} key={category.slug}>
                            <div className="insideBlock">
                                <div className="image">
                                    <img src={category.image} alt={category.title} />
                                </div>
                                <div className="content">
                                    <p>{category.title}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default products