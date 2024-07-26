import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "/src/assets/whiteTick.png";
import arrow from "../../assets/rightArrow.png";
import { v4 as uuidv4 } from "uuid";

const Plans = () => {
  return (
    <div className="Plans-container">
      <div className="blur plans-blur-1"></div>
      <div className="blur plans-blur-2"></div>
      <div className="programs-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan) => (
          <div className="plan" key={uuidv4()}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature) => (
                <div className="feature" key={uuidv4()}>
                  <img src={whiteTick} alt="" />
                  <span key={uuidv4()}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>
                See more benefits <img src={arrow} alt="" />
              </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
