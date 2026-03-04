import React, { use } from 'react';
import TicketCard from './TicketCard';
import TaskStatus from './TaskStatus';

const CustomerTickets = ({loadServiceData,handleAddToCart,handleResolved,resolved,cart }) => {
    const services =use (loadServiceData)
    console.log(services);
    return (
        <div className='flex justify-between flex-1 p-4'>
        <div>
         <h2 className='text-lg font-bold text-gray-500  '>Customer Tickets</h2>
        <div className='grid grid-cols-2 gap-5 rounded-2xl '>
             {
            services.map(service =><TicketCard key={service.id} service ={service}  handleAddToCart ={handleAddToCart} ></TicketCard> )
         }
        </div>
        </div>
        <div className='p-2'>
        <h2 className='text-lg  font-bold text-gray-500'>Task Status</h2> 
      
       <div className='space-y-3 p-2 shadow '>

         <TaskStatus 
  cart={cart}
  handleResolved={handleResolved}
  resolved={resolved}
/>
       </div>
        </div>
        </div>
    );
};

export default CustomerTickets;