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


function changeBack(){
    var lista_personagem = []
    lista_personagem[0] ="url('../img/img-vetor/buggy.jpg')"
    lista_personagem[1] ="url('../img/img-vetor/chopp.jpg')"
    lista_personagem[2] ="url('../img/img-vetor/oden.jpg')"
    lista_personagem[3] ="url('../img/img-vetor/roger.jpg')"
    var counter = Math.floor(Math.random(1) * (4 - 1 + 1))
    console.log('Número na lista dos personagens' + counter)

    sec_conversor.style.backgroundImage = lista_personagem[counter];
    sec_conversor.style.backgroundSize = 'cover';
}

function showRes(){
    var res = Number(inp_conver.value);
    var total = res * 23;
    res_conv.style.display = 'block'
    res_conv.innerHTML = total + ' minutos'
}

setInterval(function(){
    changeBack()
},3000)