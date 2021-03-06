var Calculadora = (function () {
  //Declarando variables globales para una OPERACIÓN ARITMÉTICA BÁSICA:
  var dato1="0",        //Este es el PRIMER DATO  a evaluar
      signo1="+",       //Este es el SIGNO del PRIMER DATO  a evaluar
      dato2="0",        //Este es el SEGUNDO DATO  a evaluar
      signo2="+",       //Este es el SIGNO del SEGUNDO DATO  a evaluar
      operador="+",     //Este es el OPERADOR ARITMETICO (+,-,*,/)
      resultado="0",    //Este es el DATO RESULTANTE
      data="0",         //Este es una VARIABLE ACUMULADORA Y TRANSITORIA para un DATO a evaluar
      signo="+",        //Este es una VARIABLE TRANSITORIA para almacenar el SIGNO del DATA
      EPunto=false,     //Este es una VARIABLE tipo "Flag" para incrustar solo una vez el CARACTER DECIMAL (.)
      OnC="on";         //Este es una VARIBLE CONSTANTE para definir la tecla "ON/C" para un evento del teclado

  //Método para reducir tamaño de tecla al presionarla
  var PresionarTecla = function (idtecla) {
    var reducirtecla = document.getElementById(idtecla);
    reducirtecla.style.background= "#9e9e9e";
    reducirtecla.style.border= "1px solid #000000";
    reducirtecla.style.borderRadius="15px";
    reducirtecla.style.padding= "8px";
  };
  //Método para mantener tamaño original de la tecla al soltarla
  var SoltarTecla = function (event) {
    var datovalidado="";
    if (event.button==0) {            //Para eventos con el MOUSE
      datovalidado = event.srcElement.id;
    }
    else {                            //Para eventos con el TECLADO
      var tecla = event.which || event.keyCode;
      datovalidado = ValidarDato(tecla);
    };
    if (datovalidado != OnC) {
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
  var IngresoDatos = function (event) {
    var datovalidado="";
    if (event.button==0) {            //Para eventos con el MOUSE
      datovalidado = event.srcElement.id;
    }
    else {                            //Para eventos con el TECLADO
      var tecla = event.which || event.keyCode;
      datovalidado = ValidarDato(tecla);
    };
    if (datovalidado != OnC) {
       PresionarTecla(datovalidado);
       var EsOperador = FiltrarOperador(datovalidado);
       if (datovalidado=="igual") {
         if (dato2 == "0") {
           dato2=data;
           signo2=signo;
           data="0";
           signo="+";
         }
         else {
           data="0";
           signo="+";
         };
         var totalNumber=0;
         if (operador==signo) {     //Producto de simbolos aritmeticos, por exceso de concatenaciones
           totalNumber = Number( eval( (signo1+dato1) + ("+") + (dato2) ) );
         }
         else if (operador=="*" || operador=="/") {
           totalNumber = Number( eval( (signo1+dato1) + (operador) + (signo2+dato2) ) );
         }
         else{
           totalNumber = Number( eval( (signo1+dato1) + ("-") + (dato2) ) );
         };

         var totalString = totalNumber.toString();
         resultado = totalString;
         if (totalString.length<8) {
           document.getElementById("display").innerHTML=resultado;
         }
         else {
           document.getElementById("display").innerHTML=totalNumber.toExponential(3);
         };
         dato1=resultado;
         signo1="+";
       }
       else {
         if (datovalidado == "sign") {
           if (data != "0") {
             if (signo == "+") {
               signo="-";
               document.getElementById("display").innerHTML=signo+data;
             }
             else {
               signo="+";
               document.getElementById("display").innerHTML=data;
             };
           }
           else if (resultado != "0") {
             var dataNumber=Math.abs(resultado);
             data=""+dataNumber;
             if (resultado<0) {
               signo="-";
               document.getElementById("display").innerHTML=signo+data;
             }
             else {
               signo="+"
               document.getElementById("display").innerHTML=data;
             };
             resultado="0";
           };
         }
         else {
           switch (EsOperador) {
             case true:    //Definiendo un dato OPERADOR
                           switch (datovalidado) {
                             case "mas":
                               if (resultado=="0") {
                                 dato1=data;
                                 signo1=signo;
                               }
                               else {
                                 dato1=resultado;
                                 signo1="+";
                                 resultado="0";
                               };
                               data="0";
                               signo="+";
                               dato2="0";
                               signo2="+";
                               operador="+";
                               document.getElementById("display").innerHTML=operador;
                               EPunto=false;
                             break;
                             case "menos":
                               if (resultado=="0") {
                                 dato1=data;
                                 signo1=signo;
                               }
                               else {
                                 dato1=resultado;
                                 signo1="+";
                                 resultado="0";
                               };
                               data="0";
                               signo="+";
                               dato2="0";
                               signo2="+";
                               operador="-";
                               document.getElementById("display").innerHTML=operador;
                               EPunto=false;
                             break;
                             case "por":
                               if (resultado=="0") {
                                 dato1=data;
                                 signo1=signo;
                               }
                               else {
                                 dato1=resultado;
                                 signo1="+";
                                 resultado="0";
                               };
                               data="0";
                               signo="+";
                               dato2="0";
                               signo2="+";
                               operador="*";
                               document.getElementById("display").innerHTML=operador;
                               EPunto=false;
                             break;
                             case "dividido":
                               if (resultado=="0") {
                                 dato1=data;
                                 signo1=signo;
                               }
                               else {
                                 dato1=resultado;
                                 signo1="+";
                                 resultado="0";
                               };
                               data="0";
                               signo="+";
                               dato2="0";
                               signo2="+";
                               operador="/";
                               document.getElementById("display").innerHTML=operador;
                               EPunto=false;
                             break;
                             default:
                           };
             break;
             case false:  //Definiendo un dato NUMERICO ú OPERANDO
                          if (resultado != "0") {
                            resultado="0"; dato2="0"; signo2="+"; EPunto=false;
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
                                if (signo=="-") {
                                  document.getElementById("display").innerHTML=signo+data;
                                } else {
                                  document.getElementById("display").innerHTML=data;
                                };
                                EPunto=true;
                                break;
                                default:
                              };
                            }
                            else {
                              if (data=="0"){
                                data = datovalidado;
                                if (signo=="-") {
                                  document.getElementById("display").innerHTML=signo+data;
                                } else {
                                  document.getElementById("display").innerHTML=data;
                                };
                              }
                              else{
                                data = data + datovalidado;
                                if (signo=="-") {
                                  document.getElementById("display").innerHTML=signo+data;
                                } else {
                                  document.getElementById("display").innerHTML=data;
                                };
                              };
                            };
                          };
             break;
             default:
           };
         }
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
      case 46:
        TipoDato="on";
        break;
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
    document.onkeydown=IngresoDatos;
    document.onkeyup=SoltarTecla;
    //Eventos con el Mouse
    document.querySelector(".teclado").onmousedown=IngresoDatos;
    document.querySelector(".teclado").onmouseup=SoltarTecla;
  };
  return {
    iniciar : iniciar,
  }
})();
/*Inicializando el módulo "Calculadora"*/
Calculadora.iniciar();
