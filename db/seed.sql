DROP TABLE IF EXISTS employees_db;
USE employees_db;

-- department seeds

INSERT INTO department 
    (name)
VALUES
    ("Marketing"),
    ("Engineering"),
    ("HR"),
    ("IT");

    INSERT INTO role
        (title, salary, department_id)
    VALUES
        ("Marketing Coordinator", 70000, 1),
        ("Marketing Director", 130000, 1),
        ("Mechanical Engineer", 120000, 2),
        ("Software Engineer", 150000, 2),
        ("Jr Engineer", 80000, 2),
        ("HR", 85000, 3),
        ("IT", 70000, 4);


        INSERT INTO employee
            (first_name, last_name, role_id, manager_id)
        VALUES
        ("Ace", "Spade", 1, NULL),
        ("Jack", "Heart", 2, 1),
        ("Kingsley", "Clover", 3, NULL),
        ("Diamond", "Queens", 5, NULL),
        ("Legend", "Teegan", 4, 2),
        ("Billy", "SZA", 6, 3),
        ("Steve", "Vino", 7, 4);


