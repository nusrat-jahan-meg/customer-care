import React from 'react';

const TicketCard = ({service, handleAddToCart}) => {
    const {createdAt,description,customer,priority,status, title,id
}= service;
 const priorityColor = {
    'High': 'text-red-600 ',
    'Medium': 'text-yellow-600 ',
    'Low': 'text-green-600 '
 }
    return (
        <div onClick={()=> handleAddToCart(service)} className=' p-4 rounded shadow gap-2 '>
          <div className="card-body">
         <div className='flex justify-between gap-5'>
        <h2 className='text-xl font-bold truncate '>{title}</h2>
        <div>
            <button className={` rounded-full   px-2 py-1 text-sm  ${status ==='Open'?'bg-green-300 text-green-700':'bg-amber-400 text-amber-600'}`}>{status}</button>
          
        </div>
         </div>
         
  
    <p>{description}</p>
 
    <div className="card-actions flex gap-6 justify-between">
      <div className="flex justify-around gap-3">
         <p>#{id}</p>
         <span className={`${priorityColor[priority]} font-bold uppercase `}>{priority} </span>
      </div>
      <div className="">
          <div className="flex gap-3">
         <p>{customer}</p>
         <span>{createdAt}</span>
      </div>
      </div>
    </div>
  </div>
        </div>
    );
};

export default TicketCard;