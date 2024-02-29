function changeImage(){
    const html = document.documentElement;
    html.classList.toggle("light")
    var imagem = document.querySelector("#profile");
    var btn = document.getElementById("btnStyle");
    var dt = document.getElementById("data");

    var registro = new Date();  

    if(html.classList.contains("light")){
        imagem.setAttribute("src", "./Images/img1.png")
        document.getElementById("colorTxt").style.color ="#FFFFFF"
    }else{
        imagem.setAttribute("src", "./Images/img2.png")
        document.getElementById("colorTxt").style.color ="lightpink"
    }
    dt.textContent = formatarData(registro);
}

function formatarData(item){
    var options = {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    return item.ToLocaleString("pt-BR", options)
}