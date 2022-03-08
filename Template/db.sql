CREATE TABLE assets (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    SerialNumber VARCHAR(50) NOT Null,
    Assetname VARCHAR(50) NOT NULL ,
    Specifications VARCHAR(50) NOT NULL ,
    Category VARCHAR(50) NOT NULL,
    Manufacturer Varchar(50) NOT NULL,
    received_on_date DATE NOT NULL ,
    purchased_on_date DATE NOT NULL,
    Price INt NOT NULL ,
    assetstatus VARCHAR(50) NOT NULL,
    warrenty DATE NOT NULL,
    asset_type VARCHAR(50) default 'Purchased Assets'
);

INSERT INTO assets (
    SerialNumber,
    Assetname,
    Specifications,
    Category,
    Manufacturer,
    received_on_date,
    purchased_on_date,
    Price,
    assetstatus,
    warrenty
)
values (
     '1200-000-4222',
     'Mouse',
     '16 inches display,16GB RAM,hardrive ..etc',
     'Software',
     'Apple',
     '2020-06-20',
     '2019-11-18',
      888,
      'active',
      '2019-11-18'
);

--LEASED ASSET

CREATE TABLE leasedassets (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    SerialNumber VARCHAR(50) NOT Null,
    Assetname VARCHAR(50) NOT NULL ,
    Specifications VARCHAR(50) NOT NULL ,
    Category VARCHAR(50) NOT NULL,
    Manufacturer Varchar(50) NOT NULL,
    received_on_date DATE NOT NULL ,
    purchased_on_date DATE NOT NULL,
    Price INt NOT NULL ,
    asset_type VARCHAR(50) default 'Leased Assets'
);
INSERT INTO leasedassets (
    SerialNumber,
    Assetname,
    Specifications,
    Category,
    Manufacturer,
    received_on_date,
    purchased_on_date,
    Price
)
values (
     '1200-000-0122',
     'Mouse',
     '16 inches display,16GB RAM,hardrive ..etc',
     'Software',
     'Apple',
     '2020-06-20',
     '2019-11-18',
      888
);


-- ASSET ALLOTMENT 

CREATE TABLE userselection (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    associatename VARCHAR(50) NOT NULL,
    associaterole VARCHAR(50) NOT NULL,
    Dateofjoining DATE NOT NULL,
    associatestatus VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    contactnumber BIGINT NOT NULL,
    Adress VARCHAR(50) NOT NULL
);
INSERT INTO users (
    associatename,
    associaterole,
    Dateofjoining,
    associatestatus,
    email,
    contactnumber,
    Adress
)
values (
    'Sai',
    'developer',
    '2021-05-20',
    'active',
    'sai@gmail.com',
    9111000000,
    'xyz street'
);

--assign assets 

CREATE TABLE assignassets (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    SerialNumber VARCHAR(50) NOT Null,
    Assetname VARCHAR(50) NOT NULL ,
    Category VARCHAR(50) NOT NULL, 
    assetstatus VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    contactnumber BIGINT NOT NULL,
    Adress VARCHAR(50) NOT NULL,
    users_id BIGINT references users(id)
);

INSERT INTO assignassets (
    SerialNumber,
    Assetname,
    Category,
    assetstatus,
    email,
    contactnumber,
    Adress,
    users_id
)
values (
     '1200-000-0236',
     'Desktop',
     'hardware',
     'active',
     'bharath@gmail.com',
      9111000000,
     'xyz street',
      2
);
--project table 
CREATE TABLE projects (
    project_id BIGSERIAL NOT NULL PRIMARY KEY,
    projectname VARCHAR(50) NOT NULL,
    projecttype VARCHAR(50) NOT NULL,
    allocated_date DATE NOT NULL,
    projectstatus VARCHAR(50) NOT NULL,
    manageremail VARCHAR(50) NOT NULL,
    remoteorpremises VARCHAR(50) NOT NULL,
    Adress VARCHAR(50) NOT NULL
);

INSERT INTO projects (
    projectname,
    projecttype,
    allocated_date,
    projectstatus,
    manageremail,
    remoteorpremises,
    Adress
)
values (
     'Event 365',
     'Hired Equipment',
     '2021-10-20',
     'active',
     'bharath@gmail.com',
      'Remote',
     'Hyderabad'
);

CREATE TABLE mappingassets (
    users_id BIGINT ,
    userName VARCHAR(50),
    userRole VARCHAR(50),
    Date_of_Joining DATE,
    assetSerielnumber VARCHAR(50),
    assetstatus VARCHAR(50)
);

INSERT INTO mappingassets (
    users_id,
    userName,
    userRole,
    Date_of_Joining,
    assetSerielnumber,
    assetstatus
)
values (
    1,
    'Bharath',
    'Developer',
    '2021-10-20',
    '1200-24424-3535',
    'Active'
);
