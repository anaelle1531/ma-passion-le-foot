document.addEventListener("DOMContentLoaded", function () {
    
    function change_lyon(){
        let lyon_img = document.getElementById("lyon_img"); // acces a l'element HTML par son id
        lyon_img.setAttribute("src", "lyon2.jpg"); // modification d'un attribut de l'element HTML
    }

    function restaure_lyon(){
        let lyon_img = document.getElementById("lyon_img"); // acces a l'element HTML par son id
        lyon_img.setAttribute("src", "lyon1.jpg"); // modification d'un attribut de l'element HTML
    }
    function change_egalite(){
        let egalite_img = document.getElementById("egalite_img"); // acces a l'element HTML par son id
        egalite_img.setAttribute("src", "egalite2.png"); // modification d'un attribut de l'element HTML
    }

    function restaure_egalite(){
        let egalite_img = document.getElementById("egalite_img"); // acces a l'element HTML par son id
        egalite_img.setAttribute("src", "egalite1.jpg"); // modification d'un attribut de l'element HTML
    }
    function change_socrates(){
        let socrates_img = document.getElementById("socrates_img"); // acces a l'element HTML par son id
        socrates_img.setAttribute("src", "socrates2.jpg"); // modification d'un attribut de l'element HTML
    }

    function restaure_socrates(){
        let socrates_img = document.getElementById("socrates_img"); // acces a l'element HTML par son id
        socrates_img.setAttribute("src", "socrates1.jpg"); // modification d'un attribut de l'element HTML
    }

    function change_science(){
        let science_img = document.getElementById("science_img"); // acces a l'element HTML par son id
        science_img.setAttribute("src", "science2.jpg"); // modification d'un attribut de l'element HTML
    }

    function restaure_science(){
        let science_img = document.getElementById("science_img"); // acces a l'element HTML par son id
        science_img.setAttribute("src", "science1.jpg"); // modification d'un attribut de l'element HTML
    }    
});
