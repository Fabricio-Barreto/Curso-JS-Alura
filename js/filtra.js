var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente");

    if( this.value != "") {
        pacientes.forEach(pacientes => {
            var paciente = pacientes;
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value,"i");
            console.log(this.value);
            if(!expressao.test(nome)){
                paciente.classList.add("invisible");
            }else{
                paciente.classList.remove("invisible");
            }
        });

    }else{
        pacientes.forEach(pacientes => {
            var paciente = pacientes;
            paciente.classList.remove("invisible")
        });
    }

})