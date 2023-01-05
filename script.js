function Saludar(){
    var saludo= "hola";
    var i = 1;
    if(i>=1){
        if(i===1){
            saludo="buenos dias"; 
        }else  if(i===2){
            saludo="buenas tardes"
        }else  if(i===3){
            saludo="buenas noches"
        }
    }else { saludo="ingrese un i valido"

     }
     alert(saludo);
}

