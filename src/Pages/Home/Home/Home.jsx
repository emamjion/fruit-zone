import React from 'react';
import Banner from '../Banner/Banner';
import DealOfTheDay from '../DealOfTheDay/DealOfTheDay';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner/>

            {/* Deal of the day */}
            <DealOfTheDay/>
        </div>
    );
};

export default Home;