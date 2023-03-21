import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

//Esto nos permite obtener el carrito guardado en el localStorage en la sesion previa
//En caso de que la key sea nula, se establece un carrito vacio
const defaultCart = JSON.parse(localStorage.getItem("carrito")) || [] 

const CartProvider = (props) => {

    const [cart, setCart] = useState(defaultCart)
    const [total, setTotal] = useState(0) 
    const [reCalcularTotal,setReCalcularTotal] = useState(false)



    useEffect(() => {
        //Cada cambio en el carrito vuelve a calcular el total y lo guarda en su estado
        setTotal( cart.reduce((total, producto) => total + (producto.precio * producto.cantidad),0))
        setReCalcularTotal(false)
     
    }, [cart, reCalcularTotal])
    
    

    /**
     * Funciones del carrito
    **/

    //Funcion agregar productos al carrito
    const agregarAlCarrito = (producto, cantProducto) =>{
        const productoEncontrado = cart.find(productoDelCarrito => productoDelCarrito.id === producto.id)
        if (productoEncontrado){
            productoEncontrado.cantidad += cantProducto
            setCart(cart)
            /* Este estado nos permite volver a renderizar el carrito y recalcular cantidades 
            y precios totales.
            Gracias a esto en el componente preview de carrito en el nav se renderizan las nuevas cantidades */
            setReCalcularTotal(true)
            
        }
        else{
            producto.cantidad = cantProducto
            setCart([...cart, producto] )
            setReCalcularTotal(true)
            
        }
    }


    //Funcion eliminar producto del carrito
    const eliminarDelCarrito = (productoID) => {
        const carritoSinElProducto = cart.filter(producto => producto.id !== productoID)
        setCart(carritoSinElProducto)
    }

    //Funcion para aumentar la cantidad de producto en el carrito
    const aumentarCantidadDeProducto = (productoID) =>{

        cart.map(producto => (
            producto.id === productoID && producto.cantidad++        
        ))
        setReCalcularTotal(true)
    }

    //Funcion para disminuir la cantidad de producto en el carrito
    const disminuirCantidadDeProducto = (productoID) =>{
        const productoEncontrado = cart.find(producto => producto.id === productoID)
        productoEncontrado.cantidad > 1
            ? productoEncontrado.cantidad-- 
            : productoEncontrado.cantidad = 1
        setCart(cart)
        setReCalcularTotal(true)
    }

    //Funcion que vacia el carrito
    const vaciarCarrito  = ()=>{
        setCart([])
    }

    //Funcion que cuenta de producto por tipo
    const cantidadDeProductos = () =>{
        return cart.length
    }

    //Funcion para guardar en localstorage
    const guardarCarrito = () =>{
        localStorage.setItem("carrito", JSON.stringify(cart))
    }

    /*
    La funcion "guardaCarrito()" se coloca fuera de funciones para que el array Cart 
    se guarde en localstorage con cada cambio en el carrito.
     */
    guardarCarrito()

  return (

    <CartContext.Provider value={ {cart, total, agregarAlCarrito, eliminarDelCarrito, aumentarCantidadDeProducto, disminuirCantidadDeProducto, vaciarCarrito, cantidadDeProductos} }>

            {props.children}

    </CartContext.Provider>


  )
}

export default CartProvider