import { Link } from "react-router-dom";
import "./styles.css";

function Footer() {
  return (
    <footer id="contact">
      <h2>Trabajemos Juntos</h2>
      <p>
        Siempre estoy interesado en nuevas oportunidades y emocionantes
        proyectos. Hablemos sobre cómo podemos hacer realidad tus ideas.{" "}
      </p>

      <div class="footer-links">
        <a
          href="https://github.com/fraannr4"
          class="icon-link"
          aria-label="GitHub"
        >
          <svg
            class="icon"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.426 2.865 8.19 6.839 9.524.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.22-.253-4.555-1.114-4.555-4.957 0-1.095.39-1.99 1.029-2.69-.103-.253-.446-1.27.098-2.645 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.6 9.6 0 012.5.336c1.91-1.296 2.75-1.027 2.75-1.027.546 1.376.202 2.393.1 2.645.64.7 1.028 1.595 1.028 2.69 0 3.853-2.338 4.7-4.566 4.95.36.31.68.923.68 1.862 0 1.344-.012 2.426-.012 2.756 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.523 2 12 2z"
            />
          </svg>
        </a>

        <a
          href="https://www.linkedin.com/in/francesco-romano-307893296/"
          class="icon-link"
          aria-label="LinkedIn"
        >
          <svg
            class="icon"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0V8.5zM7.5 8.5h4.75v2.17h.07c.66-1.25 2.27-2.57 4.67-2.57 5 0 5.92 3.29 5.92 7.56V24h-5v-7.46c0-1.78-.03-4.07-2.48-4.07-2.48 0-2.86 1.93-2.86 3.92V24h-5V8.5z" />
          </svg>
        </a>

        <a
          href="mailto:fran.romano2003@gmail.com"
          class="icon-link"
          aria-label="Correo electrónico"
        >
          <svg
            class="icon"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 8h18a2 2 0 002-2V8a2 2 0 00-2-2H3a2 2 0 00-2 2v6a2 2 0 002 2z"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
export default Footer;
