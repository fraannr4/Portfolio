import "../styles.css";
import { AlertCircle, Clock, CheckCircle } from "lucide-react";

function App() {
  return (
    <div>
      <div className="separator"></div>
      <header>
        <div className="header-content">
          <div className="title-container">
            <h1>Plan Renove de Dispositivos</h1>
          </div>
          <div className="header-project-description">
            <p>
              Este proyecto mejora la visualización del inventario de
              dispositivos mediante un sistema de clasificación que identifica
              si un equipo es <strong>nuevo</strong>, debe renovarse{" "}
              <strong>pronto</strong> o requiere una
              <strong> renovación urgente</strong>. La lógica se basa en la{" "}
              <strong>fecha de compra</strong> y el{" "}
              <strong>modelo/lanzamiento</strong>, integrando una base de datos
              adicional con dicha información.
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className="tecnology-section">
          <h2 className="subtitulo-seccion">Tecnologías Utilizadas</h2>
          <div className="technology-cards">
            <div className="tech-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg"
                alt="SQL Server"
              />
              <h3>SQL Server</h3>
              <p>Consulta y gestión de datos.</p>
            </div>
            <div className="tech-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-plain.svg"
                alt=".NET"
              />
              <h3>.NET</h3>
              <p>APIs RESTful para lógica de negocio.</p>
            </div>
            <div className="tech-card">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                alt="Vue.js"
              />
              <h3>Vue.js</h3>
              <p>Frontend dinámico e interactivo.</p>
            </div>
          </div>
        </div>
        <div className="criterios-section">
          <h2 className="subtitulo-seccion">Criterios de Renovación</h2>
          <p>
            Los criterios de renovación fueron definidos atendiendo a las
            necesidades específicas de la empresa. Inicialmente, mi intención
            era establecer estos criterios basándome en los datos disponibles en
            nuestra tabla de dispositivos, utilizando el campo FechaCompra. Sin
            embargo, detecté que en muchos casos este campo estaba vacío (null),
            lo que dificultaba la planificación adecuada. Como solución, decidí
            consultar la base de datos para obtener información sobre todos los
            modelos disponibles y crear una tabla nueva que incluye las
            características y la fecha de lanzamiento de cada modelo. Gracias a
            esta tabla complementaria, puedo evaluar con mayor precisión la
            antigüedad y el estado de los dispositivos. Cabe destacar que esta
            nueva tabla tiene otros usos más allá de la evaluación de
            renovación, los cuales abordaremos en detalle más adelante.
          </p>
          <div className="criterios-tables">
            <div className="criterios-table">
              <h3 className="criterios-title">Dispositivos Móviles</h3>
              <table>
                <thead>
                  <tr>
                    <th>Antigüedad</th>
                    <th>Estado</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="estado-correcto">
                    <td>{"< 3 años"}</td>
                    <td className="flex">
                      <CheckCircle className="icon green" /> Correcto
                    </td>
                    <td>Sin cambios</td>
                  </tr>
                  <tr className="estado-aviso">
                    <td>{"= 3 años"}</td>
                    <td className="flex">
                      <Clock className="icon yellow" /> Próximo cambio
                    </td>
                    <td>Planificar renovación</td>
                  </tr>
                  <tr className="estado-urgente">
                    <td>{"> 3 años"}</td>
                    <td className="flex">
                      <AlertCircle className="icon red" /> Cambio urgente
                    </td>
                    <td>Reemplazo inmediato</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="criterios-table">
              <h3 className="criterios-title">PCs y Portátiles</h3>
              <table>
                <thead>
                  <tr>
                    <th>Antigüedad</th>
                    <th>Estado</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="estado-correcto">
                    <td>{"< 6 años"}</td>
                    <td className="flex">
                      <CheckCircle className="icon green" /> Correcto
                    </td>
                    <td>Sin cambios</td>
                  </tr>
                  <tr className="estado-aviso">
                    <td>{"= 6 años"}</td>
                    <td className="flex">
                      <Clock className="icon yellow" /> Próximo cambio
                    </td>
                    <td>Planificar renovación</td>
                  </tr>
                  <tr className="estado-urgente">
                    <td>{"> 6 años"}</td>
                    <td className="flex">
                      <AlertCircle className="icon red" /> Cambio urgente
                    </td>
                    <td>Reemplazo inmediato</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="dispositivos-implementation">
            <h2 className="subtitulo-seccion">Implementación</h2>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
