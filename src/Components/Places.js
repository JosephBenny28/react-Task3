import React from 'react'
import { Col, Container, Row, Button, Card } from 'react-bootstrap'
import location from './AllPlaces'

export default function Places() {
    return (
        <div >
            <Container>
                {location.map((pla) => (
                    <div key={pla.id} className='my-5'>
                        <h1 id={pla.title} >{pla.name}</h1>
                        <Row className='places'>
                            <Col sm={6}>
                                <div className='imggs-main' >
                                    <img src={require(`./assets/${pla.image}`)} className='imggs-main' alt="Chennai" />
                                </div></Col>
                            <Col sm={6}>
                                <h5 className='px-2'>{pla.heading}</h5>
                                <p className='px-4'> {pla.description1}</p>
                                <p className='px-4'>
                                    {pla.description2}
                                </p>

                            </Col>
                        </Row>
                        <h3 className='text-center my-5 pt-5'>Must visit place in {pla.title} </h3>
                        <Row>
                            <div className='place-visit-list mb-3'>
                                {Object.keys(pla).map((key, index) => {
                                    if (key.startsWith('visit')) {
                                        const visit = pla[key];
                                        return (
                                            <div key={key}>
                                                {/* {index === 0 && <h1>Must visit places{visit['vis-name']}</h1>} */}
                                                <Card style={{ width: '17rem', height: '26rem' }}>
                                                    <Card.Img variant="top" src={require(`./assets/${visit['vis-img']}`)} style={{ height: '13rem' }} />
                                                    <Card.Body >
                                                        <Card.Title>{visit['vis-name']}</Card.Title>
                                                        <Card.Text style={{ height: '6rem' }}>{visit['vis-des']}</Card.Text>
                                                        <div className='mb-auto'>
                                                            <Button variant="primary" >Read More</Button>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </Row>

                    </div>
                ))}

            </Container>


        </div>
    )
}
