
function Limpiar() {
    document.getElementById('formulario').reset()
}



function realizarCalculo() {
    let valorDolarCompra = parseInt(document.getElementById('dolarCompra').value);
    let valorDolarVenta = parseInt(document.getElementById('dolarVenta').value);


    let valorPromedioDolar = (valorDolarCompra + valorDolarVenta) / 2;

    document.getElementById("PromedioDolar").innerHTML = ("$ " + valorPromedioDolar);

    let precioCasaEnero = valorPromedioDolar * 2500;

    //

    document.getElementById("CasaEnero").innerHTML = ("$ " + precioCasaEnero);


    let precioQuincenaEnero = (precioCasaEnero * 53) / 100;

    document.getElementById("CasaQuincenaEnero").innerHTML = ("$ " + precioQuincenaEnero);

    //

    let precioDptoEnero = (precioCasaEnero * 55) / 100;

    document.getElementById("DptoEnero").innerHTML = ("$ " + precioDptoEnero)


    let precioDptoQuincenaEnero = (precioDptoEnero * 53) / 100;

    document.getElementById("DptoQuincenaEnero").innerHTML = ("$ " + precioDptoQuincenaEnero);

    //

    let precioCasaFebrero = (precioCasaEnero * 80) / 100;

    document.getElementById("CasaFebrero").innerHTML = ("$ " + precioCasaFebrero);

    let precioCasaQuincenaFebrero = (precioCasaFebrero * 53) / 100;

    document.getElementById("CasaQuincenaFebrero").innerHTML = ("$ " + precioCasaQuincenaFebrero);

    //

    let precioDptoFebrero = (precioDptoEnero * 80) / 100;

    document.getElementById("DptoFebrero").innerHTML = ("$ " + precioDptoFebrero);

    let precioDptoQuincenaFebrero = (precioDptoEnero * 53) / 100;

    document.getElementById("DptoQuincenaFebrero").innerHTML = ("$ " + precioDptoQuincenaFebrero)

    //

    let precioCasaEneroXdia = (precioCasaEnero / 30) + ((precioCasaEnero * 15) / 100);

    document.getElementById("ValorxDiaCasaEnero").innerHTML = ("$ " + precioCasaEneroXdia);

    let precioCasaFebreroXdia = (precioCasaFebrero / 30) + ((precioCasaFebrero * 15) / 100);

    document.getElementById("ValorxDiaCasaFebrero").innerHTML = ("$ " + precioCasaFebreroXdia);

    //

    let precioDptoEneroXdia = (precioDptoEnero / 30) + ((precioDptoEnero * 15) / 100);

    document.getElementById("ValorxDiaDptoEnero").innerHTML = ("$ " +
    precioDptoEneroXdia);

    let precioDptoFebreroXdia = (precioDptoFebrero / 30) + ((precioDptoFebrero * 15) / 100);

    document.getElementById("ValorxDiaDptoFebrero").innerHTML = ("$ " + precioDptoFebreroXdia);


}