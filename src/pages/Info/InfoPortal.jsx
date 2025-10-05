import { NavLink } from "react-router-dom";
import infoImage from "../../assets/images/info.svg";
import folder1 from "../../assets/icons/folder-1.svg";
import folder2 from "../../assets/icons/folder-2.svg";
import folder3 from "../../assets/icons/folder-3.svg";
import folder4 from "../../assets/icons/folder-4.svg";
import statistics from "../../assets/icons/statistics.svg";
import "./infoPortal.css";

function Info() {
  return (
    <>
      <div className="info-portal">
        <div className="first">
          <div className="box-1 box">
            <div className="text">
              <h2>Your project data warehouse</h2>
              <p>
                Add project data, create thematic pages, edit data, share
                information with team members
              </p>
            </div>
            <div className="image">
              <img src={infoImage} alt="For Info Portal image" />
            </div>
          </div>
          <div className="box-2 box">
            <div className="text">
              <p>Current Projects</p>
              <h2>10</h2>
              <span>Growth +3</span>
              <p>Ongoing projects last month - 7</p>
            </div>
            <div>
              <img src={statistics} alt="User statistics " />
            </div>
          </div>
        </div>
        {/* second */}

        <div className="second">
          <NavLink to="medical" className="box-3 box">
            <div>
              <img src={folder1} alt="File icon" />
            </div>
            <div className="text-box">
              <h3>Medical App</h3>
              <p>0 pages</p>
            </div>
          </NavLink>

          <NavLink to="fortune" className="box-4 box">
            <div>
              <img src={folder2} alt="File icon" />
            </div>
            <div className="text-box">
              <h3>Fortune website</h3>
              <p>0 pages</p>
            </div>
          </NavLink>

          <NavLink to="planner" className="box-5 box">
            <div>
              <img src={folder3} alt="File icon" />
            </div>
            <div className="text-box">
              <h3>Planner App</h3>
              <p>0 pages</p>
            </div>
          </NavLink>

          <NavLink to="tracker" className="box-6 box">
            <div>
              <img src={folder4} alt="File icon" />
            </div>
            <div className="text-box">
              <h3>Time tracker - personal…</h3>
              <p>0 pages</p>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Info;
