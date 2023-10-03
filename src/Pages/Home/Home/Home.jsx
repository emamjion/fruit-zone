import React from 'react';
import Banner from '../Banner/Banner';
import DealOfTheDay from '../DealOfTheDay/DealOfTheDay';
import MeetTheTeam from '../MeetTheTeam/MeetTheTeam';

const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner/>

            {/* Deal of the day */}
            <DealOfTheDay/>
            
            
            {/* Meet the team section */}
            <MeetTheTeam/>
        </div>
    );
};

export default Home;