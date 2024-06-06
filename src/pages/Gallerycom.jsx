import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Gallery } from '../data'
const Gallerycom = () => {
  return (
    <div className='gallery-page'>
      <div className="gallery min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold animate__animated 
            animate__fadeInUp">Gallery Temo</h1>
            <p className="text-center animate__animated 
            animate__fadeInUp">Kumpulan momen dari berbagai klien Temo</p>
            </Col>
          </Row>
          <Row>
            {Gallery.map((gallery) => {
              return (
                <Col key={gallery.id} className=' animate__animated 
                animate__fadeInUp'>
                  <img src={gallery.image} alt="" className='pb-2' width={400}/>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Gallerycom