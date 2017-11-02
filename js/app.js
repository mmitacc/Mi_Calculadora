var Calculadora = {
  dato1:"", signo1:"+", dato2:"", signo2:"+",
  operador:"", resultado:"", OnC:46,
  //Método para reducir tamaño de tecla al presionarla
  PresionarTecla : function (idtecla) {
    var reducirtecla = document.getElementById(idtecla);
    reducirtecla.style.border="1px solid #ffffff";
    reducirtecla.style.padding= "5px";
  },
  //Método para mantener tamaño original de la tecla al soltarla
  SoltarTecla : function (idtecla) {
    //document.getElementById(idtecla).style.width="auto"
  },
  //Método para la lectura de los datos
  IngresoDatos : function (event) {
    var tecla = event.which || event.keyCode;
    if (tecla!=OnC) {
      if (this.ValidarDato(tecla)!="") {
        /*AGREGAR LOS DATOS EN LAS CADENAS*/
      };
    } else {
      this.PresionarTecla("on");
      document.getElementById("display").innerHTML="0";
      dato1=""; signo1="+"; dato2=""; signo2="+"; operador=""; resultado="";
    };
    //Visualiza el dato en el DISPLAY
    document.getElementById("display").innerHTML=String.fromCharCode(tecla);
  },
  //Método para validar si el dato es NUMERO ó es un OPERADOR
  ValidarDato : function (dato) {
    var TipoDato="";
    switch (dato) {
      case 96:
        TipoDato=numero;
        break;
      case 97:
        TipoDato=numero;
        break;
      case 98:
        TipoDato=numero;
        break;
      case 99:
        TipoDato=numero;
        break;
      case 100:
        TipoDato=numero;
        break;
      case 101:
        TipoDato=numero;
        break;
      case 102:
        TipoDato=numero;
        break;
      case 103:
        TipoDato=numero;
        break;
      case 104:
        TipoDato=numero;
        break;
      case 105:
        TipoDato=numero;
        break;
      case 110:
        TipoDato=punto;
        break;
      case 107:
        TipoDato=suma;
        break;
      case 109:
        TipoDato=resta;
        break;
      case 106:
        TipoDato=producto;
        break;
      case 111:
        TipoDato=division;
        break;
      case 13:
        TipoDato=igual;
        break;
      default:
        //alert("No es un dato para la Calculadora");
        break;
    };
    return TipoDato;
  },
  //Inicializando los métodos con eventos de teclado y mouse
  iniciar : function () {
    document.onkeypress=this.IngresoDatos;
    document.onkeyup=this.SoltarTecla;
  },
};
/*Inicializando el módulo "Calculadora"*/
Calculadora.iniciar();
