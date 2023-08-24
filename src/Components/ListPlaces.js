import React from 'react'
import { Container } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link'; 


function ListPlaces() {
    return (
        <div >
            <Container>
                <div className='text-center my-5'>
                    <h3>
                        Tourist Places To Tamil Nadu
                    </h3>
                    <h3>
                        Here Are The Places  To Visit In Tamil Nadu In 2023
                    </h3>
                </div>

                <div >
                    <ul className='list'>
                        <li> <HashLink smooth to="#chennai">Chennai</HashLink></li>
                        <li><HashLink smooth to="#kodaikanal">Kodaikanal</HashLink></li>
                        <li><HashLink smooth to="#madurai">Madurai</HashLink></li>
                        <li><HashLink smooth to="#kumbakonam">Kumbakonam</HashLink></li>
                        <li><HashLink smooth to="#theni">Theni</HashLink></li>
                        <li><HashLink smooth to="#rameshwaram">Rameshwaram</HashLink></li>
                        <li><HashLink smooth to="#ooty">Ooty</HashLink></li>
                        <li><HashLink smooth to="#kanyakumari">Kanyakumari</HashLink></li>
                        <li><HashLink smooth to="#yercaud">Yercaud</HashLink></li>
                        <li><HashLink smooth to="#hogenakkal">Hogenakkal</HashLink></li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default ListPlaces