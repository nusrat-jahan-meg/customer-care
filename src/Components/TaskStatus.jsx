import React from 'react';

const TaskStatus = ({ handleResolved, resolved, cart }) => {
    return (
        <div>
            <div className='text-center  gap-4 rounded-2xl p-4'>
            
                <div className='mb-6'>
                  
                    {cart.length === 0 ? (
                        <p className='text-gray-500 text-sm'>Select a ticket to add Task status</p>
                    ) : (
                        cart.map(service => (
                            <div 
                                key={service.id} 
                                className=' space-y-3 justify-between items-center bg-white p-3 rounded-lg shadow-sm mb-2'
                            >
                                <h4 className='font-medium truncate flex-1 text-left'>{service.title}</h4>
                                <button 
                                    onClick={() => handleResolved(service)} 
                                    className='px-4 py-1 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors text-sm ml-2'
                                >
                                    Complete
                                </button>
                            </div>
                        ))
                    )}
                </div>

               
                <div className='mt-4   pt-4'>
                  <h2 className='text-gray-600 font-bold space-y-2 p-2'>Resolved Task</h2>
                    {resolved.length === 0 ? (

                        <p className='text-gray-500 text-sm'>No resolved tasks yet .</p>
                    ) : (
                        resolved.map(item => (
                            <div 
                                key={item.id} 
                                className='bg-blue-50 p-2 rounded-lg shadow-sm mb-2 text-left'
                            >
                                <p className=' font-medium'>{item.title}</p>
                           
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default TaskStatus;