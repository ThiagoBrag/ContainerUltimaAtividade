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