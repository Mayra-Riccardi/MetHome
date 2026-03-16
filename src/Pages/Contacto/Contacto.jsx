import React from 'react'
import "./Contacto.css";
import { Link } from 'react-router-dom';

const Contacto = () => {
  return (
    <main>
        <div className="fondo">
            <div className="imgfondo">
                <div className="mail">
                    <form>
                        <input className="fila" type="text" placeholder="Nombre y apellido" />
                        <input className="fila" type="text" placeholder="+5491112341234" />
                        <input className="fila" type="email" placeholder="correo@gmail.com" />
                        <select className="fila">
                            <option value="Argentina">Argentina</option>
                            <option value="Chile">Chile</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Brasil">Brasil</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Perú">Perú</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Venezuela">Venezuela</option>
                        </select>
                        <textarea className="fila" cols="60" rows="10" placeholder="Comentanos en qué podemos ayudarte"></textarea>
                        <input className="fila" type="submit" value="Enviar" />
                        <input className="fila" type="reset" value="Resetear" />
                    </form>
                </div>
            </div>    
            <div className="overlay">
                <h1>Contactanos</h1>
                <p>
                    Envianos tus dudas o consultas acerca de nuestros productos
                    o servicios. Durante el día te estaremos contacto por el medio
                    por el que decidas que te contactemos.
                    Gracias por tu contacto
                </p>
            </div>
        </div>
    </main>
  )
};

export default Contacto;