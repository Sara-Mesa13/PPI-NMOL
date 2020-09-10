import React from 'react';
import {Button} from 'react-bootstrap'
import "../style/TipoUsuario.css";

export const TipoUsuario = () => {
  return (
    <div className="TipoUsuario">
      <h1 className="Usuario">¿Qué usuario representas?</h1>
       <div className="Espacio">

        <Button className="MujerG">
           <img className="Mujer"
             src="./img/MujerGestante.png"
             alt="Mujer Gestante"/>
             Mujer Gestante  
        </Button>{' '}
      </div>
      
      <div className="Espacio">
        <Button className="MujerG">  
          <img className="Obstetra"
             src="./img/Obstetra.png"
             alt="Mujer Gestante"/>
             Obstetra 
        </Button>{' '}
      </div>

    </div>
 )
};