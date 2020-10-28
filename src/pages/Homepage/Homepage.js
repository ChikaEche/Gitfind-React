import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";
import './homepage.css';
import Header from '../header'

export default function Homepage() {
    
    const[userName , setUserName] = useState({
        userName: ''
    })

    let Onchange = (event) => {
        console.log(event.target.value)
        setUserName({userName: event.target.value})
        console.log(userName)
    }

    return(
        <div>
            <Header />
            <Container className="container">
            <Form className="form">
                <Form.Label>GitHub Username</Form.Label>
                <Form.Control value={userName.userName} onChange={Onchange}></Form.Control>
                <Button className="button" variant="primary" type="submit">
                     <Link className="link" to={`/profile/${userName.userName}`}>Submit</Link>
                </Button>
            </Form>
        </Container>
        </div>
    )
}

