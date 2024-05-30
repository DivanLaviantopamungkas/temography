import {useState, useEffect} from 'react'
import {Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/index'


const Navbarcom = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    if (window.scrollY > 10 ){
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor()
    window.addEventListener('scroll', changeBackgroundColor)  
  }
)

const openWhatsApp = () => {
  window.open("https://api.whatsapp.com/send?phone=62882226418035", "_blank");
};

  return (
    <div> 
    <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
    <Container>
      <Navbar.Brand href="#home"><img
              src="./logo.png"
              width="100"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav__togle'/>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto text-center">
            {navLinks.map((link) => (
              <div className='nav-link' key={link.id}>
                <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>{link.text}</NavLink>
              </div>
            ))}
          </Nav>
        <div className="text-center">
         <button className='btn btn-outline-primary rounded-5 btn__review' onClick={openWhatsApp}>Booking Now</button>
        </div>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navbarcom