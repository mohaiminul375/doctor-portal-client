import React from "react";

const AppointmentCard = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-xl font-bold text-secondary">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
        </p>
        <div className="card-actions justify-center">
          {/* <button className="btn ">Book Appointment</button> */}
          <label
           htmlFor="booking-modal"
            className="btn btn-primary text-white"
            onClick={()=>setTreatment(service)}
            >
            Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
