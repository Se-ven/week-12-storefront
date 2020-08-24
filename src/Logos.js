import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

class Logos extends React.Component {
    constructor() {
        super()
        this.state = {
            response: []
        }
    };

    componentDidMount() {
        this.callApi()
            .then((response) => {
                this.setState({ response })
            })
            .catch(error => console.log(error));
    };

    callApi = async () => {
        const response = await fetch('http://localhost:3001/logos');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };


    render() {
        const { response } = this.state;
        const logosList = [];

        for (const [index, item] of response.entries()) {
            logosList.push(<li key={index}>{item.name}</li>)
        }

        return (
            <div>
                <h1>{response.length} logos found:</h1>
                <ListGroup>
                    <ListGroupItem color="danger">{logosList}</ListGroupItem>

                </ListGroup>

            </div>
        )
    }

}



export default Logos