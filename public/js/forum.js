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
