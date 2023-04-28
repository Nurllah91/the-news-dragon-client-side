import React from 'react';
import Header from '../Pages/Home/Home/Shared/Header/Header';
import Footer from '../Pages/Home/Home/Shared/Footer/Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightNav from '../Pages/Home/Home/Shared/RightNav/RightNav';
import LeftNav from '../Pages/Home/Home/Shared/LeftNav/LeftNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <h2 className="text-center">Main content coming soon</h2>

                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Main;