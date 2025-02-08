import dadosMedicos from "../dados/dadosMedicos.js";

async function apresentartodosMedicos() {
    const resultados = dadosMedicos
    return resultados;
}

async function apresentarMedicoNome(nomeMedico) {
    const resultados = dadosMedicos
    const resposta = resultados.filter(medico => medico.nome.toLowerCase().includes(nomeMedico.toLowerCase()))
    return resposta;
}

async function apresentarMedicoEspecialidade(especialidade) {
    const resultados = dadosMedicos
    const resposta = resultados.filter(medico => medico.especialidade.toLowerCase().includes(especialidade.toLowerCase()))
    return resposta
}

export { apresentartodosMedicos, apresentarMedicoNome, apresentarMedicoEspecialidade }