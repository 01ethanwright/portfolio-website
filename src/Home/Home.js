import './Home.css';
import headshot from './headshot.jpg';
import { logEvent } from 'firebase/analytics';
import { analytics } from '../App';
import { useEffect, useState } from 'react';

function Home() {
    useEffect(() => {
        const logView = () => {
            logEvent(analytics, 'view_homepage');
        };

        logView();
    }, []);

    return (
        <div className='Home'>
            <div className='img-section'></div>
            <div className='introduction'>
                <div className='headshot'>
                    <img src={headshot} className='headshot-img' alt="Headshot" />
                </div>
                <div className='intro-text'>
                    <h1>Ethan Wright</h1>
                    <p>
                        I'm a recent graduate from West Virginia University looking for a job! 
                        I have an interest with working in Embedded Systems, but I would thoroughly enjoy 
                        working any type of Software Engineering Position.
                    </p>
                    <p>
                        Please feel free to contact me!
                    </p>
                </div>
            </div>
            <div className='youtube-video'>
                {/* YouTube video content here */}
            </div>
        </div>
    )
};

export default Home;