create table items(
id serial primary key,
name varchar(50),
price int
);
create table customers(
id serial primary key,
firstname varchar(100),
lastname varchar(100)
);

insert into items(name, price)
values('small desk', 100),
('large desk', 300),
('fan', 80)


insert into customers(firstname, lastname)
values('greg', 'jones'),
('sandra', 'jones'),
('scott', 'scott'),
('trvor', 'green'),
('melanie', 'johnson')

select * from items

select * from items where price>80

select * from items where price <= 300

select * from customers where lastname = 'smith'

select * from customers where lastname = 'jones'

select * from customers where firstname <> 'scott'

