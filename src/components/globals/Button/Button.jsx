import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <>
    <button className={props.estilo} onClick={props.evento}>{props.texto}</button>
    </>
  )
}

export default Button