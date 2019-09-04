import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../../../style';

const Navbar = () => (
  <div>
      <Navigation>
        <ul>
          <li><Link to="/">Trainee</Link></li>
          <li><Link to="/text-field-demo">Text Field Demo</Link></li>
          <li><Link to="/input-demo">Input Demo</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>     
      </Navigation>
  </div>
    )
export default Navbar;
