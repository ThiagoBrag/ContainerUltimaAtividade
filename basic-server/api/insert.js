database(`INSERT INTO USER VALUES (null , 'thiago', 'braga', '123'),
(null, 'jao', 'henrique', '321')`)
    .then(result => {
        console.log('DADOS CADASTRADOS!');
    }).catch(erro => {
        console.log('ERRO NO CADASTRO');
    });