# MySQL | DQL语句-distinct去重

![MySQL安装教程](./MySQL安装教程/MySQL.png)

查询工作岗位

```sql
select job from emp;
```

```sql
mysql> select job from emp;

+-----------+
| job       |
+-----------+
| CLERK     |
| SALESMAN  |
| SALESMAN  |
| MANAGER   |
| SALESMAN  |
| MANAGER   |
| MANAGER   |
| ANALYST   |
| PRESIDENT |
| SALESMAN  |
| CLERK     |
| CLERK     |
| ANALYST   |
| CLERK     |
+-----------+
14 rows in set (0.00 sec)
```
> **可以看到工作岗位中有`重复的记录`，如何在显示的时候去除重复记录呢？在`字段前添加distinct关键字`**。

```sql
select distinct job from emp;
```

```sql
mysql> select distinct job from emp; 

+-----------+
| job       |
+-----------+
| CLERK     |
| SALESMAN  |
| MANAGER   |
| ANALYST   |
| PRESIDENT |
+-----------+
5 rows in set (0.00 sec)
```
> **注意：这个`去重`只是将`显示的结果去重`，`原表数据`不会被更改。**

>> 接下来测试一下，`在distinct关键字前添加其它字段`是否可以？

```sql
select ename, distinct job from emp;
```
> **分析一下：`ename是14条记录`，`distinct job是5条记录`，可以同时显示吗？**

```sql
mysql> select ename, distinct job from emp;

ERROR 1064 (42000): You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'distinct job from emp' at line 1 
```
> **报错了，通过测试得知，`distinct只能出现在所有字段的最前面`。**
**当distinct出现后，后面`多个字段一定是联合去重`的**，我们来做两个练习就知道了：

> `练习1`：找出公司中`所有的工作岗位`。

```sql
select distinct job from emp;
```

```sql
mysql> select distinct job from emp;

+-----------+
| job       |
+-----------+
| CLERK     |
| SALESMAN  |
| MANAGER   |
| ANALYST   |
| PRESIDENT |
+-----------+
5 rows in set (0.00 sec)
```

> `练习2`：找出公司中`不同部门的不同工作岗位`。

```sql
select distinct deptno,job from emp;
```

```sql
mysql> select distinct deptno,job from emp;

+--------+-----------+
| deptno | job       |
+--------+-----------+
|     20 | CLERK     |
|     30 | SALESMAN  |
|     20 | MANAGER   |
|     30 | MANAGER   |
|     10 | MANAGER   |
|     20 | ANALYST   |
|     10 | PRESIDENT |
|     30 | CLERK     |
|     10 | CLERK     |
+--------+-----------+
9 rows in set (0.00 sec)
```