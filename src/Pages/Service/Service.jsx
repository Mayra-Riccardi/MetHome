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
            "img/quemador1.2.jpeg",
            "img/quemador1.3.jpeg",
            "img/Quemador4.jpeg",
          ]}
        />
          
        <div className="info-servicio">
          <h2>Servicio de mantenimiento de quemadores</h2>
          <ul>
            <li>Control de funcionamiento del quemador</li>
            <li>Verificación y pruebas del controlador</li>
            <li>Revisión y ajuste de dumpers</li>
            <li>Verificación del estado de fotocélulas</li>
            <li>Limpieza y verificación de bujías</li>
            <li>Limpieza y verificación de filtros de gas</li>
            <li>Verificación de presostatos de vapor</li>
            <li>Verificación de presostato de aire</li>
            <li>Verificación de presostato de gas</li>
          </ul>
        </div>
      </section>

      <section className="tarjeta-servicio" id="automatizacion">
        <Carousel 
          images={[
            "img/quemador1.2.jpeg",
            "img/quemador1.3.jpeg",
            "img/Quemador4.jpeg",
          ]}
        />

        <div className="info-servicio">
          <h2>Actualizaciones y automatizaciones</h2>
          <ul>
            <li>Automatización de tableros y quemadores</li>
            <li>Reemplazo de quemadores y sistemas</li>
            <li>Automatización e instalaciones de PLC</li>
            <li>Modificaciones de quemadores para uso multiple de combustibles</li>
            <li>Actualziaciones de tableros</li>
          </ul>
        </div>
      </section>

      <section className="tarjeta-servicio" id="seguridad">
        <Carousel 
          images={[
            "img/quemador1.2.jpeg",
            "img/quemador1.3.jpeg",
            "img/Quemador4.jpeg",
          ]}
        />
      
        <div className="info-servicio">
          <h2>Protocolos de seguridad</h2>
          <ul>
            <li>Control de funcionamiento de controles de nivel</li>
            <li>Revisión de detectores de llama</li>
            <li>verificación de bujias de muy bajo nivel</li>
            <li>Verificación y calibración de control de tempratura de gases</li>
            <li>Verificación de funcionamiento de presostatos de vapor</li>
            <li>Verificación de funcionamiento de presostatos de gas</li>
            <li>Verificación de funcionamiento y inexistencia de fugas en válvulas de gas</li>
            <li>Regulación de válvulas reguladoras de gas</li>
          </ul>
        </div>
      </section>

      <section className="tarjeta-servicio" id="combustion">
        <Carousel 
          images={[
            "img/quemador1.2.jpeg",
            "img/quemador1.3.jpeg",
            "img/Quemador4.jpeg",
          ]}
        />

        <div className="info-servicio">
          <h2>Analisis de la combustión</h2>
          <ul>
            <li>Medición de gases de combustión</li>
            <li>Analisis de la combustión</li>
            <li>Regulación de combustión de acuerdo a los distintos combustibles</li>
            <li>Regulación de curvas de combustión</li>
            <li>Elaboración de informes certificados para auditorisa medio ambientales</li>
          </ul>
        </div>
      </section>

      <section className="tarjeta-servicio" id="eficiencia">
        <Carousel 
          images={[
            "img/quemador1.2.jpeg",
            "img/quemador1.3.jpeg",
            "img/Quemador4.jpeg",
          ]}
        />

        <div className="info-servicio">
          <h2>Eficiencia energética</h2>
          <ul>
            <li>Regulación de las curvas de combustión</li>
            <li>Estudio para el aprovechamiento de la energía</li>
            <li>Regulación de temperaturas de ingersos de agua</li>
            <li>Aprovechamiento de al aire y rendimiento</li>
            <li>Indicadores de estado de interior de calderas</li>
          </ul>
        </div>
      </section>

      <section className="tarjeta-servicio" id="nuevo">
        <Carousel 
          images={[
            "img/quemador1.2.jpeg",
            "img/quemador1.3.jpeg",
            "img/Quemador4.jpeg",
          ]}
        />

        <div className="info-servicio">
          <h2>Montaje de nuevos equipos</h2>
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