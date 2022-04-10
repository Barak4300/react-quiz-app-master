import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_black" style={{ marginTop: '100px' }}>
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue">It always seems impossible until it's done </div>
                <div className="footer_copyright">
                    Made with
                    <span style={{ color: 'crimson' }}>♥</span> By
                    <a href="https://www.rd.com/article/albert-einstein-quotes/" target="_blank" rel="noopener noreferrer"> Naor Yaakov Harel
                    </a>

                </div>
            </Fade>
        </footer>
    );
};

export default Footer;