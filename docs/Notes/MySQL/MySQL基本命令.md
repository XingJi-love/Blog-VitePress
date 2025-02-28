# MySQL | 基本命令

![MySQL安装教程](./MySQL安装教程/MySQL.png)

## 列出当前数据库管理系统中有哪些数据库

```sql
show databases;
```
> MySQL自带四个数据库：`information_schema`、`mysql`、`performance_schema`、`sys`。

```sql
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.03 sec)
```

## 查看当前用的是哪个数据库。

```sql
select database();
```
```sql
mysql> select database();
+------------+
| database() |
+------------+
| NULL       |
+------------+
1 row in set (0.00 sec)
```
> `NULL`表示当前没有使用任何数据库。


## 切换到某个数据库

```sql
use 数据库名称;
```
+ 切换到`mysql`数据库。

```sql
use mysql;
```

```sql
mysql> use mysql;
Database changed
```
> `Database changed`表示切换数据库成功。


### 列出当前数据库中有哪些表

```sql
show tables;
```

```sql
mysql> show tables;
+------------------------------------------------------+
| Tables_in_mysql                                      |
+------------------------------------------------------+
| columns_priv                                         |
| component                                            |
| db                                                   |
| default_roles                                        |
| engine_cost                                          |
| func                                                 |
| general_log                                          |
| global_grants                                        |
| gtid_executed                                        |
| help_category                                        |
| help_keyword                                         |
| help_relation                                        |
| help_topic                                           |
| innodb_index_stats                                   |
| innodb_table_stats                                   |
| ndb_binlog_index                                     |
| password_history                                     |
| plugin                                               |
| procs_priv                                           |
| proxies_priv                                         |
| replication_asynchronous_connection_failover         |
| replication_asynchronous_connection_failover_managed |
| replication_group_configuration_version              |
| replication_group_member_actions                     |
| role_edges                                           |
| server_cost                                          |
| servers                                              |
| slave_master_info                                    |
| slave_relay_log_info                                 |
| slave_worker_info                                    |
| slow_log                                             |
| tables_priv                                          |
| time_zone                                            |
| time_zone_leap_second                                |
| time_zone_name                                       |
| time_zone_transition                                 |
| time_zone_transition_type                            |
| user                                                 |
+------------------------------------------------------+
38 rows in set (0.01 sec)
```


## 创建数据库，起名powernode

```sql
create database 数据库名称;
```

::: tip 提示
+ create database 创建数据库。
+ powernode 数据库名称。
:::

```sql
create database powernode;
```
> `原始`数据库

```sql
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.01 sec)
```
> `创建`数据库

```sql
mysql> create database powernode;
Query OK, 1 row affected (0.04 sec)


mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| powernode          |
| sys                |
+--------------------+
5 rows in set (0.00 sec)
```

### 使用powernode数据库

```sql
use powernode;
```

> `使用powernode数据库`

```sql
mysql> use powernode;
Database changed
```

### 查看powernode数据库中有哪些表

```sql
mysql> show tables;
Empty set (0.01 sec)
```

### 删除数据库powernode

```sql
drop database 数据库名称;
```

::: tip 提示
+ drop database 删除数据库。
+ powernode 数据库名称。
:::


```sql
drop database powernode;
```

> `删除数据库powernode`

```sql
mysql> drop database powernode;
Query OK, 0 rows affected (0.05 sec)

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
4 rows in set (0.00 sec)
```

## 退出mysql

::: tip 提示
1. exit
2. quit
3. ctrl + c
:::

## 查看当前mysql版本

```sql
select version();
```
+ select——>`选择`

```sql
mysql> select version();
+-----------+
| version() |
+-----------+
| 8.0.41    |
+-----------+
1 row in set (0.01 sec)
```


> 还可以使用`mysql.exe`命令来查看版本信息（在`没有登录mysql`之前使用）：`mysql --version`

```sql
mysql --version
```

```sql
mysql  Ver 8.0.41 for Win64 on x86_64 (MySQL Community Server - GPL)
```


## 数据库表的概述

---

| name | age | gender |
| ---- | --- | ------ |
| 张三 | 20  | 男     |
| 李四 | 22  | 女     |

- 以上就是数据库表格的`直观展示形式`。
- `表格`英文单词`table`。
- `表`是`数据库存储数据`的`基本单元`，数据库存储数据的时候，是将数据存储在`表对象当中`的。

