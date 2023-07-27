import './Somos.css';

const Somos = () => {
   return (
      <div className="somos" id="somos" data-aos="fade-right" data-aos-duration="1500">


         <section class="about-area about-one ">
            <div class="container">
               <div class="row">
                  <div class="col-lg-12">
                     <div class="about-title text-center section-title-one">
                        <h2 class="titulo title fw-bold mb-3 ">Somos</h2>

                        <p style={{color: 'black'}}>
                        Somos un equipo de profesionales dedicados a desarrollar proyectos de Ingeniería, arquitectura, sanitarios, eléctricos y topográficos.
                        </p>
                        
                     </div>
                  </div>
               </div>

               <div class="row justify-content-center">
                  <div class="col-md-6 col-sm-8">
                     <div class="single-about-items">
                        <div class="items-icon">
                           <i class="lni lni-handshake"></i>
                        </div>
                        <div class="items-content">
                           <h4 class="items-title">Compromiso</h4>
                           <p class="text">
                           Desempeñamos soluciones  acorde a los requerimientos de nuestros clientes, entregándoles una asesoría profesional adecuada y siempre rigiéndonos por las leyes y normas atingentes a cada proyecto. 
                           </p>
                        </div>
                     </div>

                  </div>
                  <div class="col-md-6 col-sm-8">
                     <div class="single-about-items">
                        <div class="items-icon">
                           <i class="lni lni-investment"></i>
                        </div>
                        <div class="items-content">
                           <h4 class="items-title">Misión</h4>
                           <p class="text">
                              Non qui irure enim incididunt duis ea excepteur est ad et sunt incididunt sit elit. Ex labore id occaecat ullamco commodo qui adipisicing qui adipisicing. Sunt fugiat duis consectetur velit aliqua.
                           </p>
                        </div>
                     </div>

                  </div>
                 
                  
               </div>

            </div>
         </section>


      </div>
   )
}

export default Somos;