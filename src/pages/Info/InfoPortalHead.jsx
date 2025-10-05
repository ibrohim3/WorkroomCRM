import { useParams, useLocation } from "react-router-dom";

function InfoPortalHead() {
  const { folderName } = useParams();
  const location = useLocation();

  const folderTitles = {
    medical: "Medical App",
    fortune: "Fortune Website",
    planner: "Planner App",
    tracker: "Time Tracker - Personal Account",
  };

  let title = "Info Portal"; // default holat (index uchun)

  if (folderName && folderTitles[folderName]) {
    title = folderTitles[folderName];
  }

  // tracker path uchun params yo‘q bo‘lishi mumkin, shuning uchun location bilan tekshiramiz
  if (location.pathname === "/tracker") {
    title = folderTitles.tracker;
  }

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
