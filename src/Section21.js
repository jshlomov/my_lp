import React from 'react';
import './Section2.css'; // Optional: if using an external CSS file
import img1 from './imgs/pic1.jpeg';
import img2 from './imgs/pic2.jpeg';
import img3 from './imgs/pic3.jpeg';

const Section2 = () => {
    return (
        <section id="Section2" style={{ padding: '50px 20px', backgroundColor: '#f0f0f0' }}>
            <div className="image-container">
                <img
                    src={img1}
                    alt="Description 1"
                    className="responsive-image"
                />
                <img
                    src={img2}
                    alt="Description 2"
                    className="responsive-image"
                />
                <img
                    src={img3}
                    alt="Description 3"
                    className="responsive-image"
                />
                <img
                    src={img2}
                    alt="Description 1"
                    className="responsive-image"
                />
                <img
                    src={img3}
                    alt="Description 2"
                    className="responsive-image"
                />
                <img
                    src={img1}
                    alt="Description 3"
                    className="responsive-image"
                />
            </div>
        </section>
    );
};

export default Section2;
