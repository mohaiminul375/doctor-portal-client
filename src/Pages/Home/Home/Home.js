import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';

const Home = () => {
    return (
        <div className='mx-6'>
           <Banner></Banner> 
           <InfoCards></InfoCards>
        </div>
    );
};

export default Home;