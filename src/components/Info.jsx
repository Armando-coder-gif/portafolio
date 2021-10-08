import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';


function Info() {
    return (
        <Container>

            <Row>
                <Col>
                    <h1 className="title mt-5">Web Developer</h1>
                    <p className="info">I find solutions for you👨‍💻.</p>
                </Col>
            
            </Row>

            <Row className="justify-content-md-center">
                <Col>
                    <h2 className="text-center" id="personal-info" >Personal Information</h2>
                        <p className="info">My name is Armando Jose González Urbina.
                            I am 20 years old. I like to study new technologies to improve my
                            knowledges. 
                        </p>   
                </Col>
            </Row>
            
        </Container>
    )
}

export default Info;
