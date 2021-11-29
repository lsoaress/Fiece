function show_menu() {

    var display = container.style.display;

    if (display != "inline-block") {
        container.style.display = "inline-block";
        sidebar.style.background = '#1D1E1B';
        container.style.transition = "all 1.5s ease";
    }
    if (display == 'inline-block') {
        container.style.display = 'none';
        sidebar.style.background = '#1D1E1B00'
        container.style.transition = "all 1.5s ease";
    }
}

// Validações :

function validarSessao() {

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    if (email != null || nome != null) {
        b_usuario.innerHTML = nome;

    } else {
        window.location = "../index.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}


function ver_perfil() {
    var id_usuario = sessionStorage.ID_USUARIO;

     var corpo = {
        id_usuario: id_usuario
    }  
    fetch(`/usuarios/ver_perfil` ,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:  JSON.stringify(corpo)
    } ).then(function (resultado) {
    
        console.log("ESTOU NO THEN DO ver_perfil()!")
        if (resultado.ok) {
            resultado.json().then(function (resultado) {
                console.log("Dados recebidos do Perfil: ", JSON.stringify(resultado));

                dado = resultado[resultado.indexOf(':') + 1]
                console.log(dado.email);
                console.log(dado.cep);
                console.log(dado.estado);

                banco_email.innerHTML = dado.email;
                banco_cep.innerHTML = dado.cep;
                banco_estado.innerHTML = dado.estado;
            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resultado));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

function ver_personagem_votado() {

    var id_usuario = sessionStorage.ID_USUARIO;

    var corpo = {
       id_usuario: id_usuario
   }  

    fetch("/usuarios/ver_personagem_votado",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:  JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO ver_personagem_votado!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do Perfil: ", JSON.stringify(resposta));

                dado = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona

                console.log(dado.personagem);

                banco_personagem.innerHTML = dado.personagem;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}


/* trocar div perfil pra comentario */

function mudar_div() {

    perfil = document.getElementById("div_info")
    var display_perfil = perfil.style.display;
    personagem = document.getElementById("div_personagem")

    if (display_perfil != "none") {
        btn_change.innerHTML = "Minhas Informações"
        perfil.style.display = 'none'
        personagem.style.display = 'block'
        atualizarFeed();
    }
    else if (display_perfil != "block") {
        btn_change.innerHTML = "Meus Comentários"
        perfil.style.display = 'block'
        personagem.style.display = 'none'
    }
}


function atualizarFeed() {

    var id_usuario = sessionStorage.ID_USUARIO;

     var corpo = {
        id_usuario: id_usuario
    }  

    fetch("/avisos/listarPorUsuario",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:  JSON.stringify(corpo)
    }).then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("msg_container");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var feed = document.getElementById("msg_container");
                feed.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    // criando e manipulando elementos do HTML via JavaScript
                    var divPublicacao = document.createElement("div");
                    var spanTitulo = document.createElement("span");
                    var spanNome = document.createElement("span");
                    var divDescricao = document.createElement("div");


                    spanNome.innerHTML = `<b>${publicacao.nome}</b> <br>`;
                    spanTitulo.innerHTML = `Assunto: <b>${publicacao.titulo}</b> <br> <br>`;
                    divDescricao.innerHTML = `${publicacao.descricao} <br>`;

                    divPublicacao.className = "publicacao";
                    spanNome.className = "publicacao-nome";
                    spanTitulo.className = "publicacao-titulo";
                    divDescricao.className = "publicacao-descricao";


                    divPublicacao.appendChild(spanNome);
                    divPublicacao.appendChild(spanTitulo);
                    divPublicacao.appendChild(divDescricao);
                    feed.appendChild(divPublicacao);
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}