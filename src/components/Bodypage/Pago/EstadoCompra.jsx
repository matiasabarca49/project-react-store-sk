import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'


const EstadoCompra = () => {

    const [redirigir, setRedirigir] = useState(false)
    /* const [contador, setContador] = useState(60) */

   setTimeout( () => {

        setRedirigir(true)
        
    }  , 60000)
    
    /* setInterval(() =>{
        console.log("================================")
        setContador(contador - 1)
        console.log("desconté 1s")
        console.log(contador)
        console.log("================================")
    },1000) */

    return (

        <>

            {redirigir
                ? <Navigate to='/' /> 

                :
                
                <div>

                    <h1>COMPRA REALIZADA CON EXITO!!!</h1>
                   {/*  <Count contador={contador} set={setContador}  /> */}
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