const baseDeDatos =[
    {id:1, nombre: "CD RockBand", precio: 1800, stock: 10, cantidad: 1},
    {id:2, nombre: "Vinilo RockBand Vol 1", precio: 10500, stock: 10, cantidad: 1},
    {id:3, nombre: "Vinilo RockBand Vol 2", precio: 10300, stock: 10, cantidad: 1},
    {id:4, nombre: "CD El Viento Fuerte ", precio: 1800, stock: 10, cantidad: 1},
    {id:5, nombre: "Remera RockBand Gira 2019", precio: 2500, stock: 10, cantidad: 1},
    {id:6, nombre: "Poster RockBand", precio: 3500, stock: 10, cantidad: 1}
    
  ]


export const getProducs = new Promise((resolve,reject) => {
    setTimeout(()=>{
      baseDeDatos.length > 0?  resolve(baseDeDatos): reject("No hay productos");
  
    },2000)
  
  })