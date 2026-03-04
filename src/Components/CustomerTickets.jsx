import React, { use } from 'react';
import TicketCard from './TicketCard';
import TaskStatus from './TaskStatus';

const CustomerTickets = ({loadServiceData,handleAddToCart}) => {
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
        <p> Select a ticket to add to Task status</p>
       <div className='space-y-3 p-2 shadow bg-amber-100 rounded-2xl'>
         {
            services.map(service=> <TaskStatus key={service.id} service ={service} ></TaskStatus>)
        }
       </div>
        </div>
        </div>
    );
};

export default CustomerTickets;