import React from 'react';
import { Container, Col, Row, ProgressBar } from 'react-bootstrap';

const Skills = () => {
    return (
        <>
            
            <Container>
                <h2 className="text-center" id="skills"> Skills </h2>

                <Row>
                    <Col>
                        <h3 className="skills-h3 mt-4">Pyhton</h3>
                        <ProgressBar variant="warning" now={95} />
                    </Col>
                    <Col>
                        <h3 className="skills-h3 mt-4">Django</h3>
                        <ProgressBar variant="warning" now={60} />
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <h3 className="skills-h3 mt-4">Tkinter</h3>
                        <ProgressBar variant="warning" now={50} />
                    </Col>
                    <Col>
                        <h3 className="skills-h3 mt-4">Flask</h3>
                        <ProgressBar variant="warning" now={40} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3 className="skills-h3 mt-4">MySQL</h3>
                        <ProgressBar variant="warning" now={50} />
                    </Col>
                    <Col>
                        <h3 className="skills-h3 mt-4 mt-4">C++</h3>
                        <ProgressBar variant="warning" now={10} />
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <h3 className="skills-h3 mt-4">HTML</h3>
                        <ProgressBar variant="warning" now={90} />
                    </Col>
                    <Col>
                        <h3 className="skills-h3 mt-4">CSS</h3>
                        <ProgressBar variant="warning" now={80} />
                    </Col>
                </Row>
                
                <Row>
                    
                    <Col>
                        <h3 className="skills-h3 mt-4">Javascript</h3>
                        <ProgressBar variant="warning" now={50} />
                    </Col>
                    <Col>
                        <h3 className="skills-h3 mt-4">React</h3>
                        <ProgressBar variant="warning" now={70} />
                    </Col>
                </Row>
                
                <Row>
                    <Col>
                        <h3 className="skills-h3 mt-4">bootstrap</h3>
                        <ProgressBar variant="warning" now={40} />
                    </Col>
                </Row>
                
            </Container>
            
            

        </>
    )
}

export default Skills;
