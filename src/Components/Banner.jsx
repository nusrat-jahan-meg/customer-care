import React from 'react';

const Banner = ({cart,resolved}) => {
  return (
    <div className="p-8">
      
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="card bg-linear-to-r from-[#632EE3] to-[#9F62F2] w-full shadow-sm text-white">
          <div className="card-body items-center text-center">
            <h2 className="text-4xl md:text-5xl font-semibold">
              In-Progress
            </h2>
            <span className="text-3xl md:text-4xl font-bold">{cart}</span>
          </div>
        </div>

      
        <div className="card bg-linear-to-r from-[#54CF68] to-[#00827A] w-full shadow-sm text-white">
          <div className="card-body items-center text-center">
            <h2 className="text-4xl md:text-5xl font-semibold">
              Resolved
            </h2>
          <span className="text-3xl md:text-4xl font-bold">{resolved}</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;