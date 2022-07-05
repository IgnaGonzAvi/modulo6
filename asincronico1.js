// creacion de archivo

const fs = require('fs');

fs.writeFile('shopping.js', '$650 tallarines - ' +  '$350 Salsa de tomate', 'utf8', () => {
console.log("archivo creado con éxito")

});

// leer, renombrar y eliminar un archivo con callback de 2seg entre c/u

setTimeout(() =>{
    fs.readFile('shopping.js', 'utf8', (data) =>{
        fs.writeFile('shopping.js', data + ' - $200 Jugo kapo', 'utf8', () => {
            console.log("archivo se sobreescribió existosamente")
        })
    });
}, 2000);

setTimeout(() => {
    fs.rename('shopping.js', 'compras.js', () => {
        console.log("archivo renombrado con éxito")
    });  
}, 4000);

setTimeout(() => {
    fs.unlink('compras.js', () => {
        console.log("El archivo fue eliminado con éxito")
    });
}, 6000);





