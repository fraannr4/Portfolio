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
            <h1>Proveedores Plantillas</h1>
          </div>
          <div className="header-project-description">
            <p>
              Este proyecto nace con el objetivo de desarrollar un sistema de
              <strong> gestión de plantillas</strong>, migrando la información
              que anteriormente se procesaba en un recurso web externo llamado{" "}
              <em>BDX</em> hacia nuestra propia intranet, fomentando así su uso
              interno. Mientras que BDX presenta una estética más antigua y
              estructurada{" "}
              <em>centrada en la consulta y manipulación de datos</em>, la
              intranet ofrece una experiencia más visual, moderna e intuitiva.
              El verdadero desafío radica en encontrar un punto medio: un
              equilibrio entre la funcionalidad robusta de BDX y la frescura
              visual del portal interno, creando una herramienta eficiente,
              atractiva y alineada con las necesidades actuales del equipo.
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
            El objetivo principal de este proyecto es implementar en el portal
            el sistema de creación de plantillas actualmente disponible en BDX,
            adaptándolo a una nueva estructura de datos que impacta directamente
            en la base de datos y en los procesos de carga y descarga de
            información. Esta migración no solo implica un cambio técnico, sino
            también una mejora significativa en la experiencia del usuario, al
            incorporar una interfaz más intuitiva, atractiva y optimizada para
            el cliente final. El reto consiste en mantener la robustez funcional
            del sistema original, mientras se moderniza su presentación y se
            adapta a las necesidades actuales del entorno digital interno.
          </p>

          <h2 className="subtitulo-seccion">Definición de la estructura</h2>
          <p>
            Uno de los pasos más importantes para poder empezar el proyecto de
            forma estructurada es definir la estructura del proyecto, en este
            caso era todo un poco caotico ya que teniamos que crear otra tabla
            con los datos de las plantillas ya que actualmente BDX y Portal són
            dos motores de bbdd diferentes. Aquí llegaba el primer problema ya
            que en la base de BDX disponiamos de 3 tablas para vincular
            Proveedor Plantilla y Ficheros de la Plantillas:
          </p>

          <div className="database-cards">
            <div className="database-card">
              <h3>PecProveedores</h3>
              <p>codigoProveedor</p>
            </div>
            <img
              src="/project-images/extranet/flecha-verde.png"
              alt="Flecha"
              className="flecha-horizontal"
            />
            <div className="database-card">
              <h3>PecPlantillas</h3>
              <p>codigoProveedor</p>
              <p>idAdjunto</p>
            </div>
            <img
              src="/project-images/extranet/flecha-verde.png"
              alt="Flecha"
              className="flecha-horizontal"
            />
            <div className="database-card">
              <h3>PecPlantillas</h3>
              <p>idAdjunto</p>
            </div>
          </div>

          <div className="separator"></div>
          <p>
            Como parte del cambio en la estructura de datos, se planteó la idea
            de consolidar el modelo actual en una única tabla, incorporando en
            ella todos los campos necesarios para cubrir las distintas
            funcionalidades del sistema. Esta decisión busca no solo simplificar
            la arquitectura de la base de datos, sino también optimizar el
            tratamiento de la información, reduciendo la complejidad en las
            relaciones entre tablas y mejorando el rendimiento en las
            operaciones de consulta y mantenimiento. Al centralizar los datos,
            se facilita su gestión desde el administrador de base de datos,
            permitiendo una mayor eficiencia en el acceso, análisis y
            actualización de la información, lo que se traduce en una
            experiencia más ágil tanto para los desarrolladores como para los
            usuarios finales.
          </p>

          <div className="database-cards">
            <div className="database-card" style={{ width: 350, height: 200 }}>
              <h3>ProveedoresPlantillas</h3>
              <p>codigoProveedor</p>
              <p>plantillas</p>
              <p>fechas</p>
              <p>frimas</p>
            </div>
          </div>
          <h2 className="subtitulo-seccion">Fases del Proyecto</h2>

          <div className="timeline-horizontal">
            <div className="fase-card">
              <h3>1. Consulta SQL</h3>
              <p>
                Basándome en el cambio de estructura requerido, diseñé consultas
                SQL para obtener la información deseada.
              </p>
            </div>
        
            <div className="fase-card">
              <h3>2. API en .NET</h3>
              <p>
                Las consultas fueron integradas en el{" "}
                <strong>backend en .NET</strong>, creando endpoints REST.
                Además, se definieron nuevas estructuras para las operaciones de{" "}
                <em>delete</em>, <em>post</em> y <em>put</em>.
              </p>
            </div>
           
            <div className="fase-card">
              <h3>3. Validación con Swagger</h3>
              <p>
                Cada endpoint fue probado en <strong>Swagger</strong> para
                garantizar que las respuestas fueran correctas y que la
                estructura de los datos cumpliera con los requisitos
                funcionales.
              </p>
            </div>
           

            <div className="fase-card">
              <h3>4. Estructura Frontend</h3>
              <p>
                Se definió la estructura del frontend, especificando cómo se
                mostrarían, distribuirían y utilizarían los endpoints para las
                funciones de la vista.
              </p>
            </div>
           
            <div className="fase-card">
              <h3>5. Frontend</h3>
              <p>
                Se construyó la interfaz con <strong>Vue</strong>, integrando
                diseño responsive, cuadros de diálogo con pestañas, filtros
                interactivos y visualización de datos, adaptando el diseño BDX
                al portal.
              </p>
            </div>
           

            <div className="fase-card">
              <h3>6. Funcionalidades Extras</h3>
              <p>
                Finalmente, se desarrollaron funcionalidades adicionales que
                aportan valor, como la descarga de plantillas y la aplicación de
                filtros predefinidos.
              </p>
            </div>
          </div>

          <div className="dispositivos-implementation">
            <h2 className="subtitulo-seccion">Implementación</h2>

            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Manejo de los datos</h3>
                <p>
                  Dado el cambio de estructura en las bases de datos, es{" "}
                  <em>fundamental</em> tener clara la organización de las
                  propias tablas. En primer lugar, la tarea principal fue
                  investigar cómo se relacionan entre sí dichas tablas (
                  <strong>ver detalle en "Definición de la estructura"</strong>
                  ).
                </p>

                <p>
                  Una vez comprendidas las relaciones entre las tablas, pude
                  comenzar a construir las consultas necesarias para extraer la
                  información de interés. Esta parte fue algo compleja, ya que
                  debía clasificar los diferentes ficheros según su tipo: en BDX
                  están numerados, pero en la nueva base de datos deben aparecer
                  con su <strong>nombre real</strong>.
                </p>

                <p>
                  Con esta lógica bien definida, finalmente construí
                  correctamente la consulta deseada. Esto me permitió crear la
                  nueva tabla y realizar el traspaso de información de forma
                  segura, habilitándome para trabajar con total tranquilidad sin
                  alterar <em>ningún servicio existente</em>.
                </p>
              </div>
              <div className="implementacion-card-image">
                <img
                  src="/project-images/plantillas/plantillas_implementacion/manejoDatos.png"
                  alt="Implementación de Proveedores Extranet"
                />
              </div>
            </div>

            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Trato Datos en Backend</h3>
                <p>
                  Esta fase resultó más compleja que en otros proyectos, debido
                  a la gran cantidad de endpoints que debíamos crear. Tal como
                  mencioné anteriormente, el objetivo principal era estructurar
                  correctamente los endpoints necesarios para:
                  <strong> cargar proveedores</strong>,{" "}
                  <strong>editar campos específicos</strong>,{" "}
                  <strong>cargar todas las plantillas </strong>
                  recién subidas a la nueva tabla, así como{" "}
                  <strong>cargar una plantilla específica</strong>,
                  funcionalidad que se utilizaría tanto en diálogos de
                  visualización como de edición. También se incluyó la
                  posibilidad de <strong>editar</strong> y{" "}
                  <strong>crear nuevas plantillas desde cero</strong> a través
                  de un formulario personalizado.
                </p>

                <p>
                  Para el desarrollo utilizamos <strong>.NET</strong>, creando
                  el controlador <code>plantillasProveedorController</code>. La
                  primera fase fue la más sencilla: comenzamos implementando los
                  distintos métodos <em>GET</em>. El primero permitía obtener
                  todas las plantillas mediante la API{" "}
                  <code>/api/proveedoresPlantillas</code>, utilizando un{" "}
                  <code>ToList()</code> para recoger todos los registros. Una
                  vez verificado su funcionamiento, desarrollamos el endpoint{" "}
                  <code>/api/proveedorPlantilla</code>, el cual devolvía una
                  plantilla individual al recibir su <em>ID</em> como parámetro.
                  Posteriormente, aplicamos la misma lógica para implementar los
                  métodos
                  <em>POST</em> y <em>PUT</em>.
                </p>

                <p>
                  Una vez finalizada la creación de todas las APIs, llegó la
                  etapa más importante: el <strong>testing</strong>. Utilizamos{" "}
                  <strong>Swagger</strong> para probar cada endpoint uno por
                  uno. Surgieron algunos errores, especialmente en el de
                  creación y edición, debido al tratamiento de ficheros.
                  Finalmente, tras resolverlos, dejamos todo listo para avanzar
                  a la siguiente fase.
                </p>
              </div>

              <div className="implementacion-card-image">
                <img
                  src="/project-images/plantillas/plantillas_implementacion/backend.png"
                  alt="Implementación de Proveedores Extranet"
                />
              </div>
            </div>

            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Trato Datos en FrontEnd</h3>
                <p>
                  Una vez que los datos estaban correctamente estructurados y
                  expuestos a través del endpoint, el siguiente paso fue{" "}
                  <strong>implementar la lógica en el frontend</strong>. Para
                  ello, utilizamos
                  <strong> Vue.js</strong>, una herramienta que permite crear
                  interfaces de usuario dinámicas, reactivas y fácilmente
                  escalables.
                </p>

                <p>
                  En este proyecto era crucial encontrar un punto intermedio
                  entre el diseño de <strong>BDX</strong> y el del{" "}
                  <strong>Portal</strong>. Basándonos en la implementación y
                  estructura del proyecto, era inevitable que el usuario
                  percibiera ciertos cambios, pero se buscó mantener un diseño{" "}
                  <em>compacto y sencillo</em>
                  para lograr una experiencia lo más cercana posible a la
                  original.
                </p>

                <p>
                  Estructuré un listado de proveedores utilizando un{" "}
                  <strong>DataTable</strong>, al cual se le añadieron filtros en
                  todos los campos. Posteriormente, definí un evento que, al
                  hacer clic en una fila, ejecutaba una función que abría un{" "}
                  <strong>diálogo con dos pestañas</strong>: en la primera se
                  mostraba información detallada del proveedor, y en la segunda,
                  otro DataTable con el listado de plantillas. En esta segunda
                  pestaña se incluían tres botones: uno para <em>visualizar</em>{" "}
                  la plantilla, otro para <em>editarla</em> y un tercero para{" "}
                  <em>crear una nueva</em>.
                </p>

                <p>
                  Al hacer clic en estos botones, se desplegaba un diálogo. En
                  los casos de edición y creación se reutilizaba el mismo
                  componente, diferenciándose en que si el objeto contenía un{" "}
                  <code>id</code>, se cargaban sus datos (modo{" "}
                  <strong>edición</strong>), y si no, se presentaba vacío (modo{" "}
                  <strong>creación</strong>). En dicho diálogo se integraron
                  campos de <strong>subida de archivos</strong> para adjuntar
                  plantillas. Además, en modo edición se permitía{" "}
                  <em>eliminar</em> o <em>descargar</em> ficheros, mientras que
                  en el modo creación solo era posible <em>eliminarlos</em>.
                </p>

                <p>
                  En resumen, cada segmento cumplía su función mediante la API
                  correspondiente. En mi opinión, logré un
                  <strong> diseño híbrido</strong> entre lo propuesto por BDX y
                  las expectativas del Portal, alcanzando un equilibrio
                  funcional y visual efectivo.
                </p>
              </div>
              <div className="implementacion-card-image">
                <img
                  src="/project-images/plantillas/plantillas_implementacion/frontend.png"
                  alt="Implementación de Extranet"
                />
              </div>
            </div>
            <div className="implementacion-card">
              <div className="implementacion-card-text">
                <h3>Implementaciones Extras</h3>
                <p>
                  Una vez finalizada la base del proyecto, decidí implementar
                  algunas funcionalidades adicionales. Entre ellas, añadí la{" "}
                  <strong>descarga de los ficheros de las plantillas</strong> y
                  un <strong>header </strong>
                  con filtros habituales para facilitar la navegación y análisis
                  de los datos.
                </p>

                <p>
                  Para desarrollar la funcionalidad de descarga de archivos, fue
                  necesario crear una nueva ruta en la API:
                  <code>
                    /api/plantillaProveedor/downloadFile/plantillaId/tipoArchivo
                  </code>
                  . En ella, se verifica la
                  <em> existencia del fichero</em> y sus directorios
                  correspondientes. Si todo es correcto, se genera una URL
                  válida para permitir su <strong>descarga directa</strong>.
                </p>

                <p>
                  En cuanto al header, se añadieron{" "}
                  <strong>estadísticas resumidas</strong> que muestran: el
                  número total de proveedores, cuántos tienen plantillas o
                  marcas, y cuántos son de tipo <em>homologado</em> o{" "}
                  <em>preferente</em>. Estos datos se calculan dinámicamente
                  mediante columnas de la base de datos, utilizando la propiedad{" "}
                  <code>length </code>
                  de variables previamente filtradas.
                </p>
              </div>
              <div className="implementacion-card-image">
                <img
                  src="/project-images/plantillas/plantillas_implementacion/funcionalidadesExtra.png"
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
                  <h3>Proveedores List</h3>
                  <img
                    src="/project-images/plantillas/proveedoresList.PNG"
                    alt="Implementación de Dispositivos"
                  />
                </div>
                <div>
                  <h3>Dialog Tab Proveedor</h3>
                  <img
                    src="/project-images/plantillas/detallesProveedor.PNG"
                    alt="Implementación de Dispositivos"
                  />
                </div>
                <div>
                  <h3>Dialog Tab Plantillas</h3>
                  <img
                    src="/project-images/plantillas/plantillasList.PNG"
                    alt="Implementación de Dispositivos"
                  />
                </div>
                <div>
                  <h3>Infromación plantilla</h3>
                  <img
                    src="/project-images/plantillas/plantilla_info.PNG"
                    alt="Implementación de Dispositivos"
                  />
                </div>
                <div>
                  <h3>Creación Plantilla</h3>
                  <img
                    src="/project-images/plantillas/plantillaNew.PNG"
                    alt="Implementación de Dispositivos"
                  />
                </div>
                <div>
                  <h3>Edición Plantilla</h3>
                  <img
                    src="/project-images/plantillas/plantilla_edit.PNG"
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
