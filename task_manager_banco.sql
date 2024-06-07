DROP SCHEMA IF EXISTS task_manager;
CREATE DATABASE task_manager;
USE task_manager;

CREATE TABLE tasks (
id INT AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(255) NOT NULL,
description TEXT,
status ENUM('pending', 'completed')
);

INSERT INTO tasks (title, description, status)
VALUE
('teste task 1','teste','pending');

select * from tasks;