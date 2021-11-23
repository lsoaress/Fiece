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