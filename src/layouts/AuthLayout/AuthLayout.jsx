import React from 'react';
import Navbar from '../components/Navbar';

const DashboardLayout = ({ children, ...rest }) => (
  <>
    <Navbar />
    <div className="page page-dashboard">
      <div className="main">{children}</div>
    </div>
  </>
    );
export default DashboardLayout;
