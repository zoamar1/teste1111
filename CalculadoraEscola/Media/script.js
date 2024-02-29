function Calcular(){
    num1 = document.getElementById("num1").valueAsNumber
    num2 = document.getElementById("num2").valueAsNumber
    num3 = document.getElementById("num3").valueAsNumber
    media = (num1+num2)/2
    document.getElementById("resultado").textContent = media.toFixed(2);
    if (media>=7){
        document.getElementById("resultado").style.color = "green"
    } else {
        document.getElementById("resultado").style.color = "red"
    }
}