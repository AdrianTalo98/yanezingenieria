import { useState } from 'react';
import Alert from './Alert';
import './Form.css';
import { ExternalLink } from 'react-external-link';

import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Form = () => {

    const form = useRef();



    const enviar = (e) => {
        console.log("se va a enviar..")
        e.preventDefault()
        emailjs.sendForm('service_9rvxgsv','template_sfxk1gs',form.current, 'u8gwmxbCi5I7Pf7xz')
        .then((result) => {
            if(result.status == 200){
                setisSend(true)
            }
        },(error) => {
            console.log("error", error)
        })
        
    }

    const [mensaje, setMensaje] = useState({
        nombre_apellido: '',
        correo: '',
        telefono: '',
        motivo: '',
        mensaje: ''

    });

    const [isSend, setisSend] = useState(false);

    function checkProperties(obj) {
        for (var key in obj) {
            if (obj[key] == "")
                return true;
        }
        return false;
    }


    return (

        <div className='formulario'>
            <section className="contact-area" data-aos="fade-right" data-aos-duration="1500">
                <div className="container">
                    <h1>Contáctenos</h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">

                            <div className="contact-form form-style-four mt-15">
                                <form action="#" ref={form}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-input mt-15">
                                                <label>Nombre y Apellido</label>
                                                <div className="input-items default">
                                                    <i className="lni lni-user"></i>
                                                    <input required name='nombre_apellido' onChange={(e) => setMensaje({ ...mensaje, nombre_apellido: e.target.value })} value={mensaje.nombre_apellido} type="text" placeholder="Juan Araya" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-input mt-15">
                                                <label>Correo electrónico</label>
                                                <div className="input-items default">
                                                    <i className="lni lni-envelope"></i>

                                                    <input required name='correo' onChange={(e) => setMensaje({ ...mensaje, correo: e.target.value })} value={mensaje.correo} type="email" placeholder="correo@mail.cl" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-input mt-15">
                                                <label>Telefono</label>
                                                <div className="input-items default">
                                                    <i className="lni lni-phone"></i>

                                                    <input required name='telefono' onChange={(e) => setMensaje({ ...mensaje, telefono: e.target.value })} value={mensaje.telefono} type="text" placeholder="9 12345678" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-input mt-15">
                                                <label>Motivo</label>
                                                <div className="input-items default">
                                                    <i className="lni lni-bubble"></i>
                                                    <input required name='motivo' onChange={(e) => setMensaje({ ...mensaje, motivo: e.target.value })} value={mensaje.motivo} type="text" placeholder="Consulta" />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-input mt-15">
                                                <label>Mensaje</label>
                                                <div className="input-items default">
                                                    <i className="lni lni-pencil-alt"></i>
                                                    <textarea
                                                        required
                                                        name='mensaje'
                                                        onChange={(e) => setMensaje({ ...mensaje, mensaje: e.target.value })}
                                                        value={mensaje.mensaje}
                                                        placeholder="Escriba su solicitud"
                                                    ></textarea>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-12">
                                            <div className="single-form mt-15">
                                                <div className="input-form rounded-buttons">
                                                    <button
                                                        className="btn primary-btn rounded-full"
                                                        type="submit"
                                                        onClick={enviar}
                                                        disabled={checkProperties(mensaje)}

                                                    >
                                                        Enviar Mensaje
                                                    </button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                    {
                                        isSend ? (
                                            <div className='mt-2'>
                                                <Alert />
                                            </div>
                                        ) : (
                                            <div></div>
                                        )
                                    }

                                </form>
                            </div>

                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='contacto'>
                                <div class="col-xl-12 col-lg-12 col-md-6 col-sm-6">
                                    
                                    <div class="contact-info">
                                        <ul class="info">
                                            <li>
                                                <div class="single-info">
                                                    <div class="info-icon">
                                                        <i class="lni lni-map-marker"></i>
                                                    </div>
                                                    <div class="info-content">
                                                        <p class="text">
                                                            Santa Cruz, VI región, Chile
                                                        </p>
                                                    </div>
                                                </div>

                                            </li>
                                            <li>
                                                <div class="single-info">
                                                    <div class="info-icon">
                                                        <i class="lni lni-phone"></i>
                                                    </div>
                                                    <div class="info-content">
                                                        <a href='tel:+56936681814'><p class="text">+56 (9) 3668 1814</p></a>
                                                    </div>
                                                </div>

                                            </li>
                                            
                                            <li>
                                                <div class="single-info">
                                                    <div class="info-icon">
                                                        <i class="lni lni-envelope"></i>
                                                    </div>
                                                    <div class="info-content">
                                                        <p class="text">contacto@yañezingenieria.cl</p>
                                                    </div>
                                                </div>

                                            </li>
                                        </ul>
                                        <ul class="social mt-5">
                                            <li>
                                                <a href="https://wa.me/+56936681814"
                                                    target="_blank"
                                                    rel="noopener noreferrer">
                                                    <i class="lni lni-whatsapp"></i>
                                                </a>
                                            </li>
                                           
                                            <li>
                                                <a href="https://www.instagram.com/yanezingenieriacivil/"
                                                        target="_blank"
                                                        rel="noopener noreferrer">
                                                    <i class="lni lni-instagram-original"></i>
                                                </a>
                                            </li>
                                           
                                        </ul>
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

export default Form;