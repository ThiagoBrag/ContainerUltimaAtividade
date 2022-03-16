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

inserirRota('/Produto', function(dados, resposta) {
    console.log(dados)

    database(`SELECT * FROM PRODUTO`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o Produto!' });
        });
})

inserirRota('/Cliente', function(dados, resposta) {
    console.log(dados)

    database(`SELECT * FROM CLIENTE`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o Cliente!' });
        });
})

// inserirRota('/criar_usuario', function(dados, resposta) {
//     console.log(dados)

//     if (!dados.nome) {
//         return resposta({ erro: 'É necessario preencher o nome' })
//     }

//     if (!dados.nickname) {
//         return resposta({ erro: 'É necessario preencher o nickname' })
//     }

//     database(`INSERT INTO USER
//             (
//             NOME,
//             NICKNAME
//             ) 
//             VALUES 
//             (
//             "${dados.nome}",
//             "${dados.nickname}"
//             )`)
//         .then(result => {
//             console.log('Usuario inserido com sucesso!');

//             resposta({ message: 'Usuario inserido com sucesso!' })


//         }).catch(erro => {
//             console.log('Erro ao inserir o usuario!');
//             resposta({ erro: 'Erro ao inserir o usuario!' });
//         });
// })

inserirRota('/inserir_produto', function(dados, resposta) {
    database(`INSERT INTO PRODUTO
            (
            NOME,
            VALOR
            ) 
            VALUES 
            (
            "${dados.nome}",
            "${dados.preco}"
            )`)
        .then(result => {
            console.log('Produto inserido com sucesso!');

            resposta({ message: 'Produto inserido com sucesso!' })


        }).catch(erro => {
            console.log('Erro ao inserir o produto!');
            resposta({ erro: 'Erro ao inserir o produto!' });
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

inserirRota('/Pedido', function(dados, resposta) {
    database(`SELECT * FROM PEDIDO`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o pedido!' });
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

inserirRota('/ExcluirCliente', function(dados, resposta) {
    console.log(dados)

    database(`DELETE FROM CLIENTE WHERE ID = '${dados.ID}'`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao excluir um item da tabela produto!' });
        });
})

inserirRota('/ExcluirPedido', function(dados, resposta) {
    console.log(dados)

    database(`DELETE FROM PEDIDO WHERE ID = '${dados.ID}'`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao excluir um item da tabela produto!' });
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