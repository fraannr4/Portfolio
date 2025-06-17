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
            <h1>Firma Outlook</h1>
          </div>
          <div className="header-project-description">
            <p>
              Este proyecto consiste en crear una vista dentro de nuestra
              intranet llamada <strong>Portal Ixos</strong> dónde se generará
              una firma para el servicio de correo de Outlook, permitiendo a los
              usuarios generar y copiar fácilmente su firma personalizada para
              utilizarla en la configuración de su cliente de correo
              electrónico.
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
            El objetivo de este proyecto es{" "}
            <strong>
              <em>simplificar y agilizar la configuración de Outlook</em>
            </strong>
            , tanto para los usuarios como para los técnicos informáticos. Por
            un lado, los usuarios pueden{" "}
            <strong>
              <em>configurar su firma de Outlook de forma autónoma</em>
            </strong>{" "}
            si así lo desean, lo cual les brinda mayor independencia. Además,
            una firma bien configurada permite{" "}
            <strong>
              <em>mejorar la visibilidad y localización</em>
            </strong>{" "}
            de los empleados por parte de clientes y colaboradores. Por otro
            lado, los técnicos informáticos pueden{" "}
            <strong>
              <em>configurar la firma de un usuario en tan solo tres clics</em>
            </strong>
            , lo que optimiza significativamente su tiempo y recursos.
          </p>

          <h2 className="subtitulo-seccion">Fases del Proyecto</h2>

          <div className="timeline-horizontal">
            <div className="fase-card">
              <h3>1. Consulta SQL</h3>
              <p>
                Se identificaron los datos clave requeridos y se diseñaron{" "}
                <strong>consultas SQL</strong> eficientes en{" "}
                <strong>MySQL Server</strong> para extraer la información desde
                la tabla origen.
              </p>
            </div>

            <div className="fase-card">
              <h3>2. API en .NET</h3>
              <p>
                La consulta fue trasladada al <strong>backend en .NET</strong>{" "}
                creando un endpoint REST que permite acceder a los datos desde
                otras aplicaciones.
              </p>
            </div>

            <div className="fase-card">
              <h3>3. Validación con Swagger</h3>
              <p>
                El endpoint fue probado en <strong>Swagger</strong> para
                garantizar que las respuestas fueran correctas y que la
                estructura de los datos cumpliera los requisitos funcionales.
              </p>
            </div>

            <div className="fase-card">
              <h3>4. Diseño firma</h3>
              <p>
                Se diseñó el
                <strong> recuadro de firma </strong>, generando una firma
                eficiente y estética. Añadiendo campos opcionales de fotografía,
                movil y imagen en portal.
              </p>
            </div>
            <div className="fase-card">
              <h3>5. Sistema de Copia</h3>
              <p>
                Se añade el <strong>botón de copia de firma </strong> con una
                logica particular debido a las diferencias entre formatos
                Outlook y HTML
              </p>
            </div>
          </div>

          <div className="dispositivos-implementation">
            <h2 className="subtitulo-seccion">Implementación</h2>

            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Manejo de los datos</h3>
                <p>
                  En primer lugar, el <strong>manejo de los datos</strong>{" "}
                  corresponde a la etapa previa a la construcción de la API,
                  donde se analizan las necesidades de información y se diseñan
                  las consultas SQL necesarias para obtener esos datos desde la
                  base de datos. En este caso, dicha etapa ya había sido
                  desarrollada previamente, por lo que no fue necesario
                  construir nuevas consultas ni analizar la estructura de las
                  tablas. Las rutas de acceso a los datos, como{" "}
                  <code>/usuario/id/lugarTrabajo</code> o{" "}
                  <code>/usuario/id/delegacion</code>, ya estaban definidas, y
                  su lógica interna ya ejecutaba las consultas necesarias para
                  obtener los datos requeridos. Es decir, el trabajo de
                  identificar qué información era necesaria, desde qué tablas
                  extraerla y cómo estructurarla en una respuesta útil ya se
                  encontraba resuelto.
                </p>
              </div>
              <div className="implementacion-card-image">
                <img
                  src="/project-images/firma/implementacion/manejoDatos.png"
                  alt="Implementación de Firma"
                />
              </div>
            </div>

            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Trato Datos en Backend</h3>
                <p>
                  A partir de esa base ya disponible, la segunda fase implicó el{" "}
                  <strong>tratamiento de datos en el backend</strong>, en donde
                  se reutilizaron las APIs existentes para consumir la
                  información que estas entregan. No fue necesario implementar
                  lógica adicional en el servidor ni desarrollar nuevos
                  endpoints; simplemente se aprovecharon las rutas REST ya
                  funcionales que devolvían los datos del usuario, su lugar de
                  trabajo, delegación, así como los demás empleados disponibles
                  para visualización. La lógica del backend también contemplaba
                  la actualización de preferencias del usuario, como la
                  visibilidad del teléfono o de la imagen, mediante peticiones{" "}
                  <code>PUT</code> a rutas existentes como{" "}
                  <code>/usuario/id/preferencias</code>. Esta capa se limitó
                  al consumo de servicios ya implementados, facilitando el
                  desarrollo desde el lado cliente.
                </p>
              </div>

              <div className="implementacion-card-image">
                <img
                  src="/project-images/firma/implementacion/backend.png"
                  alt="Implementación de Firma"
                />
              </div>
            </div>

            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Trato Datos en FrontEnd</h3>
                <p>
                  Finalmente, en el <strong>frontend</strong>, el tratamiento de
                  datos se centró en presentar la información de forma clara,
                  editable y personalizada a través de una interfaz en Vue.js.
                  Utilizando los métodos <code>getLugarTrabajo()</code>,{" "}
                  <code>getDelegacion()</code> y <code>filterUser()</code>, se
                  consultaron los endpoints existentes y se almacenaron los
                  resultados en variables reactivas como{" "}
                  <code>selectedUser</code>. Estos datos luego se utilizaron
                  para componer la vista de la firma digital, permitiendo
                  modificar visualmente elementos como la imagen o el teléfono
                  según las preferencias del usuario. Además, se integró un menú
                  desplegable que permite seleccionar otros usuarios, lo cual
                  dispara nuevas peticiones para actualizar dinámicamente la
                  vista sin recargar la página. Gracias al uso de directivas de
                  Vue como <code>v-if</code>, <code>v-model</code> y{" "}
                  <code>:src</code>, la interfaz reacciona de forma inmediata a
                  los cambios en los datos, generando una experiencia fluida y
                  personalizada.
                  Cabe detacar que la parte más complicada fue combinar el formato Outlook con 
                  html, para poder solucionar duplicados, en el método para copiar la firma eliminamos
                  del DOM la imagen HTML y añadimos la de formato Outlook, esta es invisible en HTML
                  de esa forma copiamos la firma con formato correcto.
                </p>
              </div>
              <div className="implementacion-card-image">
                <img
                  src="/project-images/firma/implementacion/frontend.png"
                  alt="Implementación de Firma"
                />
              </div>
            </div>         
          </div>
          <div className="carousel-section">
            <h2 className="subtitulo-seccion">Galería de Imágenes</h2>
            <div className="carousel-wrapper">
              <Slider {...settings}>
                <div>
                  <h3>Firma Con Foto</h3>
                  <img
                    src="/project-images/firma/Firma.PNG"
                    alt="Firma con foto"
                  />
                </div>
                <div>
                  <h3>Firma Sin Foto</h3>
                  <img
                    src="/project-images/firma/Firma2.PNG"
                    alt="Firma sin foto"
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
