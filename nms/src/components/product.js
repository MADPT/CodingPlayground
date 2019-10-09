import React from 'react';
import ProductLabel from './product_label';
import BannerSale from './banner_sale';

class Product extends React.Component {
    render() {
        let { product } = this.props;

        return (
            <li key={product.id} className='product__item'>
                <img className="product__image" src={'/' + product['product-photo']} alt={product.label} />
                <ProductLabel title={product.label} description={product['short-description']}></ProductLabel>
                {product.sale &&
                    <BannerSale></BannerSale>
                }
            </li>
        );
    }
}

export default Product;
