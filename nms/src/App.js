import React from 'react';
import './App.css';
import Header from './components/header';
import ProductsList from './components/products_list';

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
        let { products } = this.state;

        return (
            <div className="product">
                <Header></Header>
                <ProductsList products={products}></ProductsList>
            </div>
        );
    }
}

export default App;
