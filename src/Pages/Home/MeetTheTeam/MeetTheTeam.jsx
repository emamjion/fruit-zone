import React, { useEffect, useState } from 'react';
import './MeetTheTeam.css';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

const MeetTheTeam = () => {
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch('team.json').then(res => res.json()).then(data => setTeams(data))
    }, [])
    
    return (
        <div className='mt-[140px] meet-background rounded-lg'>
            <div className='text-white flex items-center justify-center flex-col text-center px-4 md:px-4'>
                <h1 className='mt-12 md:mt-24 text-4xl font-semibold mb-4'>Meet the team section</h1>
                <p>
                    Contrary to popular belief, is not simply random text. It has roots in a piece of classical <br /> Latin literature from 45 BC, making it over 2000 years old.
                </p>
            </div>
            <div className='flex items-center justify-center flex-wrap gap-24 mt-16 pb-8 md:pb-0'>
                {
                    teams.map(team => <div 
                        key={team.id}
                        className='text-white px-1 md:px-1'
                    >
                        <img src={team.image} className='w-28 md:w-32 mx-auto md:mx-auto' />
                        <h1 className='text-center mt-7 text-xl font-medium'>{team.name}</h1>
                        <p className='text-center my-2 text-sm text-[#d3d3d3]'>{team.profession}</p>
                        <div className='flex items-center justify-center gap-4 mt-4'>
                            <span className='w-6 h-6 bg-[#F85559] text-md flex items-center justify-center rounded-full'>< FaFacebookF /></span>
                            <span className='w-6 h-6 bg-[#F85559] text-md flex items-center justify-center rounded-full'>< FaTwitter /></span>
                            <span className='w-6 h-6 bg-[#F85559] text-md flex items-center justify-center rounded-full'>< FaLinkedinIn /></span>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MeetTheTeam;