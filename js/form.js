var btnAddPaciente = document.querySelector("#adicionar-paciente")

btnAddPaciente.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = getPaciente(form);

    var erro = validaPaciente(paciente);

    if (executeErro(erro, paciente)) return

    var Tr = createTr();

    addPaciente(paciente, Tr);

    form.reset();
});

function getPaciente(obj) {

    var paciente = {
        nome : obj.nome.value,
        peso : obj.peso.value,
        altura : obj.altura.value,
        gordura : obj.gordura.value
    }

    return paciente;
}

function getPacienteTabela(obj) {

    var paciente = {
        nome : obj.nome,
        peso : obj.peso,
        altura : obj.altura,
        gordura : obj.gordura
    }

    return paciente;
}


function createTr() {
    
    var  Tr = {
        pacienteTr : document.createElement("tr"),

        nomeTd : document.createElement("td"),
        pesoTd : document.createElement("td"),
        alturaTd : document.createElement("td"),
        gorduraTd : document.createElement("td"),
        imcTd : document.createElement("td")
    }

    Tr.pacienteTr.classList.add("paciente");

    Tr.nomeTd.classList.add("info-nome");
    Tr.pesoTd.classList.add("info-peso");
    Tr.alturaTd.classList.add("info-altura");
    Tr.gorduraTd.classList.add("info-gordura");
    Tr.imcTd.classList.add("info-imc");

    return Tr;
}

function addPaciente(paciente, Tr) {

    Tr.nomeTd.textContent = paciente.nome;
    Tr.pesoTd.textContent = paciente.peso;
    Tr.alturaTd.textContent = paciente.altura;
    Tr.gorduraTd.textContent = paciente.gordura;
    Tr.imcTd.textContent = calculaImc(paciente.peso,paciente.altura)

    Tr.pacienteTr.appendChild(Tr.nomeTd);
    Tr.pacienteTr.appendChild(Tr.pesoTd);
    Tr.pacienteTr.appendChild(Tr.alturaTd);
    Tr.pacienteTr.appendChild(Tr.gorduraTd);
    Tr.pacienteTr.appendChild(Tr.imcTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(Tr.pacienteTr);
}

var formpaciente = document.querySelectorAll(".paciente");

formpaciente.forEach(function(paciente) {
    imc = paciente.querySelector(".info-imc");
    peso = paciente.querySelector(".info-peso");
    altura = paciente.querySelector(".info-altura");

    imc.textContent = calculaImc(peso.textContent,altura.textContent);
});