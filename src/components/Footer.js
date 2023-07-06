import React from "react";

import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <section>
      <footer class="top">
        
        <div class="links">
          <div class="two">
            <h2>Platform</h2>
            <Link>Directus Core</Link>
            <Link>Open Data Platform</Link>
            <Link>Feature List</Link>
            <Link>Road Map</Link>
            <Link>Marketplace</Link>
          </div>
          <div class="three">
            <h2>Cloud</h2>
            <Link>Dashboard</Link>
            <Link>Register</Link>
            <Link>Pricing</Link>
            <Link>System Status</Link>
            <Link>Partner Program</Link>
          </div>
        </div>
      </footer>
      <footer class="bottom">
        <div class="legal">
          <span> © 2023 All rights reserved </span>
          <Link> License </Link>
          <Link> Terms </Link>
          <Link> Privacy </Link>
        </div>
       
      </footer>
    </section>
  );
};

export default Footer;
