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


    if (email != null && nome != null) {
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
    fetch("/usuarios/ver_perfil").then(function (resposta) {
        console.log("ESTOU NO THEN DO ver_perfil()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do Perfil: ", JSON.stringify(resposta));

                dado = resposta[resposta.indexOf(':') + 1]//não sei pq mas isso funciona
                console.log(dado.email);
                console.log(dado.cep);
                console.log(dado.estado);
                console.log(dado.personagem);

                if(dado.personagem == null){
                    banco_personagem.innerHTML = 'Ainda não votou'
                }
                else{

                banco_personagem.innerHTML = dado.personagem;
                }

                banco_email.innerHTML = dado.email;
                banco_cep.innerHTML = dado.cep;
                banco_estado.innerHTML = dado.estado;
            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}