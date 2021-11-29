var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

/* ver os dados dos votos */

router.get("/ver_votos_luffy", function (req, res) {
    usuarioController.ver_votos_luffy(req, res);
});

router.get("/ver_votos_zoro", function (req, res) {
    usuarioController.ver_votos_zoro(req, res);
});

router.get("/ver_votos_nami", function (req, res) {
    usuarioController.ver_votos_nami(req, res);
});

router.get("/ver_votos_usopp", function (req, res) {
    usuarioController.ver_votos_usopp(req, res);
});

router.get("/ver_votos_sanji", function (req, res) {
    usuarioController.ver_votos_sanji(req, res);
});

router.get("/ver_votos_chopper", function (req, res) {
    usuarioController.ver_votos_chopper(req, res);
});

router.get("/ver_votos_robin", function (req, res) {
    usuarioController.ver_votos_robin(req, res);
});

router.get("/ver_votos_franky", function (req, res) {
    usuarioController.ver_votos_franky(req, res);
});

router.get("/ver_votos_brook", function (req, res) {
    usuarioController.ver_votos_brook(req, res);
});

router.get("/ver_votos_jinbe", function (req, res) {
    usuarioController.ver_votos_jinbe(req, res);
});

router.post("/confirmar_voto", function (req, res) {
   usuarioController.confirmar_voto(req, res);
});

/* rota do perfil */

router.post("/ver_perfil", function (req, res) {
    usuarioController.ver_perfil(req, res);
 });

 router.post("/ver_personagem_votado", function (req, res) {
    usuarioController.ver_personagem_votado(req, res);
 });

 router.post("/validarCadastro", function (req, res) {
    usuarioController.validarCadastro(req, res);
});

module.exports = router;