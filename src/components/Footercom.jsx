import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Footercom = () => {
  const phoneNumber = '6289527753269';

  const openInstagram = () => {
    window.open("https://www.instagram.com/temograph?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "_blank");
  }

  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank');
  };

  const openEmail = () => {
    const email = 'capturewithtemo@gmail.com';
    const subject = 'Subjek Email';
    const body = 'Isi email di sini';
    
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  
  const openTiktok = () => {
    window.open("https://www.tiktok.com/@temograph?is_from_webapp=1&sender_device=pc")
  }
  return (
    <div class="footer py-5">
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col lg='6'>
          <h1 className='fw-bold'>Temo</h1>
          <p className='desc'>Temo adalah sebuah perusaahan bisnis dalam bidang Fotography 
          </p>
          <div className='no mb-1 mt-4'>
            <Link class='text-decoration-none'>
            <i class="fa-brands fa-whatsapp"></i>
            <p className='mb-0' onClick={openWhatsApp}>+62 895-2775-3296</p>
            </Link>
          </div>
          <div className='mail mb-1'>
            <Link class='text-decoration-none'>
             <i className="fa-regular fa-envelope"></i>
             <p className='mb-0' onClick={openEmail}>capturewithtemo@gmail.com</p> 
            </Link>
          </div>
          </Col>
          <Col  className='d-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
          <h5 className='fw-bold'>Menu</h5>
          <Link to=''>Beranda</Link>
          <Link to='about'>About</Link>
          <Link to='price'>Price</Link>
          <Link to='gallery'>Gallery</Link>
          <Link to='testimonial'>Testimonial</Link>
          <Link to='faq'>Faq</Link>
          </Col>
          <Col lg='4' className='mt-lg-0 mt-5'>
          <h5 className='fw-bold mb-3'>Ikuti Kami Untuk Info Menarik</h5>
          <div className="sosial mt-3">
            <i className="fa-brands fa-instagram" onClick={openInstagram}></i>
            <i className="fa-brands fa-tiktok" onClick={openTiktok}></i>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className='text-center px-md-0 px-3'>&copy; Copyright {new Date().getFullYear()} by <span className='fw-bold'>Temo Take a Moment</span>, All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footercom