> 为什么将数据存储在表中呢？`因为表存储数据非常直观`。

- 任何一张表都有行和列：
  - 行：`记录`（`一行`就是一条`数据`）——> `row`
  - 列：`字段`（`name字段`、`age字段`、`gender字段`）——> `column`

- 每个`字段`包含以下`属性`：
  - `字段名`：`name、age、gender`都是`字段的名字`
  - `字段的数据类型`：`每个字段`都有`数据类型`，比如：`字符类型、数字类型、日期类型`
  - `字段的数据长度`：`每个字段`有可能会有`长度的限制`
  - `字段的约束`：比如某些字段要求该字段下的`数据不能重复、不能为空`等，用来保证表格中数据合法有效


## 初始化测试数据

---

为了方便后面内容的学习，老师提前准备了表以及表中的测试数据，以下是建表并且初始化数据的sql脚本

```sql
DROP TABLE IF EXISTS EMP;
DROP TABLE IF EXISTS DEPT;
DROP TABLE IF EXISTS SALGRADE;

CREATE TABLE DEPT(DEPTNO int(2) not null ,
	DNAME VARCHAR(14) ,
	LOC VARCHAR(13),
	primary key (DEPTNO)
);
CREATE TABLE EMP(EMPNO int(4)  not null ,
	ENAME VARCHAR(10),
	JOB VARCHAR(9),
	MGR INT(4),
	HIREDATE DATE  DEFAULT NULL,
	SAL DOUBLE(7,2),
	COMM DOUBLE(7,2),
	primary key (EMPNO),
	DEPTNO INT(2) 
);

CREATE TABLE SALGRADE( GRADE INT,
	LOSAL INT,
	HISAL INT
);

INSERT INTO DEPT ( DEPTNO, DNAME, LOC ) VALUES ( 10, 'ACCOUNTING', 'NEW YORK'); 
INSERT INTO DEPT ( DEPTNO, DNAME, LOC ) VALUES ( 20, 'RESEARCH', 'DALLAS'); 
INSERT INTO DEPT ( DEPTNO, DNAME, LOC ) VALUES ( 30, 'SALES', 'CHICAGO'); 
INSERT INTO DEPT ( DEPTNO, DNAME, LOC ) VALUES ( 40, 'OPERATIONS', 'BOSTON'); 
 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7369, 'SMITH', 'CLERK', 7902,  '1980-12-17', 800, NULL, 20); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7499, 'ALLEN', 'SALESMAN', 7698,  '1981-02-20', 1600, 300, 30); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7521, 'WARD', 'SALESMAN', 7698,  '1981-02-22', 1250, 500, 30); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7566, 'JONES', 'MANAGER', 7839,  '1981-04-02', 2975, NULL, 20); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7654, 'MARTIN', 'SALESMAN', 7698,  '1981-09-28', 1250, 1400, 30); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7698, 'BLAKE', 'MANAGER', 7839,  '1981-05-01', 2850, NULL, 30); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7782, 'CLARK', 'MANAGER', 7839,  '1981-06-09', 2450, NULL, 10); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7788, 'SCOTT', 'ANALYST', 7566,  '1987-04-19', 3000, NULL, 20); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7839, 'KING', 'PRESIDENT', NULL,  '1981-11-17', 5000, NULL, 10); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7844, 'TURNER', 'SALESMAN', 7698,  '1981-09-08', 1500, 0, 30); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7876, 'ADAMS', 'CLERK', 7788,  '1987-05-23', 1100, NULL, 20); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7900, 'JAMES', 'CLERK', 7698,  '1981-12-03', 950, NULL, 30); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7902, 'FORD', 'ANALYST', 7566,  '1981-12-03', 3000, NULL, 20); 
INSERT INTO EMP ( EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM,DEPTNO ) VALUES ( 7934, 'MILLER', 'CLERK', 7782,  '1982-01-23', 1300, NULL, 10); 
 
INSERT INTO SALGRADE ( GRADE, LOSAL, HISAL ) VALUES ( 1, 700, 1200); 
INSERT INTO SALGRADE ( GRADE, LOSAL, HISAL ) VALUES ( 2, 1201, 1400); 
INSERT INTO SALGRADE ( GRADE, LOSAL, HISAL ) VALUES ( 3, 1401, 2000); 
INSERT INTO SALGRADE ( GRADE, LOSAL, HISAL ) VALUES ( 4, 2001, 3000); 
INSERT INTO SALGRADE ( GRADE, LOSAL, HISAL ) VALUES ( 5, 3001, 9999); 
commit;
```

