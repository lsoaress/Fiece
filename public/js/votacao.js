id_usuario = Number(sessionStorage.ID_USUARIO);
var personagem_votado;

confirmar_voto();

function votarLuffy() {
    personagem_votado = "Luffy";
    sessionStorage.PERSONAGEM = 'Luffy'
    return votoLuffy();
}

function votarZoro() {
    personagem_votado = "Zoro";
    sessionStorage.PERSONAGEM = 'Zoro'
    return votoZoro();
}

function votarNami() {
    personagem_votado = "Nami";
    sessionStorage.PERSONAGEM = 'Nami'
    return votoNami();
}

function votarUsopp() {
    personagem_votado = "Usopp";
    sessionStorage.PERSONAGEM = 'Usopp'
    return votoUsopp();
}

function votarSanji() {
    personagem_votado = "Sanji";
    sessionStorage.PERSONAGEM = 'Sanji'
    return votoSanji();
}

function votarChopper() {
    personagem_votado = "Chopper";
    sessionStorage.PERSONAGEM = 'Chopper'
    return votoChopper();
}

function votarRobin() {
    personagem_votado = "Robin";
    sessionStorage.PERSONAGEM = 'Robin'
    return votoRobin();
}

function votarFranky() {
    personagem_votado = "Franky";
    sessionStorage.PERSONAGEM = 'Franky'
    return votoFranky();
}

function votarBrook() {
    personagem_votado = "Brook";
    sessionStorage.PERSONAGEM = 'Brook'
    return votoBrook();
}

function votarJinbe() {
    personagem_votado = "Jinbe";
    sessionStorage.PERSONAGEM = 'Jinbe'
    return votoJinbe();
}

