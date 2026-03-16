import React from "react";
import "./footer.css"
import metlogo from "../../assets/logo2.png";

const Footer = () => {
  return (
    <footer>
        <div className="contfooter">
            <img src= {metlogo} width="120" height="120" alt="Logo MET" />
            <div className="contacto">
                <ul>
                    <li><h2>CONTACTO</h2></li>
                    <li>Atención ventas<a href="https://web.whatsapp.com/">+5491131716356</a></li>
                    <li>Consultas técnicas<a href="https://web.whatsapp.com/">+5491131716356</a></li>
                    <li>Atención a proveedores<a href="https://web.whatsapp.com/">+5491131716356</a></li>
                </ul>
            </div>
            <div className="redes">
                <ul>
                    <li><h2>REDES SOCIALES</h2></li>
                    <li>
                        <a
                            href="https://ar.linkedin.com/in/marcelo-eduardo-tysko-97a31a31"
                            target="_blank"
                            rel="noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li><a href="mailto:mtysko111@gmail.com">Correo</a></li>
                </ul>
            </div>
            <div className="ubicacion">
                <ul>
                    <li><h2>UBICACIÓN</h2></li>
                    <li>Pilar del este</li>
                    <li>Pilar. Buenos Aires</li>
                    <li>Argentina</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer;