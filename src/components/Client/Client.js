import { useEffect } from 'react';
import './Client.css'
import { tns } from 'tiny-slider/src/tiny-slider';

const Client = () => {
   
   
   useEffect(() => {
      const slider = tns({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayButtonOutput: false,
        autoHeight: true,
        mouseDrag: true,
        gutter: 0,
        container: '.clientess',
        center: true,
        nav: false,
        controls: false,
        speed: 400,
        controlsText: [
          '<i class="lni lni-arrow-left-circle"></i>',
          '<i class="lni lni-arrow-right-circle"></i>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          992: {
            items: 2,
          },
          1200: {
            items: 3,
          },
        },
      });
  
      // Importante: ¡No olvides limpiar el slider en el momento de desmontar el componente!
      return () => {
        slider.destroy();
      };
    }, []);

   return (
      <div className='clientes'>
         <section className="client-logo-area client-logo-one" id='clientes' >
         <div className="section-title-two">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="content">

                        <h2 className="fw-bold" style={{color: 'white'}}>Nuestros clientes</h2>
                        
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container text-center">
            <div className="row clientess">
            <div class="col-md-3 col-6">
            <div class="single-client text-center">
               <img src='./assets/clientes/cavacolchagua.svg' alt="colchagua" />
            </div>
            
         </div>
         <div class="col-md-3 col-6">
            <div class="single-client text-center">
               <img src="/assets/clientes/maginox.webp" alt="Logo" />
            </div>
            
         </div>
         <div class="col-md-3 col-6">
            <div class="single-client text-center">
               <img src="/assets/clientes/modulartech.webp" alt="Logo" />
            </div>
            
         </div>
         <div class="col-md-3 col-6">
            <div class="single-client text-center">
               <img src="/assets/clientes/cruzroja.webp" alt="Logo" />
            </div>
            
         </div>

         <div class="col-md-3 col-6">
            <div class="single-client text-center">
               <img src="/assets/clientes/kinu.png" alt="Logo" />
            </div>
            
         </div>

         <div class="col-md-3 col-6">
            <div class="single-client text-center">
               <img src="/assets/clientes/latrach.png" alt="Logo" />
            </div>
            
         </div>
         
         

         


            </div>
         </div>
      </section>
      </div>

   )
}

export default Client;