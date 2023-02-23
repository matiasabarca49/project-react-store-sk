const baseDeDatos =[
    {id:1, categoria: "CD", nombre: "CD RockBand", precio: 1800, stock: 10, cantidad: 1, url: "./img/cds.jpg"},
    {id:2, categoria: "Vinilo", nombre: "Vinilo RockBand Vol 1", precio: 10500, stock: 10, cantidad: 1, url: "./img/Vinilo.jpg"},
    {id:2, categoria: "CD", nombre: "CD RockBand", precio: 1800, stock: 10, cantidad: 1, url: "./img/cds.jpg"},
    {id:4, categoria: "Vinilo", nombre: "Vinilo RockBand Vol 1", precio: 10500, stock: 10, cantidad: 1, url: "./img/Vinilo.jpg"},
    {id:5, categoria: "Vinilo", nombre: "Vinilo RockBand Vol 2", precio: 10300, stock: 10, cantidad: 1, url: "./img/Vinilo.jpg"},
    {id:6, categoria: "CD", nombre: "CD El Viento Fuerte ", precio: 1800, stock: 10, cantidad: 1, url: "./img/cds.jpg"},
    {id:7, categoria: "Vinilo", nombre: "Vinilo RockBand Vol 2", precio: 10300, stock: 10, cantidad: 1, url: "./img/Vinilo.jpg"},
    {id:8, categoria: "CD", nombre: "CD El Viento Fuerte ", precio: 1800, stock: 10, cantidad: 1, url: "./img/cds.jpg"},
    {id:9, categoria: "Vinilo", nombre: "Vinilo RockBand Vol 2", precio: 10300, stock: 10, cantidad: 1, url: "./img/Vinilo.jpg"},
    {id:10, categoria: "CD", nombre: "CD El Viento Fuerte ", precio: 1800, stock: 10, cantidad: 1, url: "./img/cds.jpg"},
    {id:11, categoria: "Merchandising", nombre: "Remera RockBand Gira 2019", precio: 2500, stock: 10, cantidad: 1},
    {id:12, categoria: "Merchandising", nombre: "Poster RockBand", precio: 3500, stock: 10, cantidad: 1},
    {id:13, categoria: "Merchandising", nombre: "Remera RockBand Gira 2019", precio: 2500, stock: 10, cantidad: 1},
    {id:14, categoria: "Merchandising", nombre: "Poster RockBand", precio: 3500, stock: 10, cantidad: 1},
    {id:15, categoria: "Merchandising", nombre: "Remera RockBand Gira 2019", precio: 2500, stock: 10, cantidad: 1},
    {id:16, categoria: "Merchandising", nombre: "Poster RockBand", precio: 3500, stock: 10, cantidad: 1},
    {id:17, categoria: "Merchandising", nombre: "Remera RockBand Gira 2019", precio: 2500, stock: 10, cantidad: 1},
    {id:18, categoria: "Merchandising", nombre: "Poster RockBand", precio: 3500, stock: 10, cantidad: 1}
    
  ]


export const getProducs = new Promise((resolve,reject) => {
    setTimeout(()=>{
      baseDeDatos.length > 0?  resolve(baseDeDatos): reject("No hay productos");
  
    },2000)
  
  })