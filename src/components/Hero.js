// // import React from 'react';
// // import './Hero.css';

// // const Hero = () => {
// //   return (
// //     <div className="hero">
// //       {/* Hero Content */}
// //       <div className="hero-content">
// //         <h1>
// //           Ultimate <br />
// //           Asset <br />
// //           Management Solutions: <br />
// //           <span className="highlight">NOASOFT</span>
// //         </h1>
// //         <div className="hero-description">
// //           <h3>Gain Full Control Over Your Assets</h3>
// //           <p>
// //             Transform Asset Inventory, Tracking, and <br />
// //             Management With Our Cutting-Edge Solutions. <br />
// //             Ensure Complete Control Over the Compliance <br />
// //             Related to Asset Register.
// //           </p>
// //         </div>
// //         <div className="hero-buttons">
// //           <button className="request-demo-btn">Request Demo</button>
// //           <button className="play-btn">▶️</button>
// //         </div>
// //       </div>

// //       {/* Yellow Circle */}
// //       <div className="yellow-circle"></div>

// //       {/* Core Feature Cards */}
// //       <div className="features-container">
// //         <div className="feature-card">
// //           <div className="icon">📋</div>
// //           <h3>Mark Attendance Easily</h3>
// //           <p>Effortless Attendance Simplifying the Process for Seamless Record-keeping</p>
// //         </div>

// //         <div className="feature-card">
// //           <div className="icon">🎒</div>
// //           <h3>Admission With Easy Steps</h3>
// //           <p>Simplified Enrollment Streamlined Process for Hassle-Free Admission</p>
// //         </div>

// //         <div className="feature-card">
// //           <div className="icon">📍</div>
// //           <h3>Real-time School Bus Tracking</h3>
// //           <p>Effortless Security Real-Time School Bus Tracking for Peace of Mind</p>
// //         </div>

// //         <div className="feature-card">
// //           <div className="icon">📄</div>
// //           <h3>Save & Share Document With Staff Member</h3>
// //           <p>Effortless Secure Your Records & Document with SchoolAura Drive</p>
// //         </div>
// //       </div>

// //       {/* Stats Section */}
// //       <div className="stats-container">
// //         <div className="stat">
// //           <h2>127<span>+</span></h2>
// //           <p>SCHOOLS</p>
// //         </div>
// //         <div className="stat">
// //           <h2>75.5k<span>+</span></h2>
// //           <p>STUDENTS</p>
// //         </div>
// //         <div className="stat">
// //           <h2>24/7<span>+</span></h2>
// //           <p>OUR SUPPORT</p>
// //         </div>
// //         <div className="stat">
// //           <h2>13<span>+</span></h2>
// //           <p>STATES</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Hero;

// import React, { useEffect, useRef, useState } from 'react';
// import './Hero.css';

// const Hero = () => {
//   const cardRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (cardRef.current) {
//       observer.observe(cardRef.current);
//     }

//     return () => {
//       if (cardRef.current) {
//         observer.unobserve(cardRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div className="hero">
//       {/* Existing Hero Content */}
//       <div className="hero-content">
//         <h1>
//           Ultimate <br />
//           Asset <br />
//           Management Solutions: <br />
//           <span className="highlight">NOASOFT</span>
//         </h1>
//         <div className="hero-description">
//           <h3>Gain Full Control Over Your Assets</h3>
//           <p>
//             Transform Asset Inventory, Tracking, and <br />
//             Management With Our Cutting-Edge Solutions. <br />
//             Ensure Complete Control Over the Compliance <br />
//             Related to Asset Register.
//           </p>
//         </div>
//         <div className="hero-buttons">
//           <button className="request-demo-btn">Request Demo</button>
//           <button className="play-btn">▶️</button>
//         </div>
//       </div>

//       {/* Yellow Circle */}
//       <div className="yellow-circle"></div>

//       {/* Core Feature Cards */}
//       <div className="features-container">
//         <div className="feature-card">
//           <div className="icon">📋</div>
//           <h3>Mark Attendance Easily</h3>
//           <p>Effortless Attendance Simplifying the Process for Seamless Record-keeping</p>
//         </div>

//         <div className="feature-card">
//           <div className="icon">🎒</div>
//           <h3>Admission With Easy Steps</h3>
//           <p>Simplified Enrollment Streamlined Process for Hassle-Free Admission</p>
//         </div>

//         <div className="feature-card">
//           <div className="icon">📍</div>
//           <h3>Real-time School Bus Tracking</h3>
//           <p>Effortless Security Real-Time School Bus Tracking for Peace of Mind</p>
//         </div>

//         <div className="feature-card">
//           <div className="icon">📄</div>
//           <h3>Save & Share Document With Staff Member</h3>
//           <p>Effortless Secure Your Records & Document with SchoolAura Drive</p>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="stats-container">
//         <div className="stat">
//           <h2>127<span>+</span></h2>
//           <p>SCHOOLS</p>
//         </div>
//         <div className="stat">
//           <h2>75.5k<span>+</span></h2>
//           <p>STUDENTS</p>
//         </div>
//         <div className="stat">
//           <h2>24/7<span>+</span></h2>
//           <p>OUR SUPPORT</p>
//         </div>
//         <div className="stat">
//           <h2>13<span>+</span></h2>
//           <p>STATES</p>
//         </div>
//       </div>

