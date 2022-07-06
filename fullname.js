
const child_process  = require("child_process");
const { resolve } = require("path");

let nom=null;
let ape=null;

function ejecutar(archivo){
    return new Promise ((resolve) =>{

        child_process.exec(`node ${archivo}`, function (err, result) {
            resolve(result);
        })
    })
}

ejecutar("name.js").then( (nombre) => {
    nom=nombre;

    ejecutar("lastname.js").then( (apellido)=>{
        ape=apellido;
        console.log(nom.concat(ape));
    })
})