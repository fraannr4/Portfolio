import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Navbar";
import ProyectoDispositivos from "./pages/ProyectoDispositivos";
import ProyectoExtranet from "./pages/ProyectoExtranet";
import Footer from "./Footer";
import ProyectoPlantillas from "./pages/ProyectoPlantillas";
import ProyectoFirma from "./pages/ProyectoFirma";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

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
        <Route
          path="/proyecto/proveedoresExtranet"
          element={<ProyectoExtranet />}
        />
        <Route
          path="/proyecto/proveedoresPlantillas"
          element={<ProyectoPlantillas />}
        />
        <Route 
          path="/proyecto/FirmaOutlook" 
          element={<ProyectoFirma />} 
        />

        <Route 
          path="/contact" 
          element={<Contact />} 
        />
        <Route 
          path="/projects" 
          element={<Projects />} 
        />

        {/* <Route path="/proyecto/extranet" element={<ProyectoExtranet />} />
      <Route path="/proyecto/plantillas" element={<ProyectoPlantillas />} />
      <Route path="/proyecto/firma" element={<ProyectoFirma />} /> */}
      </Routes>
      <Footer />
    </>
  );
}
export default App;
