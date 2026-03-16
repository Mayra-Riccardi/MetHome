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
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twiter</a></li>
                    <li><a href="#">Correo</a></li>
                </ul>
            </div>
            <div className="ubicacion">
                <ul>
                    <li><h2>UBICACIÓN</h2></li>
                    <li>Dirección</li>
                    <li>Partido y provincia</li>
                    <li>Pais</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer;