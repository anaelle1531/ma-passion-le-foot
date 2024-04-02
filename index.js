function change_img(){
    let img = document.getElementById("lion"); // acces a l'element HTML par son id
    img.setAttribute("src", "lion2.jpg"); // modification d'un attribut de l'element HTML
}

function restaure_img(){
    let img = document.getElementById("lion"); // acces a l'element HTML par son id
    img.setAttribute("src", "lion1.jpg"); // modification d'un attribut de l'element HTML
}
