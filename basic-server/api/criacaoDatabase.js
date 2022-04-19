database(`CREATE TABLE IF NOT EXISTS USER (
        ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        NOME varchar(30),
        SOBRENOME varchar(30),
        PASSWORD varchar(30)
        )`)
    .then(result => {
        console.log('TABELA: USER CRIADA!');
    }).catch(erro => {
        console.log('TABELA: USER DEU ERRO NA CRIAÇãO');
    });

database(`CREATE TABLE IF NOT EXISTS PRODUTO (
        ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        NOME varchar(30),
        VALOR double,
        IMAGEM varchar(99999999)
        )`)
    .then(result => {
        console.log('TABELA: PRODUTO CRIADA!');
    }).catch(erro => {
        console.log('TABELA: PRODUTO DEU ERRO NA CRIAÇãO');
    });

database(`CREATE TABLE IF NOT EXISTS CLIENTE (
        ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        NOME varchar(45),
        SOBRENOME varchar(45) UNIQUE
        )`)
    .then(result => {
        console.log('TABELA: CLIENTE CRIADA!');
    }).catch(erro => {
        console.log('TABELA: CLIENTE DEU ERRO NA CRIAÇãO');
    });

database(`CREATE TABLE IF NOT EXISTS PEDIDO (
        ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        CLIENTE_ID INTEGER,
        CLIENTE_NOME varchar(45),
        PRODUTO_ID INTEGER,
        PRODUTO_NOME varchar(30),
        PRODUTO_VALORFINAL double
        )`)
    .then(result => {
        console.log('TABELA: PEDIDO CRIADA!');
    }).catch(erro => {
        console.log('TABELA: PEDIDO DEU ERRO NA CRIAÇãO');
    });

database(`CREATE TABLE IF NOT EXISTS CARRINHO (
        ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        USER_ID INTEGER,
        PRODUTO_ID INTEGER,
        PRODUTO_NOME varchar(30),
        PRODUTO_VALOR double,
        PRODUTO_IMAGEM varchar(9999999)
        )`)
    .then(result => {
        console.log('TABELA: CARRINHO CRIADA!');
    }).catch(erro => {
        console.log('TABELA: CARRINHO DEU ERRO NA CRIAÇÃO');
    });

database(`CREATE TABLE IF NOT EXISTS FINALIZAR_COMPRA (
        ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        USER_ID INTEGER,
        PRODUTO_ID INTEGER,
        PRODUTO_QUANTIDADE INTEGER,
        PRODUTO_VALORTOTAL INTEGER
        )`)
    .then(result => {
        console.log('TABELA: FINALIZAR CRIADA!');
    }).catch(erro => {
        console.log('TABELA: FINALIZAR DEU ERRO NA CRIAÇÃO');
    });