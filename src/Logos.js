import React from 'react'


class Logos extends React.Component {
    constructor() {
        super()
        this.state = {
            response: []
        }
    };

    componentDidMount() {
        this.callApi()
            .then(response => this.setState({ response: response.length + ' logos found.' }))
            .catch(error => console.log(error));
    };

    callApi = async () => {
        const response = await fetch('http://localhost:3001/logos');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);

        return body;
    };

    render() {
        return (
            <div>
                <div>Logos Place Holder</div>
                <div>{this.state.response}</div>
            </div>
        )
    }

}



export default Logos