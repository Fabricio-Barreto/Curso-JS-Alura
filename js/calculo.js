var pacientes = document.querySelectorAll(".paciente");

for( var i = 0; i < pacientes.length; i++){
    var tdpeso = pacientes[i].querySelector(".info-peso");
    var peso = tdpeso.textContent;

    var tdaltura = pacientes[i].querySelector(".info-altura");
    var altura = tdaltura.textContent;

    var tdimc = pacientes[i].querySelector(".info-imc");
}


function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}





