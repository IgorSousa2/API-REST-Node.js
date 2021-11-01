const conexao = require('../infra/conexao')

class Trofeus{
    insereTrofeu(trofeu){
        const sql = 'INSERT INTO trofeus SET ?'

        conexao.query(sql, trofeu, (erro, resultados) => {
            if(erro){
                console.log(erro)        
            } else {
                console.log(resultados)
            }
            
        })
    }
}

module.exports = new Trofeus