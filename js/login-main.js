function validar(){
    var usuario = inp_usuario.value;
    var senha = inp_senha.value;

    if(usuario.indexOf("@")== -1){
        alert('Usuario invalido, falta @')        
    }
    else if(usuario.indexOf(".com")== -1){
        alert('Usuário inválido, falta .com')
    }
    else if(senha.lenght < 5){
        alert('Senha muito curta')
    }
    else if(senha.lenght > 15){
        alert('Senha muito grande')
    }
    else{
        formulario_login.action = url.replace('index.html', 'index.html');
    }
}