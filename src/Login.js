import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';


const Login = (props) => {


    return (
        <div>
            <InputGroup>
                <Input placeholder="username" />
                <InputGroupAddon addonType="append">
                    <InputGroupText>@teecommerce.com</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <br/>
            <InputGroup>
            <Input placeholder="password" />
            </InputGroup>

            <Button color="success" >Submit</Button>




        </div>
    )
}


export default Login;