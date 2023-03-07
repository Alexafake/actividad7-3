function compararedades() {

    var edad1 = parseInt(document.getElementById("edad1").value);
    var edad2 = parseInt(document.getElementById("edad2").value);
    var edad3 = parseInt(document.getElementById("edad3").value);

    if (edad1 > edad2 && edad1>edad3){
        document.getElementById("mayoredad").innerHTML =edad1;
    } else if (edad2 > edad1 && edad2 >edad3){
        document.getElementById("mayoredad").innerHTML =edad2;
    } else{ 
        document.getElementById("mayoredad").innerHTML =edad3;
    }

}
//*******************************************************************************************************************/
function generarnumeros() {
    var numeros= []
    while (numeros.length < 3){
        var numero = Math.floor(Math.random() *99) +1;
        if (!numeros.includes(numero)){
            numeros.push(numero);
        }
    }
    document.getElementById("numerosgenerados").innerHTML=numeros.join(", ")
}