function votoLuffy() {
    var corpo = {
        id_usuario: id_usuario,
        personagem: personagem_votado,
    }

    fetch(`/avisos/votoLuffy`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log(corpo.personagem)
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Você votou em: " + corpo.personagem);
            location.reload();
        } else {
            console.log(resposta);
            throw ("Houve um erro ao tentar votar1!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function votoZoro() {
    var corpo = {
        id_usuario: id_usuario,
        personagem: personagem_votado,
    }

    fetch(`/avisos/votoZoro`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log(corpo.personagem)
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Você votou no: " + corpo.personagem);
            location.reload();
        } else {
            console.log(resposta);
            throw ("Houve um erro ao tentar votar1!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function votoNami() {
    var corpo = {
        id_usuario: id_usuario,
        personagem: personagem_votado,
    }

    fetch(`/avisos/votoNami`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log(corpo.personagem)
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Você votou no: " + corpo.personagem);
            location.reload();
        } else {
            console.log(resposta);
            throw ("Houve um erro ao tentar votar1!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function votoUsopp() {
    var corpo = {
        id_usuario: id_usuario,
        personagem: personagem_votado,
    }

    fetch(`/avisos/votoUsopp`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log(corpo.personagem)
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Você votou no: " + corpo.personagem);
            location.reload();
        } else {
            console.log(resposta);
            throw ("Houve um erro ao tentar votar1!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function votoSanji() {
    var corpo = {
        id_usuario: id_usuario,
        personagem: personagem_votado,
    }

    fetch(`/avisos/votoSanji`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log(corpo.personagem)
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Você votou no: " + corpo.personagem);
            location.reload();
        } else {
            console.log(resposta);
            throw ("Houve um erro ao tentar votar1!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function votoChopper() {
    var corpo = {
        id_usuario: id_usuario,
        personagem: personagem_votado,
    }

    fetch(`/avisos/votoChopper`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log(corpo.personagem)
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Você votou no: " + corpo.personagem);
            location.reload();
        } else {
            console.log(resposta);
            throw ("Houve um erro ao tentar votar1!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function votoRobin() {
    var corpo = {
        id_usuario: id_usuario,
        personagem: personagem_votado,
    }

    fetch(`/avisos/votoRobin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log(corpo.personagem)
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Você votou no: " + corpo.personagem);
            location.reload();
        } else {
            console.log(resposta);
            throw ("Houve um erro ao tentar votar1!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function votoRobin() {
    var corpo = {
        id_usuario: id_usuario,
        personagem: personagem_votado,
    }

    fetch(`/avisos/votoRobin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log(corpo.personagem)
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Você votou no: " + corpo.personagem);
            location.reload();
        } else {
            console.log(resposta);
            throw ("Houve um erro ao tentar votar1!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function votoFranky() {
    var corpo = {
        id_usuario: id_usuario,
        personagem: personagem_votado,
    }

    fetch(`/avisos/votoFranky`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log(corpo.personagem)
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Você votou no: " + corpo.personagem);
            location.reload();
        } else {
            console.log(resposta);
            throw ("Houve um erro ao tentar votar1!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function votoBrook() {
    var corpo = {
        id_usuario: id_usuario,
        personagem: personagem_votado,
    }

    fetch(`/avisos/votoBrook`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log(corpo.personagem)
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Você votou no: " + corpo.personagem);
            location.reload();
        } else {
            console.log(resposta);
            throw ("Houve um erro ao tentar votar1!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function votoJinbe() {
    var corpo = {
        id_usuario: id_usuario,
        personagem: personagem_votado,
    }

    fetch(`/avisos/votoJinbe`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {
        console.log(corpo.personagem)
        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Você votou no: " + corpo.personagem);
            location.reload();
        } else {
            console.log(resposta);
            throw ("Houve um erro ao tentar votar1!");
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

/* fetch pra ver os dados */




function ver_votos_luffy() {
    fetch("/usuarios/ver_votos_luffy").then(function (resposta) {
        console.log("ESTOU NO THEN DO ver_votos_luffy()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do luffy: ", JSON.stringify(resposta));

                votosL = resposta[resposta.indexOf(':') + 1]
                console.log(votosL.voto);

                qtd_voto_luffy.innerHTML = votosL.voto;
            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

function ver_votos_zoro() {
    fetch("/usuarios/ver_votos_zoro").then(function (resposta) {
        console.log("ESTOU NO THEN DO ver_votos_zoro()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do zoro: ", JSON.stringify(resposta));

                votosZ = resposta[resposta.indexOf(':') + 1]
                console.log(votosZ.voto);

                qtd_voto_zoro.innerHTML = votosZ.voto;
            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

function ver_votos_nami() {
    fetch("/usuarios/ver_votos_nami").then(function (resposta) {
        console.log("ESTOU NO THEN DO ver_votos_nami()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do nami: ", JSON.stringify(resposta));

                votosN = resposta[resposta.indexOf(':') + 1]
                console.log(votosN.voto);

                qtd_voto_nami.innerHTML = votosN.voto;
            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

function ver_votos_usopp() {
    fetch("/usuarios/ver_votos_usopp").then(function (resposta) {
        console.log("ESTOU NO THEN DO ver_votos_usopp()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do usopp: ", JSON.stringify(resposta));

                votosU = resposta[resposta.indexOf(':') + 1]
                console.log(votosU.voto);

                qtd_voto_usopp.innerHTML = votosU.voto;
            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

function ver_votos_sanji() {
    fetch("/usuarios/ver_votos_sanji").then(function (resposta) {
        console.log("ESTOU NO THEN DO ver_votos_sanji()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do sanji: ", JSON.stringify(resposta));

                votosS = resposta[resposta.indexOf(':') + 1]
                console.log(votosS.voto);

                qtd_voto_sanji.innerHTML = votosS.voto;
            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

function ver_votos_chopper() {
    fetch("/usuarios/ver_votos_chopper").then(function (resposta) {
        console.log("ESTOU NO THEN DO ver_votos_chopper()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do chopper: ", JSON.stringify(resposta));

                votosC = resposta[resposta.indexOf(':') + 1]
                console.log(votosC.voto);

                qtd_voto_chopper.innerHTML = votosC.voto;
            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

function ver_votos_robin() {
    fetch("/usuarios/ver_votos_robin").then(function (resposta) {
        console.log("ESTOU NO THEN DO ver_votos_robin()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do robin: ", JSON.stringify(resposta));

                votosR = resposta[resposta.indexOf(':') + 1]
                console.log(votosR.voto);

                qtd_voto_robin.innerHTML = votosR.voto;
            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

function ver_votos_franky() {
    fetch("/usuarios/ver_votos_franky").then(function (resposta) {
        console.log("ESTOU NO THEN DO ver_votos_franky()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do franky: ", JSON.stringify(resposta));

                votosF = resposta[resposta.indexOf(':') + 1]
                console.log(votosF.voto);

                qtd_voto_franky.innerHTML = votosF.voto;
            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

function ver_votos_brook() {
    fetch("/usuarios/ver_votos_brook").then(function (resposta) {
        console.log("ESTOU NO THEN DO ver_votos_brook()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do brook: ", JSON.stringify(resposta));

                votosB = resposta[resposta.indexOf(':') + 1]
                console.log(votosB.voto);

                qtd_voto_brook.innerHTML = votosB.voto;
            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}

function ver_votos_jinbe() {
    fetch("/usuarios/ver_votos_jinbe").then(function (resposta) {
        console.log("ESTOU NO THEN DO ver_votos_jinbe()!")
        if (resposta.ok) {
            resposta.json().then(function (resposta) {
                console.log("Dados recebidos do jinbe: ", JSON.stringify(resposta));

                votosJ = resposta[resposta.indexOf(':') + 1]
                console.log(votosJ.voto);

                qtd_voto_jinbe.innerHTML = votosJ.voto;
            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}


function confirmar_voto() {
    var corpovoto = {
        id_usuario: id_usuario,
    }

    fetch("/usuarios/confirmar_voto", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpovoto)
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO confirmar_voto()!")

        if (resposta.ok) {
            sessionStorage.PERSONAGEM = null;
            throw ("O usuario pode votar!");
        } else {
            ver_votos_luffy();
            ver_votos_zoro();
            ver_votos_nami();
            ver_votos_usopp();
            ver_votos_sanji();
            ver_votos_chopper();
            ver_votos_robin();
            ver_votos_franky();
            ver_votos_brook();
            ver_votos_jinbe();

            votar_luffy.style.display = 'none';
            votar_zoro.style.display = 'none';
            votar_nami.style.display = 'none';
            votar_usopp.style.display = 'none';
            votar_sanji.style.display = 'none';
            votar_chopper.style.display = 'none';
            votar_robin.style.display = 'none';
            votar_franky.style.display = 'none';
            votar_brook.style.display = 'none';
            votar_jinbe.style.display = 'none';
            h4_voto.style.display = 'none';
            h1_voto.style.color = '#35c4f0'
            span_qtd_luffy.style.display = 'block';
            span_qtd_zoro.style.display = 'block';
            span_qtd_nami.style.display = 'block';
            span_qtd_usopp.style.display = 'block';
            span_qtd_sanji.style.display = 'block';
            span_qtd_chopper.style.display = 'block';
            span_qtd_robin.style.display = 'block';
            span_qtd_franky.style.display = 'block';
            span_qtd_brook.style.display = 'block';
            span_qtd_jinbe.style.display = 'block';

            if (sessionStorage.PERSONAGEM == 'Nami' || sessionStorage.PERSONAGEM == 'Robin') {
                h1_voto.innerHTML = 'Obrigado por ter votado na: ' + sessionStorage.PERSONAGEM + '!';
            }
            else if(sessionStorage.PERSONAGEM != 'Nami' || sessionStorage.PERSONAGEM != 'Robin' || sessionStorage.PERSONAGEM != null){
                h1_voto.innerHTML = 'Obrigado por ter votado no: ' + sessionStorage.PERSONAGEM + '!';
            }
            throw ("O usuario já votou!");
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

                dado = resposta[resposta.indexOf(':') + 1]

                console.log(dado.personagem);

                sessionStorage.PERSONAGEM = dado.personagem;

            });
        } else {
            console.log("Dados recebidos: ", JSON.stringify(resposta));
        }
    }).catch(function (erro) {
        console.log(erro);
    })
    return false;
}