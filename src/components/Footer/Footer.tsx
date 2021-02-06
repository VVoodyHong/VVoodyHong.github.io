import React from 'react';
import './Footer.css';
import emoji from 'react-easy-emoji';

function Footer() {
    return (
        <footer>
            <div className="inner">

                <div className="footer-content">
                    <p>{"Made By Jeongwook Hong"}</p>
                    <p style={{marginTop: "15px"}}>Theme By ReactFolio</p>
                </div>

            </div>
        </footer>
    );
}
export default Footer;