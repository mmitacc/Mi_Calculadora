var Calculadora = (function () {
  //Declarando variables globales
  var dato1="", signo1="+", dato2="", signo2="+",
      operador="", resultado="", OnC=46;

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
       if (datovalidado != "") {
        PresionarTecla(datovalidado);
        //AGREGAR ACUMULADORES PARA LAS OPERACIONES Y MOSTAR EN DISPLAY
        document.getElementById("display").innerHTML=String.fromCharCode(tecla);
      };
    } else {
      PresionarTecla("on");
      document.getElementById("display").innerHTML="borrados";
      dato1=""; signo1="+"; dato2=""; signo2="+"; operador=""; resultado="";
    };
    //Visualiza el dato en el DISPLAY
  };
  //Método para validar si el dato es NUMERO ó es un OPERADOR
  var ValidarDato = function (dato) {
    var TipoDato="";
    switch (dato) {
      case 48:
        TipoDato="0";
        break;
      case 49:
        TipoDato="1";
        break;
      case 50:
        TipoDato="2";
        break;
      case 51:
        TipoDato="3";
        break;
      case 52:
        TipoDato="4";
        break;
      case 53:
        TipoDato="5";
        break;
      case 54:
        TipoDato="6";
        break;
      case 55:
        TipoDato="7";
        break;
      case 56:
        TipoDato="8";
        break;
      case 57:
        TipoDato="9";
        break;
      case 46:
        TipoDato="punto";
        break;
      case 43:
        TipoDato="mas";
        break;
      case 45:
        TipoDato="menos";
        break;
      case 42:
        TipoDato="por";
        break;
      case 47:
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
  //Inicializando los métodos con eventos de teclado y mouse
  var iniciar = function () {
    document.onkeypress=IngresoDatos;
    document.onkeyup=SoltarTecla;
  };
  return {
    iniciar : iniciar,
  }
})();
/*Inicializando el módulo "Calculadora"*/
Calculadora.iniciar();
