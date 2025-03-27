# MySQL | DQL语句-分组函数-查询

![MySQL安装教程](./MySQL安装教程/MySQL.png)

---

## 分组函数

**分组函数的执行原则：先分组，然后对每一组数据执行分组函数。如果没有分组语句group by的话，整张表的数据自成一组。**

分组函数包括五个：
- max：最大值
- min：最小值
- avg：平均值
- sum：求和
- count：计数

### max
**找出员工的最高薪资**
```sql
select max(sal) from emp;
```
```sql
mysql> select max(sal) from emp;
+----------+
| max(sal) |
+----------+
|  5000.00 |
+----------+
1 row in set (0.01 sec)
```

### min
**找出员工的最低工资**
```sql
select min(sal) from emp;
```
```sql
mysql> select min(sal) from emp;
+----------+
| min(sal) |
+----------+
|   800.00 |
+----------+
1 row in set (0.00 sec)
```

### avg
**计算员工的平均薪资**
```sql
select avg(sal) from emp;
```
```sql
mysql> select avg(sal) from emp;
+-------------+
| avg(sal)    |
+-------------+
| 2073.214286 |
+-------------+
1 row in set (0.00 sec)
```

### sum
**计算员工的工资和**
```sql
select sum(sal) from emp;
```
```sql
mysql> select sum(sal) from emp;
+----------+
| sum(sal) |
+----------+
| 29025.00 |
+----------+
1 row in set (0.00 sec)
```
**计算员工的津贴之和**
```sql
select sum(comm) from emp;
```
```sql
mysql> select sum(comm) from emp;
+-----------+
| sum(comm) |
+-----------+
|   2200.00 |
+-----------+
1 row in set (0.00 sec)
```

> 查询所有员工信息

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
14 rows in set (0.01 sec)
```
> **重点：`所有的分组函数都是自动忽略NULL的`。**

### count

**统计员工人数**

```sql
select count(ename) from emp;
select count(*) from emp;
select count(1) from emp;
```
```sql
mysql> select count(ename) from emp;
+--------------+
| count(ename) |
+--------------+
|           14 |
+--------------+
1 row in set (0.00 sec)

mysql> select count(*) from emp;
+----------+
| count(*) |
+----------+
|       14 |
+----------+
1 row in set (0.42 sec)

mysql> select count(1) from emp;
+----------+
| count(1) |
+----------+
|       14 |
+----------+
1 row in set (0.01 sec)
```
+ `count(*)和count(1)`的效果一样，`统计该组中总记录行数`。
+ `count(ename)`统计的是这个`ename字段中不为NULL个数总和`。

> 例如：`count(comm) 结果是 4，而不是14`

```sql
select count(comm) from emp;
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

mysql> select count(comm) from emp;
+-------------+
| count(comm) |
+-------------+
|           4 |
+-------------+
1 row in set (0.00 sec)
```
总结:
- `count(*)`：统计该组中总记录行数。
- `count(ename)`：统计这个`ename`字段中不为NULL个数总和。
- `count(1)`：统计该组中总记录行数。
- `count(字段)`：统计这个`字段`中不为NULL个数总和。


**统计岗位数量**
```sql
select count(distinct job) from emp;
```
```sql
mysql> select count(distinct job) from emp;
+---------------------+
| count(distinct job) |
+---------------------+
|                   5 |
+---------------------+
1 row in set (0.01 sec)
```

## 分组函数组合使用

```sql
mysql> select count(*),max(sal),min(sal),avg(sal),sum(sal) from emp;
+----------+----------+----------+-------------+----------+
| count(*) | max(sal) | min(sal) | avg(sal)    | sum(sal) |
+----------+----------+----------+-------------+----------+
|       14 |  5000.00 |   800.00 | 2073.214286 | 29025.00 |
+----------+----------+----------+-------------+----------+
1 row in set (0.01 sec)
```

## 分组函数注意事项

**分组函数不能直接使用在where子句当中**

select ename,job from emp where sal > avg(sal); 这个会报错的
```sql
mysql> select ename,job from emp where sal > avg(sal);
ERROR 1111 (HY000): Invalid use of group function
```
> 原因：分组函数的执行原则是先分组，然后对每一组数据执行分组函数。但是where子句的执行是在分组之后，所以不能使用分组函数。


## 分组查询

### group by

按照`某个字段分组`，或者按照`某些字段联合分组`。注意：group by的执行是在where之后执行。

语法：
group by 字段
group by 字段1,字段2,字段3....

**找出每个岗位的平均薪资**
```sql
select job, avg(sal) from emp group by job;
```
```sql
mysql> select job,avg(sal) from emp group by job;
+-----------+-------------+
| job       | avg(sal)    |
+-----------+-------------+
| CLERK     | 1037.500000 |
| SALESMAN  | 1400.000000 |
| MANAGER   | 2758.333333 |
| ANALYST   | 3000.000000 |
| PRESIDENT | 5000.000000 |
+-----------+-------------+
5 rows in set (0.01 sec)
```

**找出每个部门最高工资**
```sql
select deptno,max(sal) from emp group by deptno;
```
```sql
mysql> select deptno,max(sal) from emp group by deptno;
+--------+----------+
| deptno | max(sal) |
+--------+----------+
|     20 |  3000.00 |
|     30 |  2850.00 |
|     10 |  5000.00 |
+--------+----------+
3 rows in set (0.01 sec)
```

**找出每个部门不同岗位的平均薪资**
```sql
select deptno,job,avg(sal) from emp group by deptno,job;
```
```sql
mysql> select deptno,job,avg(sal) from emp group by deptno,job;
+--------+-----------+-------------+
| deptno | job       | avg(sal)    |
+--------+-----------+-------------+
|     20 | CLERK     |  950.000000 |
|     30 | SALESMAN  | 1400.000000 |
|     20 | MANAGER   | 2975.000000 |
|     30 | MANAGER   | 2850.000000 |
|     10 | MANAGER   | 2450.000000 |
|     20 | ANALYST   | 3000.000000 |
|     10 | PRESIDENT | 5000.000000 |
|     30 | CLERK     |  950.000000 |
|     10 | CLERK     | 1300.000000 |
+--------+-----------+-------------+
9 rows in set (0.00 sec)
```

**当select语句中`有group by的话`，select后面`只能跟分组函数或参加分组的字段`**
```sql
select ename,deptno,avg(sal) from emp group by deptno; // 这个SQL执行后会报错。
```
```sql
mysql> select ename,deptno,avg(sal) from emp group by deptno;
ERROR 1055 (42000): Expression #1 of SELECT list is not in GROUP BY clause and contains nonaggregated column 'powernode.emp.ENAME' which is not functionally dependent on columns in GROUP BY clause; this is incompatible with sql_mode=only_full_group_by
```

### having

having写在`group by的后面`，当你对分组之后的数据不满意，可以继续`通过having对分组之后的数据进行过滤`。
`where的过滤是在分组前进行过滤`。

使用原则：`尽量在where中过滤`，实在不行，`再使用having`。越早过滤效率越高。

**找出除20部门之外，其它部门的平均薪资。**
```sql
select deptno,avg(sal) from emp where deptno<>20 group by deptno; // 建议
select deptno,avg(sal) from emp group by deptno having deptno <> 20; // 不建议
```
```sql
mysql> select deptno ,avg(sal) from emp where deptno<>20 group by deptno;
+--------+-------------+
| deptno | avg(sal)    |
+--------+-------------+
|     30 | 1566.666667 |
|     10 | 2916.666667 |
+--------+-------------+
2 rows in set (0.01 sec)

