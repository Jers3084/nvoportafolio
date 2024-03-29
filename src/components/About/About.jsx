import React from "react";
import styles from "./About.module.css";
import foto from "./img/foto.jpg";

export const About = (props) => {
  return (
    <>
      {props.lang === "es-419" ||
      props.lang === "es" ||
      props.lang === "es-ES" ? (
        <div className={styles.contenedor}>
          <div className={styles.contenedor_uno}>
            <div className={styles.fotografia}>
              <img src={foto} alt="" className={styles.img} />
            </div>
            <div className={styles.parrafo_uno}>
              <p className={styles.subparrafo1}>
                Mi nombre es{" "}
                <strong>Jesús Eugenio Ricardez de los Santos</strong> y soy{" "}
                <strong>“Desarrollador Web Fullstack”</strong>
              </p>
              <p className={styles.titulo1}>Mi objetivo profesional</p>
              <p className={styles.parrafo2}>
                Apoyar profesional y tecnológicamente a empresas grandes,
                medianas y pequeñas, así como a emprendedores y profesionales en
                el cumplimiento de su plan de negocios que generen valor y ser
                motor del desarrollo de las empresas.
              </p>
            </div>
          </div>
          <div className={styles.contenedor_dos}>
            <p className={styles.titulo3}>Formación Profesional</p>
            <ul className={styles.ul_uno}>
              <li className={styles.item_lista1}>
                Licenciatura en Electrónica en la Escuela de Ciencias de la
                Electrónica de la Benemérita Universidad Autónoma de Puebla.
                Ced.Prof. 2486450
              </li>
              <li className={styles.item_lista1}>
                Maestría en Dirección e Ingenieria de Software en la Universidad
                Tecnológica Latinoamericana en Línea UTEL. Ced.Prof. 12464154
              </li>
              <li className={styles.item_lista1}>
                Diplomado en Tecnologías de la Información.-Impartido por la
                empresa Asesoría en Redes y Telecomunicaciones ASERCOM
              </li>
              <li className={styles.item_lista1}>
                Capacitación continua en Administracion de Proyectos y Sistemas
                de Telecomunicaciones y Tecnologías de la Información.
              </li>
              <li className={styles.item_lista1}>
                BootCamp Desarrollo Web Full Stack.
              </li>
              <li className={styles.item_lista1}>
                BootCamp Diseñador UX/UI.
              </li>
            </ul>
          </div>
          <div className={styles.contenedor_tres}>
            <p className={styles.titulo}>Conocimientos y experiencia</p>
            <p className={styles.titulo4}>
              Lenguajes de programacion y Herramientas de estilos
            </p>
            <p className={styles.parrafo3}>JAVASCRIPT, HTML, CSS, BOOTSTRAP.</p>
            <p className={styles.titulo4}>Frameworks y Librerias</p>
            <p className={styles.parrafo3}>NODE JS, EXPRESS, REACT JS.</p>
            <p className={styles.titulo4}>Herramientas de Desarrollo</p>
            <p className={styles.parrafo3}>VISUAL STUDIO CODE, GITHUB.</p>
            <p className={styles.titulo4}>Cloud y Despliegues.</p>
            <p className={styles.parrafo3}>GOOGLE CLOUD, HEROKU, VERCEL.</p>
            <p className={styles.titulo4}>Sistemas Operativos</p>
            <p className={styles.parrafo3}>WINDOWS, LINUX.</p>
            <p className={styles.titulo4}>Metodologias de desarrollo</p>
            <p className={styles.parrafo3}>SCRUM, KANBAN.</p>
            <p className={styles.titulo4}>Bases de Datos</p>
            <p className={styles.parrafo3}>MONGO DB, FIRE BASE, ROBO 3T</p>
            <p className={styles.titulo4}>Experiencia:</p>
            <ul className={styles.ul_dos}>
              <li className={styles.item_lista2}>
                Elaboración de Paginas Web dinámicas y responsivas. (Html, Css,
                JavaScript, React)
              </li>
              <li className={styles.item_lista2}>
                Sistemas CRUD. (Arrays, LocalStorage )
              </li>
              <li className={styles.item_lista2}>
                Tienda en línea (e-commerce).
              </li>
              <li className={styles.item_lista2}>
                Sistemas Frontend y Backend.
              </li>
              <li className={styles.item_lista2}>
                Elaboración de sistemas de consumo y elaboración de API´s,
                Tableros de Datos (Dashboard).
              </li>
              <li className={styles.item_lista2}>
                Investigaciones UX
              </li>
              <li className={styles.item_lista2}>
                Diseño de interfaces UI
              </li>
            </ul>
          </div>
          <div className={styles.contenedor_cuatro}>
            <div className={styles.contenedor_grid}>
              <div className={styles.columna_uno}>
                <p className={styles.titulo5}>Aptitudes</p>
                <hr className={styles.hr} />
                <ul className={styles.ul_dos}>
                  <li className={styles.item_lista2}>Honestidad</li>
                  <li className={styles.item_lista2}>Lealtad</li>
                  <li className={styles.item_lista2}>Proactividad</li>
                  <li className={styles.item_lista2}>Disponibilidad</li>
                  <li className={styles.item_lista2}>Liderazgo</li>
                  <li className={styles.item_lista2}>Autodidacta</li>
                  <li className={styles.item_lista2}>Creativo</li>
                  <li className={styles.item_lista2}>Analítico</li>
                  <li className={styles.item_lista2}>Sociable</li>
                  <li className={styles.item_lista2}>Adaptabilidad</li>
                </ul>
              </div>
              <div className={styles.columna_media}>
                <p className={styles.titulo5}>y</p>
              </div>
              <div className={styles.columna_dos}>
                <p className={styles.titulo5}>Habilidades</p>
                <hr className={styles.hr} />
                <ul className={styles.ul_dos}>
                  <li className={styles.item_lista2}>
                    Entendimiento de planes estratégicos
                  </li>
                  <li className={styles.item_lista2}>Trabajo en Equipo</li>
                  <li className={styles.item_lista2}>Toma de decisiones</li>
                  <li className={styles.item_lista2}>
                    Capacidad de Análisis y Síntesis
                  </li>
                  <li className={styles.item_lista2}>
                    Resolución de problemas
                  </li>
                  <li className={styles.item_lista2}>Rápido aprendizaje </li>
                  <li className={styles.item_lista2}>Analítico</li>
                  <li className={styles.item_lista2}>
                    Desarrollo de Proyectos e Ingenierias
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.pie_de_pagina}>
            <hr className={styles.hr} />
          </div>
        </div>
      ) : (
        <div className={styles.contenedor}>
          <div className={styles.contenedor_uno}>
            <div className={styles.fotografia}>
              <img src={foto} alt="" className={styles.img} />
            </div>
            <div className={styles.parrafo_uno}>
              <p className={styles.subparrafo1}>
                My name is <strong>Jesús Eugenio Ricardez de los Santos</strong>{" "}
                and I am a <strong>“WebFullStack Developer”</strong>
              </p>
              <p className={styles.titulo2}>My professional goal</p>
              <p className={styles.parrafo2}>
                Professionally and technologically support large, medium and
                small companies, as well as entrepreneurs and professionals in
                the fulfillment of their business plan that generate value and
                be the engine of company development.
              </p>
            </div>
          </div>
          <div className={styles.contenedor_dos}>
            <p className={styles.titulo3}>Professional Training</p>
            <ul className={styles.ul_uno}>
              <li className={styles.item_lista1}>
                Degree in Electronics at the School of Electronic Sciences of
                the Meritorious Autonomous University of Puebla. Ced.Prof.
                2486450
              </li>
              <li className={styles.item_lista1}>
                Master's Degree in Management and Software Engineering at the
                Online Latin American Technological University UTEL. Ced.Prof.
                12464154
              </li>
              <li className={styles.item_lista1}>
                Diploma in Information Technologies.- Taught by the company
                Network and Telecommunications Consulting ASERCOM
              </li>
              <li className={styles.item_lista1}>
                Continuous training in Project Management and Telecommunications
                and Information Technology Systems.
              </li>
              <li className={styles.item_lista1}>
                BootCamp Full Stack Web Development.
              </li>
              <li className={styles.item_lista1}>
                BootCamp UX/UI Design.
              </li>
            </ul>
          </div>
          <div className={styles.contenedor_tres}>
            <p className={styles.titulo}>knowledge and experience</p>
            <p className={styles.titulo4}>
              Programming languages and style tools
            </p>
            <p className={styles.parrafo3}>JAVASCRIPT, HTML, CSS, BOOTSTRAP.</p>
            <p className={styles.titulo4}>Frameworks and Libraries</p>
            <p className={styles.parrafo3}>NODE JS, EXPRESS, REACT JS.</p>
            <p className={styles.titulo4}>Development tools</p>
            <p className={styles.parrafo3}>VISUAL STUDIO CODE, GITHUB.</p>
            <p className={styles.titulo4}>Cloud and Deployments</p>
            <p className={styles.parrafo3}>GOOGLE CLOUD, HEROKU, VERCEL.</p>
            <p className={styles.titulo4}>Operating systems</p>
            <p className={styles.parrafo3}>WINDOWS, LINUX.</p>
            <p className={styles.titulo4}>Development methodologies</p>
            <p className={styles.parrafo3}>SCRUM, KANBAN.</p>
            <p className={styles.titulo4}>Databases</p>
            <p className={styles.parrafo3}>MONGO DB, FIRE BASE, ROBO 3T</p>
            <p className={styles.titulo4}>Experience:</p>
            <ul className={styles.ul_dos}>
              <li className={styles.item_lista2}>
                Development of dynamic and responsive Web Pages. (Html, Css,
                JavaScript, React)
              </li>
              <li className={styles.item_lista2}>
                CRUD Systems. (Arrays, LocalStorage )
              </li>
              <li className={styles.item_lista2}>Online store (e-commerce).</li>
              <li className={styles.item_lista2}>
                Frontend and Backend systems.
              </li>
              <li className={styles.item_lista2}>
                Development of consumption systems and development of APIs, Data
                Dashboards (Dashboard).
              </li>
              <li className={styles.item_lista2}>
              UX Research
              </li>
              <li className={styles.item_lista2}>
              UI interface design
              </li>
            </ul>
          </div>
          <div className={styles.contenedor_cuatro}>
            <div className={styles.contenedor_grid}>
              <div className={styles.columna_uno}>
                <p className={styles.titulo5}>Aptitudes</p>
                <hr className={styles.hr} />
                <ul className={styles.ul_dos}>
                  <li className={styles.item_lista2}>Honesty</li>
                  <li className={styles.item_lista2}>Loyalty</li>
                  <li className={styles.item_lista2}>Proactivity</li>
                  <li className={styles.item_lista2}>Availability</li>
                  <li className={styles.item_lista2}>Leadership</li>
                  <li className={styles.item_lista2}>Autodidact</li>
                  <li className={styles.item_lista2}>Creative</li>
                  <li className={styles.item_lista2}>Analytical</li>
                  <li className={styles.item_lista2}>Sociable</li>
                  <li className={styles.item_lista2}>Adaptability</li>
                </ul>
              </div>
              <div className={styles.columna_media}>
                <p className={styles.titulo5}>and</p>
              </div>
              <div className={styles.columna_dos}>
                <p className={styles.titulo5}>Skills</p>
                <hr className={styles.hr} />
                <ul className={styles.ul_dos}>
                  <li className={styles.item_lista2}>
                    Understanding of strategic plans
                  </li>
                  <li className={styles.item_lista2}>Teamwork</li>
                  <li className={styles.item_lista2}>Decision making</li>
                  <li className={styles.item_lista2}>
                    Capacity for analysis and synthesis
                  </li>
                  <li className={styles.item_lista2}>Problem resolution</li>
                  <li className={styles.item_lista2}>Fast learning</li>
                  <li className={styles.item_lista2}>Analytical</li>
                  <li className={styles.item_lista2}>
                    Desarrollo de Proyectos e Ingenierias
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.pie_de_pagina}>
            <hr className={styles.hr} />
          </div>
        </div>
      )}
    </>
  );
};
