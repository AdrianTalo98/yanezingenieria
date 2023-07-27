import { useState } from 'react';
import Alert from './Alert';
import './Form.css';
import { ExternalLink } from 'react-external-link';


const Form = () => {





    const enviar = (e) => {
        e.preventDefault()

        //const token = 'd19d9f02-21a9-4ab3-b04c-f93fa3ef3a97';
        const token = 'asdas';

        const config = {
            SecureToken: token,
            To: 'mail@gmail.com',
            From: 'form@mailpropio.cl',
            Subject: `${mensaje.motivo}`,
            Body: `Nombre : ${mensaje.nombre_apellido} <br/> Correo : ${mensaje.correo} <br/> Telefono : ${mensaje.telefono} <br/> Motivo : ${mensaje.motivo} <br/> Mensaje : ${mensaje.mensaje}`
        }


        if (window.Email) {

            window.Email.send(config).then(() => setisSend(true));
            setMensaje({
                nombre_apellido: '',
                correo: '',
                telefono: '',
                motivo: '',
                mensaje: ''
            })


        }
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
                                <form action="#">
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
                                <section className="client-logo-area client-logo-one" id="contacto" data-aos="fade-left" data-aos-duration="1500">
                                
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-12 col-sm-12">
                                                <div className="single-client text-center">
                                                    <img src="/assets/user.svg" alt="Image" />
                                                </div>
                                                <div className="single-client text-center">
                                                    <h5>
                                                        Nombre
                                                    </h5>
                                                    <p>
                                                        Name Name
                                                    </p>
                                                    <p>
                                                        Gerente Comercial.
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="col-lg-4 col-md-12 col-sm-12">
                                                <div className="single-client text-center">
                                                    <img src="/assets/phone.svg" alt="Image" />
                                                </div>
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
                                            <div className="col-lg-4 col-md-12 col-sm-12">
                                                <div className="single-client text-center">
                                                    <img src="/assets/envelope.svg" alt="Image" />
                                                </div>
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

                        </div>

                    </div>


                </div>

            </section>
        </div>

    )
}

export default Form;