import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles.css";

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dciyb7p", 
        "template_8jk8sbg",
        form.current,
        "QVmZXhNQNFH0fFEz3"
      )
      .then(
        (result) => {
          console.log("✅ Mensaje enviado:", result.text);
          alert("¡Mensaje enviado con éxito!");
        },
        (error) => {
          console.log("❌ Error:", error.text);
          alert("Hubo un error al enviar tu mensaje.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-content">
      <div className="separator"></div>
      <div className="contact-header">
        <h1>Contacta Conmigo!</h1>
        <h2>Francesco Romano</h2>
        <h3>Web developer</h3>
      </div>

      <div className="contact-main">
        <div className="img-contact-column">
          <img src="/icon/icon_contact_fran.png" alt="Avatar" />
        </div>

        <div className="form-contact-column">
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h2>Contáctame</h2>

            <label htmlFor="user_email">Tu correo</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              placeholder="correo@ejemplo.com"
            />

            <label htmlFor="message">Tu mensaje</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>

            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
