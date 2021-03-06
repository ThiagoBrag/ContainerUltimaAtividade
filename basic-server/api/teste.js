inserirRota('/teste_buscaPedido', (dados, resposta) => {
    console.log(dados);
    database('SELECT * FROM PEDIDO').then(result => {
        resposta({ resposta: result });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});

inserirRota('/teste_buscaCliente', (dados, resposta) => {
    console.log(dados);
    database('SELECT * FROM CLIENTE').then(result => {
        resposta({ resposta: result });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});

inserirRota('/teste_criar_tabela', (dados, resposta) => {
    console.log(dados);
    database(`CREATE TABLE IF NOT EXISTS TESTE (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NOME varchar(30),
        NUMERO int
        )`).then(result => {
        resposta({ resposta: 'TABELA CRIADA' });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});

inserirRota('/teste_inserir_dados', (dados, resposta) => {
    console.log(dados);
    database(`INSERT INTO TESTE (NOME, NUMERO)
                VALUES ('NOME', 1)`).then(result => {
        resposta({ resposta: 'REGISTRO CRIADO' });
    }).catch(erro => {
        resposta({ resposta: erro });
    });
});