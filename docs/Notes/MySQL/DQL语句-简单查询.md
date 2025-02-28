# MySQL | DQL语句-简单查询

![MySQL安装教程](./MySQL安装教程/MySQL.png)

`查询`是SQL语言的核心，用于表达`SQL查询`的`select查询命令`是功能最强也是最为复杂的SQL语句，它的作用就是从数据库中`检索数据`，并将查询结果返回给用户。 select语句由：`select子句(查询内容)`、`from子句(查询对象)`、`where子句(查询条件)`、`order by子句(排序方式)`、`group by子句(分组方式)`等组成。`查询语句`属于SQL语句中的`DQL语句`，是所有SQL语句中最为复杂也是最重要的语句，所以必须掌握。接下来我们先从简单查询语句开始学习。

## 查一个字段

---

查询一个字段说的是：一个表有多列，查询其中的一列。

语法格式：`select 字段名 from 表名;`

```sql
select 字段名 from 表名;
```

- select和from是`关键字`，不能随便写
- **一条SQL语句必须以“;”结尾**
- **对于SQL语句来说，大小写都可以**
- `字段名和表名`属于`标识符`，按照表的实际情况填写，不知道字段名的，可以使用`desc命令查看表结构`

> 案例1：查询公司中`所有员工编号`

```sql
select empno from emp; 
```

```sql
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

mysql> select empno from emp;
+-------+
| empno |
+-------+
|  7369 |
|  7499 |
|  7521 |
|  7566 |
|  7654 |
|  7698 |
|  7782 |
|  7788 |
|  7839 |
|  7844 |
|  7876 |
|  7900 |
|  7902 |
|  7934 |
+-------+
14 rows in set (0.00 sec)
```


> 案例2：查询公司中`所有员工姓名`

```sql
select ename from emp;

SELECT ENAME FROM EMP; //大写小写都可以

seleCT Ename From emp; //大小写混合都可以
```

> 在mysql命令行客户端中，sql语句`没有分号是不会执行`的：

```sql
mysql> select empno from emp
    ->
    ->
    ->
    ->
    ->
    ->
```

> 末尾加上`;`就执行了：

```sql
mysql> select empno from emp
    ->
    ->
    ->
    ->
    ->
    ->
    -> ;
+-------+
| empno |
+-------+
|  7369 |
|  7499 |
|  7521 |
|  7566 |
|  7654 |
|  7698 |
|  7782 |
|  7788 |
|  7839 |
|  7844 |
|  7876 |
|  7900 |
|  7902 |
|  7934 |
+-------+
14 rows in set (0.00 sec)
```


> 以上sql虽然以分号结尾之后执行了，但是`报错`了，错误信息显示：`语法错误`。

> 假设一个`SQL语句`在书写过程中`出错`了，怎么终止这条SQL呢？`\c`

```sql
mysql> select   
    ->   empno
    -> froom ——>发现单词写错了
    -> \c

mysql> select empno from emp; //重新写

+-------+
| empno |
+-------+
|  7369 |
|  7499 |
|  7521 |
|  7566 |
|  7654 |
|  7698 |
|  7782 |
|  7788 |
|  7839 |
|  7844 |
|  7876 |
|  7900 |
|  7902 |
|  7934 |
+-------+
14 rows in set (0.00 sec)
```

> `任务1`：查询所有`部门名称`。

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

mysql> select dname from dept;
+------------+
| dname      |
+------------+
| ACCOUNTING |
| RESEARCH   |
| SALES      |
| OPERATIONS |
+------------+
4 rows in set (0.00 sec)
```

> `任务2`：查询所有`薪资等级`。

```sql
mysql> desc salgrade;
+-------+------+------+-----+---------+-------+
| Field | Type | Null | Key | Default | Extra |
+-------+------+------+-----+---------+-------+
| GRADE | int  | YES  |     | NULL    |       |
| LOSAL | int  | YES  |     | NULL    |       |
| HISAL | int  | YES  |     | NULL    |       |
+-------+------+------+-----+---------+-------+
3 rows in set (0.00 sec)

