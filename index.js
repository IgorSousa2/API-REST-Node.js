//FUNÇÃO: SUBIR O SERVIDOR

const customExpress = require('./config/customExpress')
const conexao = require('./infra/conexao')
const Tabelas = require('./infra/tables')

conexao.connect(erro=> {
   if(erro){
       console.log(erro)
   } else {
        console.log('Conectado com sucesso')
        
        Tabelas.init(conexao)
        const app = customExpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
   }
})

