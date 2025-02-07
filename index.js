import express from 'express';
import { apresentartodosMedicos, apresentarMedicoNome, apresentarMedicoEspecialidade } from './servicos/retornarMedicos_servico.js';
import { apresentartodosPacientes, apresentarPacienteNome } from './servicos/retornarPasciente_servico.js';
import { apresentartodasConsultas } from './servicos/retornarConsulta_servico.js';

import cors from 'cors'
const app = express();

app.use(cors())

app.get('/medicos', async (req, res) => {
    const nome = req.query.nome;
    const especialidade = req.query.especialidade;
    let resposta;
    if (typeof nome === 'undefined' && typeof especialidade === 'undefined') {
        resposta = await apresentartodosMedicos()
    } else if (typeof nome !== 'undefined') {
        resposta = await apresentarMedicoNome(nome)
    } else if (typeof especialidade !== 'undefined') {
        resposta = await apresentarMedicoEspecialidade(especialidade)
    }
    if (resposta.length > 0) {
        res.json(resposta)
    } else {
        res.status(404).json({ mensagem: "Nenhum médico encontrado" })
    }
})

app.get('/pacientes', async (req, res) => {
    const nome = req.query.nome;
    let resposta;
    if (typeof nome === 'undefined') {
        resposta = await apresentartodosPacientes()
    } else if (typeof nome !== 'undefined') {
        resposta = await apresentarPacienteNome(nome)
    } 
    if (resposta.length > 0) {
        res.json(resposta)
    } else {
        res.status(404).json({ mensagem: "Nenhum médico encontrado" })
    }
})

app.get('/consultas', async (req, res) => {
    const medico = req.query.medico;
    const paciente = req.query.paciente;
    let resposta;
    if (typeof medico === 'undefined' && typeof paciente === 'undefined') {
        resposta = await apresentartodasConsultas()
    } else if (typeof medico !== 'undefined') {
        resposta = await apresentarMedicoNome(medico)
    } else if (typeof paciente !== 'undefined') {
        resposta = await apresentarPacienteNome(paciente)
    }
    if (resposta.length > 0) {
        res.json(resposta)
    } else {
        res.status(404).json({ mensagem: "Nenhum médico encontrado" })
    }
})

app.listen(9000, async () => {
    const data = new Date()
    console.log("Servidor iniciado na porta 9000", data);
})