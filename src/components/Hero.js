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


// import React, { useEffect, useRef, useState } from "react";
// import "./Hero.css";

// const Card = ({ title, content, image, isVisible }) => {
//   return (
//     <div className={`scroll-card ${isVisible ? "visible" : ""}`}>
//       <div className="card-image">
//         <img src={image} alt="Feature" />
//       </div>
//       <div className="card-content">
//         <h2>{title}</h2>
//         <ul>
//           {content.map((item, index) => (
//             <li key={index}>✔ {item}</li>
//           ))}
//         </ul>
//         <button className="request-demo-btn">Request Demo</button>
//       </div>
//     </div>
//   );
// };

// const Hero = () => {
//   const cardRefs = useRef([]);
//   const [visibleCards, setVisibleCards] = useState({});

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setVisibleCards((prev) => ({
//               ...prev,
//               [entry.target.dataset.index]: true,
//             }));
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     cardRefs.current.forEach((ref) => {
//       if (ref) observer.observe(ref);
//     });

//     return () => {
//       cardRefs.current.forEach((ref) => {
//         if (ref) observer.unobserve(ref);
//       });
//     };
//   }, []);

//   const cardData = [
//     {
//       title: "Ultimate fixed Assets Softeare",
//       content: [
//         "Assets Requistion",
//         "PO Module",
//         "Acquisition Module",
//         "Depreciation Module",
//         "Know More"
//       ],
//       image: "/assets/image-1.png",
//     },
//     {
//       title: "Physical verification and Tagging software",
//       content: [
//         "Bar code/Qr Code",
//         "RFID",
//         "Mobile App",
//         "Real time Verification"
//       ],
//       image: "/assets/image-2.png",
//     },
//     {
//       title: "Maintainance Software",
//       content: [
//         "Preventive maintaince",
//         "Maintaince Schedule",
//         "Reminder",
//       ],
//       image: "/assets/image-3.png",
//     },
//     {
//       title: "Noa CRM Software",
//       content: [
//         "Assets Requistion",
//         "PO Module",
//         "Acquisition Module",
//         "Depreciation Module"
//       ],
//       image: "/assets/image-4.png",
//     },
//   ];

//   return (
//     <div className="hero">
//       {/* Hero Content */}
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

    //   {/* Features Section */}
    //   <div className="features-container">
    //     <div className="feature-card">
    //       <div className="icon">📋</div>
    //       <h3>Mark Attendance Easily</h3>
    //       <p>Effortless Attendance Simplifying the Process for Seamless Record-keeping</p>
    //     </div>

    //     <div className="feature-card">
    //       <div className="icon">🎒</div>
    //       <h3>Admission With Easy Steps</h3>
    //       <p>Simplified Enrollment Streamlined Process for Hassle-Free Admission</p>
    //     </div>

    //     <div className="feature-card">
    //       <div className="icon">📍</div>
    //       <h3>Real-time School Bus Tracking</h3>
    //       <p>Effortless Security Real-Time School Bus Tracking for Peace of Mind</p>
    //     </div>

    //     <div className="feature-card">
    //       <div className="icon">📄</div>
    //       <h3>Save & Share Document With Staff Member</h3>
    //       <p>Effortless Secure Your Records & Document with SchoolAura Drive</p>
    //     </div>
    //   </div>

    //   {/* Stats Section */}
    //   <div className="stats-container">
    //     <div className="stat">
    //       <h2>127<span>+</span></h2>
    //       <p>SCHOOLS</p>
    //     </div>
    //     <div className="stat">
    //       <h2>75.5k<span>+</span></h2>
    //       <p>STUDENTS</p>
    //     </div>
    //     <div className="stat">
    //       <h2>24/7<span>+</span></h2>
    //       <p>OUR SUPPORT</p>
    //     </div>
    //     <div className="stat">
    //       <h2>13<span>+</span></h2>
    //       <p>STATES</p>
    //     </div>
    //   </div>

//       {/* Scroll-Triggered Cards */}
//       <div className="scroll-cards-container">
//         {cardData.map((card, index) => (
//           <div
//             ref={(el) => (cardRefs.current[index] = el)}
//             key={index}
//             data-index={index}
//           >
//             <Card {...card} isVisible={visibleCards[index]} />
//           </div>
//         ))}
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

// FAQ Component
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is NOASOFT?", answer: "NOASOFT is an advanced asset management software designed to help businesses track and manage their assets efficiently." },
    { question: "How can I request a demo?", answer: "You can request a demo by clicking the 'Request Demo' button on our homepage and filling out the form." },
    { question: "Is NOASOFT compatible with mobile devices?", answer: "Yes, NOASOFT is fully responsive and works seamlessly on mobile, tablets, and desktops." },
    { question: "What industries can use NOASOFT?", answer: "NOASOFT is suitable for schools, businesses, healthcare, and any organization needing asset management solutions." }
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              {faq.question}
              <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
            </button>
            <p className="faq-answer">{faq.answer}</p>
          </div>
        ))}
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
      title: "Ultimate Fixed Assets Software",
      content: ["Assets Requisition", "PO Module", "Acquisition Module", "Depreciation Module", "Know More"],
      image: "/assets/image-1.png",
    },
    {
      title: "Physical Verification and Tagging Software",
      content: ["Bar Code/QR Code", "RFID", "Mobile App", "Real-time Verification"],
      image: "/assets/image-2.png",
    },
    {
      title: "Maintenance Software",
      content: ["Preventive Maintenance", "Maintenance Schedule", "Reminder"],
      image: "/assets/image-3.png",
    },
    {
      title: "Noa CRM Software",
      content: ["Assets Requisition", "PO Module", "Acquisition Module", "Depreciation Module"],
      image: "/assets/image-4.png",
    },
  ];

  return (
    <div className="hero">
      {/* Hero Section */}
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
          <h3>Save & Share Documents With Staff Members</h3>
          <p>Effortless Secure Your Records & Documents with SchoolAura Drive</p>
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

      {/* Scroll Cards Section */}
      <div className="scroll-cards-container">
        {cardData.map((card, index) => (
          <div ref={(el) => (cardRefs.current[index] = el)} key={index} data-index={index}>
            <Card {...card} isVisible={visibleCards[index]} />
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
};

export default Hero;

