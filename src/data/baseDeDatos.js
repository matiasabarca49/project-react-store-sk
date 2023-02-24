const baseDeDatos =[
    {id:1, categoria: "CD", nombre: "CD RockBand Vol 1", precio: 1800, stock: 10, cantidad: 1, url: "./img/cds.jpg", descripcion: 'Primer CD de la banda groenlandesa "RockBand" grabado en el estudio " Hace Bajo Cero" en la Antartida. Donde los 78 integrantes de la banda nos comparten su pasion por la música. Escuchá las 5 baterias, 33 guitarras, 4 bajos y un microfono en 1500kbps de puro ruido.'  },
    {id:2, categoria: "Vinilo", nombre: "Vinilo RockBand Vol 1", precio: 10500, stock: 10, cantidad: 1, url: "./img/Vinilo.jpg", descripcion: 'Primer CD de la banda groenlandesa "RockBand" grabado en el estudio " Hace Bajo Cero" en la Antartida. Donde los 78 integrantes de la banda nos comparten su pasion por la música. Escuchá las 5 baterias, 33 guitarras, 4 bajos y un microfono en 9200kbps de puro ruido.'},
    {id:3, categoria: "CD", nombre: "CD RockBand Vol 2", precio: 1570, stock: 10, cantidad: 1, url: "./img/cds.jpg", descripcion:'La banda de Groenlandia suma 10 integrantes y graba su disco de puro "HIP-ROCK" con matices de bachata. Ahora con dos microfonos omnidireccional. Puro sonido de lo 50s. Calidad Master 1500kbps'},
    {id:4, categoria: "Vinilo", nombre: "Vinilo RockBand Vol 3", precio: 10500, stock: 10, cantidad: 1, url: "./img/Vinilo.jpg",descripcion:'RockBand ahora en formato acustico tocando ritmos de los 2000s. Solo dos integrantes te deleitan a Puro chachombe con sonido POP. Calidad Master 9200kbps '},
    {id:5, categoria: "Vinilo", nombre: "Vinilo RockBand Vol 2", precio: 10300, stock: 10, cantidad: 1, url: "./img/Vinilo.jpg", descripcion:'La banda de Groenlandia suma 10 integrantes y graba su disco de puro "HIP-ROCK" con matices de bachata. Ahora con dos microfonos omnidireccional. Puro sonido de lo 50s. Calidad Master 9200kbps'},
    {id:6, categoria: "CD", nombre: "CD El Viento Fuerte ", precio: 2000, stock: 10, cantidad: 1, url: "./img/cds.jpg",descripcion:'La nueva banda "Traé Campera" saca su primer LP en conjunto con "No Tengo Paraguas". 12 temas únicos en formato wav a 1500kbps'},
    {id:7, categoria: "Vinilo", nombre: "Vinilo RockBand Vol 2", precio: 10300, stock: 10, cantidad: 1, url: "./img/Vinilo.jpg",descripcion:'La banda de Groenlandia suma 10 integrantes y graba su disco de puro "HIP-ROCK" con matices de bachata. Ahora con dos microfonos omnidireccional. Puro sonido de lo 50s. Calidad Master 9200kbps'},
    {id:8, categoria: "CD", nombre: "CD El Pleno Invierno ", precio: 1499, stock: 10, cantidad: 1, url: "./img/cds.jpg", descripcion: 'Calidad 1500kbps'},
    {id:9, categoria: "Vinilo", nombre: "Vinilo RockBand Vol 2", precio: 10300, stock: 10, cantidad: 1, url: "./img/Vinilo.jpg",descripcion:'La banda de Groenlandia suma 10 integrantes y graba su disco de puro "HIP-ROCK" con matices de bachata. Ahora con dos microfonos omnidireccional. Puro sonido de lo 50s. Calidad Master 1500kbps'},
    {id:10, categoria: "CD", nombre: "CD CarpaRock ", precio: 700, stock: 10, cantidad: 1, url: "./img/cds.jpg", descripcion:'Calidad Wav 1500kbps'},
    {id:11, categoria: "Merchandising", nombre: "Remera RockBand Gira 2019 T/L", precio: 2500, stock: 10, cantidad: 1, url: "./img/remera.jpg", descripcion:'Remera Negra Talle L. 100% Algodon'},
    {id:12, categoria: "Merchandising", nombre: "Taza RockBand 150ml", precio: 700, stock: 10, cantidad: 1, url: "./img/taza.jpg", descripcion:'Taza Ceramica de 150ml estampada con diseño RockBand'},
    {id:13, categoria: "Merchandising", nombre: "Remera RockBand Gira 2019 T/M", precio: 2500, stock: 10, cantidad: 1, url: "./img/remera.jpg", descripcion:'Remera Negra Talle M. 100% Algodon'},
    {id:14, categoria: "Merchandising", nombre: "Mural RockBand Grande", precio: 12000, stock: 10, cantidad: 1, url: "./img/poster.jpg", descripcion: 'Mural Bandas del Pasado para pared 200x180cm'},
    {id:15, categoria: "Merchandising", nombre: "Remera RockBand Gira 2019 T/XXL", precio: 2500, stock: 10, cantidad: 1, url: "./img/remera.jpg", descripcion:'Remera Negra Talle XXL. 100% Algodon'},
    {id:16, categoria: "Merchandising", nombre: "Mural RockBand", precio: 1270, stock: 10, cantidad: 1, url: "./img/poster.jpg" , descripcion: 'Mural Bandas del Pasado para pared 150x150cm Mediano'},
    {id:17, categoria: "Merchandising", nombre: "Remera RockBand Gira 2019 T/S", precio: 2500, stock: 10, cantidad: 1, url: "./img/remera.jpg", descripcion:'Remera Negra Talle S. 100% Algodon'},
    {id:18, categoria: "Merchandising", nombre: "Taza RockBand 200ml", precio: 850, stock: 10, cantidad: 1, url: "./img/taza.jpg",descripcion:'Taza Ceramica de 200ml estampada con diseño RockBand'}
    
  ]


export const getProducs = new Promise((resolve,reject) => {
    setTimeout(()=>{
      baseDeDatos.length > 0?  resolve(baseDeDatos): reject("No hay productos");
  
    },2000)
  
  })


export const getItem = (productoID) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productoEncontrado = baseDeDatos.find(producto => producto.id === parseInt(productoID))
      productoEncontrado?  resolve(productoEncontrado) : reject("El producto no existe")
  },2000)
  })
}