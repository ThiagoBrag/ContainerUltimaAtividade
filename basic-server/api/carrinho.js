inserirRota('/Carrinho', function(dados, resposta) {
    database(`SELECT * FROM CARRINHO`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao buscar carrinho!' });
        });
})

inserirRota('/inserir_carrinho', function(dados, resposta) {
    database(`INSERT INTO CARRINHO
            (
            USER_ID,
            PRODUTO_ID,
            PRODUTO_NOME,
            PRODUTO_VALOR,
            PRODUTO_IMAGEM
            ) 
            VALUES 
            (
            "${dados.user_id}",
            "${dados.produto_id}",
            "${dados.produto_nome}",
            "${dados.produto_valor}",
            "${dados.produto_imagem}"
            )`)
        .then(result => {

            resposta({ message: 'Carrinho inserido com sucesso!' })


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o Carrinho!' });
        });
})

inserirRota('/ExcluirCarrinho', function(dados, resposta) {
    console.log(dados)

    database(`DELETE FROM CARRINHO WHERE ID = '${dados.ID}'`)
        .then(result => {
            resposta(result)
        }).catch(erro => {
            resposta({ erro: 'Erro ao excluir um item da tabela carrinho!' });
        });
})