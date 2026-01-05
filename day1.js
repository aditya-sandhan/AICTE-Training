function add(params){
    let a=parseFloat(document.getElementById("num1").value);
    let b=parseFloat(document.getElementById("num2").value);
    let sum = a + b;
    document.getElementById("Result").innerText = sum;
}