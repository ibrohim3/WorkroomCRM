import { Route, Routes } from "react-router-dom";
import InfoPortalHead from "./InfoPortalHead";
import Info from "./InfoPortal";
import PersonalAcc from "./Files/PersonalAcc";
import MedicalApp from "./Files/MedicalApp";
import FortuneWebsites from "./Files/FortuneWebsites";
import PlannerApp from "./Files/PlannerApp";

function InfoPortalMain() {
  return (
    <>
      <Routes>
        {/* index */}
        <Route
          index
          element={
            <>
              <InfoPortalHead />
              <Info />
            </>
          }
        />

        {/* folderName */}
        <Route path=":folderName" element={<InfoPortalHead />} />
        <Route path="medical" element={<MedicalApp />} />
        <Route path="fortune" element={<FortuneWebsites />} />
        <Route path="planner" element={<PlannerApp />} />
        <Route
          path="tracker"
          element={
            <>
              {/* <InfoPortalHead /> */}
              <PersonalAcc />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default InfoPortalMain;
