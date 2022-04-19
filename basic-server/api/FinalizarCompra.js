inserirRota('/FinalizarCompra', function(dados, resposta) {
    database(`SELECT * FROM FINALIZAR_COMPRA`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao buscar FINALIZAR COMPRA!' });
        });
})

inserirRota('/inserir_finalizar_compra', function(dados, resposta) {
    database(`INSERT INTO FINALIZAR_COMPRA
            (
            USER_ID,
            PRODUTO_ID,
            PRODUTO_QUANTIDADE,
            PRODUTO_VALORTOTAL
            ) 
            VALUES 
            (
            "${dados.user_id}",
            "${dados.produto_id}",
            "${dados.produto_quantidade}",
            "${dados.produto_valortotal}"
            )`)
        .then(result => {

            resposta({ message: 'finalizar_compra inserido com sucesso!' })


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o finalizar_compra!' });
        });
})

inserirRota('/ExcluirFinalizarCompra', function(dados, resposta) {
    console.log(dados)

    database(`DELETE FROM FINALIZAR_COMPRA WHERE ID = '${dados.ID}'`)
        .then(result => {
            resposta(result)
        }).catch(erro => {
            resposta({ erro: 'Erro ao excluir um item da tabela FINALIZAR_COMPRA!' });
        });
})