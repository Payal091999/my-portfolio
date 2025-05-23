import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="pt-20 px-4"> {/* Prevent overlap with fixed Navbar */}
        <Outlet />
      </div>
    </>
  );
}
