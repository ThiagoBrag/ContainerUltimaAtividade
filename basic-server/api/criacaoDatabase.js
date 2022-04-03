database(`CREATE TABLE IF NOT EXISTS USER (
        ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        NOME varchar(30),
        PASSWORD varchar(30)
        )`)
    .then(result => {
        console.log('TABELA: USER CRIADA!');
    }).catch(erro => {
        console.log('TABELA: USER DEU ERRO NA CRIAÇãO');
    });

database(`INSERT INTO USER VALUES (null , 'thiago', '123'),
(null, 'jao', '321'),`)
    .then(result => {
        console.log('DADOS CADASTRADOS!');
    }).catch(erro => {
        console.log('ERRO NO CADASTRO');
    });

database(`CREATE TABLE IF NOT EXISTS PRODUTO (
        ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        NOME varchar(30) UNIQUE,
        VALOR double,
        IMAGEM varchar(1000) UNIQUE
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

database(`CREATE TABLE IF NOT EXISTS ENDERECO (
        ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        PAIS varchar(50),
        ESTADO varchar(50),
        CIDADE varchar(50),
        BAIRRO varchar(50),
        RUA varchar(50),
        NUMERO varchar(10),
        CEP varchar(20)
        )`)
    .then(result => {
        console.log('TABELA: ENDERECO CRIADA!');
    }).catch(erro => {
        console.log('TABELA: ENDERECO DEU ERRO NA CRIAÇãO');
    });

database(`CREATE TABLE IF NOT EXISTS PEDIDO (
        ID INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE,
        CLIENTE_ID INTEGER UNIQUE,
        PRODUTO_ID INTEGER UNIQUE,
        ENDERECO_ID INTEGER UNIQUE,
        FOREIGN KEY (CLIENTE_ID) REFERENCES CLIENTE(ID),
        FOREIGN KEY (PRODUTO_ID) REFERENCES PRODUTO(ID),
        FOREIGN KEY (ENDERECO_ID) REFERENCES ENDERECO(ID)
        )`)
    .then(result => {
        console.log('TABELA: PEDIDO CRIADA!');
    }).catch(erro => {
        console.log('TABELA: PEDIDO DEU ERRO NA CRIAÇãO');
    });