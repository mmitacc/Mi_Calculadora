var Calculadora = {
  dato1:"", signo1:"+", dato2:"", signo2:"+",
  operador:"", resultado:"", OnC:46,
  //Método para reducir tamaño de tecla al presionarla
  PresionarTecla : function (idtecla) {
    idtecla = idtecla;
    var reducirtecla = document.getElementById(idtecla);
    reducirtecla.style.background= "#bdbdbd";
    reducirtecla.style.border= "1px solid #000000";
    reducirtecla.style.borderRadius="15px";
    reducirtecla.style.padding= "8px";
  },
  //Método para mantener tamaño original de la tecla al soltarla
  SoltarTecla : function (event) {
    var tecla = event.which || event.keyCode;
    if (tecla != this.OnC) {
      /*var datovalidado = Calculadora.ValidarDato(tecla);
      if (datovalidado != "") {
        var ampliartecla = document.getElementById(datovalidado);
        ampliartecla.style.background= "transparent";
        ampliartecla.style.border= "none";
        ampliartecla.style.padding= "0px";
      }*/
    } else {
      var ampliartecla = document.getElementById("on");
      ampliartecla.style.background= "transparent";
      ampliartecla.style.border= "none";
      ampliartecla.style.padding= "0px";
      //dato1=""; signo1="+"; dato2=""; signo2="+"; operador=""; resultado="";
    }
  },
  //Método para la lectura de los datos
  IngresoDatos : function (event) {
    var tecla = event.which || event.keyCode;
    if (tecla != this.Onc) {
       var datovalidado = this.ValidarDato(tecla);
      /*if (datovalidado != "") {
        Calculadora.PresionarTecla(datovalidado);
        //AGREGAR ACUMULADORES PARA LAS OPERACIONES Y MOSTAR EN DISPLAY
        document.getElementById("display").innerHTML=String.fromCharCode(tecla);
      };*/
    } else {
      this.PresionarTecla("on");
      document.getElementById("display").innerHTML="borrados";
      dato1=""; signo1="+"; dato2=""; signo2="+"; operador=""; resultado="";
    };
    //Visualiza el dato en el DISPLAY
  },
  //Método para validar si el dato es NUMERO ó es un OPERADOR
  ValidarDato : function (dato) {
    var dato=dato;
    var TipoDato="";
    switch (dato) {
      case 96:
        TipoDato="0";
        break;
      case 97:
        TipoDato="1";
        break;
      case 98:
        TipoDato="2";
        break;
      case 99:
        TipoDato="3";
        break;
      case 100:
        TipoDato="4";
        break;
      case 101:
        TipoDato="5";
        break;
      case 102:
        TipoDato="6";
        break;
      case 103:
        TipoDato="7";
        break;
      case 104:
        TipoDato="8";
        break;
      case 105:
        TipoDato="9";
        break;
      case 110:
        TipoDato="punto";
        break;
      case 107:
        TipoDato="mas";
        break;
      case 109:
        TipoDato="menos";
        break;
      case 106:
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
        break;
    };
    return TipoDato;
  },
  //Inicializando los métodos con eventos de teclado y mouse
  Return {
    iniciar : function () {
      document.onkeypress=this.IngresoDatos;
      document.onkeyup=this.SoltarTecla;
    }
  }
};
/*Inicializando el módulo "Calculadora"*/
Calculadora.iniciar();
