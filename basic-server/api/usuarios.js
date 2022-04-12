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

inserirRota('/Endereco', function(dados, resposta) {
    console.log(dados)

    database(`SELECT * FROM ENDERECO`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o endereco!' });
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

// inserirRota('/inserir_endereco', function(dados, resposta) {
//     database(`INSERT INTO ENDERECO
//             (
//             PAIS,
//             ESTADO,
//             CIDADE,
//             BAIRRO,
//             RUA,
//             NUMERO,
//             CEP
//             ) 
//             VALUES 
//             (
//             "${dados.pais}",
//             "${dados.estado}",
//             "${dados.cidade}",
//             "${dados.bairro}",
//             "${dados.rua}",
//             "${dados.numero}",
//             "${dados.cep}"
//             )`)
//         .then(result => {
//             console.log('Endereço inserido com sucesso!');

//             resposta({ message: 'Endereço inserido com sucesso!' })


//         }).catch(erro => {
//             console.log('Erro ao inserir o Endereço!');
//             resposta({ erro: 'Erro ao inserir o Endereço!' });
//         });
// })

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

inserirRota('/inserir_pedido2', function(dados, resposta) {
    database(`INSERT INTO PEDIDO
            (
            CLIENTE_ID,
            CLIENTE_NOME,
            PRODUTO_ID,
            PRODUTO_NOME,
            PRODUTO_VALOR
            ) 
            VALUES 
            (
            "${dados.cliente_id}",
            "${dados.cliente_nome}",
            "${dados.produto_id}",
            "${dados.produto_nome}",
            "${dados.produto_valor}"
            )`)
        .then(result => {

            resposta({ message: 'Pedido inserido com sucesso!' })


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o pedido!' });
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

inserirRota('/inserir_finalizar_compra', function(dados, resposta) {
    database(`INSERT INTO FINALIZAR_COMPRA
            (
            USER_ID,
            PRODUTO_ID,
            PRODUTO_QUANTIDADE
            ) 
            VALUES 
            (
            "${dados.user_id}",
            "${dados.produto_id}",
            "${dados.produto_quantidade}"
            )`)
        .then(result => {

            resposta({ message: 'finalizar_compra inserido com sucesso!' })


        }).catch(erro => {
            resposta({ erro: 'Erro ao inserir o finalizar_compra!' });
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

inserirRota('/FinalizarCompra', function(dados, resposta) {
    database(`SELECT * FROM FINALIZAR_COMPRA`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao buscar FINALIZAR COMPRA!' });
        });
})

inserirRota('/Carrinho', function(dados, resposta) {
    database(`SELECT * FROM CARRINHO`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao buscar carrinho!' });
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

inserirRota('/ExcluirUsuario', function(dados, resposta) {
    console.log(dados)

    database(`DELETE FROM USER WHERE ID = '${dados.ID}'`)
        .then(result => {

            resposta(result)


        }).catch(erro => {
            resposta({ erro: 'Erro ao excluir um item da tabela user!' });
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

inserirRota('/ExcluirCarrinho', function(dados, resposta) {
    console.log(dados)

    database(`DELETE FROM CARRINHO WHERE ID = '${dados.ID}'`)
        .then(result => {
            resposta(result)
        }).catch(erro => {
            resposta({ erro: 'Erro ao excluir um item da tabela carrinho!' });
        });
})

// inserirRota('/ExcluirEndereco', function(dados, resposta) {
//     console.log(dados)

//     database(`DELETE FROM ENDERECO WHERE ID = '${dados.ID}'`)
//         .then(result => {

//             resposta(result)


//         }).catch(erro => {
//             resposta({ erro: 'Erro ao excluir um item da tabela pedido!' });
//         });
// })

inserirRota('/EditarProduto', function(dados, resposta) {

    database(`UPDATE PRODUTO SET NOME = '${dados.nome}', VALOR = '${dados.preco}' WHERE ID = '${dados.ID}'`)
        .then(result => {
            resposta({ message: 'Salvo com sucesso!' })
        }).catch(erro => {
            resposta({ erro: 'Erro ao editar a tabela produto!' });
        });
})

inserirRota('/EditarCliente', function(dados, resposta) {
    console.log(dados)

    database(`UPDATE CLIENTE SET NOME = '${dados.nome}', SOBRENOME = '${dados.sobrenome}' WHERE ID = '${dados.ID}'`)
        .then(result => {

            resposta({ message: 'Salvo com sucesso!' })


        }).catch(erro => {
            resposta({ erro: 'Erro ao editar a tabela cliente!' });
        });
})

inserirRota('/EditarPedido', function(dados, resposta) {
    console.log("Esses dados: ", dados)

    database(`UPDATE PEDIDO SET CLIENTE_ID = '${dados.cliente_id}', PRODUTO_ID = '${dados.produto_id}' WHERE ID = '${dados.ID}'`)
        .then(result => {

            resposta({ message: 'Salvo com sucesso!' })


        }).catch(erro => {
            resposta({ erro: 'Erro ao editar a tabela pedido!' });
        });
})

// inserirRota('/EditarEndereco', function(dados, resposta) {
//     console.log(dados)

//     database(`UPDATE ENDERECO SET PAIS = '${dados.pais}', ESTADO = '${dados.estado}', CIDADE = '${dados.cidade}', BAIRRO = '${dados.bairro}', RUA = '${dados.rua}', NUMERO = '${dados.numero}', CEP = '${dados.cep}'  WHERE ID = '${dados.ID}'`)
//         .then(result => {

//             resposta({ message: 'Salvo com sucesso!' })


//         }).catch(erro => {
//             resposta({ erro: 'Erro ao editar a tabela endereco!' });
//         });
// })

inserirRota('/checar_user', function(dados, resposta) {
    database(`SELECT * FROM USER where NOME = "${dados.NOME}" AND PASSWORD = "${dados.PASSWORD}"`)
        .then(result => {
            resposta(result)
        }).catch(erro => {
            console.log('ERRO AO CHECAR USUÁRIO! ')
            resposta({ erro })
        })
})