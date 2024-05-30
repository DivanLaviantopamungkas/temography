import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import { AboutNew } from '../data/index';

const About = () => {
  return (
    <div className="about-page">
      <div className='about min-vh-100'>
      <Container>
        <Row>
          <Col>
          <h1 className='text-center fw-bold  animate__animated 
            animate__fadeInUp'>tentang Kami</h1>
          <p className="text-center pt-3 animate__animated 
            animate__fadeInUp">Kami percaya bahwa setiap momen layak untuk ditangkap dan dikenang selamanya. Didirikan pada tahun 2024, kami TeMo memberikan pengalaman tak tertandingi yang menambahkan sentuhan 
            kesenangan, 
            kegembiraan, dan nostalgia ke acara spesial Anda.</p>
          </Col>
        </Row>
        <Row>
            {AboutNew.map((about) => {
              return (
              <Col key={about.id} className=' animate__animated 
              animate__fadeInUp'>
                <img src={about.image} alt="" className='mx-auto d-block'/>
                <h5 className='text-center pt-3 mb-4'>{about.title}</h5>
              </Col>
              )
            })}
          </Row>
      </Container>
    </div>
    </div>
  )
}

export default About