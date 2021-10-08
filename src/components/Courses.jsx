import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Courses = () => {
    return (
        <>
            <Container>
                <h2 className="text-center" id="courses"> Courses </h2>
                <Table striped bordered hover variant="light">
                <thead>
                    <tr>
                        <th>COURSE</th>
                        <th>Platform</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Master in Python</td>
                        <td>Udemy</td>
                    </tr>
                    <tr>
                        <td>Relational Database Design</td>
                        <td>Udemy</td>
                    </tr>
                    <tr>
                        <td>React from zero to expert (Hooks y MERN)</td>
                        <td>Udemy</td>
                    </tr>
                    <tr>
                        <td>Learn C++ Programming (Basic - Intermediate - Advanced)</td>
                        <td>Udemy</td>
                    </tr>
                    <tr>
                        <td>HTML</td>
                        <td>Youtube</td>
                    </tr>
                    <tr>
                        <td>CSS</td>
                        <td>Youtube</td>
                    </tr>
                    <tr>
                        <td>Javascript</td>
                        <td>Youtube</td>
                    </tr>
                </tbody>
            </Table>
            </Container>
            
            
        </>
    )
}

export default Courses;
