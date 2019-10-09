import React from 'react';
import Product from './product';

class ProductsList extends React.Component {
    render() {
        const recProd = 3;
        let { products } = this.props;

        return (
            <ul className="product__list">
                {products ? (
                    products.slice(0, recProd).map(product =>
                        <Product key={product.id} product={product}></Product>
                    )
                ) : (
                    <h1>Products unavailable</h1>
                )}
            </ul>
        );
    }
}

export default ProductsList;
