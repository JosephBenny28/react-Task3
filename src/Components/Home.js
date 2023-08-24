import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import caro1 from './assets/caro-1.jpg'
import caro2 from './assets/caro-2.jpeg'
import caro3 from './assets/caro-3.jpeg'
import caro4 from './assets/caro-4.jpeg'
import caro5 from './assets/caro-5.jpeg'


function Home() {
    return (
        <div>
            <Container>
            <Carousel className='caro'>
                <Carousel.Item>
                    <img src={caro1} alt="Carousel 1" />
                    <Carousel.Caption className='caro-cap'>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={caro2} alt="Carousel 1" />

                </Carousel.Item>
                <Carousel.Item>
                    <img src={caro3} alt="Carousel 1" />

                </Carousel.Item>
                <Carousel.Item>
                    <img src={caro4} alt="Carousel 1" />

                </Carousel.Item>
                <Carousel.Item>
                    <img src={caro5} alt="Carousel 1" />

                </Carousel.Item>
            </Carousel>
            </Container>
        </div>
    )
}

export default Home