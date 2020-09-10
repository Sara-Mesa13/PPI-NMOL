import React from "react";
import "../style/RegistroObstetra.css";

export const RegistroObstetra = () => {
  return (
    <div className="RegistroObstetra">
      <form className="form-signin">
  
          <img className="img" src="../img/FlechaAtras.png" alt="" /> 
          <h1 className="Titulo"> Registro </h1>
     

        <div className="Casillas">
          <p className=""> Nombres: </p>
            <label for="inputEmail" className="sr-only"> </label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Albeiro" required="" autofocus="" />
        </div>

        <div className="Casillas">
          <p className=""> Apellidos: </p>
            <label for="inputPassword" className="sr-only"> </label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Suarez Zapata" required="" />
        </div>

        <div className="Casillas">
          <p className=""> Correo Electrónico: </p>
            <label for="inputEmail" className="sr-only"> </label>
          <input type="email" id="inputEmail" className="form-control" placeholder="zapataA.12@gmail.com" required="" autofocus="" />
        </div>

        <div className="Casillas">
          <p className=""> Contraseña: </p>
            <label for="inputEmail" className="sr-only"> </label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Alber.12zapata" required="" autofocus="" />
        </div>

        <button className="Boton btn-lg btn-primary btn-block" type="submit">
          Registrar
        </button>
        <p class="mt-5 mb-3 text-muted">© 2020-PPI</p>
      </form>
    </div>
  );
};