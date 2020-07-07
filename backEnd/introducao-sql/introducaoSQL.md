**_Exercicio 1_**
**a**. **PRIMARY KEY** diz que o valor não pode ser um NULL e tem ue ser um valor .
 **NOT NULL** significa que o valor inserido na coluna não pode ser um **NULL**

**b.** **SHOW DATABASES** Me retornou um "Database" com as seguintes informações: **'julian_wendel_lima_db'**,
**'information_schema'**
**SHOW TABLES** me retornou as tabelas dentro do meu **'julian_wendel_lima_db'**

**c.** Quando eu dou o Comando **SHOW CREATE TABLE Actor** ele me retorna:
'Actor', 'CREATE TABLE `Actor` (\n  `id` varchar(255) NOT NULL,\n  `name` varchar(255) NOT NULL,\n  `salary` float NOT NULL,\n  `birth_date` date NOT NULL,\n  `gender` varchar(6) NOT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci'


**_Exercicio 2_**
**a.** INSERT INTO Actor (id, name, salary, birth_date)
VALUES(
  002, 
  "Glória Pires",
  1200000,
  1963-08-23, 
  "female"
);

**b.** 



