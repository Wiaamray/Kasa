import React from 'react'
import "./Footer.css" ;

function Footer() {
  return (
    <div className='footer'>
    <div className='footer__logo'>
        <img src="Logo_footer.png" alt= "logo" width="122" />
    </div>
    <div className='footer__text'> © 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
