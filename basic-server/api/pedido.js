inserirRota('/Pedido', function(dados, resposta) {
    database(`SELECT * FROM PEDIDO`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o pedido!' });
        });
})

inserirRota('/inserir_pedido', function(dados, resposta) {
    database(`INSERT INTO PEDIDO
            (
            CLIENTE_ID,
            PRODUTO_ID
            ) 
            VALUES 
            (
            "${dados.cliente_id}",
            "${dados.produto_id}"
            )`)
        .then(result => {

            resposta({ message: 'Pedido inserido com sucesso!' })


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o pedido!' });
        });
})

inserirRota('/inserir_pedido2', function(dados, resposta) {
    database(`INSERT INTO PEDIDO
            (
            CLIENTE_ID,
            CLIENTE_NOME,
            PRODUTO_VALORFINAL
            ) 
            VALUES 
            (
            "${dados.cliente_id}",
            "${dados.cliente_nome}",
            "${dados.produto_valorfinal}"
            )`)
        .then(result => {

            resposta({ message: 'Pedido inserido com sucesso!' })


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o pedido!' });
        });
})

inserirRota('/ExcluirPedido', function(dados, resposta) {
    console.log(dados)

    database(`DELETE FROM PEDIDO WHERE ID = '${dados.ID}'`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao excluir um item da tabela pedido!' });
        });
})