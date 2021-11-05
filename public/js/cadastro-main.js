$(document).ready(function () {
    $('#inp_cep').mask('00000-000');
});

function mudar_estado() {

    fetch(`https://viacep.com.br/ws/${inp_cep.value}/json/`, {
        method: "GET",
        mode: "cors"
    }).then(function (resposta) {
        console.log(resposta)
        resposta.json().then(function(data) {
            console.log(data)
            inp_estado.value = data.uf
        })

    }).catch(function (erro) {
        console.log(erro)

    })
}

function cadastrar() {

    var formulario = new URLSearchParams(new FormData(document.getElementById("form_cadastro")));

    var nome = formulario.get("nome");
    var email = formulario.get("email");
    var senha = formulario.get("senha");
    var cep = formulario.get("cep");
    var estado = formulario.get("estado");
    var confirmacaoSenha = formulario.get("confirmacao-senha");

    if (nome == "" || email == "" || senha == "" || confirmacaoSenha == "" || cep == "" || estado == "") {

        window.alert("Preencha todos os campos para prosseguir!");
        if (nome == "") {
            console.log('nome está em branco')
        }
        if (email == "") {
            console.log('email está em branco')
        }
        if (senha == "") {
            console.log('senha está em branco')
        }
        if (confirmacaoSenha == "") {
            console.log('confirmacaoSenha está em branco')
        }
        if (cep == "") {
            console.log('cep está em branco')
        }
        if (estado == "") {
            console.log('estado está em branco')
        }
        return false;
    }

    if (email.indexOf("@") == -1 || email.indexOf(".com") == -1) {
        window.alert("Ops, e-mail inválido! Verifique e tente novamente.");
        return false;
    }

    if (senha != confirmacaoSenha) {
        window.alert("As senhas inseridas devem ser iguais para prosseguir!");
        return false;
    }

    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Cadastro realizado com sucesso!");
            window.location = "index.html";
        } else{
            throw("Houve um erro ao tentar realizar o cadastro!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}