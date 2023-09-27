import AppRoutes from "./routes/AppRoutes";
import "../src/styles/Calendrier.css";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}
export default App;
