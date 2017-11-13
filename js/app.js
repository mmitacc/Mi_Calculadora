var Calculadora = (function () {
  //Declarando variables globales
  var dato1="", signo1="+", dato2="", signo2="+",
      operador="", resultado="", data="0", flag=true, OnC=46;

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
  var IngresoDatos = function (event) {
    var tecla = event.which || event.keyCode;
    if (tecla != OnC) {
       var datovalidado = ValidarDato(tecla);
       var operadortemporal = "";
       if (dato1=="") {
         operadortemporal = RegistrarDatos_Operadores(datovalidado).operadoraritmetico;
       }
       else {
         operadortemporal="";
         flag=true;
       };
       var datotemporal = RegistrarDatos_Operadores(datovalidado).operando;
       if (datovalidado != "") {
          PresionarTecla(datovalidado);
          //AGREGAR ACUMULADORES PARA LAS OPERACIONES Y MOSTAR EN DISPLAY
          if (data.length<8 && data.length>0 && operadortemporal=="") {
              if ((datotemporal=="0" || datotemporal==".") && data=="0") {
              }
              else if (flag){
                data = datotemporal;
                document.getElementById("display").innerHTML=data;
              }
              else {
                flag=false;
                data = data + datotemporal;
                document.getElementById("display").innerHTML=data;
              }
              //REGSITRAR EL SIGNO DEL OPERANDO
              //signo1 = RegistrarDatos_Operadores(datovalidado).operador;
          } else if (operadortemporal!="" && data!="0") {
              dato1 = data;
              data = "0";
              operador = operadortemporal;
              document.getElementById("display").innerHTML=operador;
          } else if (data!="0" && datovalidado=="igual") {
              dato2=data;
              data = "0";
              resultado=dato1+operador+dato2;
              document.getElementById("display").innerHTML=resultado;
          } else if (data1!="" && data2!="" && datovalidado=="igual") {
              dato1=resultado;
              resultado=dato1+operador+dato2;
              document.getElementById("display").innerHTML=resultado;
          } else if (data1!="" && data2!="" && datovalidado!="igual") {
              dato1=""; dato2="", resultado=""; operador="";
              data = data + datotemporal;
              document.getElementById("display").innerHTML=data;
          }
      };
      //alert(data.length);

    } else {
        PresionarTecla("on");
        document.getElementById("display").innerHTML="0";
        dato1=""; signo1="+"; dato2=""; signo2="+"; operador=""; resultado="";
    };
  };
  //Método para validar si el dato es NUMERO ó es un OPERADOR
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
  var RegistrarDatos_Operadores = function (datoperador) {
    var operando="", operadoraritmetico="";
    switch (datoperador) {
      case "0": case "1": case "2": case "3": case "4":
      case "5": case "6": case "7": case "8": case "9":
        operando = datoperador;
        break;
      case "punto":
        operando = ".";
        break;
      case "mas":
        operadoraritmetico = "+";
        break;
      case "menos":
      operadoraritmetico = "-";
        break;
      case "por":
      operadoraritmetico = "*";
        break;
      case "dividido":
      operadoraritmetico = "/";
        break;
      default:
    };
    return {operando, operadoraritmetico}
  };
  //Inicializando los métodos con eventos de teclado y mouse
  var iniciar = function () {
    document.onkeydown=IngresoDatos;
    document.onkeyup=SoltarTecla;
  };
  return {
    iniciar : iniciar,
  }
})();
/*Inicializando el módulo "Calculadora"*/
Calculadora.iniciar();
