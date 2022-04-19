inserirRota('/Cliente', function(dados, resposta) {
    console.log(dados)

    database(`SELECT * FROM CLIENTE`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o Cliente!' });
        });
})

inserirRota('/inserir_cliente', function(dados, resposta) {
    database(`INSERT INTO CLIENTE
            (
            NOME,
            SOBRENOME
            ) 
            VALUES 
            (
            "${dados.nome}",
            "${dados.sobrenome}"
            )`)
        .then(result => {
            console.log('Cliente inserido com sucesso!');

            resposta({ message: 'Cliente inserido com sucesso!' })


        }).catch(erro => {
            console.log('Erro ao inserir o cliente!');
            resposta({ erro: 'Erro ao inserir o cliente!' });
        });
})

inserirRota('/ExcluirCliente', function(dados, resposta) {
    console.log(dados)

    database(`DELETE FROM CLIENTE WHERE ID = '${dados.ID}'`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao excluir um item da tabela produto!' });
        });
})