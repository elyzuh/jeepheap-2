CREATE DATABASE jeep_heap;

-- ============================================================
-- EMPLOYEES DATA
-- ============================================================

CREATE TABLE IF NOT EXISTS `EMPLOYEES` (
	`id` BIGINT UNSIGNED AUTO_INCREMENT UNIQUE,
	`name_last` VARCHAR(255),
	`name_middle` VARCHAR(255),
	`name_first` VARCHAR(255),
	`date_of_birth` DATE,
	`age` INT,
	`gender` VARCHAR(255),
	`contact_no` VARCHAR(255),
	`date_hired` DATE,
	`type` VARCHAR(255) NOT NULL,
	`deleted` INT DEFAULT 0,
	PRIMARY KEY (`id`)
);

-- ============================================================
-- ACCOUNTS DATA
-- ============================================================

CREATE TABLE IF NOT EXISTS `ACCOUNTS` (
	`id` BIGINT UNSIGNED AUTO_INCREMENT UNIQUE,
	`employee_id` BIGINT UNSIGNED UNIQUE,
	`username` VARCHAR(255) NOT NULL,
	`password` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`employee_id`) REFERENCES `EMPLOYEES`(`id`)
);

-- ============================================================
-- PAO, CASHIER, DRIVER DATA
-- ============================================================

CREATE TABLE IF NOT EXISTS `PAO` (
	`id` BIGINT UNSIGNED AUTO_INCREMENT UNIQUE,
	`employee_id` BIGINT UNSIGNED UNIQUE,
	`custom_id` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`employee_id`) REFERENCES `EMPLOYEES`(`id`)
);

CREATE TABLE IF NOT EXISTS `CASHIER` (
	`id` BIGINT UNSIGNED AUTO_INCREMENT UNIQUE,
	`employee_id` BIGINT UNSIGNED UNIQUE,
	`custom_id` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`employee_id`) REFERENCES `EMPLOYEES`(`id`)
);

CREATE TABLE IF NOT EXISTS `DRIVER` (
	`id` BIGINT UNSIGNED AUTO_INCREMENT UNIQUE,
	`employee_id` BIGINT UNSIGNED UNIQUE,
	`custom_id` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`employee_id`) REFERENCES `EMPLOYEES`(`id`)
);

-- ============================================================
-- JEEP DATA
-- ============================================================

CREATE TABLE IF NOT EXISTS `JEEP` (
	`id` BIGINT UNSIGNED AUTO_INCREMENT UNIQUE,
	`driver_id` BIGINT UNSIGNED,
	`pao_id` BIGINT UNSIGNED	,
	`route_code` VARCHAR(255) NOT NULL,
	PRIMARY KEY (`id`),
	FOREIGN KEY (`driver_id`) REFERENCES `DRIVER`(`id`),
	FOREIGN KEY (`pao_id`) REFERENCES `PAO`(`id`)
);

-- ============================================================
-- REMITTANCE STUFF DATA
-- ============================================================

CREATE TABLE IF NOT EXISTS `REMITTANCE_PAO` (
	`id` BIGINT UNSIGNED AUTO_INCREMENT UNIQUE,
	`jeep_id` BIGINT UNSIGNED,

	`verified` INT DEFAULT 0,

	`trip_no` INT DEFAULT 0,
	`date_time` DATETIME, 

	`1000s` INT DEFAULT 0,
	`500s` INT DEFAULT 0,
	`200s` INT DEFAULT 0,
	`100s` INT DEFAULT 0,
	`50s` INT DEFAULT 0,
	`20s` INT DEFAULT 0,
	`10s` INT DEFAULT 0,
	`5s` INT DEFAULT 0,
	`1s` INT DEFAULT 0,
	`0.25s` INT DEFAULT 0,
	`TOTAL` DECIMAL(10, 2) DEFAULT 0,

	PRIMARY KEY (`id`),
	FOREIGN KEY (`jeep_id`) REFERENCES `JEEP`(`id`)
);

CREATE TABLE IF NOT EXISTS `REMITTANCE_DAILY` (
	`id` BIGINT UNSIGNED AUTO_INCREMENT UNIQUE,
	`cashier_id` BIGINT UNSIGNED,
	
	`date` DATE,
	`total` DECIMAL(10, 2) DEFAULT 0,
	
	PRIMARY KEY (`id`),
	FOREIGN KEY (`cashier_id`) REFERENCES `CASHIER`(`id`)
);

-- ============================================================
-- MONITORING SHEET DATA
-- ============================================================

CREATE TABLE IF NOT EXISTS `MONITORING_SHEET` (
	`id` BIGINT UNSIGNED AUTO_INCREMENT UNIQUE,
	`jeep_id` BIGINT UNSIGNED NOT NULL,
	`shift_time` DATETIME,
	`total_cash` DECIMAL(10, 2) DEFAULT 0,
	
	PRIMARY KEY (`id`),
	FOREIGN KEY (`jeep_id`) REFERENCES `JEEP`(`id`)
);

CREATE TABLE IF NOT EXISTS `MONITORING_SHEET_ROW` (
	`id` BIGINT UNSIGNED AUTO_INCREMENT UNIQUE,
	`monitoring_sheet_id` BIGINT UNSIGNED,

	`verified` INT DEFAULT 0,

	`departure_time` DATETIME ,
	`arrival_time` DATETIME ,
	`round_trip_time_minutes` INT DEFAULT 0 ,
	`total_cash` DECIMAL(10, 2) DEFAULT 0,
	
	PRIMARY KEY (`id`),
	FOREIGN KEY (`monitoring_sheet_id`) REFERENCES `MONITORING_SHEET`(`id`)
);