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

    //instanciando o primeiro Medico e inserindo valores
    let medicoUm = new Medico();
    medicoUm.setCodFuncionario(87);
    medicoUm.setNome("Meredith Grey");
    medicoUm.setCpf("876.654.214-54");
    medicoUm.setCrm(856387);

    //instanciando o segundo Medico e inserindo valores
    let medicoDois = new Medico();
    medicoDois.setCodFuncionario(20);
    medicoDois.setNome("Cristina Yang");
    medicoDois.setCpf("687.654.153-89");
    medicoDois.setCrm(856387);

    //instanciando o terceiro Medico e inserindo valores
    let medicoTres = new Medico();
    medicoTres.setCodFuncionario(11);
    medicoTres.setNome("Alex Karev");
    medicoTres.setCpf("789.349.412-52");
    medicoTres.setCrm(856387);

    //instanciando o primeiro Enfermeiro e inserindo valores
    let enfermeiroUm = new Enfermeiro();
    enfermeiroUm.setCodFuncionario(56);
    enfermeiroUm.setNome("Levi Schmitt");
    enfermeiroUm.setCpf("635-752-026.13");
    enfermeiroUm.setCoren(58326);

    //instanciando o segundo Enfermeiro e inserindo valores
    let enfermeiroDois = new Enfermeiro();
    enfermeiroDois.setCodFuncionario(33);
    enfermeiroDois.setNome("Nico Kim");
    enfermeiroDois.setCpf("824.328.504-87");
    enfermeiroDois.setCoren(58326);

    //instanciando o terceiro Enfermeiro e inserindo valores
    let enfermeiroTres = new Enfermeiro();
    enfermeiroTres.setCodFuncionario(97);
    enfermeiroTres.setNome("Owen Hunt");
    enfermeiroTres.setCpf("636.803.453-72");
    enfermeiroTres.setCoren(58326);

    hospital.addPacientes(pacienteUm);
    hospital.addPacientes(pacienteDois);
    hospital.addPacientes(pacienteTres);

    hospital.addEnfermeiros(enfermeiroUm);
    hospital.addEnfermeiros(enfermeiroDois);
    hospital.addEnfermeiros(enfermeiroTres);

    hospital.addMedicos(medicoUm);
    hospital.addMedicos(medicoDois);
    hospital.addMedicos(medicoTres);
}
