import React from 'react';
import './App.css';

const API = 'http://localhost:4000/products';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => {
                this.setState({products: data})
            });
    }

    render() {
        const recProd = 3;
        let { products } = this.state;

        return (
            <div className="App">
                <h1>Recommend Products</h1>
                <ul>
                    {products.slice(0, recProd).map(product =>
                        <li key={product.id}>
                            <img src={'/' + product['product-photo']} alt={product.label} />
                            <p>{product.label}</p>
                            <p>{product['short-description']}</p>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default App;
