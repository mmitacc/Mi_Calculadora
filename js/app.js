var Calculadora = (function () {
  //Declarando variables globales para una OPERACIÓN ARITMÉTICA BÁSICA:
  var dato1="0",        //Este es el PRIMER DATO  a evaluar
      signo1="+",       //Este es el SIGNO del PRIMER DATO  a evaluar
      dato2="0",        //Este es el SEGUNDO DATO  a evaluar
      signo2="+",       //Este es el SIGNO del SEGUNDO DATO  a evaluar
      operador="+",     //Este es el OPERADOR ARITMETICO (+,-,*,/)
      resultado="0",    //Este es el DATO RESULTANTE
      data="0",         //Este es una VARIABLE ACUMULADORA Y TRANSITORIA para un DATO a evaluar
      EPunto=false,     //Este es una VARIABLE tipo "Flag" para incrustar solo una vez el CARACTER DECIMAL (.)
      OnC=46;           //Este es una VARIBLE CONSTANTE para definir la tecla "ON/C" para un evento del teclado

  //Método para reducir tamaño de tecla al presionarla
  var PresionarTecla = function (idtecla) {
    var reducirtecla = document.getElementById(idtecla);
    reducirtecla.style.background= "#bdbdbd";
    reducirtecla.style.border= "1px solid #000000";
    reducirtecla.style.borderRadius="15px";
    reducirtecla.style.padding= "8px";
  };
  //Método para mantener tamaño original de la tecla al soltarla
  var SoltarTecla = function (event) {
    var tecla = event.which || event.keyCode;
    if (tecla != OnC) {
      var datovalidado = ValidarDato(tecla);
      if (datovalidado != "") {
        var ampliartecla = document.getElementById(datovalidado);
        ampliartecla.style.background= "transparent";
        ampliartecla.style.border= "none";
        ampliartecla.style.padding= "0px";
      };
    }
    else {
      var ampliartecla = document.getElementById("on");
      ampliartecla.style.background= "transparent";
      ampliartecla.style.border= "none";
      ampliartecla.style.padding= "0px";
    }
  };
  //Método para la lectura de los datos
  var IngresoDatosTeclado = function (event) {
    var tecla = event.which || event.keyCode;
    if (tecla != OnC) {
       var datovalidado = ValidarDato(tecla);
       PresionarTecla(datovalidado);
       var EsOperador = FiltrarOperador(datovalidado);
       if (datovalidado=="igual") {
         //alert(dato1 + operador +  dato2);
         dato2=data;
         var totalNumber = Number(eval(dato1 + operador + dato2));
         var totalString = totalNumber.toString();
         resultado = totalString;
         if (totalString.length<8) {
           document.getElementById("display").innerHTML=resultado;
         }
         else {
           document.getElementById("display").innerHTML=totalNumber.toExponential(3);
         };
         dato1=resultado;
       }
       else {
         switch (EsOperador) {
           case true:    //Definiendo un dato OPERADOR
                         switch (datovalidado) {
                           case "mas":
                             if (resultado=="0") {
                               dato1=data;
                             }
                             else {
                               dato1=resultado;
                             };
                             data="0";
                             operador="+";
                             document.getElementById("display").innerHTML=operador;
                             EPunto=false;
                           break;
                           case "menos":
                             if (resultado=="0") {
                               dato1=data;
                             }
                             else {
                               dato1=resultado;
                             };
                             data="0";
                             operador="-";
                             document.getElementById("display").innerHTML=operador;
                             EPunto=false;
                           break;
                           case "por":
                             if (resultado=="0") {
                               dato1=data;
                             }
                             else {
                               dato1=resultado;
                             };
                             data="0";
                             operador="*";
                             document.getElementById("display").innerHTML=operador;
                             EPunto=false;
                           break;
                           case "dividido":
                             if (resultado=="0") {
                               dato1=data;
                             }
                             else {
                               dato1=resultado;
                             };
                             data="0";
                             operador="/";
                             document.getElementById("display").innerHTML=operador;
                             EPunto=false;
                           break;
                           default:
                         };
           break;
           case false:  //Definiendo un dato NUMERICO ú OPERANDO
                        if (resultado!="0") {
                          dato2="0"; signo2="+"; resultado="0";  //Iniciaizando el segundo DATO y el RESULTADO
                        };

                        if (datovalidado=="0" && data=="0") {
                            /*No hacer nada*/
                        }
                        else if (data.length<8) {
                          if (datovalidado=="punto") {
                            switch (EPunto) {
                              case true:
                              //No hacer nada
                              break;
                              case false:
                              data = data + ".";
                              document.getElementById("display").innerHTML=data;
                              EPunto=true;
                              break;
                              default:
                            }
                          }
                          else {
                            if (data=="0"){
                              data = datovalidado;
                              document.getElementById("display").innerHTML=data;
                            }
                            else {
                              data = data + datovalidado;
                              document.getElementById("display").innerHTML=data;
                            }
                          };
                        };
           break;
           default:
         };
       }
    }
    else {
        PresionarTecla("on");
        document.getElementById("display").innerHTML="0";
        //Iniciaizando todas la variables
        dato1="0"; signo1="+"; dato2="0"; signo2="+"; operador="+"; resultado="0"; data="0"; EPunto=false;

    };
  };
  //Método para validar si el dato es un NUMERO ó es un OPERADOR
  var ValidarDato = function (dato) {
    var TipoDato="";
    switch (dato) {
      case 48: case 96:
        TipoDato="0";
        break;
      case 49: case 97:
        TipoDato="1";
        break;
      case 50: case 98:
        TipoDato="2";
        break;
      case 51: case 99:
        TipoDato="3";
        break;
      case 52: case 100:
        TipoDato="4";
        break;
      case 53: case 101:
        TipoDato="5";
        break;
      case 54: case 102:
        TipoDato="6";
        break;
      case 55: case 103:
        TipoDato="7";
        break;
      case 56: case 104:
        TipoDato="8";
        break;
      case 57: case 105:
        TipoDato="9";
        break;
      case 110: case 190:
        TipoDato="punto";
        break;
      case 107:
        TipoDato="mas";
        break;
      case 109:
        TipoDato="menos";
        break;
      case 106: case 187:
        TipoDato="por";
        break;
      case 111:
        TipoDato="dividido";
        break;
      case 13:
        TipoDato="igual";
        break;
      default:
        //alert("No es un dato para la Calculadora");
    };
    return TipoDato;
  };
  //Registrando los "Operandos" y "Operadores Aritméticas Básicas"
  var FiltrarOperador = function (datoperador) {
    var EsOperador;
    switch (datoperador) {
      case "0": case "1": case "2": case "3": case "4":
      case "5": case "6": case "7": case "8": case "9":
        EsOperador = false;
        break;
      case "punto":
        EsOperador = false;
        break;
      case "mas":
        EsOperador = true;
        break;
      case "menos":
        EsOperador = true;
        break;
      case "por":
        EsOperador = true;
        break;
      case "dividido":
        EsOperador = true;
        break;
      default:
    };
    return EsOperador;
  };
  //Inicializando los métodos con eventos:
  var iniciar = function () {
    //Eventos con el Teclado:
    document.onkeydown=IngresoDatosTeclado;
    document.onkeyup=SoltarTecla;
    //Eventos "click" con el mouse
    //document.getElementById("on").onmousedown=IngresoDatosMouse(46); //AL HACER CLICK EN EL ELEMENTO
    //document.getElementById("nave_espacial").onmouseup=cambioFotoNave; //AL SALIR DEL MOUSE DEL ELEMENTO
  };
  return {
    iniciar : iniciar,
  }
})();
/*Inicializando el módulo "Calculadora"*/
Calculadora.iniciar();
