import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <footer className="text-center">
        <span className="nunito">&copy;&nbsp;Track and Rally&nbsp;{(new Date().getFullYear())}</span>
      </footer>
    </div>
  )
}

export default Footer;