mysql> select grade from salgrade;
+-------+
| grade |
+-------+
|     1 |
|     2 |
|     3 |
|     4 |
|     5 |
+-------+
5 rows in set (0.00 sec)
```


## 查多个字段

---

查询多个字段时，在字段名和字段名之间添加“`,`”即可。

语法格式：`select 字段名1,字段名2,字段名3 from 表名;`

```sql
select 字段名1,字段名2,字段名3 from 表名;
```

> 案例1：查询员工`编号`以及员工`姓名`。

```sql
select empno, ename from emp;
```

```sql
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
8 rows in set (0.01 sec)

mysql> select empno,ename from emp;
+-------+--------+
| empno | ename  |
+-------+--------+
|  7369 | SMITH  |
|  7499 | ALLEN  |
|  7521 | WARD   |
|  7566 | JONES  |
|  7654 | MARTIN |
|  7698 | BLAKE  |
|  7782 | CLARK  |
|  7788 | SCOTT  |
|  7839 | KING   |
|  7844 | TURNER |
|  7876 | ADAMS  |
|  7900 | JAMES  |
|  7902 | FORD   |
|  7934 | MILLER |
+-------+--------+
14 rows in set (0.00 sec)
```


> 字段的`前后顺序`无所谓（`只是显示结果列的时候顺序变了`）：

```sql
select ename, empno from emp;
```

```sql
mysql> select ename,empno from emp;
+--------+-------+
| ename  | empno |
+--------+-------+
| SMITH  |  7369 |
| ALLEN  |  7499 |
| WARD   |  7521 |
| JONES  |  7566 |
| MARTIN |  7654 |
| BLAKE  |  7698 |
| CLARK  |  7782 |
| SCOTT  |  7788 |
| KING   |  7839 |
| TURNER |  7844 |
| ADAMS  |  7876 |
| JAMES  |  7900 |
| FORD   |  7902 |
| MILLER |  7934 |
+--------+-------+
14 rows in set (0.00 sec)
```

> `任务1`：查询`部门编号`、`部门名称`以及`位置`。

```sql
mysql> desc dept;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| DEPTNO | int         | NO   | PRI | NULL    |       |
| DNAME  | varchar(14) | YES  |     | NULL    |       |
| LOC    | varchar(13) | YES  |     | NULL    |       |
+--------+-------------+------+-----+---------+-------+
3 rows in set (0.01 sec)

mysql> select deptno,dname,loc from dept;
+--------+------------+----------+
| deptno | dname      | loc      |
+--------+------------+----------+
|     10 | ACCOUNTING | NEW YORK |
|     20 | RESEARCH   | DALLAS   |
|     30 | SALES      | CHICAGO  |
|     40 | OPERATIONS | BOSTON   |
+--------+------------+----------+
4 rows in set (0.00 sec)
```

> `任务2`：查询员工的`名字`以及`工作岗位`。

```sql
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

mysql> select ename,job from emp;
+--------+-----------+
| ename  | job       |
+--------+-----------+
| SMITH  | CLERK     |
| ALLEN  | SALESMAN  |
| WARD   | SALESMAN  |
| JONES  | MANAGER   |
| MARTIN | SALESMAN  |
| BLAKE  | MANAGER   |
| CLARK  | MANAGER   |
| SCOTT  | ANALYST   |
| KING   | PRESIDENT |
| TURNER | SALESMAN  |
| ADAMS  | CLERK     |
| JAMES  | CLERK     |
| FORD   | ANALYST   |
| MILLER | CLERK     |
+--------+-----------+
14 rows in set (0.00 sec)
```


## 查所有字段

---

查询所有字段的可以将`每个字段都列出来`查询，也可以采用“`*`”来代表`所有字段`

> 案例1：查询`员工的所有信息`

```sql
select * from emp;
```

```sql
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
```


> 案例2：查询`所有部门信息`

```sql
select * from dept;
```

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
```
> 采用“`*`”进行查询存在的缺点：

- select * from dept; 在执行的时候会被解析为 `select DEPTNO, DNAME, LOC from dept;` 再执行，所以这种效率方面弱一些。
- 采用“`*`”的`可读性较差`，通过“*”很难看出都有哪些具体的字段。

> 什么时候使用“`*`”？

- 这个SQL语句不在项目编码中使用，如果平时自己想快速查看表中所有数据的话，这种写法还是很给力的。


