import React from "react";
import { Link } from "react-router-dom";
import "../styling/footer.css";
function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                {/* <div style={{
                    margin: "40px",
                    height: "40px"
                }}>
                    <ul>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div> */}
                <div style={{ padding: "none", marginTop: "30px", }}
                //   style={{
                //     display: "flex",
                //     alignItems: "center",
                //     justifyContent: "center"
                //   }}
                >
                    <h2 style={{
                        display: "flex",
                        justifyContent: "center",
                        
                    }}>Social</h2>
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "10px"
                    }}>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
                            <i className="fa fa-instagram" />
                        </a>{" "}
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/">
                            <i className="fa fa-facebook" />
                        </a>{" "}
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                            <i className="fa fa-twitter" />
                        </a>{" "}
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/">
                            <i className="fa fa-youtube" />
                        </a>
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    height: '40px', 
                    margin: "20px",
                }}>
                    <a role="button" className="btn btn-link a-Size" href="tel:+15555551234">
                        <i className="fa fa-phone a-Size" /> 1-555-555-1234
        </a>
                    <br />
                    <a
                        role="button"
                        className="btn btn-link a-Size"
                        href="mailto:info@playerjamz.com"
                    >
                        <i className="fa fa-envelope-o a-Size" /> info@playerjamz.com
        </a>
                </div>
            </div>
        </footer>
    );
}
export default Footer;