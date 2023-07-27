import { useEffect } from 'react';
import './Services.css'

import { tns } from 'tiny-slider/src/tiny-slider';



const Services = () => {

   useEffect(() => {
      const slider = tns({
        autoplay: true,
        autoplayButtonOutput: false,
        mouseDrag: true,
        gutter: 0,
        container: '.testimonial-one-active',
        center: true,
        nav: true,
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
      <div class="servicios" data-aos="fade-left" data-aos-duration="1500" id='servicios'>


         <section class="testimonial-one">

            <div class="section-title-seven">
               <div class="container">
                  <div class="row">
                     <div class="col-12">
                        <div class="section-title align-center">
                           <span> NUESTROS SERVICIOS </span>
                           <h2 class="fw-bold">Yáñez Ingeniería Civil</h2>
                           <p>
                           Los servicios ofrecidos por Yáñez Ingeniería Civil son los siguientes:

                           </p>
                        </div>
                     </div>
                  </div>
               </div>

            </div>

            <div class="container">
               <div class="testimonial-one-wrapper">
                  <div class="row justify-content-center">
                     <div class="col-md-9 col-lg-12">
                        <div class="row testimonial-one-active">
                           <div class="col-lg-4">
                              <div class="single-testimonial text-center">
                                 <div class="testimonial-image">
                                    <img src="/assets/servicios/builder.svg" alt="Author" />
                                    
                                 </div>
                                 <div class="testimonial-content">
                                 <h6 class="author-name">Proyectos de cálculo estructural</h6>
                                    
                                    <p class="text">
                                    Desarrollamos proyectos de cálculo estructural para edificaciones públicas y privadas, optimizando diseños para reducir costos mediante una cubicación eficiente de materiales.
                                    </p>
                                    
                                 </div>
                              </div>

                           </div>
                         
                           <div class="col-lg-4">
                              <div class="single-testimonial text-center">
                                 <div class="testimonial-image">
                                    <img src="/assets/servicios/road.svg" alt="Author" />
                                    
                                 </div>
                                 <div class="testimonial-content">
                                 <h6 class="author-name">Proyectos de Pavimentación </h6>
                                    
                                    <p class="text">
                                    Diseñamos pavimentos y sistemas de evacuación de aguas lluvias para entidades públicas y privadas, incluyendo accesos a rutas nacionales.
                                    </p>
                                    
                                 </div>
                              </div>

                           </div>

                           <div class="col-lg-4">
                              <div class="single-testimonial text-center">
                                 <div class="testimonial-image">
                                    <img src="/assets/servicios/arquitect.svg" alt="Author" />
                                    
                                 </div>
                                 <div class="testimonial-content">
                                 <h6 class="author-name">Proyectos de arquitectura</h6>
                                    
                                    <p class="text">
                                    Creamos diseños arquitectónicos para viviendas, edificios públicos y privados, ajustándonos a normativas municipales y requerimientos específicos del cliente.
                                    </p>
                                    
                                 </div>
                              </div>

                           </div>

                           

                           <div class="col-lg-4">
                              <div class="single-testimonial text-center">
                                 <div class="testimonial-image">
                                    <img src="/assets/servicios/canal.png" alt="Author" />
                                    
                                 </div>
                                 <div class="testimonial-content">
                                 <h6 class="author-name">Proyectos de agua potable y alcantarillado.</h6>
                                    
                                    <p class="text">
                                    Diseñamos proyectos de agua potable y alcantarillado en zonas rurales (servicios sanitarios rurales o APR) y zonas urbanas  para las compañías de aguas con sus respectivos permisos y aprobaciones.
                                    </p>
                                    
                                 </div>
                              </div>

                           </div>

                           <div class="col-lg-4">
                              <div class="single-testimonial text-center">
                                 <div class="testimonial-image">
                                    <img src="/assets/servicios/electric.svg" alt="Author" />
                                    
                                 </div>
                                 <div class="testimonial-content">
                                 <h6 class="author-name">Proyectos Eléctricos.</h6>
                                    
                                    <p class="text">
                                    Elaboramos proyectos eléctricos para diversas edificaciones, garantizando el cumplimiento de regulaciones técnicas y legales.

                                    </p>
                                    
                                 </div>
                              </div>

                           </div>

                           <div class="col-lg-4">
                              <div class="single-testimonial text-center">
                                 <div class="testimonial-image">
                                    <img src="/assets/servicios/topography.png" alt="Author" />
                                    
                                 </div>
                                 <div class="testimonial-content">
                                 <h6 class="author-name">Topografía.</h6>
                                    
                                    <p class="text">
                                    Realizamos levantamientos topográficos precisos para edificaciones, loteos y subdivisiones, proporcionando datos clave para los proyectos.

                                    </p>
                                    
                                 </div>
                              </div>

                           </div>

                           <div class="col-lg-4">
                              <div class="single-testimonial text-center">
                                 <div class="testimonial-image">
                                    <img src="/assets/servicios/consulting.svg" alt="Author" />
                                    
                                 </div>
                                 <div class="testimonial-content">
                                 <h6 class="author-name">Asesorías .</h6>
                                    
                                    <p class="text">
                                    Brindamos asesoramiento en terreno, asegurando el cumplimiento de normativas y eficiencia en el desarrollo de los proyectos.

                                    </p>
                                    
                                 </div>
                              </div>

                           </div>
                           
                           
                           

                           
                        </div>

                     </div>
                  </div>
               </div>
            </div>

         </section>

      </div>


   )
}

export default Services;
