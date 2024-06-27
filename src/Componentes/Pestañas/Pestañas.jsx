import { useState } from "react";

const Pestañas = (props) => {

  const [contenido, setContenido] = useState("");

  const seleccionarPestaña = (e, value) => {
    setContenido(value.mensaje);
    /*despues de actualizar el estado contenido se verifica si
    el objeto value tiene un callback si es asi se llama a esa funcion*/
    if (value.funcionDePestaña) {
      value.funcionDePestaña();
    }
  }

  return (
    <>
      {props.elementos.map((item, index) => (
        <button className="btn-pestaña" key={index} onClick={e => seleccionarPestaña(e, item)}>{item.numero} </button>
      ))}
      <div className="contenido-pestaña">
        {contenido}
      </div>
    </>
  )

}

export default Pestañas;