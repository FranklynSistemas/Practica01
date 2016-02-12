$(function()
{

  $("#btnContarVocales").click(function(event)
    {
      var inPalabra = $("#PalabraV").val();
      var tablaVocales = CuentaVocales(inPalabra);
	  if( inPalabra.length > 0 && isNaN(inPalabra)){
      var tds = ` <p>Cantidad de Vocales en la Palabra [--><b>${inPalabra}</b><--]</p>
                  <table class="table table-striped">
                  <thead>
                    <tr>
                      <th> Vocal </th>
                      <th> Cantidad </th>
                    </tr>
                    </thead>
                    <tbody>
      `;
      for(num in tablaVocales){
        tds += '<tr>';
        tds += '<td>'+tablaVocales[num][0]+'</td>';
        tds += '<td >'+tablaVocales[num][1]+'</td>';
        tds += '</tr>';
      }
      tds += `</tbody>
              </table>`;
      $("#DatosModal").html(tds);
	  }else{
		$("#DatosModal").html('<p style="color: red;">Debe digitar un Valor de tipo Texto</p>');
	  }
    });

    $("#btnContarConsonantes").click(function(event)
      {
        var inPalabra = $("#PalabraC").val();
        var tablaConsonantes = CuentaConsonantes (inPalabra);
		if( inPalabra.length > 0 && isNaN(inPalabra)){
<<<<<<< HEAD
        var tds = ` <p>Cantidad de consonantes en la palabra [--><b>${inPalabra}</b><--]</p>
=======
        var tds = ` <p>Cantidad de Vocales en la Palabra [--><b>${inPalabra}</b><--]</p>
>>>>>>> refs/remotes/origin/gh-pages
                    <table class="table table-striped">
                    <thead>
                      <tr>
                        <th> Consonate </th>
                        <th> Cantidad </th>
                      </tr>
                      </thead>
                      <tbody>
        `;
        for(num in tablaConsonantes){
          tds += '<tr>';
          tds += '<td>'+tablaConsonantes[num][0]+'</td>';
          tds += '<td >'+tablaConsonantes[num][1]+'</td>';
          tds += '</tr>';
        }
			tds += `</tbody>
					</table>`;
			$("#DatosModalConsonantes").html(tds);

		}else{
			$("#DatosModalConsonantes").html('<p style="color: red;">Debe digitar un Valor de tipo Texto</p>');
		}
      });


          $("#btnNumeroCapicua").click(function(event)
            {
              var inNumero = $("#NumeroCapi").val();
              $("#DatosModalCapicua").html(numeroCapicua(inNumero));
            });


function CuentaVocales (Palabra){
	var arrayVocales = [["a",0],["e",0],["i",0],["o",0],["u",0],["<b>Total</b>",0]];
	var cont = 0;
	Palabra = Palabra.toLowerCase();

	for (var i = 0; i < Palabra.length; i++) {
	  for (var j = 0; j < arrayVocales.length; j++) {
		if(arrayVocales[j][0] === Palabra.charAt(i)){
		  arrayVocales[j][1] = arrayVocales[j][1]+1;
		}
    }
	}
  for (var i = 0; i < arrayVocales.length-1; i++) {
    arrayVocales[arrayVocales.length-1][1] = eval(arrayVocales[arrayVocales.length-1][1] + arrayVocales[i][1]);
  }

return arrayVocales;
}

function CuentaConsonantes (Palabra){
    var arrayConsonantes = [["b",0],["c",0],["d",0],["f",0],["g",0],
                          ["h",0],["j",0],["k",0],["l",0],["m",0],["n",0],["ñ",0],
<<<<<<< HEAD
                          ["p",0],["q",0],["r",0],["s",0],["t", 0],["v",0],
                          ["w",0],["x",0],["y",0],["z",0],["<b>Total</b>",0]];
=======
                          ["p",0],["r",0],["s",0],["t", 0],["x",0],["y",0],["z",0],["<b>Total</b>",0]];
>>>>>>> refs/remotes/origin/gh-pages
    var cont = 0;

    Palabra = Palabra.toLowerCase();

	for (var i = 0; i < Palabra.length; i++) {
	  for (var j = 0; j < arrayConsonantes.length; j++) {
		if(arrayConsonantes[j][0] === Palabra.charAt(i)){
		  arrayConsonantes[j][1] = arrayConsonantes[j][1]+1;
		}
	  }

	}
  for (var i = 0; i < arrayConsonantes.length-1; i++) {
    arrayConsonantes[arrayConsonantes.length-1][1] = eval(arrayConsonantes[arrayConsonantes.length-1][1] + arrayConsonantes[i][1]);
  }
return arrayConsonantes;

}

function numeroCapicua (valor){
  var numeroAlrevez = [];
  var cont = 0;
  var result = 0, longitud = valor.length;

  if( longitud > 0 && !isNaN(valor) ) {

  	for (var i = valor.length-1; i >= 0; i--) {
            numeroAlrevez[cont++] = valor.charAt(i);

    }
	for (var i = 0; i < numeroAlrevez.length; i++) {
        if(numeroAlrevez[i] === valor.charAt(i)){
          result++;
        }
      }

    if (result === longitud) {
      return `El número ${valor}  es capicúa `;
    }else{
      return `El número ${valor} no es capicúa `;
    }

}else{
	return '<p style="color: red;">Debe digitar un Valor Númerico</p>';
}



}

    function AreaCirculo(Valor){
	  if( Valor.length > 0 && !isNaN(Valor) ) {
		var Area = Math.PI * Math.pow(Valor,2);
		return `El Área del Circulo es: ${Area}`;
	  }else{
		return '<p style="color: red;">Debe digitar un Valor Númerico</p>';
	  }
}

    function AreaTriangulo(Base, Altura){
		if( Base.length > 0 && !isNaN(Base) && Altura.length > 0 && !isNaN(Altura)) {
			var Area = Base*Altura/2;
			return `El Área del Triangulo es: ${Area}`;
		}else{
			return '<p style="color: red;">Debe digitar dos Valor Númerico</p>';
		}
}
    function AreaCuadrado(Lado){
		if( Lado.length > 0 && !isNaN(Lado) ) {
			var Area = Lado*Lado;
			return `El Área del Cuadrado es: ${Area}`;
		}else{
			return '<p style="color: red;">Debe digitar un Valor Númerico</p>';
		}
}

$("#btnCalculaAcirculo").click(function(event)
  {
    var inRadio = $("#Radio").val();
    $("#DatosModalAreas").html(AreaCirculo(inRadio));
  });

$("#btnCalculaAtriangulo").click(function(event)
  {
    var inBase = $("#Base").val();
    var inAltura = $("#Altura").val();
    $("#DatosModalAreas").html(AreaTriangulo(inBase,inAltura));
  });

$("#btnCalculaAcuadrado").click(function(event)
  {
    var inLado = $("#lado").val();
    $("#DatosModalAreas").html(AreaCuadrado(inLado));
  });


});
