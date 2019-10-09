import React from 'react';

class ProductLabel extends React.Component {
    render() {
        let { title, description } = this.props;

        return (
            <React.Fragment>
                <h2 className="product__title">{title}</h2>
                <p className="product__description">{description}</p>
            </React.Fragment>
        );
    }
}

export default ProductLabel;
