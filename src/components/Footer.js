import React from "react";
import m from "../assets/team22/m.jpeg";
import sa from "../assets/team22/sa.jpeg";
import sk from "../assets/team22/sk.jpeg";

const footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-outer-wrapper">
          <div className="footer-inner-wrapper">
            <div className="footer-col">
              <h2>Contact Us</h2>
              <p>
                NIT JSR
                <br />
                Chak Ganjaria, C. G. City
                <br />
                Lucknow – 226002
              </p>
              <p>
                <a href="mailto:placements@nitjsr.ac.in">
                  placements@nitjsr.ac.in
                </a>
              </p>
            </div>
            <div className="footer-col-parent">
              <a href="https://www.linkedin.com/in/kushal-reddy-3101231b5/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                <img src={m} alt={"mritunjay"} className="footer-img"/>
              </a>
              <div className="footer-col">
                <p className="footer-contact-name">Mritunjay Kumar</p>
                <p className="footer-contact-position">Placement Coordinator</p>
                <p>
                  <a href="tel:+91-">+91-</a>
                </p>
                <p> 
                  <a href="mailto:placements@nitjsr.ac.in">
                    placements@nitjsr.ac.in
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-col-parent">
              <a href="https://www.linkedin.com/in/anu-kumari-401464197/" target="_blank" rel="noopener noreferrer">
              <img src={sa} alt={"Sadhvi"} className="footer-img"/>
              </a>
              <div className="footer-col">
                <p className="footer-contact-name">Sadhvi</p>
                <p className="footer-contact-position">Placement coordinator</p>
                <p>
                  <a href="tel:+91-">+91-</a>
                </p>
                <p> 
                  <a href="mailto:placements@nitjsr.ac.in">
                    placements@nitjsr.ac.in
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-col-parent">
              <a href="https://www.linkedin.com/in/anu-kumari-401464197/" target="_blank" rel="noopener noreferrer">
              <img src={sk} alt={"ShashiKant"} className="footer-img"/>
              </a>
              <div className="footer-col">
                <p className="footer-contact-name">ShashiKant</p>
                <p className="footer-contact-position">Placement coordinator</p>
                <p>
                  <a href="tel:+91-">+91-</a>
                </p>
                <p> 
                  <a href="mailto:placements@nitjsr.ac.in">
                    placements@nitjsr.ac.in
                  </a>
                </p>
              </div>
            </div>
            
                
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          ALL RIGHTS RESERVED © 2023. <strong>Anubhav Kharwar.</strong> (Developed
          & Managed By -{" "}
          <a href="https://www.linkedin.com/in/blurry-x-face/" target="none">
            Anubhav Kharwar
          </a>)
        </p>
      </div>
    </footer>
  );
};

export default footer;
