import dadosPacientes from "../dados2/dadosPacientes.js"

async function apresentartodosPacientes() {
    const resultados = dadosPacientes
    return resultados;
}

async function apresentarPacienteNome(nomePaciente) {
    const resultados = dadosPacientes
    const resposta = resultados.filter(paciente => paciente.nome.toLowerCase().includes(nomePaciente.toLowerCase()))
    return resposta;
}

export { apresentartodosPacientes, apresentarPacienteNome }