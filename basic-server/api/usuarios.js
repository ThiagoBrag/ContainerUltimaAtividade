inserirRota('/buscar_usuario', function(dados, resposta) {
    console.log(dados)

    database(`SELECT * FROM USER`)
        .then(result => {

            resposta({ list: result })


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o usuario!' });
        });
})

inserirRota('/login', function(dados, resposta) {
    console.log(dados)

    database(`SELECT * FROM USER`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o usuario!' });
        });
})

inserirRota('/inserir_usuario', function(dados, resposta) {
    database(`INSERT INTO USER
            (
            NOME,
            SOBRENOME,
            PASSWORD
            ) 
            VALUES 
            (
            "${dados.nome}",
            "${dados.sobrenome}",
            "${dados.password}"
            )`)
        .then(result => {
            console.log('Usuário inserido com sucesso!');

            resposta({ message: 'Usuário inserido com sucesso!' })


        }).catch(erro => {
            console.log('Erro ao inserir o Usuário!');
            resposta({ erro: 'Erro ao inserir o Usuário!' });
        });
})

inserirRota('/ExcluirUsuario', function(dados, resposta) {
    console.log(dados)

    database(`DELETE FROM USER WHERE ID = '${dados.ID}'`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao excluir um item da tabela user!' });
        });
})

inserirRota('/checar_user', function(dados, resposta) {
    database(`SELECT * FROM USER where NOME = "${dados.NOME}" AND PASSWORD = "${dados.PASSWORD}"`)
        .then(result => {
            resposta(result)
        }).catch(erro => {
            console.log('ERRO AO CHECAR USUÁRIO! ')
            resposta({ erro })
        })
})