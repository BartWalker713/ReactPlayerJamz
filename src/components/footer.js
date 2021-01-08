import React from 'react';
import { Link } from 'react-router-dom';
import "../styling/footer.css";

function Footer(props) {
    return (
            <div className="site-footer">
                <div className="container">
                    <div className="row">
                        <ul className="list-unstyled">
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                   
                    <div className="col-6 col-sm-3 text-center">
                   
                        <h2>Social</h2>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube" /></a>
                        </div>
                    
                    <div className="col-sm-4 text-center">
                        <a role="button" className="btn btn-link" href="tel:+15555551234"><i className="fa fa-phone" /> 1-555-555-1234</a><br />
                        <a role="button" className="btn btn-link" href="mailto:info@playerjamz.com"><i className="fa fa-envelope-o" /> info@playerjamz.com</a>
                    </div>
                </div>
            </div>
    )
}
export default Footer;