mysql> select deptno ,avg(sal) from emp group by deptno having deptno<>20;
+--------+-------------+
| deptno | avg(sal)    |
+--------+-------------+
|     30 | 1566.666667 |
|     10 | 2916.666667 |
+--------+-------------+
2 rows in set (0.01 sec)
```

**查询每个部门平均薪资，找出平均薪资高于2000的。**
```sql
select deptno,avg(sal) from emp group by deptno having avg(sal) > 2000;
```
```sql
mysql> select deptno,avg(sal) from emp group by deptno having avg(sal) > 2000;
+--------+-------------+
| deptno | avg(sal)    |
+--------+-------------+
|     20 | 2175.000000 |
|     10 | 2916.666667 |
+--------+-------------+
2 rows in set (0.00 sec)
```

### 组内排序

案例：找出每个工作岗位的工资排名在前两名的。

> **`substring_index函数`的使用：**

```sql
mysql> select substring_index('http://www.baidu.com','.',1);
+-----------------------------------------------+
| substring_index('http://www.baidu.com','.',1) |
+-----------------------------------------------+
| http://www                                    |
+-----------------------------------------------+
1 row in set (0.01 sec)

mysql> select substring_index('http://www.baidu.com','.',2);
+-----------------------------------------------+
| substring_index('http://www.baidu.com','.',2) |
+-----------------------------------------------+
| http://www.baidu                              |
+-----------------------------------------------+
1 row in set (0.00 sec)
```

> **`group_concat函数`的使用：**

```sql
mysql> select group_concat(empno) from emp group by job;
+---------------------+
| group_concat(empno) |
+---------------------+
| 7788,7902           |
| 7369,7876,7900,7934 |
| 7566,7698,7782      |
| 7839                |
| 7499,7521,7654,7844 |
+---------------------+
5 rows in set (0.01 sec)

mysql> select group_concat(empno order by sal desc) from emp group by job;
+---------------------------------------+
| group_concat(empno order by sal desc) |
+---------------------------------------+
| 7902,7788                             |
| 7934,7876,7900,7369                   |
| 7566,7698,7782                        |
| 7839                                  |
| 7499,7844,7654,7521                   |
+---------------------------------------+
5 rows in set (0.00 sec)

mysql> select substring_index(group_concat(empno order by sal desc),',',2) from emp group by job;
+--------------------------------------------------------------+
| substring_index(group_concat(empno order by sal desc),',',2) |
+--------------------------------------------------------------+
| 7902,7788                                                    |
| 7934,7876                                                    |
| 7566,7698                                                    |
| 7839                                                         |
| 7499,7844                                                    |
+--------------------------------------------------------------+
5 rows in set (0.01 sec)
```


## 总结单表的DQL语句

+ select ...5
+ from ...1
+ where ...2
+ group by ...3
+ having ...4
+ order by ...6

> **重点掌握一个完整的DQL语句执行顺序。**