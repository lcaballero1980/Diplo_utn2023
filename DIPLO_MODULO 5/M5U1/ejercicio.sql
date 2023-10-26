-----------------------------
-- Crear db
----------------------------
create database empleados;
----------------------------
-- crear la tabla
create table empleados (
	id_emple serial primary key,
	nombre varchar (50),
    apellido varchar (50),
    trabajo varchar (50),
    edad int, 
    salario float,
    email varchar (100)
);
---------------------------------
-- borrar la tabla
Drop table if exists empleados;
---------------------------------
----------------------------------
-- insertar nuevos datos
----------------------------------
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values ('Juan', 'Hagan', 'Programador Senior', '32', '120000', 'juan_hagan@bignet.com');
insert into  empleados (nombre, apellido, trabajo, edad, salario, email) values ('Gonzalo', 'Pillai', 'Programador Senior', '32', '110000', 'g_pillai@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values ('Gonzalo', 'Pillai', 'Programador Senior', '32', '110000', 'g_pillai@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Ana','Dharma','Desarrollador Web','27','90000','ana@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Maria','Anchor','Desarrollador Web','26','85000','mary@bignet.com');

insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Alfred','Fernandez','Programador','31','75000','af@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Juan','Agüero','Programador','36','85000','juan@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Eduardo','Sacan','Programador','25','85000','eddi@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Alejandro','Nanda','Programador','32','70000','alenanda@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Hernan','Rosso','Especialista Multimedia','33','90000','hernan@bignet.com');

insert into empleados (nombre, apellido, trabajo, edad, salario, email) values ('Pablo','Simon','Especialista Multimedia','43','85000','ps@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Arturo','Hernandez','Especialista Multimedia','32','75000','arturo@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Jimena','Cazado','Diseñador Web','32','110000','jimena@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Roberto','Luis','Administrador de sistemas','35','100000','roberto@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Daniel','Gutierrez','Administrador de sistemas','34','900000','daniel@bignet.com');

insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Miguel','Harper','Ejecutivo de Ventas Senior','36','120000','miguel@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Monica','Sanchez','Ejecutivo de ventas','30','90000','monica@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Alicia','Simlai','Ejecutivo de ventas','27','70000','alicia@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Jose','Iriarte','Ejecutivo de ventas','27','72000','jose@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Sabrina','Allende','Gerente de Soporte tecnico','32','200000','sabrina@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Pedro','Campeon','Gerente de finanzas','36','220000','pedro@bignet.com');
insert into empleados (nombre, apellido, trabajo, edad, salario, email) values('Mariano','Dharma','Presidente','28','300000','mariano@bignet.com');

---------------------------------
-- llamar a la tabla
---------------------------------
select * from empleados;



INSERT INTO empleados (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`) 
VALUES (1, 'Juan','Hagan', 'Programador Senior', 32, 120000, 'juan_hagan@bignet.com');
INSERT INTO empleados (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`) 
VALUES (2, 'Gonzalo', 'Pillai', 'Programador Senior', 32, 110000, 'g_pillai@bignet.com');
INSERT INTO empleados (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`) 
VALUES (3, 'Ana', 'Dharma', 'Desarrollador Web', 27, 90000, 'ana@bignet.com');
INSERT INTO empleados (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`) 
VALUES (4, 'Maria', 'Anchor', 'Desarrollador Web', 26, 85000, 'mary@bignet.com');
INSERT INTO empleados (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`) 
VALUES (5, 'Alfredo', 'Fernandez', 'Programador', 31, 75000, 'af@bignet.com');
INSERT INTO empleados (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`) 
VALUES (6, 'Juan', 'Aguero', 'Programador', 34, 80000, 'juan@bignet.com');
INSERT INTO empleados (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`) 
VALUES (7, 'Eduardo', 'Sacan', 'Programador', 25, 75000, 'eddie@bignet.com');
INSERT INTO empleados (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`) 
VALUES (8, 'Alejandro', 'Nanda', 'Programador', 32, 70000, 'alenanda@bignet.com');
INSERT INTO empleados (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`) 
VALUES (9, 'Hernan', 'Rosso', 'Especialista Multimedia', 33, 90000, 'hernan@bignet.com');
INSERT INTO empleados (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`) 
VALUES (10, 'Paublo', 'Simon', 'Especialista Multimedia', 43, 85000, 'ps@bignet.com');
INSERT INTO empleados (`id`, `nombre`, `apellido`, `trabajo`, `edad`, `salario`, `email`)
VALUES (11, 'Arturo', 'Hernandez', 'Especialista Multimedia', 32, 75000, 'arturo@bignet.com');