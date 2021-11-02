const moment = require('moment')
const conexao = require('../infra/conexao')

class Trofeus{
    insereTrofeu(trofeu, res){
        const data_conclusao = moment(trofeu.data_conclusao, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        
        const trofeuValido = trofeu.nome_trofeu.length >= 3
        
        const validation = [
            {
                nome: 'nome_trofeu',
                valido: trofeuValido,
                mensagem: 'Troféu deve ter um nome válido'
            }
            //,
            //{
            //    nome: 'nome',
            //    valido: trofeuValido,
            //    mensagem: 'Troféu deve ter um nome válido'
            //},
        ]

        const erros = validation.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros)  
        } else {
            const trofeuDatado = {...trofeu, data_conclusao}

            const sql = 'INSERT INTO trofeus SET ?'

            conexao.query(sql, trofeuDatado, (erro, resultados) => {
                if(erro){
                    res.status(400).json(erro)        
                } else {
                    res.status(201).json(resultados)
                }
            
            })
        }

        
    }
}

module.exports = new Trofeus