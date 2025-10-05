import { Route, Routes } from "react-router-dom";
import InfoPortalHead from "./InfoPortalHead";
import Info from "./InfoPortal";
import PersonalAcc from "./Files/PersonalAcc";

function InfoPortalMain() {
  return (
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

      {/* tracker */}
      <Route
        path="tracker"
        element={
          <>
            <InfoPortalHead />
            <PersonalAcc />
          </>
        }
      />
    </Routes>
  );
}

export default InfoPortalMain;
