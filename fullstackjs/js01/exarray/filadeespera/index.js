let pacientes = ["Marcos","Lucas","Ana","Jose"]
let opicao
do {
    opicao = prompt(`${pacientes.join('\n')}\n1-Atender paciente\n2-Adicionar paciente\n3-Sair`);
    switch (opicao) {
        case "1":
            pacienteAtendido = pacientes.shift()
            alert(`Paciente atendido: ${pacienteAtendido}`)
            break
        case "2":
            let novoPaciente = prompt("Nome do paciente")
            pacientes.push(novoPaciente)
            break
    }
} while (opicao != "3")