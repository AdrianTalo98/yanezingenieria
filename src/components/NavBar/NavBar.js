import { useEffect } from 'react';
import './NavBar.css'
import { Link } from 'react-scroll';



const NavBar = () => {

   const escuchar = () => {
      const btn = document.getElementById('navbarOne');
      console.log(btn)
   }


   useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const logoImg = document.getElementById('navbar-logo');

        const navbar = document.getElementById('navbar-area');
        
        
  
        // Define la cantidad de desplazamiento en la que deseas que se modifique el tamaño del logo
        const scrollThreshold = 100; // Por ejemplo, 100px de desplazamiento
  
        if (scrollY > scrollThreshold) {
          logoImg.style.height = '5vh'; // Tamaño reducido del logo
          navbar.style.opacity = '0.9'
          
        } else {
          logoImg.style.height = '15vh'; // Tamaño normal del logo
          navbar.style.opacity = '1'
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
   
   return (
      <header class="header " id='inicio' data-aos="fade-down" data-aos-duration="2000">

         
         <section className="navbar-area navbar-one sticky-lg-top" id='navbar-area'>
            <div className="container">
               <div className="row">
                  <div className="col-lg-12">
                     <nav className="navbar navbar-expand-lg">
                        <Link to='inicio' className="navbar-brand" >
                           <img src="/assets/logo.png" id='navbar-logo' alt="Logo" style={{ height: '15vh' }} />
                        </Link>
                        <button
                           className="navbar-toggler"
                           type="button"
                           data-bs-toggle="collapse"
                           data-bs-target="#navbarOne"
                           aria-controls="navbarOne"
                           aria-expanded="false"
                           aria-label="Toggle navigation"
                        >
                           <span className="toggler-icon" id='iconos' onClick={escuchar}></span>
                           <span className="toggler-icon"></span>
                           <span className="toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse sub-menu-bar" id="navbarOne">
                           <ul className="navbar-nav m-auto">

                              <li className="nav-item">

                                 <Link to="inicio" smooth={true} duration={200}>Inicio</Link>
                              </li>

                              <li className="nav-item">

                                 <Link to="somos" smooth={true} offset={-80} duration={200}>Somos</Link>
                              </li>
                              
                              <li className="nav-item">
                                 <Link to="servicios" smooth={true} offset={-80} duration={200}>Servicios</Link>
                              </li>

                              <li className="nav-item">
                                 <Link to="clientes" smooth={true} offset={-80} duration={200}>Clientes</Link>
                              </li>
                            
                              <li className="nav-item">
                                 <Link to="contacto" smooth={true} offset={-100} duration={200}>Contacto</Link>
                              </li>
                           </ul>
                        </div>

                     </nav>
                  </div>
               </div>

            </div>

         </section>
         <div className='headertitle'>
            <h1 style={{color: ''}}>Yáñez Ingeniería</h1>
            
         </div>

      </header>




   )
}

export default NavBar;