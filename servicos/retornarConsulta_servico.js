import dadosConsultas from "../dados/dadosConsulta.js"

async function apresentartodasConsultas() {
    const resultados = dadosConsultas
    return resultados;
}

export { apresentartodasConsultas }