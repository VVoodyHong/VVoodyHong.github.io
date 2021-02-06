import React from 'react';
import './Contact.css';
import { contactInfo } from '../../portfolio';
import Social from '../Social/Social';

function Contact() {
    const Fade: any = require('react-reveal/Fade');
    return (
        <Fade bottom duration={800}>
        <section className="section--contact" id="contact">

            <div className="contact-title">
                <p>{contactInfo.title}</p>
            </div>
            <div className="inner">
                
                <div className="profile-img">
                    <img src={require("../../assets/profileImg.jpg")} alt="profile" />
                </div>
                <div className="wrapper-inner">
                    <div className="contact-subtitle" style = {{fontWeight: 'bold'}}>
                        <p>知之者不如好之者, 好之者不如樂之者</p>
                    </div>
                    <div className="contact-introduce" style = {{fontSize: 20}}>
                        <p>코딩을 알고, 좋아하며,</p><br/>
                        <p>즐기는 비전공 개발자입니다.</p><br/>
                        <p>겸손한 마음가짐으로</p><br/>
                        <p>늘 배우려는 자세를 취하는 것이</p><br/>
                        <p>가장 중요한 덕목이라고 생각합니다.</p><br/>
                    </div>
                    <div className="social-links">
                        <Social />
                    </div>
                </div>
                
            </div>
        </section>
        </Fade>
    );
}
export default Contact;