> `任务1`：查询所有的`薪资等级`以及`每个薪资等级的最低工资和最高工资`。

```sql
select * from salgrade;
```

```sql
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


## 查询时字段可参与数学运算

---

在进行查询操作的时候，字段是可以参与`数学运算`的，例如`加减乘除`等。

> 案例1：查询`每个员工的月薪`

```sql
select ename, sal from emp;
```

```sql
mysql> select ename ,sal from emp;
+--------+---------+
| ename  | sal     |
+--------+---------+
| SMITH  |  800.00 |
| ALLEN  | 1600.00 |
| WARD   | 1250.00 |
| JONES  | 2975.00 |
| MARTIN | 1250.00 |
| BLAKE  | 2850.00 |
| CLARK  | 2450.00 |
| SCOTT  | 3000.00 |
| KING   | 5000.00 |
| TURNER | 1500.00 |
| ADAMS  | 1100.00 |
| JAMES  |  950.00 |
| FORD   | 3000.00 |
| MILLER | 1300.00 |
+--------+---------+
14 rows in set (0.00 sec)
```


> 案例2：查询`每个员工的年薪（月薪 * 12）`

```sql
select ename, sal * 12 from emp;
```

```sql
mysql> select ename ,sal*12 from emp;
+--------+----------+
| ename  | sal*12   |
+--------+----------+
| SMITH  |  9600.00 |
| ALLEN  | 19200.00 |
| WARD   | 15000.00 |
| JONES  | 35700.00 |
| MARTIN | 15000.00 |
| BLAKE  | 34200.00 |
| CLARK  | 29400.00 |
| SCOTT  | 36000.00 |
| KING   | 60000.00 |
| TURNER | 18000.00 |
| ADAMS  | 13200.00 |
| JAMES  | 11400.00 |
| FORD   | 36000.00 |
| MILLER | 15600.00 |
+--------+----------+
14 rows in set (0.00 sec)
```

> `任务1`：查询`每个员工月薪加1000`之后的`月薪`

```sql
select ename,sal+1000 from emp;
```

```sql
mysql> select ename ,sal+1000 from emp;
+--------+----------+
| ename  | sal+1000 |
+--------+----------+
| SMITH  |  1800.00 |
| ALLEN  |  2600.00 |
| WARD   |  2250.00 |
| JONES  |  3975.00 |
| MARTIN |  2250.00 |
| BLAKE  |  3850.00 |
| CLARK  |  3450.00 |
| SCOTT  |  4000.00 |
| KING   |  6000.00 |
| TURNER |  2500.00 |
| ADAMS  |  2100.00 |
| JAMES  |  1950.00 |
| FORD   |  4000.00 |
| MILLER |  2300.00 |
+--------+----------+
14 rows in set (0.00 sec)
```


> `任务2`：查询`每个员工月薪加1000`之后的`年薪`

```sql
select ename,(sal+1000)*12 from emp;
```

```sql
mysql> select ename ,(sal+1000)*12 from emp;
+--------+---------------+
| ename  | (sal+1000)*12 |
+--------+---------------+
| SMITH  |      21600.00 |
| ALLEN  |      31200.00 |
| WARD   |      27000.00 |
| JONES  |      47700.00 |
| MARTIN |      27000.00 |
| BLAKE  |      46200.00 |
| CLARK  |      41400.00 |
| SCOTT  |      48000.00 |
| KING   |      72000.00 |
| TURNER |      30000.00 |
| ADAMS  |      25200.00 |
| JAMES  |      23400.00 |
| FORD   |      48000.00 |
| MILLER |      27600.00 |
+--------+---------------+
14 rows in set (0.00 sec)
```


## 查询时字段可起别名

---

我们借用一下之前的SQL语句

```sql
select ename, sal * 12 from emp;
```

![image.png](https://cdn.nlark.com/yuque/0/2021/png/21376908/1620453661204-ca783845-5f31-49fc-90d8-0f4426598cde.png#averageHue=%2313100f&height=364&id=EQnXg&originHeight=364&originWidth=387&originalType=binary&ratio=1&rotation=0&showTitle=false&size=22636&status=done&style=shadow&title=&width=387)
以上的查询结果列名“sal * 12”可读性较差，是否可以给查询结果的列名进行重命名呢？

### as关键字

- 使用as关键字

```sql
select ename, sal * 12 as yearsal from emp;
```

![image.png](https://cdn.nlark.com/yuque/0/2021/png/21376908/1620454420847-c739365b-440e-4cf7-b1e2-2bcf6d5cdb8b.png#averageHue=%2312100f&height=372&id=NImNH&originHeight=372&originWidth=473&originalType=binary&ratio=1&rotation=0&showTitle=false&size=25001&status=done&style=shadow&title=&width=473)
通过as关键字起别名后，查询结果列显示yearsal，可读性增强。
![](https://cdn.nlark.com/yuque/0/2023/jpeg/21376908/1692002570088-3338946f-42b3-4174-8910-7e749c31e950.jpeg#averageHue=%23f9f8f8&from=url&id=G4NWU&originHeight=78&originWidth=1400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=shadow&title=)

### 省略as关键字

- 其实as关键字可以省略，只要使用空格即可

```sql
select ename, sal * 12 yearsal from emp;
```

![image.png](https://cdn.nlark.com/yuque/0/2021/png/21376908/1620466356467-fb4612f8-72f6-4506-b2bc-1744846c171d.png#averageHue=%2311100e&height=363&id=XWTbX&originHeight=363&originWidth=464&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24234&status=done&style=shadow&title=&width=464)

- 通过以上测试，得知as可以省略，可以使用空格代替as，但如果别名中有空格呢？

### 别名中有空格

```sql
select ename, sal * 12 year sal from emp;
```

![image.png](https://cdn.nlark.com/yuque/0/2021/png/21376908/1620466540145-98adb10e-15a2-46df-9179-7e41ae1fc322.png#averageHue=%2313110f&height=87&id=LnbYI&originHeight=87&originWidth=946&originalType=binary&ratio=1&rotation=0&showTitle=false&size=12503&status=done&style=shadow&title=&width=946)
可以看出，执行报错了，说语法有问题，这是为什么？分析一下：SQL语句编译器在检查该语句的时候，在year后面遇到了空格，会继续找from关键字，但year后面不是from关键字，所以编译器报错了。怎么解决这个问题？记住：如果别名中有空格的话，可以将这个别名使用双引号或者单引号将其括起来。

```sql
select ename, sal * 12 "year sal" from emp;
select ename, sal * 12 'year sal' from emp;
```

![image.png](https://cdn.nlark.com/yuque/0/2021/png/21376908/1620467027246-b5cce57e-3ca3-4b3f-9298-a21fc3bb77c3.png#averageHue=%23110f0e&height=744&id=kyi8P&originHeight=744&originWidth=558&originalType=binary&ratio=1&rotation=0&showTitle=false&size=53259&status=done&style=shadow&title=&width=558)
**在mysql中，字符串既可以使用双引号也可以使用单引号，但还是建议使用单引号，因为单引号属于标准SQL。**
![](https://cdn.nlark.com/yuque/0/2023/jpeg/21376908/1692002570088-3338946f-42b3-4174-8910-7e749c31e950.jpeg#averageHue=%23f9f8f8&from=url&id=V2sJs&originHeight=78&originWidth=1400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=shadow&title=)

### 别名中有中文

- 如果别名采用中文呢？

```sql
select ename, sal * 12 年薪 from emp;
```

![image.png](https://cdn.nlark.com/yuque/0/2021/png/21376908/1620467760618-b5df74f5-c8ee-4e39-88a9-e10fde59bb56.png#averageHue=%2311100e&height=373&id=AsiUs&originHeight=373&originWidth=445&originalType=binary&ratio=1&rotation=0&showTitle=false&size=24025&status=done&style=shadow&title=&width=445)
**别名是中文是可以的，但是对于低版本的mysql来说会报错，需要添加双引号或单引号。**我们当前使用的mysql版本是：8.0.24

- [ ] 任务：查询所有员工的信息，要求每个字段名采用中文显示。

![](https://cdn.nlark.com/yuque/0/2023/jpeg/21376908/1692002570088-3338946f-42b3-4174-8910-7e749c31e950.jpeg#averageHue=%23f9f8f8&from=url&id=e5sVc&originHeight=78&originWidth=1400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=shadow&title=)