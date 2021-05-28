var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
 
    if (!event.target.parentNode.classList.contains("titulo-tabela")){

        event.target.parentNode.classList.add("fadeOut");

        setTimeout(() => {
            event.target.parentNode.remove();
        }, 500);
    }

})