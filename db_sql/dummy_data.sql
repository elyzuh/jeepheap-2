
-- ============================================================
-- EMPLOYEES DATA
-- ============================================================

INSERT INTO `jeep_heap`.`EMPLOYEES`(`name_last`, `name_middle`, `name_first`, `date_of_birth`, `age`, `gender`, `contact_no`, `date_hired`, `type`) 
VALUES 
	('Doe', 'Nyark', 'John', '2003-06-09', 20, 'M', '11111111111', '2015-06-09', 'cashier'), 
	('John', 'Gyat', 'Doe', '2003-10-05', 20, 'M', '22222222222', '2016-10-05', 'pao'), 
	('Ventura', 'Montemayor', 'Katrina', '2003-02-03', 20, 'F', '33333333333', '2008-02-03', 'pao'), 
	('Orilla', 'Amora', 'Mariah', '2003-03-15', 20, 'F', '44444444444', '2069-03-15', 'cashier'), 
	('Yongco', 'Memorion', 'Giulio', '2003-12-05', 20, 'M', '555555555555', '2042-12-05', 'driver'), 
	('Yongca', 'Memorian', 'Giulia', '2003-12-04', 20, 'F', '666666666666', '1999-12-04', 'driver');

-- ============================================================
-- ACCOUNTS DATA
-- ============================================================

INSERT INTO `jeep_heap`.`accounts` (`employee_id`, `password`) 
VALUES 
	('2', 'nyark'),
	('1', 'slay'),
	('3', 'fdsf'),
	('4', 'fdsf'),
	('5', 'slayiug'),
	('6', 'vroom');

UPDATE accounts 
LEFT JOIN employees ON accounts.employee_id = employees.id
SET accounts.username = CONCAT(
	SUBSTRING(employees.type, 1, 1), 
	'_',
	LOWER(employees.name_first)
);

-- ============================================================
-- PAO, CASHIER, DRIVER DATA
-- ============================================================

INSERT INTO PAO (employee_id)
SELECT id
FROM EMPLOYEES
WHERE EMPLOYEES.type = 'pao';

UPDATE PAO AS p
LEFT JOIN EMPLOYEES AS e
ON p.employee_id = e.id
SET p.custom_id = CONCAT(
	UPPER(SUBSTRING(e.type, 1, 1)),
	RIGHT(YEAR(e.date_hired), 2),
	LPAD(p.id, 3, '0')
);

-- =====

INSERT INTO CASHIER (employee_id)
SELECT id
FROM EMPLOYEES
WHERE EMPLOYEES.type = 'cashier';

UPDATE CASHIER AS c
LEFT JOIN EMPLOYEES AS e
ON c.employee_id = e.id
SET c.custom_id = CONCAT(
	UPPER(SUBSTRING(e.type, 1, 1)),
	RIGHT(YEAR(e.date_hired), 2),
	LPAD(c.id, 3, '0')
);

-- =====

INSERT INTO DRIVER (employee_id)
SELECT id
FROM EMPLOYEES
WHERE EMPLOYEES.type = 'driver';

UPDATE DRIVER AS d
LEFT JOIN EMPLOYEES AS e
ON d.employee_id = e.id
SET d.custom_id = CONCAT(
	UPPER(SUBSTRING(e.type, 1, 1)),
	RIGHT(YEAR(e.date_hired), 2),
	LPAD(d.id, 3, '0')
);

-- ============================================================
-- JEEP DATA
-- ============================================================

INSERT INTO `jeep_heap`.`JEEP` (`driver_id`, `pao_id`, `route_code`) 
VALUES 
	(1, 1, "13C"),
	(2, 2, "13C-MERKADO");

-- ============================================================
-- REMITTANCE STUFF DATA
-- ============================================================

-- remittance per trip thingy

