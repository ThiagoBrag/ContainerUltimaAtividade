inserirRota('/buscar_usuario', function(dados, resposta) {
    console.log(dados)

    resposta({ ok: "Requisição efetuada com sucesso!" });
});


// fetch('http://localhost:3000/api/buscar_usuario', 
// {method: 'POST', 
// body: JSON.stringify({produtoId: 1, pessoaId: 1}), 
// headers: {'Content-Type': 'application/json'}})

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

// fetch('http://localhost:3000/api/criar_usuario',
// {method: 'POST',
// body: JSON.stringify({Name: "Thigo", Nickname: "Pain"}),
// headers: {'Content-Type': 'application/json'}})