import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../../BookingModal/BookingModal';
import AppointmentCard from './AppointmentCard';

const AvailableAppointments = ({selectedDate}) => {
    const [services,setServices] = useState([]);
    const [treatment,setTreatment] = useState(null);
    useEffect(()=>{
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
        .catch(error =>console.error(error))
    },[])
    return (
        <section className='mt-16'>
                <h2 className='text-center text-secondary font-bold'>Available Appointment on {format(selectedDate,'PPPP')}</h2>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    services.map(service => <AppointmentCard
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                    ></AppointmentCard> )
                }
                </div>
                <div>
                   {treatment && 
                   <BookingModal
                    treatment={treatment}
                    ></BookingModal>}
                </div>
        </section>
    );
};

export default AvailableAppointments;