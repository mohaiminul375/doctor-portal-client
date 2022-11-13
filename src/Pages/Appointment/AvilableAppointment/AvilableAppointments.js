import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentCard from './AppointmentCard';

const AvailableAppointments = ({selectedDate}) => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(error =>console.error(error))
    },[])
    return (
        <section className='mt-16'>
                <h2 className='text-center text-secondary font-bold'>Available Appointment on {format(selectedDate,'PPPP')}</h2>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <AppointmentCard
                    key={service._id}
                    service={service}
                    ></AppointmentCard> )
                }
                </div>
        </section>
    );
};

export default AvailableAppointments;