//       {/* Scroll-Triggered Card */}
//       <div ref={cardRef} className={`scroll-card ${isVisible ? 'visible' : ''}`}>
//         <div className="card-image">
//           <img src="/assets/your-image.png" alt="Feature Illustration" />
//         </div>
//         <div className="card-content">
//           <h2>Empowering Educators Staff Management</h2>
//           <ul>
//             <li>✔ Simplify staff addition to school rosters.</li>
//             <li>✔ Track staff attendance effortlessly.</li>
//             <li>✔ Manage staff with seamless admin tools.</li>
//           </ul>
//           <button className="request-demo-btn">Request Demo</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";

const Card = ({ title, content, image, isVisible }) => {
  return (
    <div className={`scroll-card ${isVisible ? "visible" : ""}`}>
      <div className="card-image">
        <img src={image} alt="Feature" />
      </div>
      <div className="card-content">
        <h2>{title}</h2>
        <ul>
          {content.map((item, index) => (
            <li key={index}>✔ {item}</li>
          ))}
        </ul>
        <button className="request-demo-btn">Request Demo</button>
      </div>
    </div>
  );
};

const Hero = () => {
  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => ({
              ...prev,
              [entry.target.dataset.index]: true,
            }));
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const cardData = [
    {
      title: "Empowering Educators: Staff Management",
      content: [
        "Simplify the process of adding staff members",
        "Track attendance & generate reports",
        "Seamless staff roster management",
      ],
      image: "/assets/image-1.png",
    },
    {
      title: "Effortless Attendance Tracking",
      content: [
        "Automate daily attendance tracking",
        "Generate insightful attendance reports",
        "Reduce paperwork & manual errors",
      ],
      image: "/assets/image-2.png",
    },
    {
      title: "Seamless Administration",
      content: [
        "Centralized dashboard for admin tasks",
        "Improved communication with staff",
        "Enhance operational efficiency",
      ],
      image: "/assets/image-3.png",
    },
    {
      title: "Easy Roster Addition",
      content: [
        "Add new students & staff easily",
        "Customizable roster settings",
        "Effortless scheduling management",
      ],
      image: "/assets/image-4.png",
    },
  ];

  return (
    <div className="hero">
      {/* Hero Content */}
      <div className="hero-content">
        <h1>
          Ultimate <br />
          Asset <br />
          Management Solutions: <br />
          <span className="highlight">NOASOFT</span>
        </h1>
        <div className="hero-description">
          <h3>Gain Full Control Over Your Assets</h3>
          <p>
            Transform Asset Inventory, Tracking, and <br />
            Management With Our Cutting-Edge Solutions. <br />
            Ensure Complete Control Over the Compliance <br />
            Related to Asset Register.
          </p>
        </div>
        <div className="hero-buttons">
          <button className="request-demo-btn">Request Demo</button>
          <button className="play-btn">▶️</button>
        </div>
      </div>

      {/* Yellow Circle */}
      <div className="yellow-circle"></div>

      {/* Features Section */}
      <div className="features-container">
        <div className="feature-card">
          <div className="icon">📋</div>
          <h3>Mark Attendance Easily</h3>
          <p>Effortless Attendance Simplifying the Process for Seamless Record-keeping</p>
        </div>

        <div className="feature-card">
          <div className="icon">🎒</div>
          <h3>Admission With Easy Steps</h3>
          <p>Simplified Enrollment Streamlined Process for Hassle-Free Admission</p>
        </div>

        <div className="feature-card">
          <div className="icon">📍</div>
          <h3>Real-time School Bus Tracking</h3>
          <p>Effortless Security Real-Time School Bus Tracking for Peace of Mind</p>
        </div>

        <div className="feature-card">
          <div className="icon">📄</div>
          <h3>Save & Share Document With Staff Member</h3>
          <p>Effortless Secure Your Records & Document with SchoolAura Drive</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat">
          <h2>127<span>+</span></h2>
          <p>SCHOOLS</p>
        </div>
        <div className="stat">
          <h2>75.5k<span>+</span></h2>
          <p>STUDENTS</p>
        </div>
        <div className="stat">
          <h2>24/7<span>+</span></h2>
          <p>OUR SUPPORT</p>
        </div>
        <div className="stat">
          <h2>13<span>+</span></h2>
          <p>STATES</p>
        </div>
      </div>

      {/* Scroll-Triggered Cards */}
      <div className="scroll-cards-container">
        {cardData.map((card, index) => (
          <div
            ref={(el) => (cardRefs.current[index] = el)}
            key={index}
            data-index={index}
          >
            <Card {...card} isVisible={visibleCards[index]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;

