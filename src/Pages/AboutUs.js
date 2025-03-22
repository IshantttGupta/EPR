import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h4 className="company-intro">About Our Company</h4>
        <h2 className="company-title">
          We are leaders in the <br /> Industrial Market Since 2018
        </h2>
        <p className="company-description">
          At <strong>NOASOFT</strong>, we have been at the forefront of the industrial market since our founding in 2018. We specialize in providing high-quality industrial solutions to businesses across various sectors. 
          Our commitment to excellence and innovation has earned us a reputation as a trusted partner for all your industrial needs.
        </p>
        <p className="company-description">
          We offer a wide range of products and services designed to help you optimize your operations, reduce costs, and improve efficiency. 
          From manufacturing and distribution to consulting and technical support, we are here to help your business succeed.
        </p>
        <p className="company-description">
          Our team of experts is dedicated to providing personalized service and ensuring that we meet the unique needs of each of our clients. 
          Whether you're looking for cutting-edge technology or reliable products, we have the expertise to deliver solutions that work for you.
        </p>

        <ul className="company-highlights">
          <li>Over 5 years of experience in the industry</li>
          <li>Industry-leading products and services</li>
          <li>Customer-focused approach with tailored solutions</li>
        </ul>
      </div>

      <div className="about-images">
        <img src="C:\Users\Ishant Gupta\OneDrive\Desktop\ERP clone\schoolaura\src\images\warehouse.jpg" alt="Warehouse" className="main-image" />
        <img src="/images/factory.jpg" alt="Factory" className="small-image" />
      </div>
    </div>
  );
};

export default AboutUs;
