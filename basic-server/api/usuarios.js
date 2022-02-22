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





// fetch('http://localhost:3000/api/buscar_usuario', 
// {method: 'POST', 
// body: JSON.stringify({produtoId: 1, pessoaId: 1}), 
// headers: {'Content-Type': 'application/json'}})



// fetch('/api/buscar_usuario', 
// {method: 'POST', 
// body: JSON.stringify({nome: "Thiago", nickname: "THI", idade: 23}), 
// headers: {'Content-Type': 'application/json'}}).then(function (result) {
//     return result.json();
// }).then(function(dados) {
//     console.log(dados);
// }).catch(function(erro) {
//     console.log(erro);
// })

inserirRota('/criar_usuario', function(dados, resposta) {
    console.log(dados)

    if (!dados.nome) {
        return resposta({ erro: 'É necessario preencher o nome' })
    }

    if (!dados.nickname) {
        return resposta({ erro: 'É necessario preencher o nickname' })
    }

    database(`INSERT INTO USER
            (
            NOME,
            NICKNAME
            ) 
            VALUES 
            (
            "${dados.nome}",
            "${dados.nickname}"
            )`)
        .then(result => {
            console.log('Usuario inserido com sucesso!');

            resposta({ message: 'Usuario inserido com sucesso!' })


        }).catch(erro => {
            console.log('Erro ao inserir o usuario!');
            resposta({ erro: 'Erro ao inserir o usuario!' });
        });
})

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

// fetch('http://localhost:3000/api/criar_usuario',
// {method: 'POST',
// body: JSON.stringify({Name: "Thigo", Nickname: "Pain"}),
// headers: {'Content-Type': 'application/json'}})