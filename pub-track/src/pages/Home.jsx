import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <img className="max-w-full h-auto" src="liceo.ico" alt="logo" />
      </div>
      <footer className=" flex flex-col items-center bg-red-800 h-20 w-full justify-center absolute bottom-0">
        <p className="text-white">© 2024 Liceo De Cagayan University. All rights reserved.</p>
      </footer>z
    </div>
  );
};

export default Home;
