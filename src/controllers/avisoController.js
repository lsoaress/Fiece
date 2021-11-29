var avisoModel = require("../models/avisoModel");

function testar(req, res) {
    console.log("ENTRAMOS NO avisoController");
    res.send("ENTRAMOS NO AVISO CONTROLLER");
}

function listar(req, res) {
    avisoModel.listar().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listarPorUsuario(req, res) {

    var idUsuario = req.body.id_usuario;

    avisoModel.listarPorUsuario(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function pesquisarDescricao(req, res) {
    var descricao = req.params.descricao;

    avisoModel.pesquisarDescricao(descricao)
        .then(
            function (resultado) {
                if (resultado.length > 0) {
                    res.status(200).json(resultado);
                } else {
                    res.status(204).send("Nenhum resultado encontrado!");
                }
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function publicar(req, res) {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    var idUsuario = req.params.idUsuario;

    if (titulo == undefined) {
        res.status(400).send("O título está indefinido!");
    } else if (descricao == undefined) {
        res.status(400).send("A descrição está indefinido!");
    } else if (idUsuario == undefined) {
        res.status(403).send("O id do usuário está indefinido!");
    } else {
        avisoModel.publicar(titulo, descricao, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            )
            .catch(
                function (erro) {
                    console.log(erro);
                    console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



/* configuração dos votos */


function votoLuffy(req, res) {
    var personagem = req.body.personagem;
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("O personagem escolhido está undefined!");
    } else {
        avisoModel.votoLuffy(personagem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar o voto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function votoZoro(req, res) {
    var personagem = req.body.personagem;
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("O personagem escolhido está undefined!");
    } else {
        avisoModel.votoZoro(personagem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar o voto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function votoNami(req, res) {
    var personagem = req.body.personagem;
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("O personagem escolhido está undefined!");
    } else {
        avisoModel.votoNami(personagem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar o voto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function votoUsopp(req, res) {
    var personagem = req.body.personagem;
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("O personagem escolhido está undefined!");
    } else {
        avisoModel.votoUsopp(personagem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar o voto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function votoSanji(req, res) {
    var personagem = req.body.personagem;
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("O personagem escolhido está undefined!");
    } else {
        avisoModel.votoSanji(personagem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar o voto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function votoChopper(req, res) {
    var personagem = req.body.personagem;
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("O personagem escolhido está undefined!");
    } else {
        avisoModel.votoChopper(personagem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar o voto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function votoRobin(req, res) {
    var personagem = req.body.personagem;
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("O personagem escolhido está undefined!");
    } else {
        avisoModel.votoRobin(personagem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar o voto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function votoFranky(req, res) {
    var personagem = req.body.personagem;
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("O personagem escolhido está undefined!");
    } else {
        avisoModel.votoFranky(personagem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar o voto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function votoBrook(req, res) {
    var personagem = req.body.personagem;
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("O personagem escolhido está undefined!");
    } else {
        avisoModel.votoBrook(personagem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar o voto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function votoJinbe(req, res) {
    var personagem = req.body.personagem;
    var idUsuario = req.body.id_usuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (personagem == undefined) {
        res.status(400).send("O personagem escolhido está undefined!");
    } else {
        avisoModel.votoJinbe(personagem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar o voto! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}





module.exports = {
    testar,
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