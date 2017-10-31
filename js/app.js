var Calculadora = {
  //Método para reducir tamaño de tecla al presionarla
  PresionarTecla : function (tecla) {
    document.getElementById("tecla").style.width="50%"
  },
  //Método para mantener tamaño original de la tecla al soltarla
  SoltarTecla : function (tecla) {
    document.getElementById("tecla").style.width="auto"
  },
  IngresoDatos : function (event) {
    var tecla = event.which || event.keyCode;
    document.getElementById("display").innerHTML=String.fromCharCode(tecla);
  },
  //Inicializando los métodos con eventos de teclado y mouse
  iniciar : function () {
    document.onkeypress=this.IngresoDatos;
    document.onkeyup=this.SoltarTecla(event)
  }
};
/*Inicializando el módulo "Calculadora"*/
Calculadora.iniciar();
