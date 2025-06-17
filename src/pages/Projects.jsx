import "../styles.css";
import { Link } from "react-router-dom";

function App() {
  const proyectos = [
    {
      id: 1,
      titulo: "Renovación Dispositivos",
      descripcion: "Planning de renovación de dispositivos con gráficos",
      imagen: "project-images/dispositivos.png",
      ruta: "/proyecto/dispositivos",
    },
    {
      id: 2,
      titulo: "Proveedores Extranet",
      descripcion: "Listado y Consulta de Existencias, Ventas",
      imagen: "project-images/proveedoresExtranet.png",
      ruta: "/proyecto/proveedoresExtranet",
    },
    {
      id: 3,
      titulo: "Proveedores Plantillas",
      descripcion:
        "Listado, Detalles de Proveedores y Visualización, Creación y Edición de plantillas",
      imagen: "project-images/proveedores_plantillas.png",
      ruta: "/proyecto/proveedoresPlantillas",
    },
    {
      id: 4,
      titulo: "Firma Outlook",
      descripcion: "Generación firma formato Outlook y copia",
      imagen: "project-images/firma_outlook.png",
      ruta: "/proyecto/FirmaOutlook",
    },
  ];

  return (
    <div className="contact-content">
      <div className="separator"></div>
      <div className="contact-header">
        <h1>Proyectos Realizados</h1>
        <h2>Francesco Romano</h2>
        <h3>Web developer</h3>
      </div>

      <div className="contact-main">
        {proyectos.map((proyecto) => (
          <Link key={proyecto.id} to={proyecto.ruta} className="project-card-dark">
            <div className="project-header-dark">
              <h3>{proyecto.titulo}</h3>
            </div>
            <div className="project-body">
                <img src={process.env.PUBLIC_URL + '/' + proyecto.imagen} alt={proyecto.titulo} />
            </div>
            <div className="project-footer-dark">
              <p>{proyecto.descripcion}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default App;
