import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

const Social = () => {
    return (
        <div className="container-black">

            <Container>
                <h2 className="text-center" id="social-media"> Social Media </h2>

                <Row className="text-center mt-4">
                    <Col>
                        <h3 className="title-social">Git Hub</h3>
                        <Button variant="primary" href="https://github.com/Armando-coder-gif/portafolio/tree/master/my-portfolio" target="_blank">
                            Repository
                        </Button>
                    </Col>

                    <Col>
                        <h3 className="title-social">Instagram</h3>
                        <Button variant="primary" href="https://www.instagram.com/amd.1002/" target="_blank">
                            Account
                        </Button>
                    </Col>

                    <Col>
                        <h3 className="title-social">Gmail</h3>
                        <Button variant="primary" href="ajgu2001@gmail.com" target="_blank">
                            Gmail
                        </Button>
                    </Col>

                    <Col>
                        <h3 className="title-social">CV</h3>
                        <Button variant="primary" href="https://drive.google.com/file/d/1d0otw_6xDTvaECmJU61unpYVmo_zXu43/view?usp=sharing" target="_blank">
                            Google Drive
                        </Button>
                    </Col>
                    

                </Row>

            </Container>
            
        </div>
    )
}

export default Social;
