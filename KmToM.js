function KmToM(km){
    var km = document.getElementById("km").value;
    var m = km * 1000;
    document.getElementById("m").innerHTML = m;
}