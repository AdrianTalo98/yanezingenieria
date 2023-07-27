import { useEffect } from 'react';
import './Proyectos.css';



const Proyectos = () => {
    return (
        <div id='proyectos' className='proyectos'>
            <section class="portfolio-area portfolio-one">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xxl-6 col-xl-7 col-lg-8">
                            <div class="section-title text-center mb-5">
                                <h2 class="mb-3 fw-bold" style={{color: '#E6E6E6'}}>Nuestros Proyectos</h2>
                                <p class="text-lg" style={{color: '#E6E6E6'}}>
                                    Morem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                                    quam suscipit distinctio optio, quaerat consequatur labore
                                    pariatur rerum.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div class="row grid">
                        <div class="col-lg-4 col-sm-6" data-filter="branding">
                            <div class="portfolio-style-one text-center">
                                <div class="portfolio-image">
                                    <img
                                        src="https://cdn.ayroui.com/1.0/images/portfolio/portfolio-1/pf1.jpg"
                                        alt="image"
                                    />
                                </div>
                                <div class="portfolio-overlay d-flex align-items-center">
                                    <div class="portfolio-content">
                                        <div class="portfolio-icon">
                                            <a
                                                class="image-popup-two glightbox"
                                                href="https://cdn.ayroui.com/1.0/images/portfolio/portfolio-1/pf1.jpg"
                                            >
                                                <i class="lni lni-zoom-in"></i>
                                            </a>
                                        </div>
                                        <div class="portfolio-text">
                                            <h4 class="portfolio-title">
                                                <a href="javascript:void(0)">Graphics Design</a>
                                            </h4>
                                            <p class="text">
                                                Short description for the ones who look for something new.
                                                Awesome!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-sm-6" data-filter="marketing">
                            <div class="portfolio-style-one text-center">
                                <div class="portfolio-image">
                                    <img
                                        src="https://cdn.ayroui.com/1.0/images/portfolio/portfolio-1/pf2.jpg"
                                        alt="image"
                                    />
                                </div>
                                <div class="portfolio-overlay d-flex align-items-center">
                                    <div class="portfolio-content">
                                        <div class="portfolio-icon">
                                            <a
                                                class="image-popup-two glightbox"
                                                href="https://cdn.ayroui.com/1.0/images/portfolio/portfolio-1/pf2.jpg"
                                            >
                                                <i class="lni lni-zoom-in"></i>
                                            </a>
                                        </div>
                                        <div class="portfolio-text">
                                            <h4 class="portfolio-title">
                                                <a href="javascript:void(0)">Graphics Design</a>
                                            </h4>
                                            <p class="text">
                                                Short description for the ones who look for something new.
                                                Awesome!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-4 col-sm-6" data-filter="branding">
                            <div class="portfolio-style-one text-center">
                                <div class="portfolio-image">
                                    <img
                                        src="https://cdn.ayroui.com/1.0/images/portfolio/portfolio-1/pf3.jpg"
                                        alt="image"
                                    />
                                </div>
                                <div class="portfolio-overlay d-flex align-items-center">
                                    <div class="portfolio-content">
                                        <div class="portfolio-icon">
                                            <a
                                                class="image-popup-two glightbox"
                                                href="https://cdn.ayroui.com/1.0/images/portfolio/portfolio-1/pf3.jpg"
                                            >
                                                <i class="lni lni-zoom-in"></i>
                                            </a>
                                        </div>
                                        <div class="portfolio-text">
                                            <h4 class="portfolio-title">
                                                <a href="javascript:void(0)">Graphics Design</a>
                                            </h4>
                                            <p class="text">
                                                Short description for the ones who look for something new.
                                                Awesome!
                                            </p>
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

export default Proyectos;