//...utente inserisce un numero e il programma stampa in html tanti asterischi quanto è il numero...//

function stampa_asterischi_lineare() {
    //...input da HTML...//
    var num = document.getElementById("field").value;
    //...trasformare input in numero...//
    var n = parseInt(num);
    //...stringa dove verranno inseriti gli asterischi da mostrare lato HTML...//
    var str = "";
    //...ciclare per aggiungere un asterisco alla volta alla stringa...//
    for (var i = 0; i < n; i++) {
        str += "*";
    }
    //...inserisco la stringa contenente gli asterischi nel tag H2...//
    document.getElementById("stampa").innerHTML = str;
}

function stampa_asterischi_triangolare() {
    //...input da HTML...//
    var num = document.getElementById("field").value;
    //...trasformare input in numero...//
    var n = parseInt(num);
    //...stringa dove verranno inseriti gli asterischi da mostrare lato HTML...//
    var str = "";
    //...ciclare per aggiungere un asterisco alla volta alla stringa...//
    for (var i = 0; i < n; i++) {

        // calcolo il numero di spazi a sinistra
        for (var z = 0; z < i; z++) {
            str += "&nbsp";
        }

        // calcolo il nuero di asterischi centrali
        for (var j = 0; j < n - i; j++) {
            str += "*";

        }

        // calcolo il numero di spazi a destra
        for (var w = 0; w < i; w++) {
            str += "&nbsp";

        }


        str += "<br>"; // quando completo il ciclo for j vado a capo
    }


    //...inserisco la stringa contenente gli asterischi nel tag H2...//
    document.getElementById("stampa_triangolo").innerHTML = str;
}