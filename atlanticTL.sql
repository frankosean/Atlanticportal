drop database if exists atlantic_db;
CREATE DATABASE atlantic_db;

USE atlantic_db;

CREATE TABLE truckloads(
	id int NOT NULL AUTO_INCREMENT,
    lane VARCHAR(1000) NOT NULL,
    pickupdate VARCHAR(1000) NOT NULL,
    pickupnumber VARCHAR (1000) NOT NULL,
    ponumber VARCHAR(1000) NOT NULL,
	status VARCHAR(1000) NOT NULL,
    additional_info VARCHAR(1000) NOT NULL,
    IsDeleted  BIT,
    PRIMARY KEY(id)
);

CREATE TABLE store(
	id int NOT NULL AUTO_INCREMENT,
	lane VARCHAR(1000) NULL,
    pickupdate VARCHAR(1000)  NULL,
    pickupnumber VARCHAR (1000) NULL,
    additional_info VARCHAR(1000) NULL,
    IsDeleted  BIT,
    PRIMARY KEY(id)
);

INSERT INTO truckloads(lane, pickupdate, pickupnumber, ponumber, status, additional_info)
VALUE ("Owings Mills"," 09/18/17", "212232/00", "0000000", "Covered", "Needs appointment"), ("Chattanooga", "10/02/17", "232323/00", "0000000", "In Transit", "No appointment needed");

INSERT INTO store(lane, pickupdate, pickupnumber, IsDeleted)
VALUE ("Winder", "09/26/2017", "212232/00", 0); 