import React from 'react';
import "./Service.css";
import Carousel from '../../components/Carrousel/Carrousel';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Service = () => {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <main className="servicios">
      <section className="tarjeta-servicio" id="quemadores">
        <Carousel 
          images={[
            { src: "img/quemador1.2.jpeg", position: "center 30%" },
            { src: "img/quemador12.jpeg", position: "center 50%" },
            { src: "img/quemador13.jpeg", position: "center 15%" },
          ]}
        />
          
        <div className="info-servicio">
          <h2>Mantenimiento de quemadores</h2>
          <ul>
            <li>Control de funcionamiento del quemador</li>
            <li>Verificación y pruebas del controlador</li>
            <li>Revisión y ajuste de dampers</li>
            <li>Verificación de sensores y amplificadores de llama</li>
            <li>Limpieza y verificación de bujías</li>
            <li>Verificación de seguridades del quemador, aire, gas y estanqueidades</li>
          </ul>
        </div>
      </section>

      <section className="tarjeta-servicio" id="automatizacion">
        <Carousel 
          images={[
            { src: "img/automatizacion1.jpeg", position: "center 50%" },
            { src: "img/automatizacion2.jpeg", position: "center 50%" },
            { src: "img/automatizacion3.jpeg", position: "center 0%" },
          ]}
        />

        <div className="info-servicio">
          <h2>Actualizaciones y automatizaciones</h2>
          <ul>
            <li>Automatización de tableros y quemadores</li>
            <li>Reemplazo de quemadores y sistemas</li>
            <li>Automatización e instalaciones de PLC</li>
            <li>Modificaciones de quemadores para uso multiple de combustibles</li>
          </ul>
        </div>
      </section>

      <section className="tarjeta-servicio" id="seguridad">
        <Carousel 
          images={[
            { src: "img/seguridad1.jpeg", position: "center 50%" },
            { src: "img/seguridad2.jpeg", position: "center 70%" },
          ]}
        />
      
        <div className="info-servicio">
          <h2>Protocolos de seguridad</h2>
          <ul>
            <li>Revisión de funcionamiento de controles de nivel</li>
            <li>verificación de bujias de muy bajo nivel</li>
            <li>Revisión de detectores de llama</li>
            <li>Verificación y calibración de control de tempratura de gases</li>
            <li>Verificación de funcionamiento de presostatos de vapor</li>
            <li>Verificación de funcionamiento de presostatos de gas</li>
            <li>Ajuste de válvulas reguladoras de gas</li>
            <li>Verificación de inexistencia de fugas de gas</li>
          </ul>
        </div>
      </section>

      <section className="tarjeta-servicio" id="combustion">
        <Carousel 
          images={[
            { src: "img/Eficiencia.jpeg", position: "center 80%" },
            { src: "img/quemador1.3.jpeg", position: "center 50%" },
            { src: "img/Quemador4.jpeg", position: "center 50%" },
          ]}
        />

        <div className="info-servicio">
          <h2>Analisis de la combustión</h2>
          <ul>
            <li>Medición de gases de chimenea</li>
            <li>Analisis de la combustión</li>
            <li>Ajuste de combustión de acuerdo a los distintos combustibles</li>
            <li>Elaboración de informes certificados para auditorias medio ambientales</li>
          </ul>
        </div>
      </section>

      <section className="tarjeta-servicio" id="eficiencia">
        <Carousel 
          images={[
            { src: "img/Quemador124.jpeg", position: "center 70%" },
            { src: "img/eficiencia1.jpeg", position: "center 50%" },
          ]}
        />

        <div className="info-servicio">
          <h2>Eficiencia energética</h2>
          <ul>
            <li>Regulación de las distintas curvas de combustión</li>
            <li>Estudio para el aprovechamiento de la energía</li>
            <li>Analisis del agua, dureza, ph, conductividad</li>
            <li>Aprovechamiento del aire</li>
            <li>Optimización del rendimiento de la caldera</li>
          </ul>
        </div>
      </section>

      <section className="tarjeta-servicio" id="nuevo">
        <Carousel 
          images={[
            { src: "img/quemador419.jpeg", position: "center 50%" },
            { src: "img/quemador11.jpeg", position: "center 35%" },
            { src: "img/quemador325.jpeg", position: "center 50%" },
          ]}
        />

        <div className="info-servicio">
          <h2>Nuevos equipos</h2>
          <ul>
            <li>Servicios especiales de ingenieria y desarrollo</li>
            <li>Modificaciones de quemadores para alimentación multiple</li>
            <li>Desarrollo de prototipos</li>
            <li>Obras integrales</li>
            <li>Energías renovables</li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Service;