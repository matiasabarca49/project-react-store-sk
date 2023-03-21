import React, { useEffect, useState } from 'react'
import Button from '../../globals/Button/Button'
import './Modo.css'

const Modo = () => {

  /* Estado que permite setiar y verificar la imagen actual que se verá en el DOM, para  que en caso contrario, nos permita cambiarla de sol a luna o viceversa  */
  const [imgActual, setImgActual] = useState("../img/sol.png")


  useEffect(() => {
    /* Obtenemos el modo guarado en el localStorage */
    const modo = localStorage.getItem("modo")
    const contenedorPagina = document.getElementById("root")
    /*  De acuerdo al modo recibido, se agrega o remueve la clase */
    if (modo === "light" || modo === null){
      contenedorPagina.classList.remove("rootDark")
      /* Por ultimo se guarda  y se cambia la imagen del modo en el estado imgActual */
      setImgActual("../img/sol.png")
    } else{
        contenedorPagina.classList.add("rootDark")
        setImgActual("../img/luna.png")
    }
  }, [])


  /**
   * Funcion que cambia de modo oscuro a modo claro
   **/ 
   
  const cambiarModo = () =>{
      const contenedorPagina = document.getElementById("root")
      //De acuerdo a la imagen actual, en la que el usuario hace click, se hace la lógica.
      if (imgActual === "../img/sol.png"){
        // Si la imagen actual es un sol, se agrega la clase "oscura"
        contenedorPagina.classList.add("rootDark")
        //Se cambia el esta de imagen actual por la luna
        setImgActual("../img/luna.png")
        //Se guarda el nuevo estado en el localstorage
        localStorage.setItem("modo","dark")
    } else{
        contenedorPagina.classList.remove("rootDark")
        setImgActual("../img/sol.png")
        localStorage.setItem("modo","light")
      }
  }  

  return (
    <>
        {/* Se utiliza un componenete botón, el cual es un botón generico al que se le pasa por props
        la imagen, el estilos css y la funcion que se ejecutará como evento */}
        <Button texto={<img src={imgActual} alt={"modo"}/> } 
        estilo={"colorModo"} 
        evento={ cambiarModo } />
    </>
  )
}

export default Modo