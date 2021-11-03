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
                    res.status(201).json(trofeu)
                }
            
            })
        }

        
    }

    lista (res) {
        const sql = 'SELECT * FROM trofeus'

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else{
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId (id, res) {
        const sql = `SELECT * FROM trofeus WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const trofeuUnico = resultados[0]
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json(trofeuUnico)
            }
        })
    }

    alteraTrofeu(id, valores, res){
        if(valores.data_conclusao){
            valores.data_conclusao = moment(valores.data_conclusao, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        const sql = 'UPDATE trofeus SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    deletaTrofeu(id, res){
        const sql = `DELETE FROM trofeus WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            if(erro){
                res.status(400).json(erro)
            } else {
                res.status(200).json({id})
            }
        })
    }
}

module.exports = new Trofeus