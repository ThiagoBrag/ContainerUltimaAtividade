// database(`CREATE TABLE IF NOT EXISTS TESTE (
//     ID INTEGER PRIMARY KEY AUTOINCREMENT,
//     NOME varchar(30),
//     NUMERO int
//     )`)
//     .then(result => {
//         console.log('TABELA: TESTE CRIADA!');
//     }).catch(erro => {
//         console.log('TABELA: TESTE DEU ERRO NA CRIAÇãO');
//     });

database(`CREATE TABLE IF NOT EXISTS USER (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NOME varchar(30),
        PASSWORD varchar(30)
        )`)
    .then(result => {
        console.log('TABELA: USER CRIADA!');
    }).catch(erro => {
        console.log('TABELA: USER DEU ERRO NA CRIAÇãO');
    });

database(`INSERT INTO USER VALUES (null , 'thiago', '123'),
(null, 'jao', '321'), 
(null, 'bonatti', 'a'),
(null, 'henrique', 'a')`)
    .then(result => {
        console.log('DADOS CADASTRADOS!');
    }).catch(erro => {
        console.log(': ERRO NO CADASTRO');
    });

database(`CREATE TABLE IF NOT EXISTS PRODUTO (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NOME varchar(30),
        VALOR double,
        IMAGEM varchar(1000)
        )`)
    .then(result => {
        console.log('TABELA: PRODUTO CRIADA!');
    }).catch(erro => {
        console.log('TABELA: PRODUTO DEU ERRO NA CRIAÇãO');
    });

database(`CREATE TABLE IF NOT EXISTS CLIENTE (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NOME varchar(45),
        SOBRENOME varchar(45)
        )`)
    .then(result => {
        console.log('TABELA: CLIENTE CRIADA!');
    }).catch(erro => {
        console.log('TABELA: CLIENTE DEU ERRO NA CRIAÇãO');
    });

database(`CREATE TABLE IF NOT EXISTS PEDIDO (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        CLIENTE_ID INTEGER,
        FOREIGN KEY (CLIENTE_ID)
        REFERENCES CLIENTE(ID),
        PRODUTO_ID INTEGER,
        FOREIGN KEY (PRODUTO_ID)
        REFERENCES PRODUTO(ID)
        ON DELETE CASCADE
        ON UPDATE CASCADE
        )`)
    .then(result => {
        console.log('TABELA: PEDIDO CRIADA!');
    }).catch(erro => {
        console.log('TABELA: PEDIDO DEU ERRO NA CRIAÇãO');
    });