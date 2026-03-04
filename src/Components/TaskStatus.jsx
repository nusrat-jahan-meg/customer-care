import React from 'react';

const TaskStatus = ({service}) => {
        const {title}=service;
    return (
        <div className='text-center bg-green-50 gap-4 rounded-2xl p-2'>
           
            <div>
                <h4>{title}</h4>
                <button className='btn btn-primary'>Complete</button>
            </div>
        </div>
    );
};

export default TaskStatus;