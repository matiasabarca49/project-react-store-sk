import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

//Se recibe los datos de la orden mediante props y se muesta por pantalla.
//Al pasar 60s se redirige al home

const EstadoCompra = ( { orden } ) => {

    const [redirigir, setRedirigir] = useState(false)


    setTimeout(  () =>{
        setRedirigir(true)
    } ,60000)
    

    return (

        <>

            {redirigir
                ? <Navigate to='/' /> 

                :
                
                <div className='pagoRealizado'>
                    <img src="./img/successful.png" alt="" />
                    <div className='pagoExitoso'>
                        <h1>COMPRA REALIZADA CON EXITO!!!</h1>
                        <h2> Pagaste ${orden.total} </h2>
                    </div>
                   <div className='agradecimientos'>
                    <h3>Gracias por comprar en SOUNDKING</h3>
                   </div>
                    <p><b>Mail de confirmacion enviado a:</b> <span>{orden.comprador.email}</span></p>
                    <p><b>Dirección de envio: </b><span>{ orden.comprador.direccion}</span></p>
                    <div className='contProductosComprados'>
                        <h3>Productos comprados:</h3>
                        <div className='listaProductosComprados'>
                            {orden.compra.map(producto => (
                                <div key={producto.id} className='productoComprado'>
                                    <img src={producto.url} alt="" />
                                    <h4>{producto.nombre}</h4>
                                    <h5> Cantidad: {producto.cantidad}</h5>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p>Seras redirigido al inicio en 60s</p>
                </div>
            }

        </>
  )
}

export default EstadoCompra


/* const Count = ( { contador, set }) =>{

    

    setInterval(() =>{
        console.log("================================")
        set(contador - 1)
        console.log("desconté 1s")
        console.log(contador)
        console.log("================================")
    },1000)
    
    return(
        <>
            <p>Seras redirigido al inicio en {contador}s</p>
        </>
    )
}
 */