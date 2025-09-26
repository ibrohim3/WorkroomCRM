import { useParams } from "react-router-dom";

function InfoPortalHead() {
  const { folderName } = useParams();

  const folderTitles = {
    medical: "Medical App",
    fortune: "Fortune website",
    planner: "Planner App",
    tracker: "Time tracker - personal account",
  };

  const title = folderName ? folderTitles[folderName] : "Info Portal";

  return (
    <div className="header info-portal-head">
      <h2>{title}</h2>
      <button className="add-event">
        <span>+ </span>
        Add Folder
      </button>
    </div>
  );
}

export default InfoPortalHead;
