import React from 'react';

const Dashboard = () => {
  return (
    <div className='dashboard flex flex-col justify-center items-center min-h-screen'>
      <div className='container mx-auto px-4 space-y-6'>
        <h1 className='text-5xl text-blue-500 antialiased'>Dashboard</h1>
        <p className='text-base text-gray-500 antialiased'>Welcome Mark</p>
      </div>
    </div>
  );
};

export default Dashboard;
