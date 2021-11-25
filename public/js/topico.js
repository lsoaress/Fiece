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


    if (email == null && nome == null) {
        window.location = "../index.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}

function limparFormulario() {
    document.getElementById("form_postagem").reset();
}

function publicar(){
    var idUsuario = sessionStorage.ID_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var corpo = {
        titulo : form_postagem.titulo.value,
        descricao: form_postagem.descricao.value
    }

    fetch(`/avisos/publicar/${idUsuario}`,{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function(resposta){
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Post realizado com sucesso pelo: " + nome + "!");
            window.location = "geral.html";
            limparFormulario();
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    })

    return false;
}

function atualizarFeed() {
    //aguardar();
    fetch("/avisos/listar").then(function (resposta) {
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