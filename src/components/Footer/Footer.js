import './Footer.css';

const Footer = () => {

    var dt = new Date();
    
    return (
        <footer className="footer-area footer-one">
            <div className="footer-content d-flex align-items-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="copyright text-center">
                                <p className="text">© {dt.getFullYear()} - Yáñez Ingeniería</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
