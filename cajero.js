class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
    
        
    }
    mostrar()
    {
    document.body.appendChild(this.imagen);
    }
}
function entregrardinero()
{   var t = document.getElementById("dinero");
    dinero = parseInt(t.value);

    for (var bi of caja)
    {
      if(dinero > 0)
      {
        div = Math.floor(dinero / bi.valor);
        if(div > bi.cantidad)
        {
            papeles = bi.cantidad;
        }
        else
        {
            papeles = div;
        }


        entregado.push( new Billete(bi.valor, papeles));
        dinero = dinero - (bi.valor * papeles);


      }
    }
    if(dinero > 0)
    {
        r.innerHTML = " ingrese multiplos de 100, 50, 20, 10 porfavor, este cajero no cuenta con monedas";
    }
    else
    {
        for( var e of entregado)
        {
            if(e.cantidad > 0)
            r.innerHTML = r.innerHTML + e.cantidad +"Billetes de $" + e.valor +"<br />";
        }
    }
}

var caja =[];
var entregado =[];
caja.push( new Billete(100, 10,));
caja.push( new Billete(50, 10,));
caja.push( new Billete(20, 30,));
caja.push( new Billete(10, 10,));

var dinero = 0;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
var r = document.getElementById("resultado");
b.addEventListener("click", entregrardinero);


