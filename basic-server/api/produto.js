inserirRota('/Produto', function(dados, resposta) {
    console.log(dados)

    database(`SELECT * FROM PRODUTO`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o Produto!' });
        });
})

inserirRota('/inserir_produto', function(dados, resposta) {
    database(`INSERT INTO PRODUTO
            (
            NOME,
            VALOR,
            IMAGEM
            ) 
            VALUES 
            (
            "${dados.nome}",
            "${dados.preco}",
            "${dados.imagem}"
            )`)
        .then(result => {
            console.log('Produto inserido com sucesso!');

            resposta({ message: 'Produto inserido com sucesso!' })


        }).catch(erro => {
            console.log('Erro ao inserir o produto!');
            resposta({ erro: 'Erro ao inserir o produto!' });
        });
})

inserirRota('/ExcluirProduto', function(dados, resposta) {
    console.log(dados)

    database(`DELETE FROM PRODUTO WHERE ID = '${dados.ID}'`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao excluir um item da tabela produto!' });
        });
})

inserirRota('/EditarProduto', function(dados, resposta) {

    database(`UPDATE PRODUTO SET NOME = '${dados.nome}', VALOR = '${dados.preco}' WHERE ID = '${dados.ID}'`)
        .then(result => {
            resposta({ message: 'Salvo com sucesso!' })
        }).catch(erro => {
            resposta({ erro: 'Erro ao editar a tabela produto!' });
        });
})