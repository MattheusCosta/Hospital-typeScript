///<reference path="pessoa.ts" />
///<reference path="paciente.ts" />
///<reference path="funcionario.ts" />
///<reference path="medico.ts" />
///<reference path="enfermeiro.ts" />
///<reference path="hospital.ts" />
///<reference path="prontosocorro.ts" />
var hospital;
(function (hospital_1) {
    //instaciando um Hospital
    var hospital = new hospital_1.Hospital();
    hospital.setNome("Grey Sloan Memorial Hospital");
    //instanciando o primeiro Paciente e inserindo valores
    var pacienteUm = new hospital_1.Paciente();
    pacienteUm.setCodPaciente(32);
    pacienteUm.setNome("Matheus Costa");
    pacienteUm.setCpf("549.654.324-56");
    pacienteUm.setSetor("Cardiologia");
    //instanciando o segundo Paciente e inserindo valores
    var pacienteDois = new hospital_1.Paciente();
    pacienteDois.setCodPaciente(57);
    pacienteDois.setNome("Joâo Paulo");
    pacienteDois.setCpf("856.129.421-35");
    pacienteDois.setSetor("Pedagogia");
    //instanciando o terceiro Paciente e inserindo valores
    var pacienteTres = new hospital_1.Paciente();
    pacienteTres.setCodPaciente(24);
    pacienteTres.setNome("Fylipe Pablo");
    pacienteTres.setCpf("654.684.158-78");
    pacienteTres.setSetor("Endocrinologia");
    //instanciando o primeiro Medico e inserindo valores
    var medicoUm = new hospital_1.Medico();
    medicoUm.setCodFuncionario(87);
    medicoUm.setNome("Meredith Grey");
    medicoUm.setCpf("876.654.214-54");
    medicoUm.setCrm(622911);
    //instanciando o segundo Medico e inserindo valores
    var medicoDois = new hospital_1.Medico();
    medicoDois.setCodFuncionario(20);
    medicoDois.setNome("Cristina Yang");
    medicoDois.setCpf("687.654.153-89");
    medicoDois.setCrm(856387);
    //instanciando o terceiro Medico e inserindo valores
    var medicoTres = new hospital_1.Medico();
    medicoTres.setCodFuncionario(11);
    medicoTres.setNome("Alex Karev");
    medicoTres.setCpf("789.349.412-52");
    medicoTres.setCrm(152604);
    //instanciando o primeiro Enfermeiro e inserindo valores
    var enfermeiroUm = new hospital_1.Enfermeiro();
    enfermeiroUm.setCodFuncionario(56);
    enfermeiroUm.setNome("Levi Schmitt");
    enfermeiroUm.setCpf("635-752-026.13");
    enfermeiroUm.setCoren(58326);
    enfermeiroUm.setSetor("Ortopedia");
    //instanciando o segundo Enfermeiro e inserindo valores
    var enfermeiroDois = new hospital_1.Enfermeiro();
    enfermeiroDois.setCodFuncionario(33);
    enfermeiroDois.setNome("Nico Kim");
    enfermeiroDois.setCpf("824.328.504-87");
    enfermeiroDois.setCoren(29748);
    enfermeiroDois.setSetor("Ortopedia");
    //instanciando o terceiro Enfermeiro e inserindo valores
    var enfermeiroTres = new hospital_1.Enfermeiro();
    enfermeiroTres.setCodFuncionario(97);
    enfermeiroTres.setNome("Owen Hunt");
    enfermeiroTres.setCpf("636.803.453-72");
    enfermeiroTres.setCoren(26154);
    enfermeiroTres.setSetor("Traumas");
    //instanciando o primeiro Pronto Socorro e inserindo valores
    var prontoSocorroUm = new hospital_1.ProntoSocorro();
    prontoSocorroUm.setCodProntoSocorro(19);
    prontoSocorroUm.setEndereco("11800 Astoria Blvd, Houston, TX 77089, EUA");
    //instanciando o segundo Pronto Socorro e inserindo valores
    var prontoSocorroDois = new hospital_1.ProntoSocorro();
    prontoSocorroDois.setCodProntoSocorro(15);
    prontoSocorroDois.setEndereco("12950 E Freeway Service Rd, Houston, TX 77015, EUA");
    //instanciando o terceiro Pronto Socorro e inserindo valores
    var prontoSocorroTres = new hospital_1.ProntoSocorro();
    prontoSocorroTres.setCodProntoSocorro(23);
    prontoSocorroTres.setEndereco("1201 International Dr, Columbia, MO 65202, EUA");
    hospital.addPacientes(pacienteUm);
    hospital.addPacientes(pacienteDois);
    hospital.addPacientes(pacienteTres);
    hospital.addEnfermeiros(enfermeiroUm);
    hospital.addEnfermeiros(enfermeiroDois);
    hospital.addEnfermeiros(enfermeiroTres);
    hospital.addMedicos(medicoUm);
    hospital.addMedicos(medicoDois);
    hospital.addMedicos(medicoTres);
    hospital.addProntoSocorro(prontoSocorroUm);
    hospital.addProntoSocorro(prontoSocorroDois);
    hospital.addProntoSocorro(prontoSocorroTres);
    document.getElementById("hospital").textContent = hospital.getNome();
    //trecho inserido para exemplificar a implentação das tabelas
    var tabela = document.getElementById("tabelaPaciente");
    var conteudoPaciente = " <tr> <th>Codigo</th> <th>Nome</th> <th>CPF</th> </tr>";
    hospital.getPacientes().forEach(function (element) {
        conteudoPaciente += "<tr> <td>" + element.getCodPaciente() + "</td><td>" + element.getNome() + "</td><td>" + element.getCpf() + "</td></tr>";
    });
    tabela.innerHTML = conteudoPaciente;
    var tabela1 = document.getElementById("tabelaEnfermeiro");
    var conteudoEnfermeiro = " <tr> <th>Codigo</th> <th>Nome</th> <th>CPF</th> <th>Coren</th> </tr>";
    hospital.getEnfermeiros().forEach(function (element) {
        conteudoEnfermeiro += "<tr> <td>" + element.getCodFuncionario() + "</td><td>" + element.getNome() + "</td><td>" + element.getCpf() + "</td><td>" + element.getCoren() + "</td></tr>";
    });
    tabela1.innerHTML = conteudoEnfermeiro;
    var tabela2 = document.getElementById("tabelaMedico");
    var conteudoMedico = " <tr> <th>Codigo</th> <th>Nome</th> <th>CPF</th> <th>CRM</th></tr>";
    hospital.getMedicos().forEach(function (element) {
        //alert("Medicos: " + element.getNome());
        conteudoMedico += "<tr> <td>" + element.getCodFuncionario() + "</td><td>" + element.getNome() + "</td><td>" + element.getCpf() + "</td><td>" + element.getCrm() + "</td></tr>";
    });
    tabela2.innerHTML = conteudoMedico;
    var tabela3 = document.getElementById("tabelaProntoSocorro");
    var conteudoProntoSocorro = " <tr> <th>Codigo</th> <th>Endereço</th></tr>";
    hospital.getProntoSocorro().forEach(function (element) {
        //alert("Medicos: " + element.getNome());
        conteudoProntoSocorro += "<tr> <td>" + element.getCodProntoSocorro() + "</td><td>" + element.getEndereco() + "</td></tr>";
    });
    tabela3.innerHTML = conteudoProntoSocorro;
})(hospital || (hospital = {}));
