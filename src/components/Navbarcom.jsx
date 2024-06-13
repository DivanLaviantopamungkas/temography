import {useState, useEffect} from 'react'
import {Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/index'


const Navbarcom = () => {
  const [changeColor, setChangeColor] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [expanded, setExpanded] = useState(false);
  const phoneNumber = '6289527753269';

  const openWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', updateMedia);

    // Cleanup event listener
    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
  }

  useEffect(() => {
    const changeBackgroundColor = () => {
      if (window.scrollY > 10) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    };

    if (isDesktop) {
      window.addEventListener('scroll', changeBackgroundColor);
    }

    // Cleanup event listener
    return () => {
      if (isDesktop) {
        window.removeEventListener('scroll', changeBackgroundColor);
      }
    };
  }, [isDesktop]);


  return (
    <div> 
      <Navbar expand="lg" className={`navbar ${changeColor ? "color-active" : ""}`} expanded={expanded} onToggle={handleToggle}>
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="./logo.png"
              width="100"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='nav__toggle' onClick={handleToggle}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              {navLinks.map((link) => (
                <div className='nav-link' key={link.id}>
                  <NavLink 
                    to={link.path} 
                    className={({ isActive, isPending }) => 
                      isPending ? "pending" : isActive ? "active" : ""
                    } 
                    end
                    onClick={closeNavbar}
                  >
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            <div className="text-center">
              <button className='btn btn-outline-primary rounded-5 btn__review' onClick={() => { openWhatsApp(); closeNavbar(); }}>
                Booking Now
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarcom