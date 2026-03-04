import React from 'react';

const TicketCard = ({service, handleAddToCart}) => {
    const {createdAt,description,customer,priority,status, title,id
}= service;
    return (
        <div onClick={()=> handleAddToCart(service)} className=' p-4 rounded shadow gap-2 '>
          <div className="card-body">
         <div className='flex justify-between gap-5'>
        <h2 className='text-xl font-bold truncate '>{title}</h2>
        <div>
            <button className='btn btn-secondary p-2 mr-2'>{status}</button>
        </div>
         </div>
         
  
    <p>{description}</p>
 
    <div className="card-actions flex gap-6 justify-between">
      <div className="flex justify-around gap-3">
         <p>#{id}</p>
         <span>{priority}</span>
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