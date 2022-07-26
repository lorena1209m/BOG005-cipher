const cipher = {

  encode: function (offset, string) {
    if(!offset || string.length == 0){
       
      throw new TypeError("Llena todos los campos")
  
    }
    
    let salida = "";

    for (let i = 0; i < string.length; i++) {
      let numeroAsciiO = ((string[i].charCodeAt() - 65 + offset) % 26) + 65;
      salida += String.fromCharCode(numeroAsciiO);
    }

    return salida;
  },

  decode: function (offset, string) {
    let salida2 = "";
    for (let i = 0; i < string.length; i++) {
      let numeroAscii2 = ((string[i].charCodeAt() + 65 - offset) % 26) + 65;
      console.log(numeroAscii2)
      salida2 += String.fromCharCode(numeroAscii2);
      }

    return salida2;
  },
};

export default cipher;
