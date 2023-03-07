import React, { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext()

const defaulCart = []

const CartProvider = (props) => {

    const [cart, setCart] = useState(defaulCart)
    const [total, setTotal] = useState(0) 



    useEffect(() => {
      
        /* totalCarrito()  */
        /* setTotal( cart.reduce((total, producto) => total + (producto.precio * producto.cantidad),0))
        console.log("Cambio el carrito") */
    
     
    }, [cart])
    
    

    /**
     * Funciones del carrito
    **/

    //Funcion agregar productos al carrito
    const agregarAlCarrito = (producto) =>{
        const productoEncontrado = cart.find(productoDelCarrito => productoDelCarrito.id === producto.id)
        if (productoEncontrado){
            productoEncontrado.cantidad++
            setCart(cart)
        }
        else{
            
            setCart([...cart, producto] )
            
        }
        setTotal( totalCarrito() )
        //console.log(cart)
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

    }

    //Funciona para disminuit la cantidad de producto en el carr
    const disminuirCantidadDeProducto = (productoID) =>{
        const productoEncontrado = cart.find(producto => producto.id === productoID)
        productoEncontrado.cantidad > 1
            ? productoEncontrado.cantidad-- 
            : productoEncontrado.cantidad = 1
        setCart(cart)
    }

    //Funcion que vacia el carrito
    const vaciarCarrito  = ()=>{
        setCart([])
    }

    //Funcion que cuenta de producto por tipo
    const cantidadDeProductos = () =>{
        return cart.length
    }


    // Funcion que calcula el total del Carrito
    const totalCarrito = () => {
        console.log(cart)
        let totalCarrito = cart.reduce((total, producto) => total + (producto.precio * producto.cantidad),0)
        console.log(totalCarrito)
        return totalCarrito
    }


  return (

    <CartContext.Provider value={ {cart, total, agregarAlCarrito, eliminarDelCarrito, aumentarCantidadDeProducto, disminuirCantidadDeProducto, vaciarCarrito, cantidadDeProductos} }>

            {props.children}

    </CartContext.Provider>


  )
}

export default CartProvider