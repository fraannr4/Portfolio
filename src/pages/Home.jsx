import "../styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
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
  ];

  return (
    <div>
      <div className="separator"></div>
      <header>
        <div className="header-content">
          <div className="title-container">
            <h1>Francesco Romano</h1>
            <h2>Web Developer</h2>
          </div>
          <div className="header-description">
            <h3>
              Me gusta crear soluciones útiles y fáciles de usar a través del
              desarrollo web. Disfruto aprendiendo, mejorando cada día y
              participando en proyectos que aporten valor real a las personas.
            </h3>
          </div>
          <div className="header-buttons">
            <button onClick={() => navigate("/Projects")}>Ver mis Proyectos</button>
            <button onClick={() => navigate("/Contact")}>Contactarme</button>
          </div>
        </div>
      </header>

      <main>
        <div className="main-content">
          <h2 className="titulo-seccion">About Me</h2>
          <div className="aboutme" id="about">
            <p>
              Soy un estudiante de Desarrollo de Aplicaciones Web (DAW) de 21
              años, con una formación sólida en programación y sistemas gracias
              a haber completado dos ciclos formativos: ASIX y DAW.
            </p>
            <p>
              Esta combinación me ha permitido adquirir conocimientos tanto en
              administración de sistemas como en desarrollo full-stack.
            </p>
          </div>
          <div className="stats-aboutme">
            <div className="aboutme-stats-card">
              <h3>2+</h3>
              <p>Títulos informática</p>
            </div>
            <div className="aboutme-stats-card">
              <h3>5+</h3>
              <p>Proyectos Completados</p>
            </div>
            <div className="aboutme-stats-card">
              <h3>10+</h3>
              <p>Tecnologías</p>
            </div>
          </div>
        </div>

        <div className="projects" id="projects">
          <h2 className="titulo-seccion">Proyectos Destacados</h2>
          <div className="projects-container">
            {proyectos.map((proyecto) => (
              <Link
                key={proyecto.id}
                to={proyecto.ruta}
                className="project-card"
              >
                <div className="project-header">
                  <h3>{proyecto.titulo}</h3>
                </div>
                <div className="project-body">
                  <img src={proyecto.imagen} alt={proyecto.titulo} />
                </div>
                <div className="project-footer">
                  <p>{proyecto.descripcion}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="separator"></div>
      </main>
    </div>
  );
}

export default App;
