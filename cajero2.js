//variables
var dinero = 0;
var div = 0;
var papeles = 0;
var resultado = document.getElementById('resultado');
//                boton de html
var b = document.getElementById('extraer');
b.addEventListener("click", entregarDinero);
//                clase de billetes
class Billete
 {
  constructor(v, c)
   {
    this.valor = v;
    this.cantidad = c;
    this.imagen = new Image();
		this.imagen.src = imagenes[this.valor];
  }
}
function entregarDinero() 
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
// codigo principal
  for (var bi of caja) 
  {
    if (dinero > 0) 
    {
      div = Math.floor(dinero/bi.valor );
      if (div > bi.cantidad) 
      {
        papeles = bi.cantidad
      }
      else 
      {
        papeles = div;
      }
      for (var i = 0; i < papeles; i++)  
      {
        dibujar.push (new Billete(bi.valor, 1) );
      }
      entregado.push (new Billete(bi.valor, papeles));
      dinero -= bi.valor*papeles;
    }
  }
  if (dinero > 0) 
  {
    resultado.innerHTML = "ingrese multiplos de 100, 50, 20, 10 porfavor, este cajero no cuenta con monedas";
  }
  else 
  {
    for (var e of entregado) 
    {
      if (e.cantidad > 0) 
      {
        resultado.innerHTML += "<img src=" + e.imagen.src + " />" + "<br/>" + e.cantidad + " billetes de $" + e.valor + "<br/>";
      }
    }
  }
}
// array de las imagenes
var imagenes = [];
imagenes["100"] = "100.png";
imagenes["50"] = "50.png";
imagenes["20"] = "20.png";
imagenes["10"] = "10.png";
console.log(imagenes);
// array de la caja
var caja = [];
 caja.push(new Billete(100, 100) );
 caja.push(new Billete(50, 10) );
 caja.push(new Billete(20, 30) );
 caja.push(new Billete(10, 10) );

// arrat de dinero que se entregado
var entregado = [];
var dibujar = [];