- `什么是sql脚本`：文件名是`.sql`，并且该文件中`编写了大量的SQL语句`，执行sql脚本程序就相当于批量`执行SQL语句`。

- 你入职的时候，项目一般都是进展了一部分，多数情况下你进项目组的时候数据库的表以及数据都是有的，项目经理第一天可能会给你一个`较大的sql脚本文件`，你需要执行这个`脚本文件来初始化你的本地数据库`。（当然，也有可能数据库是共享的。）

- 创建文件：`powernode.sql`，把以上`SQL语句全部复制到sql脚本文件`中。

- 执行SQL脚本文件，初始化数据库
  - 第一步：命令窗口`登录mysql`

  - 第二步：创建数据库`powernode（如果之前已经创建就不需要再创建了）`：`create database powernode;`

  - 第三步：`使用数据库powernode`：`use powernode;`

  - 第四步：`source`命令执行`sql脚本`，注意：source命令后面是`sql脚本文件的绝对路径`。

```sql
mysql> use powernode;
Database changed


mysql> source D:\LenovoHZB\Downloads\powernode.sql

Query OK, 0 rows affected, 1 warning (0.01 sec)

Query OK, 0 rows affected, 1 warning (0.00 sec)

Query OK, 0 rows affected, 1 warning (0.00 sec)

Query OK, 0 rows affected, 1 warning (0.05 sec)

Query OK, 0 rows affected, 5 warnings (0.04 sec)

Query OK, 0 rows affected (0.04 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 1 row affected (0.00 sec)

Query OK, 1 row affected (0.01 sec)

Query OK, 0 rows affected (0.00 sec)
```

   - 第五步：`查看`是否`初始化成功`，执行：`show tables;`

```sql
mysql> show tables;
+---------------------+
| Tables_in_powernode |
+---------------------+
| dept                |
| emp                 |
| salgrade            |
+---------------------+
3 rows in set (0.00 sec)
```

- 使用其他的mysql客户端工具也可以执行sql脚本，比如navicat。使用source命令执行sql脚本的优点：**可支持大文件**。

::: tip 提示
注意：`source命令`后面是`sql脚本文件的绝对路径`，`sql脚本文件的绝对路径`中`不能包含中文`。
:::

## 熟悉测试数据

---

> emp dept salgrade三张表分别存储什么信息

- `emp`：`员工信息`
- `dept`：`部门信息`
- `salgrade`：`工资等级信息`

> 查看表结构：desc或describe，语法格式：`desc或describe +表名`

```sql
desc dapt;
desc emp;
desc salgrade;
```
+ dapt：`部门表`
+ emp：`员工表`
+ salgrade：`工资等级表`

```sql
mysql> desc dept;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| DEPTNO | int         | NO   | PRI | NULL    |       |
| DNAME  | varchar(14) | YES  |     | NULL    |       |
| LOC    | varchar(13) | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)

mysql> desc emp;
+----------+-------------+------+-----+---------+-------+
| Field    | Type        | Null | Key | Default | Extra |
+----------+-------------+------+-----+---------+-------+
| EMPNO    | int         | NO   | PRI | NULL    |       |
| ENAME    | varchar(10) | YES  |     | NULL    |       |
| JOB      | varchar(9)  | YES  |     | NULL    |       |
| MGR      | int         | YES  |     | NULL    |       |
| HIREDATE | date        | YES  |     | NULL    |       |
| SAL      | double(7,2) | YES  |     | NULL    |       |
| COMM     | double(7,2) | YES  |     | NULL    |       |
| DEPTNO   | int         | YES  |     | NULL    |       |
+----------+-------------+------+-----+---------+-------+
8 rows in set (0.00 sec)

mysql> desc salgrade;
+-------+------+------+-----+---------+-------+
| Field | Type | Null | Key | Default | Extra |
+-------+------+------+-----+---------+-------+
| GRADE | int  | YES  |     | NULL    |       |
| LOSAL | int  | YES  |     | NULL    |       |
| HISAL | int  | YES  |     | NULL    |       |
+-------+------+------+-----+---------+-------+
3 rows in set (0.00 sec)
```

> 以上的结果展示的`不是`表中的`数据`，而是`表的结构`。

