import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const MainLayout = () => {
    return (
      <>
        <Navbar />
        <div className="md:min-h-[calc(100vh-244px)]">
          <Outlet />
        </div>
        <Footer />
      </>
    );
};

export default MainLayout;