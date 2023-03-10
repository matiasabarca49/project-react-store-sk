import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

const defaultCart = JSON.parse(localStorage.getItem("carrito")) || [] 

const CartProvider = (props) => {

    const [cart, setCart] = useState(defaultCart)
    const [total, setTotal] = useState(0) 
    const [reCalcularTotal,setReCalcularTotal] = useState(false)



    useEffect(() => {
      
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
            setReCalcularTotal(true)
            
        }
        else{
            producto.cantidad = cantProducto
            setCart([...cart, producto] )
            setReCalcularTotal(true)
            
        }
        /* guardarCarrito() */
    }


    //Funcion eliminar producto del carrito
    const eliminarDelCarrito = (productoID) => {
        const carritoSinElProducto = cart.filter(producto => producto.id !== productoID)
        setCart(carritoSinElProducto)
        /* guardarCarrito() */
    }

    //Funciona para aumentar la cantidad de producto en el carrito
    const aumentarCantidadDeProducto = (productoID) =>{

        cart.map(producto => (
            producto.id === productoID && producto.cantidad++        
        ))
        /* guardarCarrito() */
        setReCalcularTotal(true)
    }

    //Funcion para disminuit la cantidad de producto en el carr
    const disminuirCantidadDeProducto = (productoID) =>{
        const productoEncontrado = cart.find(producto => producto.id === productoID)
        productoEncontrado.cantidad > 1
            ? productoEncontrado.cantidad-- 
            : productoEncontrado.cantidad = 1
        setCart(cart)
        /* guardarCarrito() */
        setReCalcularTotal(true)
    }

    //Funcion que vacia el carrito
    const vaciarCarrito  = ()=>{
        setCart([])
        /* guardarCarrito() */
    }

    //Funcion que cuenta de producto por tipo
    const cantidadDeProductos = () =>{
        return cart.length
    }

    //Funcion para guardar en localstorage
    const guardarCarrito = () =>{
        localStorage.setItem("carrito", JSON.stringify(cart))
    }

    guardarCarrito()

  return (

    <CartContext.Provider value={ {cart, total, agregarAlCarrito, eliminarDelCarrito, aumentarCantidadDeProducto, disminuirCantidadDeProducto, vaciarCarrito, cantidadDeProductos} }>

            {props.children}

    </CartContext.Provider>


  )
}

export default CartProvider