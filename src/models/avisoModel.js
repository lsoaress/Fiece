var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT 
            p.idPublicacao,
            p.titulo,
            p.descricao,
            p.fk_usuario,
            u.idUsuario,
            u.nome,
            u.email,
            u.senha
            FROM publicacao p
            INNER JOIN usuario u
                ON p.fk_usuario = u.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucao = `
        SELECT 
            a.id AS idAviso,
            a.titulo,
            a.descricao,
            a.fk_usuario,
            u.idUsuario,
            u.nome,
            u.email,
            u.senha
        FROM aviso a
            INNER JOIN usuario u
                ON a.fk_usuario = u.id
        WHERE a.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarPorUsuario(idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorUsuario()", idUsuario);
    var instrucao = `
        SELECT 
            p.idPublicacao,
            p.titulo,
            p.descricao,
            p.fk_usuario,
            u.idUsuario,
            u.nome,
            u.email,
            u.senha
            FROM publicacao as p
            INNER JOIN usuario as u
            ON p.fk_usuario = u.idUsuario
        WHERE u.idUsuario = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function publicar(titulo, descricao, idUsuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idUsuario);
    var instrucao = `
        INSERT INTO publicacao (titulo, descricao, fk_usuario) VALUES ('${titulo.toLowerCase()}', '${descricao}', ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


/* configuração dos votos */


function votoLuffy(personagem, idUsuario) {

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function votoLuffy():", personagem, idUsuario);
    var instrucao = `
        insert into voto(personagem, fkUsuario) values ('${personagem}', '${idUsuario}') ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votoZoro(personagem, idUsuario) {

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function votoZoro():", personagem, idUsuario);
    var instrucao = `
        insert into voto(personagem, fkUsuario) values ('${personagem}', '${idUsuario}') ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votoNami(personagem, idUsuario) {

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function votoNami():", personagem, idUsuario);
    var instrucao = `
        insert into voto(personagem, fkUsuario) values ('${personagem}', '${idUsuario}') ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votoUsopp(personagem, idUsuario) {

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function votoUsopp():", personagem, idUsuario);
    var instrucao = `
        insert into voto(personagem, fkUsuario) values ('${personagem}', '${idUsuario}') ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votoSanji(personagem, idUsuario) {

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function votoSanji():", personagem, idUsuario);
    var instrucao = `
        insert into voto(personagem, fkUsuario) values ('${personagem}', '${idUsuario}') ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votoChopper(personagem, idUsuario) {

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function votoChopper():", personagem, idUsuario);
    var instrucao = `
        insert into voto(personagem, fkUsuario) values ('${personagem}', '${idUsuario}') ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votoRobin(personagem, idUsuario) {

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function votoRobin():", personagem, idUsuario);
    var instrucao = `
        insert into voto(personagem, fkUsuario) values ('${personagem}', '${idUsuario}') ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votoFranky(personagem, idUsuario) {

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function votoFranky():", personagem, idUsuario);
    var instrucao = `
        insert into voto(personagem, fkUsuario) values ('${personagem}', '${idUsuario}') ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votoBrook(personagem, idUsuario) {

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function votoBrook():", personagem, idUsuario);
    var instrucao = `
        insert into voto(personagem, fkUsuario) values ('${personagem}', '${idUsuario}') ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function votoJinbe(personagem, idUsuario) {

    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function votoJinbe():", personagem, idUsuario);
    var instrucao = `
        insert into voto(personagem, fkUsuario) values ('${personagem}', '${idUsuario}') ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar,
    listarPorUsuario,
    pesquisarDescricao,
    publicar,
    votoLuffy,
    votoZoro,
    votoNami,
    votoUsopp,
    votoSanji,
    votoChopper,
    votoRobin,
    votoFranky,
    votoBrook,
    votoJinbe
}
