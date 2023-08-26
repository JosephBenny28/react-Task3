import React from 'react'
import place from './assets/place.jpeg'
import { Container, Row, Col } from 'react-bootstrap';
import visitLists from './VisitListPlaces'


function PlaceToVisit() {
    return (
        <div>
            <Container>

                <div className='my-5 '>
                    <Row className='vis-main '>
                        <Col sm={6} className='vis-main-con'>
                            <h3>Tourist Places To Visit In Tamil Nadu</h3>
                            <p>Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, Yelagiri, Masinagudi, Conoor, Madumalai, Yercaud, Madurai, Thanjavur, Mahabalipuram, Kanyakumari, Kotagiri, Nilgiri, Krishnagiri, Auroville, Theni, Hullathy, Rameshwaram, Kalhatty Ghat and more.</p>
                            <p>Enjoy a vacation to remember and cherish some amazing experiences while touring the most gorgeous places to visit in Tamil Nadu. With many serene beaches, beautiful temples known for Dravidian architecture, bustling shopping bazaars and adventurous wildlife places, these places offer a splendid mix to help you make superb travel itinerary.</p>
                            <p>Looking forward to visiting the most stunning places to see in Tamil Nadu?Well, then you are in for a great time. From the thriving cosmopolitan vibes of Chennai to the emerald tea plantations of Ooty and the French style houses of Pondicherry to the scenic beauty of Kodaikanal, these places will leave you overwhelmed. There is an awesome experience in store, whether you are going for leisure, backpacking or looking for an adventure.</p>

                        </Col>
                        <Col sm={6}>
                            <div className='imggs-main'>
                                <img src={place} className='vis-main-img' alt='Tourist places' />
                                <p className='text-center me-5 mt-1'>Tourist Place to Visit in Tamil Nadu</p>
                            </div>
                        </Col>
                        <p >The variety of tourist places in Tamil Nadu offers you a glimpse of all kinds of sightseeing and adventures. Tourists here can choose among many offbeat places like Yelagiri and Yercaud to the famous cultural citadels like Mahabalipuram and Madurai. Tamil Nadu is also home to the southernmost land of India- Kanyakumari and one of the char dhams- Rameshwaram. Whether it is an adventure you are looking for or a religious respite in the temples, these places are a delight for anyone wishing to escape the hustle and bustle of life.</p>
                    </Row>
                </div>

                {visitLists.map((visits) => (
                    <div key={visits.id} >
                        <h3 className='text-center '>{visits.title}</h3>
                        <h3 className='text-center my-3'>Tourist Place Visit</h3>
                        <Row >
                            <Col sm={2}>
                                <div className='imggs-main'>
                                    <img src={require(`./assets/${visits.image1}`)} className='places-imgs' alt={visits.name} />
                                </div>
                            </Col>
                            <Col sm={10} className="vis-pla-desc">
                                <h5>{visits.heading1}</h5>
                                <p>{visits.description1}</p>
                                <p className='vis-pla-last-para'>{visits.description2}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={10} className="vis-pla-desc">
                                <h5>{visits.heading2}</h5>
                                <p>{visits.description3}</p>
                                <p className='vis-pla-last-para'>{visits.description4}</p>
                            </Col>
                            <Col sm={2}>
                                <div className='imggs-main'>
                                    <img src={require(`./assets/${visits.image2}`)} className='places-imgs' alt={visits.name} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={2}>
                                <div className='imggs-main'>
                                    <img src={require(`./assets/${visits.image3}`)} className='places-imgs' alt={visits.name} />
                                </div>
                            </Col>
                            <Col sm={10} className="vis-pla-desc">
                                <h5 >{visits.heading3}</h5>
                                <p>{visits.description5}</p>
                                <p className='vis-pla-last-para'>{visits.description6}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={10} className="vis-pla-desc">
                                <h5 >{visits.heading4}</h5>
                                <p>{visits.description7}</p>
                                <p className='vis-pla-last-para'>{visits.description8}</p>
                            </Col>
                            <Col sm={2}>
                                <div className='imggs-main'>
                                    <img src={require(`./assets/${visits.image4}`)} className='places-imgs' alt={visits.name} />
                                </div>
                            </Col>
                        </Row>

                    </div>
                ))}
            </Container>
           


        </div>
    )
}

export default PlaceToVisit