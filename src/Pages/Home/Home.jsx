import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';
import CountUp from '../../components/CountUp/CountUp';

const Home = () => {
  return (
    <main>
        <div className="fondo">
            <div className="imgfondo"></div>
            <div className="overlay">
                <h1>MET</h1>
                <hr className="hero-divider" />
                <p>Contamos con la experiencia y trayectoria para brindarte servicios
                de verificación que te ayudarán a aumentar la confiabilidad de tu equipo.</p>
                <Link to="/Contacto" className="hero-cta">Contactanos</Link>
            </div>
        </div>
        <div className="representaciones">
            <div className="repre1">
                <h1>Representante Oficial LAMTEC</h1>
                <p>LAMTEC desarrolla y produce sensores y sistemas para la tecnología de cocción.
                    La fiabilidad, la eficiencia y las mayores exigencias de funcionalidad han estado
                    configurando nuestra gama de productos durante más de 25 años. Incluso antes de su
                    fundación, el actual equipo LAMTEC introdujo el reglamento O 2 en el mercado en 1982. </p>
                <Link to="/nosotros">
                    <button>Conocer más</button>
                </Link>
            </div>
            <div className="repre2">
                <img src="img/lamtec.jpg" alt="LAMTEC" />
            </div>
        </div>
        <div className="separacion">
            <div className="ficha">
                <h2><CountUp target={32} /></h2>
                <p>Paises donde operamos</p>
            </div>
            <div className="ficha">
                <h2><CountUp target={38} /></h2>
                <p>Años de trayectoria</p>
            </div>
            <div className="ficha">
                <h2><CountUp target={1682} /></h2>
                <p>Trabajos ejecutados</p>
            </div>
            <div className="ficha">
                <h2><CountUp target={183} /></h2>
                <p>Empresas acompañadas</p>
            </div>
        </div>

        <div className="servicegral">
            <div className="service">
                <div className="cardho">
                    <div className="imagen">
                        <img src="img/Quemador5.jpeg" />
                    </div>
                    <div className="detalle1">
                        <h1>Mantenimiento de quemadores</h1>
                        <Link to="/Service#quemadores">
                            <button className="b1">Ver más</button>
                        </Link>
                    </div>
                </div>
                <div className="cardho">
                    <div className="imagen">
                        <img src="img/Automatizacion.jpeg" />
                    </div>
                    <div className="detalle2">
                        <h1>Actualizaciones y automatizaciones</h1>
                        <Link to="/Service#automatizacion">
                            <button className="b2">Ver más</button>
                        </Link>
                    </div>
                </div>
                <div className="cardho">
                    <div className="imagen">
                        <img src="img/iconoseguridad1.jpg" />
                    </div>
                    <div className="detalle1">
                        <h1>Protocolos de seguridad</h1>
                        <Link to="/Service#seguridad">
                            <button className="b1">Ver más</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="service">
                <div className="cardho">
                    <div className="imagen">
                        <img src="img/Analisis.jpeg" />
                    </div>
                    <div className="detalle2">
                        <h1>Analisis de la combustión</h1>
                        <Link to="/Service#combustion">
                            <button className="b2">Ver más</button>
                        </Link>
                    </div>
                </div>
                <div className="cardho">
                    <div className="imagen">
                        <img src="img/Eficiencia.jpeg" />
                    </div>
                    <div className="detalle1">
                        <h1>Eficiencia energética</h1>
                        <Link to="/Service#eficiencia">
                            <button className="b1">Ver más</button>
                        </Link>
                    </div>
                </div>
                <div className="cardho">
                    <div className="imagen">
                        <img src="img/Nuevosequipos.jpeg" />
                    </div>
                    <div className="detalle2">
                        <h1>Montaje de nuevos equipos</h1>
                        <Link to="/Service#nuevo">
                            <button className="b2">Ver más</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Home;