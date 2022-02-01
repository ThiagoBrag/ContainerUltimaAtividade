database(`CREATE TABLE IF NOT EXISTS TESTE (
    ID INTEGER PRIMARY KEY AUTOINCREMENT,
    NOME varchar(30),
    NUMERO int
    )`)
    .then(result => {
        console.log('TABELA: TESTE CRIADA!');
    }).catch(erro => {
        console.log('TABELA: TESTE DEU ERRO NA CRIAÇãO');
    });

database(`CREATE TABLE IF NOT EXISTS USER (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NOME varchar(30),
        NICKNAME varchar(30)
        )`)
    .then(result => {
        console.log('TABELA: USER CRIADA!');
    }).catch(erro => {
        console.log('TABELA: USER DEU ERRO NA CRIAÇãO');
    });