function entrar() {

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_login")));

    var email = formulario.get("email");
    var senha = formulario.get("senha");

    console.log("FORM LOGIN: ", email);
    console.log("FORM SENHA: ", senha);

    if (email == "" || senha == "") {
        window.alert("Preencha todos os campos para prosseguir!");
        return false;
    }

    if (email.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        return false;
    }

    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.idUsuario;

                setTimeout(function () {
                    window.location = "forum.html";
                }); 

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");
            
            resposta.text().then(texto => {
                console.error(texto);
            });
            alert('Email e/ou senha inválido')
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}