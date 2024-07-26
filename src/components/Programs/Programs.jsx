import "./Programs.css";
import { programsData } from "../../data/programsData";
import { v4 as uuidv4 } from "uuid";
import RightArrow from '../../assets/rightArrow.png'
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      {/* header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="programs-categories">
        {programsData.map((program) => (
          <div className="category" key={uuidv4()}>
            <span>{program.image}</span>
            <span>{program.heading}</span>
            <span className="details">{program.details}</span>
            <button className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
