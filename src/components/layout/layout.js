import * as React from 'react';
import { SSRProvider } from 'react-bootstrap';

import Header from './header';
// import Footer from './footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global-style/layout.css';

const Layout = ({ children }) => {
  return (
    <SSRProvider>
      <div className={`screen-orientation`}>
        <Header />
        <main className={`main-content`}>{children}</main>
        {/* <Footer /> */}
      </div>
    </SSRProvider>
  );
};

export default Layout;
