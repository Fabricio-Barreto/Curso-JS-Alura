function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        if(validaAltura(paciente.altura)){
            return "";
        }else{
            return "Altura inválida";
        }
    }else{
        if(validaAltura(paciente.altura)){
            return "Peso inválido";
        }else{
            return "Peso e Altura inválida";
        }
    }
}

function validaPeso(peso){
    if (peso > 0 && peso < 400) {
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if (altura > 0 && altura < 3) {
        return true;
    }else{
        return false;
    }
}

function executeErro(erro, paciente){

    var mensagemErro = document.querySelector("#mensagem-erro");

    var mensagemErroNome = document.querySelector("#nome-erro");

    if(erro.length > 0 || paciente.nome.length == 0){

        mensagemErro.textContent = erro;

        if(paciente.nome == 0) {

            mensagemErroNome.textContent = "Nome vazio";

            return true;

        } else {

            mensagemErroNome.textContent = "";

            return true;
        }

    } else {

        mensagemErro.textContent = erro;
        mensagemErroNome.textContent = "";

        return false;
    }
}