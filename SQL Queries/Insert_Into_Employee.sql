INSERT INTO dbo.Employee(First_Name, Last_Name, Manager, Direct_Report, Project)
VALUES('Justin', 'Bader', NULL, 'William Emory', 'The Webapp'),
	  ('William', 'Emory', 'Justin Bader', NULL, 'The Webapp');



SELECT * FROM dbo.Employee;