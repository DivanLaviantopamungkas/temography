import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { AboutNew, Gallery, PriceNew, testimonial } from '../data/index';
import HeroImg from '../assets/animasipg.png'
import WaImage from '../assets/whatsapp.png'
import Hallodek from '../assets/hallodek.png'
import FaqCom from '../components/Faqcom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const HomePage = () => {
  const phoneNumber = '6289527753269';

  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank');
  }

  return (
    <div className='homepage'>
      <header className='w-100 min-vh-100 header-box d-flex align-items-center pt-lg-5 overflow-header'>
        <Container>
          <Row  className='header-box d-flex align-items-center'>
            <Col lg="6">
            <h1 className='mb-2 animate__animated 
            animate__fadeInLeft'>"Abadikan Momen, <span/>Sentuh Dimensi Baru"</h1>
            <p  className='mb-2 animate__animated 
            animate__fadeInLeft'>Raih setiap detik berharga besama pengalaman tak terlupakan</p>
            <button className='btn btn-outline-primary btn-lg rounded-10 btn__booking animate__animated 
            animate__fadeInLeft' onClick={openWhatsApp}>Booking Now</button>
            </Col>
            <Col lg="6 pt-lg-0 pt-5">
            <img src={HeroImg} alt="hero-img" className='animate__animated 
            animate__fadeInRight'/>
            </Col>
          </Row>
        </Container>
      </header>

      <div className="about w-100 min-vh-100 pt-4">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">Mengapa Harus Temo?</h1>
            <p className="text-center pt-3">Kami percaya bahwa setiap momen layak untuk ditangkap dan dikenang selamanya. Didirikan pada tahun 2024, kami TeMo memberikan pengalaman tak tertandingi yang menambahkan sentuhan 
            kesenangan, 
            kegembiraan, dan nostalgia ke acara spesial Anda.</p>
            </Col>
          </Row>
          <Row>
            {AboutNew.map((about) => {
              return (
              <Col key={about.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={about.delay}>
                <img src={about.image} alt="" className='mx-auto d-block'/>
                <h5 className='text-center pt-3 mb-4'>{about.title}</h5>
              </Col>
              )
            })}
          </Row>
        </Container>
      </div>

      <div className="price">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">Price List</h1>
            </Col>
          </Row>
          <Row className="table-price justify-content-center">
            {PriceNew.map((price) => {
                return (
                  <motion.div
                  className="box"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  > 
                <Col key={price.id} className=''  data-aos="fade-up" data-aos-duration="1000" data-aos-delay={price.delay}>
                <h5 className='text-center fw-bold mb-5'>{price.title}</h5>
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
                 <button className='btn btn-primary rounded-20' onClick={openWhatsApp}>{price.buy}</button>
                  <p className='m-0 text-primary fw-bold'>{price.price}</p>
                </div>
              </Col>
              </motion.div>
              )
            })}
          </Row>
          </Container>
      </div>

      <div className="gallery">
      <Container>
          <Row className="justify-content-center">
            <Col>
            <h1 className="text-center fw-bold mb-5">Gallery</h1>
            </Col>
          </Row>
          <Row>
          <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Gallery.map((gallery) => {
          return (
            <SwiperSlide key={gallery.id}>
            <img src={gallery.image} alt="" />
          </SwiperSlide>
          )
        })}
      </Swiper>
          </Row>
        </Container>
      </div>

      <div className="testimonial py-5">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold mb-5">Testimonial</h1>
            </Col>
            <Col>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {testimonial.map((testimoni) => {
              return (
                <SwiperSlide key={testimoni.id} className='shadow'> 
                  <div className="video">
                  <video src={testimoni.video} type="video/mp4" width={350} controls></video>
                  </div>
                </SwiperSlide>
              )
            })}
      </Swiper>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="contact py-5">
        <Container>
          <Row data-aos="fade-up" data-aos-duration="1000">
            <Col lg='6'>
            <h1 className='fw-bold'>Booking Sekarang</h1>
            <p className='pt-2'>Apakah Anda tertarik dengan
            photobooth holografik kami?
            Pesan sekarang dan jadikan 
            acaramu penuh warna!</p>
            <motion.div
              className="box"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
           <img src={WaImage} onClick={openWhatsApp} alt="" />
            </motion.div>
            </Col>
            <Col lg='6'>
            <div className="hallodek">
            <img src={Hallodek} alt="" />
            </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Faq Com */}
      <FaqCom />
      { /* Faq komponent */}
    </div>
  )
}

export default HomePage