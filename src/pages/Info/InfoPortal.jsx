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
              <div className="image"></div>
            </div>
          </div>
          <div className="box-2 box">
            <p>Current Projects</p>
            <h2>10</h2>
            <p>Growth +3</p>
            <p>Ongoing projects last month - 7</p>
          </div>
        </div>
        {/* second */}
        <div className="second">
          <div className="box-3 box">
            <h3>Medical App</h3>
            <p>5 pages</p>
          </div>
          <div className="box-4 box">
            <h3>Fortune website</h3>
            <p>8 pages</p>
          </div>
          <div className="box-5 box">
            <h3>Planner App</h3>
            <p>2 pages</p>
          </div>
          <div className="box-6 box">
            <h3>Time tracker - personal…</h3>
            <p>2 pages</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