INSERT INTO `REMITTANCE_PAO` (`jeep_id`, `verified`, `trip_no`, `date_time`, `TOTAL`, `1000s`, `500s`, `200s`, `100s`, `50s`, `20s`, `10s`, `5s`, `1s`, `0.25s`)
VALUES
(1, 1, 1, '2023-12-10 07:50:00', 0, 1, 0, 1, 0, 0, 8, 2, 5, 0, 14),
(1, 1, 2, '2023-12-10 12:30:00', 0, 0, 1, 0, 0, 1, 0, 0, 12, 0, 1),
(1, 1, 3, '2023-12-10 17:30:00', 0, 1, 0, 1, 0, 1, 7, 0, 0, 0, 0),
(2, 1, 1, '2023-12-10 07:50:00', 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0),
(2, 1, 2, '2023-12-10 12:30:00', 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0),
(2, 1, 3, '2023-12-10 17:30:00', 0, 0, 0, 1, 0, 3, 8, 0, 0, 0, 0),
(1, 1, 1, '2023-12-11 07:50:00', 0, 2, 0, 1, 0, 0, 8, 2, 5, 0, 14),
(1, 1, 2, '2023-12-11 12:30:00', 0, 0, 1, 0, 0, 1, 0, 0, 12, 0, 1),
(1, 1, 3, '2023-12-11 17:30:00', 0, 1, 0, 1, 0, 1, 7, 0, 0, 0, 0),
(2, 1, 1, '2023-12-11 07:50:00', 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0),
(2, 1, 2, '2023-12-11 12:30:00', 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0),
(2, 1, 3, '2023-12-11 17:30:00', 0, 0, 0, 1, 0, 3, 8, 0, 0, 0, 0);

UPDATE `REMITTANCE_PAO`
SET `TOTAL` = (`1000s` * 1000) + (`500s` * 500) + (`200s` * 200) + (`100s` * 100) + (`50s` * 50)
	+ (`20s` * 20) + (`10s` * 10) + (`5s` * 5) + (`1s` * 1) + (`0.25s` * 0.25);

-- remittance daily

INSERT INTO `REMITTANCE_DAILY` (`cashier_id`, `date`)
VALUES
(1,'2023-12-10'),
(2,'2023-12-11');

UPDATE `REMITTANCE_DAILY` as rd
SET total = (
    SELECT SUM(rp.TOTAL)
    FROM `remittance_pao` as rp
    WHERE DATE(rp.date_time) = rd.date
);

-- ============================================================
-- MONITORING SHEET DATA
-- ============================================================

INSERT INTO `MONITORING_SHEET` (`jeep_id`, `shift_time`, `total_cash`)
VALUES
(1, '2023-12-10 07:50:00', 0),
(2, '2023-12-10 07:50:00', 0),
(1, '2023-12-11 07:50:00', 0),
(2, '2023-12-11 07:50:00', 0);

INSERT INTO `MONITORING_SHEET_ROW` (`monitoring_sheet_id`, `departure_time`, `arrival_time`, `total_cash`, `verified`)
VALUES
(1, '2023-12-10 7:50:00', '2023-12-10 8:20:00', 1408.5, 1),
(1, '2023-12-10 12:30:00', '2023-12-10 13:00:00', 610.25, 1),
(1, '2023-12-10 17:30:00', '2023-12-10 18:00:00', 1390, 1),
(2, '2023-12-10 7:50:00', '2023-12-10 8:20:00', 500, 1),
(2, '2023-12-10 12:30:00', '2023-12-10 13:00:00', 400, 1),
(2, '2023-12-10 17:30:00', '2023-12-10 18:00:00', 510, 1),
(3, '2023-12-11 7:50:00', '2023-12-11 8:20:00', 2408.5, 1),
(3, '2023-12-11 12:30:00', '2023-12-11 13:00:00', 610.25, 1),
(3, '2023-12-11 17:30:00', '2023-12-11 18:00:00', 1390, 1),
(4, '2023-12-11 7:50:00', '2023-12-11 8:20:00', 500, 1),
(4, '2023-12-11 12:30:00', '2023-12-11 13:00:00', 400, 1),
(4, '2023-12-11 17:30:00', '2023-12-11 18:00:00', 510, 1);

-- calculates round_trip_time_minutes automatically
UPDATE `MONITORING_SHEET_ROW`
SET `round_trip_time_minutes` = TIMESTAMPDIFF(MINUTE, `departure_time`, `arrival_time`);

UPDATE `MONITORING_SHEET` as ms
SET `total_cash` = (
    SELECT SUM(msr.total_cash)
    FROM `MONITORING_SHEET_ROW` as msr
    WHERE msr.monitoring_sheet_id = ms.id
);

