class Tabelas{
    init (conexao) {
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = 
        'CREATE TABLE IF NOT EXISTS trofeus (id int NOT NULL AUTO_INCREMENT, game varchar(50) NOT NULL, nome_trofeu varchar(50) NOT NULL, descricao text, raridade varchar(7), PRIMARY KEY (id))'
        this.conexao.query(sql, (erro) => {
            if(erro){
                console.log(erro)
            } else {
                console.log('Tabela de troféus criada com sucesso')
            }
        })
    }
}

module.exports = new Tabelas