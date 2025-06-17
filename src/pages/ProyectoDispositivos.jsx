import "../styles.css";
import { AlertCircle, Clock, CheckCircle } from "lucide-react";
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

            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Manejo de los datos</h3>
                <p>
                  El primer paso que decidí tomar al iniciar el proyecto fue
                  asegurarme de tener bien definida la estructura y la obtención
                  de los datos. Para ello, abrí MySQL Server y comencé a revisar
                  las estructuras de las tablas existentes. Mi atención se
                  centró principalmente en una tabla llamada{" "}
                  <strong>dispositivos</strong>, en la cual encontré un campo
                  útil llamado <em>fechaCompra</em>. Sin embargo, al analizar
                  los registros, noté que en la mayoría de los casos este campo
                  estaba vacío (NULL), por lo que no podía basar el análisis
                  únicamente en él.
                </p>
                <p>
                  Ante esta situación, opté por crear una nueva tabla llamada{" "}
                  <strong>DispositivosModelos</strong>. El objetivo era
                  registrar todos los modelos disponibles en la base de datos
                  junto con su fecha de lanzamiento y otros datos relevantes. De
                  esta manera, si el campo <em>fechaCompra</em> estaba ausente,
                  podríamos inferir un estado aproximado a partir de la fecha de
                  lanzamiento del modelo.
                </p>
                <p>
                  Una vez definida la fuente de datos, procedí a crear los
                  campos <strong>estadoRenovacion</strong> y{" "}
                  <strong>fechaRenovacion</strong>, que permiten realizar un
                  seguimiento más preciso del ciclo de vida de los dispositivos.
                </p>
              </div>
              <div className="implementacion-card-image">
                <img
                  src={process.env.PUBLIC_URL + "/project-images/dispositivos/manejoDatos.png"}
                  alt="Implementación de Dispositivos"
                />
              </div>
            </div>

            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Trato Datos en Backend</h3>
                <p>
                  Como se explicó anteriormente, los datos en el backend han
                  sido procesados utilizando .NET. Para exponer estos datos a la
                  vista, creé un endpoint con la ruta{" "}
                  <code>/api/dispositivo/id</code>, el cual se encarga de
                  obtener la información de un dispositivo específico.
                </p>

                <p>
                  Esta API recupera los datos desde la tabla{" "}
                  <strong>Dispositivos</strong> y los almacena en una colección
                  de objetos del tipo <code>Dispositivo</code>. Esto sería
                  suficiente si los datos estuvieran correctamente estructurados
                  desde el principio. Sin embargo, como fue necesario crear la
                  tabla <strong>DispositivosModelos</strong>, también generamos
                  una segunda colección basada en un modelo auxiliar llamado{" "}
                  <code>DispositivoEstadoRenovacion</code>. Este modelo incluye
                  los campos <em>fechaCompra</em>, <em>fechaRenovacion</em> y{" "}
                  <em>estadoRenovacion</em>.
                </p>

                <p>
                  Finalmente, se realiza un recorrido sobre la colección
                  principal de dispositivos. Por cada uno, se busca una
                  coincidencia en la colección auxiliar. Si se encuentra,
                  significa que el dispositivo no tenía una <em>fechaCompra</em>{" "}
                  original válida, por lo tanto, se actualizan sus campos{" "}
                  <em>estadoRenovacion</em>, <em>fechaRenovacion</em> y{" "}
                  <em>fechaCompra</em> con los valores provenientes de la
                  segunda colección. En caso de no encontrar coincidencia, estos
                  campos se mantienen vacíos.
                </p>
              </div>
              <div className="implementacion-card-image">
                <img
                  src={process.env.PUBLIC_URL + "/project-images/dispositivos/datosBackend.png"}
                  alt="Implementación de Dispositivos"
                />
              </div>
            </div>

            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Trato Datos en FrontEnd</h3>
                <p>
                  Una vez tenemos los datos correctamente estructurados y
                  expuestos a través del endpoint, el siguiente paso es
                  implementar la lógica en el frontend. Para ello, utilizamos
                  Vue.js, que nos permite crear una interfaz de usuario dinámica
                  y reactiva.
                </p>

                <p>
                  En el componente Vue, cargaremos todos los datos mediante el
                  Mounted Hook, en él llamamos al metodo refreshTable() que se
                  encarga de realizar una petición al endpoint que hemos creado,
                  obteniendo todos los estados y fechas correctamente
                  estructuradas. También creamos metodos para calcular la
                  cantidad de dispositivos a tiempo real gracias a un filer por
                  estadoRenovacion y su length. Esto lo haremos con el Total,
                  Cambio Proximo y Cambio Urgente
                </p>

                <p>
                  Para mostrar los datos, actualizaremos el Datatable añadiendo
                  el campo estadoRenovacion. Además, añadiremos un filtro para
                  que el usuario pueda ver los dispositivos por estado de
                  renovación, lo que facilita la identificación rápida de
                  aquellos que necesitan atención inmediata.
                </p>

                <p>
                  Por último crearemos 3 Divs que mostraran las estadisticas
                  anteriomente obtenidas, dos de ellos, serán Cambio Proximo y
                  Cambio urgente por lo que haremos que sean clicables y
                  muestren un dialog con toda la infromacion necesaria
                  estructurado de forma funcional y estetica.
                </p>
              </div>
              <div className="implementacion-card-image">
                <img
                  src={process.env.PUBLIC_URL + "/project-images/dispositivos/datosFrontend.png"}
                  alt="Implementación de Dispositivos"
                />
              </div>
            </div>
            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Implementaciones Extras</h3>
                <p>
                  Ya finalizado el proyecto, quería acabar de pulirlo y
                  agregarle algo que destacase y lo escalase a otro nivel, por
                  esta misma razon decidi implementar dos graficos y un popup
                  para ver la infromacion del dispositivo que cliquees.
                </p>

                <p>
                  Para poder crear los graficos, utilice la libreria Chart.js,
                  que me permite crear graficos de forma sencilla y rapida. En
                  este caso, he creado dos graficos, uno en forma de pie que
                  muestra la cantidad de tipos de dispositivos a renovar y otro
                  de barras que mustra la cantidad de dispositivos que deberian
                  de haber sido cambiados al largo de los años.
                </p>

                <p>
                  Por otro lado como he dejado caer anteriormente, en su momento
                  añadí infromacion extra a la tabla DispositivosModelos, por lo
                  que he decidido crear un popup que muestre toda la infromacion
                  del dispositivo que cliquees, de esta forma el usuario puede
                  ver toda la infromacion del dispositivo sin necesidad de salir
                  de la pantalla principal.
                </p>
              </div>
              <div className="implementacion-card-image">
                <img
                  src={process.env.PUBLIC_URL + "/project-images/dispositivos/implementacionesExtras.png"}
                  alt="Implementación de Dispositivos"
                />
              </div>
            </div>
          </div>
          <div className="carousel-section">
            <h2 className="subtitulo-seccion">Galería de Imágenes</h2>
            <div className="carousel-wrapper">
              <Slider {...settings}>
                <div>
                  <h3>Vista General</h3>
                  <img
                    src={process.env.PUBLIC_URL + '/project-images/dispositivos/DispositivosCarrousell/dispositivos_list.PNG'} 
                    alt="Implementación de Dispositivos"
                  />
                </div>
                <div>
                  <h3>Dialog Cambio Urgente</h3>
                  <img
                    src={process.env.PUBLIC_URL + "/project-images/dispositivos/DispositivosCarrousell/dispositivos_cambiourgente1.PNG"}
                    alt="Implementación de Dispositivos"
                  />
                </div>
                <div>
                  <h3>Dialog Cambio Urgente</h3>
                  <img
                    src={process.env.PUBLIC_URL + "/project-images/dispositivos/DispositivosCarrousell/dispositivos_cambiourgente2.PNG"}
                    alt="Implementación de Dispositivos"
                  />
                </div>
                <div>
                  <h3>Dialog Próximo Cambio</h3>
                  <img
                    src={process.env.PUBLIC_URL + "/project-images/dispositivos/DispositivosCarrousell/dispositivos_proximocambio.PNG"}
                    alt="Implementación de Dispositivos"
                  />
                </div>
                <div>
                  <h3>Dialog Próximo Cambio</h3>
                  <img
                    src={process.env.PUBLIC_URL + "/project-images/dispositivos/DispositivosCarrousell/dispositivos_proximocambio2.PNG"}
                    alt="Implementación de Dispositivos"
                  />
                </div>
                <div>
                  <h3>Popup Dispositivo</h3>
                  <img
                    src={process.env.PUBLIC_URL + "/project-images/dispositivos/DispositivosCarrousell/dispositivoPopup.PNG"}
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
