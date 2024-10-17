import React, { useEffect } from "react";
import img1 from "./imgs/b1.jpeg";
import img2 from "./imgs/b2.jpeg";
import img3 from "./imgs/b3.jpeg";
import img4 from "./imgs/b4.jpeg";
import img5 from "./imgs/b5.jpeg";
import img6 from "./imgs/b6.jpeg";
import "./Section2.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const images = [
    { src: img1, alt: "Image 1", description: "Beautiful interior design." },
    { src: img2, alt: "Image 2", description: "Spacious living area." },
    { src: img3, alt: "Image 3", description: "Modern kitchen setup." },
    { src: img4, alt: "Image 4", description: "Luxurious bedroom." },
    { src: img5, alt: "Image 5", description: "Elegant bathroom design." },
    { src: img6, alt: "Image 6", description: "Stunning outdoor view." },
  ];

  return (
    <section
      id="Section2"
      style={{ padding: "50px", backgroundColor: "#f5f5f5" }}
    >
      <h2 style={{ textAlign: "center", fontSize:'35px' }}>Our Projects</h2>
      <div className="imageGallery">
        {images.map((image, index) => (
          <div
            className="imageContainer"
            key={index}
            data-aos="fade-up"
          >
            <img src={image.src} alt={image.alt} className="galleryImage" />
            <div className="overlay">
              <div className="text">{image.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
