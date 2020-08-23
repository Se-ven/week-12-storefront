import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Products extends React.Component {
    constructor() {
        super()
        this.state = {
            response: []
        }
    }

    componentDidMount() {
        this.callApi()
            .then((response) => {
                this.setState({ response })
            })
            .catch(error => console.log(error));
    }

    callApi = async () => {
        const response = await fetch('http://localhost:3001/products');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div>
                <div>Products Place holder</div>
                <div>{this.state.response}</div>
            </div>
        )
    }
    render() {
        const { response } = this.state;
        const itemsList = [];

        for (const [index, item] of response.entries()) {
            itemsList.push(<li key={index}>{item.title}</li>)
        }

        return (
            <div>
                <h1>{response.length} products found:</h1>
                <ListGroup>
                    <ListGroupItem color="success">{itemsList}</ListGroupItem>
                </ListGroup>
            </div>
        )

    }
}

export default Products