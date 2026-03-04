import React from 'react';

const Resolved = ({resolved,}) => {
    return (
        <div>
              <div className='space-y-3 p-3 shadow bg-amber-100 rounded-2xl'>

      <h2 className='font-semibold text-gray-600'>
        Resolved Tasks
      </h2>

      {resolved.length === 0 ? (
        <p className='text-gray-400 text-sm'>
          No resolved tasks yet.
        </p>
      ) : (
        resolved.map(ticket => (
          <div key={ticket.id} className='flex justify-between items-center'>
            <p className='bg-blue-200 px-2 py-1 rounded'>
              {ticket.title}
            </p>

          </div>
        ))
      )}

    </div>
        </div>
    );
};

export default Resolved;