CREATE EXTENSION IF NOT EXISTS "uuid_assp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";


CREATE TABLE IF NOT EXISTS aplications_user(
    uuid uuid DEFAULT uuid_generate_v4(),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY  (uuid)
 )

INSERT INTO aplications_user (username, password) VALUES ('admin', crypt('admin','my_salt'));
