create database forum;
use forum;

create table usuario(
	idUsuario int primary key auto_increment,
    nome varchar(45),
    senha varchar(100),
    email varchar(45),
    cep varchar(11),
    estado char(2)
);
select * from usuario;

create table comentario(
	idComentario int primary key auto_increment,
    titulo varchar(100),
    descricao varchar(300),
    fk_usuario int,
    foreign key (fk_usuario) references usuario(idUsuario)
)auto_increment = 1000;

create table voto(
	idVoto int primary key auto_increment,
    momentoVoto datetime default current_timestamp,
    personagem varchar(40),
    fkUsuario int,
    foreign key (fkUsuario) references usuario(idUsuario)
);
select * from voto;

select count(titulo), titulo, nome from comentario join usuario on fk_usuario = idUsuario group by titulo;





