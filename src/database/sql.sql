create database forum;
use forum;

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45),
    senha varchar(15),
    email varchar(45),
    cep varchar(11),
    estado char(2)
    -- pontos int default 0 
);
select * from usuario;

create table comentario(
	idComentario int primary key auto_increment,
    titulo varchar(100),
    descricao varchar(140),
    fk_usuario int,
    foreign key (fk_usuario) references usuario(idUsuario)
)auto_increment = 1000;