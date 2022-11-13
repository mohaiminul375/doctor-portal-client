import React from 'react';

const AppointmentCard = ({service}) => {
    const {name,slots} = service;
    return (
        <div className="card shadow-xl">
        <div className="card-body text-center">
          <h2 className="card-title text-xl text-primary">{name}</h2>
          <p>{slots.length > 0? slots[0] : 'Try another day' }</p>
          <p>{slots.length} {slots.length > 1 ?'spaces' : 'space' } Available</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div> 
    );
};

export default AppointmentCard;