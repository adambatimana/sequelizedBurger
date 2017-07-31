-- write insert queries to populate the burgers table with at least three entries.
-- INSERT INTO burgers (name, burger_name, devoured, date) VALUES(?,?,?,?)

INSERT INTO burgers (burger_name, devoured, date) VALUES("BBQ BACON CHEESEBURGER",TRUE,CURRENT_TIMESTAMP);

INSERT INTO burgers (burger_name, devoured, date) VALUES("MUSHROOM SWISS BURGER",TRUE,CURRENT_TIMESTAMP);

INSERT INTO burgers (burger_name, devoured, date) VALUES("Ma Ducra Special BURGER",FALSE,CURRENT_TIMESTAMP);
