create database todo_database;

create table tasklist (
	id serial primary key,
	title text not null
);

insert into tasklist (title)
	values ('Comple Node Project'), ('Complete assignment');