- `Field`是`字段名`
- `Type`是这个`字段的数据类型`
- `Null`是这个`字段是否允许为空`
- `Key`是这个`字段是否为主键或外键`
- `Default`是这个`字段的默认值`

> 对以上表结构进行解释说明：

- `emp表`
  - empno：`员工编号`，`int类型（整数）`，`不能为空`，`主键（主键后期学习约束时会进行说明）`
  - ename：`员工姓名`，`varchar类型（字符串）`
  - job：`工作岗位`，`varchar类型`
  - mgr：`上级领导编号`，`int类型`
  - hiredate：`雇佣日期`，`date类型（日期类型）`
  - sal：`月薪`，`double类型（带有浮点的数字）`
  - comm：`补助津贴`，`double类型`
  - deptno：`部门编号`，`int类型`

- `dept表`
  - deptno：`部门编号`，`int类型`，`主键`
  - dname：`部门名称`，`varchar类型`
  - loc：`地理位置`，`varchar类型`

- `salgrade表`
  - grade：`等级`，`int类型`
  - losal：`最低工资`，`int类型`
  - hisal：`最高工资`，`int类型`

> 查看一下表中的数据，来加深一下印象（以下SQL语句会在后面课程中学习）：

```sql
select * from emp;
select * from dept;
select * from salgrade;
```
1. `select * from emp;`：查询emp表中的所有数据。
2. `select * from dept;`：查询dept表中的所有数据。
3. `select * from salgrade;`：查询salgrade表中的所有数据。

```sql
mysql> select * from dept;
+--------+------------+----------+
| DEPTNO | DNAME      | LOC      |
+--------+------------+----------+
|     10 | ACCOUNTING | NEW YORK |
|     20 | RESEARCH   | DALLAS   |
|     30 | SALES      | CHICAGO  |
|     40 | OPERATIONS | BOSTON   |
+--------+------------+----------+
4 rows in set (0.00 sec)

mysql> select * from emp;
+-------+--------+-----------+------+------------+---------+---------+--------+
| EMPNO | ENAME  | JOB       | MGR  | HIREDATE   | SAL     | COMM    | DEPTNO |
+-------+--------+-----------+------+------------+---------+---------+--------+
|  7369 | SMITH  | CLERK     | 7902 | 1980-12-17 |  800.00 |    NULL |     20 |
|  7499 | ALLEN  | SALESMAN  | 7698 | 1981-02-20 | 1600.00 |  300.00 |     30 |
|  7521 | WARD   | SALESMAN  | 7698 | 1981-02-22 | 1250.00 |  500.00 |     30 |
|  7566 | JONES  | MANAGER   | 7839 | 1981-04-02 | 2975.00 |    NULL |     20 |
|  7654 | MARTIN | SALESMAN  | 7698 | 1981-09-28 | 1250.00 | 1400.00 |     30 |
|  7698 | BLAKE  | MANAGER   | 7839 | 1981-05-01 | 2850.00 |    NULL |     30 |
|  7782 | CLARK  | MANAGER   | 7839 | 1981-06-09 | 2450.00 |    NULL |     10 |
|  7788 | SCOTT  | ANALYST   | 7566 | 1987-04-19 | 3000.00 |    NULL |     20 |
|  7839 | KING   | PRESIDENT | NULL | 1981-11-17 | 5000.00 |    NULL |     10 |
|  7844 | TURNER | SALESMAN  | 7698 | 1981-09-08 | 1500.00 |    0.00 |     30 |
|  7876 | ADAMS  | CLERK     | 7788 | 1987-05-23 | 1100.00 |    NULL |     20 |
|  7900 | JAMES  | CLERK     | 7698 | 1981-12-03 |  950.00 |    NULL |     30 |
|  7902 | FORD   | ANALYST   | 7566 | 1981-12-03 | 3000.00 |    NULL |     20 |
|  7934 | MILLER | CLERK     | 7782 | 1982-01-23 | 1300.00 |    NULL |     10 |
+-------+--------+-----------+------+------------+---------+---------+--------+
14 rows in set (0.00 sec)

mysql> select * from salgrade;
+-------+-------+-------+
| GRADE | LOSAL | HISAL |
+-------+-------+-------+
|     1 |   700 |  1200 |
|     2 |  1201 |  1400 |
|     3 |  1401 |  2000 |
|     4 |  2001 |  3000 |
|     5 |  3001 |  9999 |
+-------+-------+-------+
5 rows in set (0.00 sec)
```

