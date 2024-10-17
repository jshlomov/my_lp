import React from 'react';
import video from './bbb.mp4'

<style>
    
</style>
const Section1 = () => {
    return (
        <section id="Section1" style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: '#232323' }}>
            <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff', textAlign: 'center' }}>
                <h1 style={{fontSize:'60px'}}>Skyline Estates</h1>
                <h2 style={{fontSize:'30px', marginInline:'20px'}}>Skyline Estates: Expert real estate guidance to find your dream property. Experience seamless buying, selling, and investing with personalized care and trust.</h2>
            </div>
        </section>
    );
};

export default Section1;


