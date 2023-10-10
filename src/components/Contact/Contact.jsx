import React, { useState, useEffect, useRef } from "react";
import styles from "./Contact.module.css";
import github from "./img/github_icon.png";
import linkedin from "./img/linked_icon.png";
import { Modal } from "../../components/Modal/Modal";
import { useForm, ValidationError } from "@formspree/react";

export const Contact = (props) => {
  const [estadoModal, setEstadoModal] = useState(false);
  const [encabezadoModal, setEncabezadoModal] = useState("");
  const [tituloModal, setTituloModal] = useState("");
  const [mensajeModal, setMensajeModal] = useState("");
  const [state, handleSubmit] = useForm("mzbqklgk");
  const ref = useRef();


  useEffect(() => {
    if (state.succeeded) {
      setEncabezadoModal("Contacto");
      setTituloModal("Mensaje enviado");
      setMensajeModal("Gracias en breve te contactare");
      setEstadoModal(true);
      ref.current.reset();
    }
  }, [state.succeeded]);

  return (
    <>
      {props.lang === "es-419" ||
      props.lang === "es" ||
      props.lang === "es-ES" ? (
        <div className={styles.contenedor}>
          <h1 className={styles.titulo}>Contacto</h1>

          <div className={styles.pagebody}>
            <form ref={ref} className={styles.formato} onSubmit={handleSubmit}>
              <div className={styles.fullentry}>
                <label className={styles.formlabel} htmlFor="email">
                  Tu Direccion de correo:
                </label>

                <input
                  className={styles.formcontrol}
                  id="email"
                  type="email"
                  name="email"
                  required
                />
              </div>

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <div className={styles.fullentry}>
                <label htmlFor="message">Mensaje:</label>

                <textarea
                  className={styles.formcontrol}
                  id="message"
                  name="message"
                  required
                />
              </div>

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <div className={styles.contenBoton}>
                <button
                  className={styles.boton}
                  type="submit"
                  disabled={state.submitting}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

          <div className={styles.pie_de_pagina}>
            <a
              href="https://github.com/Jers3084?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" className={styles.img} />
            </a>
            <a
              href="https://www.linkedin.com/in/jesus-eugenio-ricardez-de-los-santos-494b0810a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" className={styles.img} />
            </a>
          </div>
        </div>
      ) : (
        <div className={styles.contenedor}>
          <h1 className={styles.titulo}>Contact</h1>

          <div className={styles.pagebody}>
            <form ref={ref}  className={styles.formato} onSubmit={handleSubmit}>
              <div className={styles.fullentry}>
                <label className={styles.formlabel} htmlFor="email">
                  Your E-mail:
                </label>

                <input
                  className={styles.formcontrol}
                  id="email"
                  type="email"
                  name="email"
                  required
                />
              </div>

              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <div className={styles.fullentry}>
                <label htmlFor="message">Message:</label>

                <textarea
                  className={styles.formcontrol}
                  id="message"
                  name="message"
                  required
                />
              </div>

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              <div className={styles.contenBoton}>
                <button
                  className={styles.boton}
                  type="submit"
                  disabled={state.submitting}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className={styles.pie_de_pagina}>
            <a
              href="https://github.com/Jers3084?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="" className={styles.img} />
            </a>
            <a
              href="https://www.linkedin.com/in/jesus-eugenio-ricardez-de-los-santos-494b0810a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="" className={styles.img} />
            </a>
          </div>
        </div>
      )}

      {estadoModal && (
        <Modal
          estado={estadoModal}
          cambiarestado={setEstadoModal}
          encabezado={encabezadoModal}
          titulo={tituloModal}
          mensaje={mensajeModal}
        />
      )}
    </>
  );
};
