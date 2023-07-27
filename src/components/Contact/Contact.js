import './Contact.css'
import { ExternalLink } from 'react-external-link';

const Contact = () => {
   return (

      <div className='contacto'>
         <section className="client-logo-area client-logo-one" id="contacto" data-aos="fade-left" data-aos-duration="1500">

<div className="section-title-two">
   <div className="container">
      <div className="row">
         <div className="col-12">
            <div className="content">

               <h2 className="fw-bold">Contacto</h2>

            </div>
         </div>
      </div>
   </div>

</div>

<div className="container">
   <div className="row">
      <div className="col">
         <div className="single-client text-center">
            <img src="/assets/user.svg" alt="Image" />
         </div>

      </div>
      <div className="col">
         <div className="single-client text-center">
            <img src="/assets/phone.svg" alt="Image" />
         </div>

      </div>
      <div className="col">
         <div className="single-client text-center">
            <img src="/assets/envelope.svg" alt="Image" />
         </div>

      </div>


   </div>
   <div className="row">
      <div className="col">
         <div className="single-client text-center">
            <h5>
               Nombre
            </h5>
            <p>
               Name Name
            </p>
            <p>
               Gerente General.
            </p>
         </div>

      </div>
      <div className="col">
         <div className="single-client text-center">
            <h5>
               Teléfono
            </h5>

            <div>
               <a href="tel:+56912345678">+569 1234 5678</a>
            </div>
            <ExternalLink href='https://api.whatsapp.com/send?phone=56912345678'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png' style={{ height: '40px' }}></img>
                  WhatsApp
            </ExternalLink>
           

         </div>

      </div>

      <div className="col">
         <div className="single-client text-center">
            <h5>
               Correo
            </h5>
            <a href="mailto:contacto@correo.cl">
               contacto@correo.cl
            </a>

         </div>

      </div>

   </div>

</div>

</section>
      </div>

   )
}

export default Contact;