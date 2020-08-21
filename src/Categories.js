import React from 'react'

class Categories extends React.Component {
    constructor() {
        super()
        this.state = {
            response: []
        }
    }


    componentDidMount() {
        this.callApi()
            .then(response => this.setState({ response: response.length + ' number of categories.' }))
            .catch(error => console.log(error));
    };

    callApi = async () => {
        const response = await fetch('http://localhost:3000/categories')
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div>
                <div>Categories Place Holder</div>
                <div>{this.state.response}</div>
            </div>
        )
    }
}

export default Categories