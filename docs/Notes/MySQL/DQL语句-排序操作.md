# MySQL | DQL语句-排序操作

![MySQL安装教程](./MySQL安装教程/MySQL.png)

---

> 排序操作很常用，比如`查询学员成绩，按照成绩降序排列`。**`排序的SQL语法`**：

```sql
select .. from .. order by 字段 asc/desc
```
- `select .. from ..`：查询语句
- `order by 字段`：排序语句
- `字段`：要排序的字段名
- `asc`：升序，默认排序方式
- `desc`：降序

## 单一字段升序

> 查询员工的`编号、姓名、薪资`，按照`薪资升序排列`。

```sql
select empno,ename,sal from emp order by sal asc;
```

```sql
mysql> select empno,ename,sal from emp order by sal asc;

+-------+--------+---------+
| empno | ename  | sal     |
+-------+--------+---------+
|  7369 | SMITH  |  800.00 |
|  7900 | JAMES  |  950.00 |
|  7876 | ADAMS  | 1100.00 |
|  7521 | WARD   | 1250.00 |
|  7654 | MARTIN | 1250.00 |
|  7934 | MILLER | 1300.00 |
|  7844 | TURNER | 1500.00 |
|  7499 | ALLEN  | 1600.00 |
|  7782 | CLARK  | 2450.00 |
|  7698 | BLAKE  | 2850.00 |
|  7566 | JONES  | 2975.00 |
|  7788 | SCOTT  | 3000.00 |
|  7902 | FORD   | 3000.00 |
|  7839 | KING   | 5000.00 |
+-------+--------+---------+
14 rows in set (0.00 sec)
```

## 单一字段降序

> 查询员工的`编号、姓名、薪资`，按照`薪资降序排列`。

```sql
select empno,ename,sal from emp order by sal desc;
```

```sql
mysql> select empno,ename,sal from emp order by sal desc;

+-------+--------+---------+
| empno | ename  | sal     |
+-------+--------+---------+
|  7839 | KING   | 5000.00 |
|  7788 | SCOTT  | 3000.00 |
|  7902 | FORD   | 3000.00 |
|  7566 | JONES  | 2975.00 |
|  7698 | BLAKE  | 2850.00 |
|  7782 | CLARK  | 2450.00 |
|  7499 | ALLEN  | 1600.00 |
|  7844 | TURNER | 1500.00 |
|  7934 | MILLER | 1300.00 |
|  7521 | WARD   | 1250.00 |
|  7654 | MARTIN | 1250.00 |
|  7876 | ADAMS  | 1100.00 |
|  7900 | JAMES  |  950.00 |
|  7369 | SMITH  |  800.00 |
+-------+--------+---------+
14 rows in set (0.00 sec)
```

## 默认采用升序

> 查询员工的`编号、姓名、薪资`，按照`薪资升序排列`。

```sql
select empno,ename,sal from emp order by sal;
```

```sql
mysql> select empno,ename,sal from emp order by sal;

+-------+--------+---------+
| empno | ename  | sal     |
+-------+--------+---------+
|  7369 | SMITH  |  800.00 |
|  7900 | JAMES  |  950.00 |
|  7876 | ADAMS  | 1100.00 |
|  7521 | WARD   | 1250.00 |
|  7654 | MARTIN | 1250.00 |
|  7934 | MILLER | 1300.00 |
|  7844 | TURNER | 1500.00 |
|  7499 | ALLEN  | 1600.00 |
|  7782 | CLARK  | 2450.00 |
|  7698 | BLAKE  | 2850.00 |
|  7566 | JONES  | 2975.00 |
|  7788 | SCOTT  | 3000.00 |
|  7902 | FORD   | 3000.00 |
|  7839 | KING   | 5000.00 |
+-------+--------+---------+
14 rows in set (0.00 sec)
```

> 查询员工的`编号、姓名`，按照`姓名升序排列`。

```sql
select empno,ename from emp order by ename;
```

```sql
mysql> select empno,ename from emp order by ename;

+-------+--------+
| empno | ename  |
+-------+--------+
|  7876 | ADAMS  |
|  7499 | ALLEN  |
|  7698 | BLAKE  |
|  7782 | CLARK  |
|  7902 | FORD   |
|  7900 | JAMES  |
|  7566 | JONES  |
|  7839 | KING   |
|  7654 | MARTIN |
|  7934 | MILLER |
|  7788 | SCOTT  |
|  7369 | SMITH  |
|  7844 | TURNER |
|  7521 | WARD   |
+-------+--------+
14 rows in set (0.00 sec)
```

## 多个字段排序

> 查询员工的`编号、姓名、薪资`，按照`薪资升序排列`，如果`薪资相同的`，再按照`姓名升序排列`。

```sql
select empno,ename,sal from emp order by sal asc, ename asc;
```

```sql
mysql> select empno,ename,sal from emp order by sal asc, ename asc;

+-------+--------+---------+
| empno | ename  | sal     |
+-------+--------+---------+
|  7369 | SMITH  |  800.00 |
|  7900 | JAMES  |  950.00 |
|  7876 | ADAMS  | 1100.00 |
|  7654 | MARTIN | 1250.00 |
|  7521 | WARD   | 1250.00 |
|  7934 | MILLER | 1300.00 |
|  7844 | TURNER | 1500.00 |
|  7499 | ALLEN  | 1600.00 |
|  7782 | CLARK  | 2450.00 |
|  7698 | BLAKE  | 2850.00 |
|  7566 | JONES  | 2975.00 |
|  7902 | FORD   | 3000.00 |
|  7788 | SCOTT  | 3000.00 |
|  7839 | KING   | 5000.00 |
+-------+--------+---------+
14 rows in set (0.00 sec)
```

## where和order by的位置

> 找出`岗位是MANAGER`的员工`姓名和薪资`，按照`薪资升序排列`。

```sql
select ename,sal from emp where job = 'MANAGER' order by sal asc;
```

```sql
mysql> select ename,sal from emp where job = 'MANAGER' order by sal asc;
+-------+---------+
| ename | sal     |
+-------+---------+
| CLARK | 2450.00 |
| BLAKE | 2850.00 |
| JONES | 2975.00 |
+-------+---------+
3 rows in set (0.00 sec)
```
> **通过这个例子主要是想告诉大家：`where先执行`，`order by语句`是`最后执行`的。**