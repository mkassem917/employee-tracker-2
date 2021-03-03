USE employee_db;

INSERT INTO department (name) 
VALUES
('IT'),
('Sales'),
('Marketing'),
('R & D');

INSERT INTO role (title, salary, department_id)
VALUES
('IT Tech', 60000, 1),
('IT Manager', 80000, 1),
('Sales Associate', 40000, 2),
('Graphic Designer', 55000, 3),
('Mechanical Engineer', 55000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Moe', 'Kassem', 1, 2 ),
('Danny', 'Sczahtla', 40000, 2),
('Graphic Designer', 55000, 3),
('Mechanical Engineer', 55000, 4);

