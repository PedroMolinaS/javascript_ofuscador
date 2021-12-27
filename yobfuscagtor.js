var fs = require("fs");
var jsObfuscator = require("javascript-obfuscator");

let archivos = fs.readdirSync('./files/')

const ofuscarProyecto = () => {
  archivos.forEach(doc => {
    // let [arr1,arr2,...arr3] = doc.split('.')
    
    fs.readFile('./files/'+doc,'UTF-8',function(error,code){
      if(error){
        throw error;
      }
      let obfuscateResult = jsObfuscator.obfuscate(code);

      // fs.writeFile('./ofuscados/'+arr1+'.'+arr2+'.ofuscado.chunk.js', obfuscateResult.getObfuscatedCode(),function(fsError){
      fs.writeFile('./ofuscados/'+doc, obfuscateResult.getObfuscatedCode(),function(fsError){
          if(fsError){
              return console.log(fsError)
          }
          console.log("ok")
      });
    })  
  })
}

ofuscarProyecto()

// node yobfuscagtor.js