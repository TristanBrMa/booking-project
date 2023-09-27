import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import Calendrier from "../pages/Calendrier";
import SignIn from "../pages/SignIn";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/" element={<Calendrier />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
}

export default AppRoutes;
