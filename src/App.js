import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import ProyectoDispositivos from "./pages/ProyectoDispositivos";

function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/proyecto/dispositivos"
          element={<ProyectoDispositivos />}
        />
        {/* <Route path="/proyecto/extranet" element={<ProyectoExtranet />} />
      <Route path="/proyecto/plantillas" element={<ProyectoPlantillas />} />
      <Route path="/proyecto/firma" element={<ProyectoFirma />} /> */}
      </Routes>
    </>
  );
}
export default App;
