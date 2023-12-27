create table proj3_userdata(id int identity(1,1) primary key,email varchar(50),password varchar(50)) ;
alter table proj3_userdata add username varchar(50);
insert into proj3_userdata values('a@a.com','pwd');
insert into proj3_userdata values('ab@ab.com','pwd');
select * from proj3_userdata;
select * from proj3_userdata where email='a@a.com' and password='pwd';
update proj3_userdata set username='hello' where id=2



create table proj3_categorydata(id int identity(1,1) primary key,category_name varchar(30),hits int);
alter table proj3_categorydata add image_link varchar(1000);
update proj3_categorydata set image_link='https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png' 
insert into proj3_categorydata values('cars',200);
insert into proj3_categorydata values('computers',1900);
insert into proj3_categorydata values('Astro physics',50);
insert into proj3_categorydata values('Chemistry',200);
insert into proj3_categorydata values('Books',2000);
insert into proj3_categorydata values('Photography',20);
insert into proj3_categorydata values('One piece',9999);
insert into proj3_categorydata values('Devices',500);
insert into proj3_categorydata values('Amazon',100);
insert into proj3_categorydata values('Buissness',750);
insert into proj3_categorydata values('Animals',1000);
insert into proj3_categorydata values('Resources',20)
INSERT INTO proj3_categorydata VALUES ('Entertainment', 15,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('Education', 500,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('Artificial inteligence', 645,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('World domination', 115,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('Karen outbreaks', 315,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('Declining monke', 1115,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('Shoes', 1005,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('Cooking', 5641,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('keybords', 453,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('music', 911,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('mosquitoes', 492,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('display', 123,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('digital', 4671,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('Zoo', 6541,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('enemy', 784,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('friends', 54,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('terracota', 78,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('pie',492 ,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('hp', 765,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('asus', 453,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('nuclear bommbs', 45783,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('movies', 16,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');
INSERT INTO proj3_categorydata VALUES ('tv shows', 135,'https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png');

select top 10 * from proj3_categorydata order by 'hits' desc ;



create table proj3_feed(id int identity(1,1) primary key,title varchar(100),author_id int,content varchar(8000),category_id int);
alter table proj3_feed add image_link varchar(1000);
alter table proj3_feed add hits int;

update proj3_feed set image_link='https://images.freeimages.com/image/previews/1f7/kawaii-pineapple-fruit-png-5690110.png';

alter table proj3_feed add foreign key (author_id) references proj3_userdata(id);  
alter table proj3_feed add foreign key (category_id) references proj3_categorydata(id); 
insert into proj3_feed values('water drink',2,'water is bad',3);
insert into proj3_feed values('juice drink',1,'juice is good',8);
insert into proj3_feed values('car run',2,'car is bad',1);
insert into proj3_feed values('bird fly',1,'juice is good',7);
insert into proj3_feed values('rain fall',2,'rain is bad',4);
insert into proj3_feed values('water drink',2,'human water is bad',11);
insert into proj3_feed values('boune ball',1,'ball is good',5);
insert into proj3_feed values('roll stone',2,'stone is bad',2);
insert into proj3_feed values('eat food',1,'food is good',4);
insert into proj3_feed values('throw dirt',2,'dirt is bad',9);
insert into proj3_feed values('buy wire',1,'wire is good',10);

select * from proj3_feed;
select * from proj3_feed order by id offset 2 rows fetch next 2 rows only



drop table proj3_userdata ;
drop table proj3_categorydata ;
drop table proj3_feed ;




select proj3_feed.id,proj3_feed.title,proj3_feed.author_id,proj3_feed.content,proj3_feed.category_id,proj3_feed.image_link,proj3_userdata.username,proj3_categorydata.category_name
from proj3_feed
inner join proj3_userdata on proj3_feed.author_id=proj3_userdata.id
inner join proj3_categorydata on proj3_feed.category_id=proj3_categorydata.id
where proj3_feed.id in (1,3,7)
order by id offset 0 rows fetch next 5 rows only 


where proj3_feed.id=2;

create table proj3_image(image_id int primary key identity(1,1),
		image_data varbinary(max),
		file_name varchar(100),
		description varchar(255)
		);

select * from proj3_image;

insert into proj3_image values((select * from openrowset(bulk N'A:\Abay\Coding\Projects\Proj1-EmployeeDept\SQL\test.jpg',single_blob)as t1),'file1','test file go woooo')
/*base64 images automatically read as bytes, by c#, from BLOB stored here*/
