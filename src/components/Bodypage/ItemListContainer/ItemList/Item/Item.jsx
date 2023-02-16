import React, { useState } from 'react'
import Button from '../../../../globals/Button/Button';
import './Item.css'



const Item = (props) => {

    //const [carrito, setCarrito] = useState([])
    
    const [cantidad,setCantidad] = useState(0);  


    const aumentarCantidad = () =>{
        cantidad < props.stock && setCantidad(cantidad + 1)
    }  

    const reducirCarrito = () =>{
        cantidad > 0 && setCantidad(cantidad - 1)
    }


  return (
    <div className='producto'>
        <h3>{props.datos.nombre}</h3>
        <h4>${props.datos.precio}</h4>
        <h5>Disponibles: {props.datos.stock}</h5>
        <div className='productoCantidades'>
            <Button texto = { "+" } evento={ aumentarCantidad }  estilo={ "btn btn--cantidadCarrito" }/>
            <div>{cantidad}</div>
            <Button texto = { "-" } evento={ reducirCarrito } estilo={ "btn btn--cantidadCarrito" }/>
        </div>
        <Button texto={ "Agregar al Carrito" } evento={ props.eventoAgregarAlCarrito } estilo={ "btn btn--agregarAlCarrito" } />
    </div>  )
}

export default Item