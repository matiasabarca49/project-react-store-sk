import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

const CartProvider = (props) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0) 
    const [reCalcularTotal,setReCalcularTotal] = useState(false)



    useEffect(() => {
      
        setTotal( cart.reduce((total, producto) => total + (producto.precio * producto.cantidad),0))
        console.log("Cambio el carrito")
        setReCalcularTotal(false)
         
    
     
    }, [cart, reCalcularTotal])
    
    

    /**
     * Funciones del carrito
    **/

    //Funcion agregar productos al carrito
    const agregarAlCarrito = (producto) =>{
        const productoEncontrado = cart.find(productoDelCarrito => productoDelCarrito.id === producto.id)
        if (productoEncontrado){
            productoEncontrado.cantidad++
            setCart(cart)
            setReCalcularTotal(true)
            console.log("===============================")
            console.log("Se aumento la cantidad")
            console.log(cart)
        }
        else{
            
            setCart([...cart, producto] )
            setReCalcularTotal(true)
            console.log("===============================")
            console.log("Se agregó un producto nuevo")
            console.log(cart)
            
        }
        /* setTotal( totalCarrito() ) */
        console.log("Total hasta ahora:", total)
    }


    //Funcion eliminar producto del carrito
    const eliminarDelCarrito = (productoID) => {
        const carritoSinElProducto = cart.filter(producto => producto.id !== productoID)
        setCart(carritoSinElProducto)
        console.log(cart) 
    }

    //Funciona para aumentar la cantidad de producto en el carrito
    const aumentarCantidadDeProducto = (productoID) =>{

        cart.map(producto => (
            producto.id === productoID && producto.cantidad++        
        ))
        setReCalcularTotal(true)
    }

    //Funcion para disminuit la cantidad de producto en el carr
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

  return (

    <CartContext.Provider value={ {cart, total, agregarAlCarrito, eliminarDelCarrito, aumentarCantidadDeProducto, disminuirCantidadDeProducto, vaciarCarrito, cantidadDeProductos} }>

            {props.children}

    </CartContext.Provider>


  )
}

export default CartProvider