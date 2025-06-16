import "../styles.css";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="separator"></div>
      <header>
        <div className="header-content">
          <div className="title-container">
            <h1>Proveedores Extranet</h1>
          </div>
          <div className="header-project-description">
            <p>
              Este proyecto se enfoca en la{" "}
              <strong>gestión centralizada de datos de proveedores</strong>.
              Anteriormente, la información estaba dispersa en una plataforma
              externa llamada <strong>Extranet</strong>. Con esta nueva
              solución, hemos logrado <strong>unificar todos los datos</strong>{" "}
              en un solo entorno, facilitando un acceso más claro y organizado.
              El objetivo es permitir la consulta rápida de{" "}
              <strong>existencias</strong>, <strong>ventas</strong> y otros
              datos relevantes, mejorando la{" "}
              <strong>experiencia del usuario</strong> y agilizando los procesos
              internos.
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
          <h2 className="subtitulo-seccion">Objetivos del Proyecto</h2>
          <p>
            El objetivo del proyecto tal y como se ha comentado anteriormente
            consiste en migrar el recurso Extranet a un entrono interno, llamado
            Portal, el cual vednría a ser nuestra intranet. De esta forma, se
            busca centralizar la información de proveedores, permitiendo una
            gestión más eficiente y accesible de los datos. El proyecto se
            centra en la consulta de existencias y ventas, facilitando el acceso
            a información crítica para la toma de decisiones. Este proyecto
            consiste en tres fases principales: La ficha del proveedor, la
            consulta de existencias y la consulta de ventas. Cada una de estas
            fases se implementa utilizando tecnologías modernas y prácticas
            recomendadas para garantizar un rendimiento óptimo y una experiencia
            de usuario fluida. En primer lugar, aclaré de donde provenian los
            datos de cada una de las diferentes fases:
          </p>
          <h2 className="subtitulo-seccion">Fases del Proyecto</h2>

          <div className="timeline-horizontal">
            <div className="fase-card">
              <h3>1. Consulta SQL</h3>
              <p>
                Se identificaron los datos clave requeridos y se diseñaron{" "}
                <strong>consultas SQL</strong> eficientes en{" "}
                <strong>MySQL Server</strong> para extraer la información desde
                las tablas origen.
              </p>
            </div>

            <div className="fase-card">
              <h3>2. API en .NET</h3>
              <p>
                Las consultas fueron trasladadas al{" "}
                <strong>backend en .NET</strong> creando endpoints REST que
                permiten acceder a los datos desde otras aplicaciones.
              </p>
            </div>

            <div className="fase-card">
              <h3>3. Validación con Swagger</h3>
              <p>
                Cada endpoint fue probado en <strong>Swagger</strong> para
                garantizar que las respuestas fueran correctas y que la
                estructura de los datos cumpliera los requisitos funcionales.
              </p>
            </div>

            <div className="fase-card">
              <h3>4. Lógica de Ficha</h3>
              <p>
                Se desarrolló la lógica para la{" "}
                <strong>Ficha del Proveedor</strong>, generando una vista
                personalizada y dinámica al iniciar sesión según el perfil del
                usuario.
              </p>
            </div>
            <div className="fase-card">
              <h3>5. Frontend</h3>
              <p>
                Se construyó la interfaz con <strong>VUE</strong>, integrando
                diseño responsive, filtros interactivos y visualización de
                datos, manteniendo la coherencia con el portal existente.
              </p>
            </div>

            <div className="fase-card">
              <h3>6. Exportar a Excel</h3>
              <p>
                Finalmente, se incorporó una función que permite{" "}
                <strong>exportar los datos</strong> visibles a un archivo Excel
                para facilitar su análisis y distribución.
              </p>
            </div>
          </div>

          <div className="dispositivos-implementation">
            <h2 className="subtitulo-seccion">Implementación</h2>

            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Manejo de los datos</h3>
                <p>
                  En este proyecto, el <strong>manejo de datos</strong>{" "}
                  desempeña un papel fundamental para asegurar que la
                  información sobre los dispositivos esté bien estructurada y
                  sea fácilmente accesible. Por ello, siempre que inicio un
                  desarrollo, priorizo la obtención de los{" "}
                  <strong>bloques de datos clave</strong> necesarios para su
                  funcionamiento. En este caso, los datos se encuentran en un{" "}
                  <strong>motor externo</strong>.
                </p>

                <p>
                  Ante esta situación, y tras analizarlo con mi responsable
                  técnico, decidimos diseñar una serie de{" "}
                  <strong>consultas SQL</strong> que nos permitieran extraer la
                  información relevante directamente desde ese sistema externo.
                </p>

                <p>
                  Una vez finalizado todo el proceso de extracción y validación,
                  nos centramos en las{" "}
                  <strong>consultas de existencias y ventas</strong>{" "}
                  correspondientes a los proveedores disponibles en la extranet
                  de la empresa. Con estas consultas ya operativas, disponemos
                  de la base necesaria para{" "}
                  <strong>comenzar el desarrollo del backend</strong> del
                  proyecto.
                </p>
              </div>
              <div className="implementacion-card-image">
                <img
                  src="/project-images/extranet/manejoDeDatos.png"
                  alt="Implementación de Proveedores Extranet"
                />
              </div>
            </div>

            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Trato Datos en Backend</h3>
                <p>
                  En esta fase, el objetivo fue desarrollar una{" "}
                  <strong>API eficiente y estructurada</strong> que permitiera
                  acceder a los datos de los proveedores. Para ello, utilizamos{" "}
                  <strong>.NET</strong>, encargándonos de integrar las{" "}
                  <strong>consultas SQL</strong> previamente definidas y exponer
                  la información mediante <strong>endpoints RESTful</strong>.
                </p>

                <p>
                  Opté por crear un <strong>nuevo controlador</strong> con el
                  fin de mantener la arquitectura limpia y segmentada. Para
                  gestionar adecuadamente los datos extraídos de la base de
                  datos, definí dos modelos: <em>ProveedorArticulo</em> y{" "}
                  <em>ProveedorVentaTienda</em>. Ambos modelos incluyen
                  únicamente los campos relevantes para la vista específica de
                  la extranet, siguiendo una filosofía de diseño minimalista y
                  orientada a propósito.
                </p>

                <p>
                  Las consultas SQL fueron almacenadas como cadenas de texto, y
                  a partir de sus resultados fui generando objetos individuales
                  del modelo correspondiente. Estos objetos se agregan a una
                  lista, que finalmente es retornada como respuesta desde el
                  endpoint.
                </p>

                <p>
                  Dado que esta sección está orientada a un{" "}
                  <strong>proveedor específico</strong> y no a una vista
                  general, también desarrollé otros dos endpoints que reciben el{" "}
                  <strong>Código del proveedor</strong> como parámetro. Esto
                  permite consultar de forma precisa los datos correspondientes
                  a un proveedor concreto, manteniendo eficiencia y claridad en
                  la respuesta.
                </p>
              </div>

              <div className="implementacion-card-image">
                <img
                  src="/project-images/extranet/backend.png"
                  alt="Implementación de Proveedores Extranet"
                />
              </div>
            </div>

            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Trato Datos en FrontEnd</h3>
                <p>
                  Una vez que los datos están correctamente estructurados y
                  expuestos a través del endpoint, el siguiente paso fue{" "}
                  <strong>implementar la lógica en el frontend</strong>. Para
                  ello, utilizamos <strong>Vue.js</strong>, una herramienta que
                  permite crear interfaces de usuario dinámicas, reactivas y
                  fácilmente escalables.
                </p>

                <p>
                  En este proyecto era fundamental{" "}
                  <strong>mantener la coherencia visual</strong> con la extranet
                  anterior. Uno de los puntos clave era que el usuario no
                  percibiera cambios bruscos al navegar entre las distintas
                  vistas: ficha del proveedor, consulta de ventas y consulta de
                  existencias. Para lograrlo, diseñé un{" "}
                  <strong>header estático</strong> común que permanece visible
                  en todo momento, y que incluye tres enlaces que permiten
                  cambiar entre secciones de forma fluida y consistente.
                </p>

                <p>
                  Para presentar los datos, actualicé el componente{" "}
                  <em>DataTable</em> incorporando un nuevo campo:{" "}
                  <strong>estadoRenovación</strong>. Además, implementé un
                  filtro que permite al usuario visualizar los dispositivos
                  según su estado, facilitando así la{" "}
                  <strong>
                    identificación rápida de los equipos que requieren atención
                  </strong>
                  .
                </p>

                <p>
                  Un aspecto importante fue la{" "}
                  <strong>carga dinámica de datos</strong> por proveedor. Como
                  cada usuario dispone de una clave foránea (
                  <em>codigoProveedor</em>), aproveché este dato para, al
                  iniciar sesión, obtener primero la información del usuario y
                  luego lanzar una <strong>llamada a la API</strong> con dicho
                  identificador. Esto garantiza que{" "}
                  <strong>
                    solo se cargue la información correspondiente al proveedor
                    logueado
                  </strong>
                  .
                </p>

                <p>
                  Finalmente, cada sección realiza llamadas a diferentes APIs.
                  En la ficha del proveedor, se consulta la API de{" "}
                  <em>plantillaProveedor</em> (explicada en el proyecto de
                  Proveedores Plantillas). En las vistas de existencias y
                  ventas, se utilizan las APIs creadas en el backend de este
                  proyecto, que retornan los datos específicos del proveedor
                  autenticado. Esta segmentación garantiza una experiencia de
                  usuario precisa y orientada al contexto.
                </p>
              </div>
              <div className="implementacion-card-image">
                <img
                  src="/project-images/extranet/frontend.png"
                  alt="Implementación de Extranet"
                />
              </div>
            </div>
            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Implementaciones Extras</h3>
                <p>
                  Una vez finalizado el desarrollo principal del proyecto, quise
                  añadir un valor añadido que llevase la experiencia del usuario
                  un paso más allá. Por ello, implementé una funcionalidad
                  adicional que permite{" "}
                  <strong>
                    exportar los datos mostrados en la tabla a un archivo Excel
                  </strong>
                  . Para lograrlo, utilicé la librería <strong>xlsx</strong>,
                  una herramienta ligera y eficiente para la generación de
                  archivos Excel directamente desde el navegador.
                </p>

                <p>
                  La exportación se realiza sobre los datos{" "}
                  <strong>filtrados y visibles</strong> en pantalla, lo que
                  significa que el usuario descarga únicamente la información
                  relevante según su consulta, evitando así la exportación
                  innecesaria de toda la base de datos. Esta funcionalidad se
                  integró de forma limpia y accesible mediante un botón en la
                  interfaz. Al hacer clic en él, se genera y descarga
                  automáticamente el archivo Excel en el dispositivo del
                  usuario,{" "}
                  <strong>optimizando la usabilidad y ahorrando tiempo</strong>.
                </p>
              </div>
              <div className="implementacion-card-image">
                <img
                  src="/project-images/extranet/funcionalidadesExtra.png"
                  alt="Implementación de Extranet"
                />
              </div>
            </div>
          </div>
          <div className="carousel-section">
            <h2 className="subtitulo-seccion">Galería de Imágenes</h2>
            <div className="carousel-wrapper">
              <Slider {...settings}>
                <div>
                  <h3>Ficha Inicio</h3>
                  <img
                    src="/project-images/extranet/ProveedoresExtranet/fichaInicio.PNG"
                    alt="Implementación de Dispositivos"
                  />
                </div>
                <div>
                  <h3>Existencias</h3>
                  <img
                    src="/project-images/extranet/ProveedoresExtranet/existencias.PNG"
                    alt="Implementación de Dispositivos"
                  />
                </div>
                <div>
                  <h3>Ventas</h3>
                  <img
                    src="/project-images/extranet/ProveedoresExtranet/ventas.PNG"
                    alt="Implementación de Dispositivos"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;