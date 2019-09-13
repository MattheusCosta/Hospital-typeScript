///<reference path="pessoa.ts" />
///<reference path="paciente.ts" />
///<reference path="funcionario.ts" />
///<reference path="medico.ts" />
///<reference path="enfermeiro.ts" />
///<reference path="hospital.ts" />

namespace hospital{

    //instaciando um Hospital
    let hospital = new Hospital();
    hospital.setNome("Grey Sloan Memorial Hospital");

    //instanciando o primeiro Paciente e inserindo valores
    let pacienteUm = new Paciente();
    pacienteUm.setCodPaciente(32);
    pacienteUm.setNome("Matheus Costa");
    pacienteUm.setCpf("549.654.324-56");

    //instanciando o segundo Paciente e inserindo valores
    let pacienteDois = new Paciente();
    pacienteDois.setCodPaciente(57);
    pacienteDois.setNome("Joâo Paulo");
    pacienteDois.setCpf("856.129.421-35");

    //instanciando o terceiro Paciente e inserindo valores
    let pacienteTres = new Paciente();
    pacienteTres.setCodPaciente(24);
    pacienteTres.setNome("Fylipe Pablo");
    pacienteTres.setCpf("654.684.158-78");


}
