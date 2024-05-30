import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {PriceNew} from '../data/index'
import { motion } from "framer-motion"


const PricePages = () => {
  return (
    <div className="price-page">
      <div className='price min-vh-100'>
      <Container>
        <Row>
          <Col>
          <h1 className='text-center fw-bold animate__animated 
            animate__fadeInUp'>Paket Pilihan Untuk Anda</h1>
          <p className="text-center animate__animated 
            animate__fadeInUp">Semua paket kami sediakan untuk anda semua dengan harga dan kualitas yang beda dengan yang lain</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
        {PriceNew.map((price) => {
                return (
                  <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  > 
                <Col key={price.id} className=' animate__animated 
            animate__fadeInUp'>
                <h5 className='text-center fw-bold mb-5 pt-2'>{price.title}</h5>
                <div className="description mb-3 px-5">
                  <p>• {price.description1}</p>
                  <p>• {price.description2}</p>
                  <p>• {price.description3}</p>
                  <p>• {price.description4}</p>
                  <p>• {price.description5}</p>
                </div>
                <div className="extra mb-4 px-4">
                  <p className='fw-bold'>{price.extratittle}</p>
                  <p>{price.extrasubtittle}</p>
                </div>
                <div className="budget mb-4 d-flex justify-content-between align-items-center px-4">
                  <button className='btn btn-primary rounded-20'>{price.buy}</button>
                  <p className='m-0 text-primary fw-bold'>{price.price}</p>
                </div>
              </Col>
            </motion.div>
              )
            })}
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default PricePages