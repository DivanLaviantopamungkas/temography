import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { testimonial } from '../data/index'
import FaqCom from '../components/Faqcom';

const TestimonialPage = () => {
  return (
    <div className="testi-page">
      <div className='testimonial min-vh-100'>
          <Container>
            <Row >
              <Col>
                <h1 className='text-center fw-bold animate__animated 
            animate__fadeInUp'>Testimonial</h1>
                <p className='text-center animate__animated 
            animate__fadeInUp'>Testimonial dari beberapa pelanggan yang sudah pernah merasakan Foto dari Temo kami</p>
              </Col>
            </Row>
            <Row className='row-cols-lg-3 row-cols-1'>
            {testimonial.map((testimoni) => {
                return(
                  <Col  key={testimoni.id} className='mb-5'>
                   <div className="video">
                  <video src={testimoni.video} type="video/mp4" controls width="300"></video>
                  </div>
                   </Col>
                )
              })}
            </Row>
          </Container>
      </div>

      <FaqCom />
    </div>
  )
}

export default TestimonialPage