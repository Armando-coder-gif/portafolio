import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

const Social = () => {
    return (
        <div className="container-black">

            <Container>
                <h2 className="text-center" id="social-media"> Social Media </h2>

                <Row className="text-center mt-4">
                    <Col>
                        <a variant="primary" href="https://github.com/Armando-coder-gif/portafolio/tree/master/my-portfolio" target="_blank">
                            <h3 className="title-social">Repository</h3>
                        </a>
                    </Col>

                    <Col>
                        <a variant="primary" href="https://www.instagram.com/amd.1002/" target="_blank">
                            <h3 className="title-social">Instagram</h3>
                        </a>
                    </Col>

                    <Col>
                        <a variant="primary" href="https://drive.google.com/file/d/1d0otw_6xDTvaECmJU61unpYVmo_zXu43/view?usp=sharing" target="_blank">
                            <h3 className="title-social">CV</h3>
                        </a>
                    </Col>
                    

                </Row>

            </Container>
            
        </div>
    )
}

export default Social;
