var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

/* configuração dos votos */

router.post("/votoLuffy/", function (req, res) {
    avisoController.votoLuffy(req, res);
});

router.post("/votoZoro/", function (req, res) {
    avisoController.votoZoro(req, res);
});

router.post("/votoNami/", function (req, res) {
    avisoController.votoNami(req, res);
});

router.post("/votoUsopp/", function (req, res) {
    avisoController.votoUsopp(req, res);
});

router.post("/votoSanji/", function (req, res) {
    avisoController.votoSanji(req, res);
});

router.post("/votoChopper/", function (req, res) {
    avisoController.votoChopper(req, res);
});

router.post("/votoRobin/", function (req, res) {
    avisoController.votoRobin(req, res);
});

router.post("/votoFranky/", function (req, res) {
    avisoController.votoFranky(req, res);
});

router.post("/votoBrook/", function (req, res) {
    avisoController.votoBrook(req, res);
});

router.post("/votoJinbe/", function (req, res) {
    avisoController.votoJinbe(req, res);
});

module.exports = router;