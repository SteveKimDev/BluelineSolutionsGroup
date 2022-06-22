import * as React from 'react';

import Logo from './logo';

import * as FooterStyle from './global-style/footer.module.css';

const Footer = () => {
  return (
    <div className={FooterStyle.footerDiv}>
      <Logo />
      <p className={FooterStyle.footerCopyright}>
        Blueline Solutions Inc. <br />
        (dba Blueline Solutions Group)
        <br />
        &copy; {new Date().getFullYear()}, All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
