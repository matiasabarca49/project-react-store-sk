import React, { useEffect, useState } from 'react'
import Button from '../../globals/Button/Button'
import './Modo.css'

const Modo = () => {

  const [imgActual, setImgActual] = useState("../img/sol.png")


  useEffect(() => {
    const modo = localStorage.getItem("modo")
    console.log(modo)
    const contenedorPagina = document.getElementById("root")
    if (modo === "light" || modo === null){
        contenedorPagina.classList.remove("rootDark")
        setImgActual("../img/sol.png")
    } else{
        contenedorPagina.classList.add("rootDark")
        setImgActual("../img/luna.png")
    }
  }, [])
   
  const cambiarModo = () =>{
      const contenedorPagina = document.getElementById("root")
      if (imgActual === "../img/sol.png"){
        contenedorPagina.classList.add("rootDark")
        setImgActual("../img/luna.png")
        localStorage.setItem("modo","dark")
    } else{
        contenedorPagina.classList.remove("rootDark")
        setImgActual("../img/sol.png")
        localStorage.setItem("modo","light")
      }
  }  

  return (
    <>
        <Button texto={<img src={imgActual} alt={"modo"}/> } 
        estilo={"colorModo"} 
        evento={ cambiarModo } />
    </>
  )
}

export default Modo