
const fs = require('fs');
const colors = require('colors');

const crearArchivoTabla = async(base = 5, listar = false, hasta = false) => {

  try {
    let salida = '';
    let consola = '';
    if(hasta){
      for(let i = 0; i <= hasta; i++){

        salida += `       ${colors.red(base)} ${colors.green('x')} ${colors.red(i)} ${colors.green('=')} ${colors.bold.red(base * i)}\n`;
        consola += `       ${base} x ${i} = ${base * i}\n`;


      };
    }else {
      for(let i = 0; i <= 10; i++){

        salida += `       ${colors.red(base)} ${colors.green('x')} ${colors.red(i)} ${colors.green('=')} ${colors.bold.red(base * i)}\n`;
        consola += `       ${base} x ${i} = ${base * i}\n`;

      };
    }

    
      
    if(listar){
      console.log('============================='.gray);
      console.log(`      Tabla del: ${base}`.bold.green) ;
      console.log('============================='.grey);
      console.log(salida)
    }
      
    fs.writeFileSync(`./salida/tabla-${base}.txt`, consola);
      
    //   console.log(`tabla-${base}.txt creado`);
    return `tabla-${base}.txt`.rainbow;
  }catch(err){
    throw err;
  }
    
}

module.exports = {
    crearArchivo: crearArchivoTabla
}