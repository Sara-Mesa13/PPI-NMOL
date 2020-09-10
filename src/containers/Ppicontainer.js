import React from 'react';
import "../style/Ppicontainer.css";



import {ComoMujer} from "../components/ComoMujer"
import { ComoObstetra } from '../components/ComoObstetra';
import { TipoUsuario } from '../components/TipoUsuario';
import { Bienvenida } from '../components/Bienvenida';
import { Footer} from '../components/Footer';
import { RegistroMujer } from '../components/RegistroMujer';
import { RegistroObstetra } from '../components/RegistroObstetra';
import { InicioMujer } from '../components/InicioMujer';
import { InicioObstetra } from '../components/InicioObstetra';
import { InicioPrincipal } from '../components/InicioPrincipal';



export default function Ppicontainer (){
  return(
    <div className="Ppicontainer">
      <Bienvenida/>
      <TipoUsuario/>
      <ComoMujer/>
      <ComoObstetra />
      <RegistroMujer />
      <RegistroObstetra />
      <InicioMujer />
      <InicioObstetra />
      <InicioPrincipal />
      <Footer />
    </div>
  );
}