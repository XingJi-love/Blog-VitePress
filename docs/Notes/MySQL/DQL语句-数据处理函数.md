# MySQL | DQL语句-数据处理函数

![MySQL安装教程](./MySQL安装教程/MySQL.png)

---

```sql
mysql> select ename from emp; -- 查询所有员工名字

+--------+
| ename  |
+--------+
| SMITH  |
| ALLEN  |
| WARD   |
| JONES  |
| MARTIN |
| BLAKE  |
| CLARK  |
| SCOTT  |
| KING   |
| TURNER |
| ADAMS  |
| JAMES  |
| FORD   |
| MILLER |
+--------+
14 rows in set (0.00 sec)
```
> 关于select语句，我们之前都是这样写：`select 字段名 from 表名;` 其实，这里的`字段名可以看做“变量”`，select后面`既然可以跟变量`，那么`可以跟常量`吗，尝试一下：

```sql
mysql> select 100;

+-----+
| 100 |
+-----+
| 100 |
+-----+
1 row in set (0.00 sec)

mysql> select 100 as ename;

+-------+
| ename |
+-------+
|   100 |
+-------+
1 row in set (0.00 sec)

mysql> select 'abc';

+-----+
| abc |
+-----+
| abc |
+-----+
1 row in set (0.00 sec)

mysql> select abc;
ERROR 1054 (42S22): Unknown column 'abc' in 'field list'
```
> 通过以上sql的测试得知，`select后面既可以跟变量，又可以跟常量`。

> 以上三条SQL中`前两条中100和'abc'都是常量`，`最后一条SQL的abc没有添加单引号`，它会被当做某个表的字段名，因为没有这个字段所以报错。 

## 字符串相关

### 转大写upper和ucase

```sql
# 查询所有员工名字，以大写形式展现
select upper(ename) as ename from emp;
```

```sql
mysql> select upper(ename) as ename from emp;
                                    
+--------+
| ename  |
+--------+
| SMITH  |
| ALLEN  |
| WARD   |
| JONES  |
| MARTIN |
| BLAKE  |
| CLARK  |
| SCOTT  |
| KING   |
| TURNER |
| ADAMS  |
| JAMES  |
| FORD   |
| MILLER |
+--------+
14 rows in set (0.03 sec)
```

> 还有一个和`upper函数`功能相同的函数`ucase`，也可以`转大写`，了解一下即可：

```sql
# 查询所有员工姓名，以大写形式展现
select ucase(ename) as ename from emp;
```

```sql
mysql> select ucase(ename) as ename from emp;

+--------+
| ename  |
+--------+
| SMITH  |
| ALLEN  |
| WARD   |
| JONES  |
| MARTIN |
| BLAKE  |
| CLARK  |
| SCOTT  |
| KING   |
| TURNER |
| ADAMS  |
| JAMES  |
| FORD   |
| MILLER |
+--------+
14 rows in set (0.00 sec)
```

```sql
# 查询员工smith的岗位、薪资（假如你不知道数据库表中的人名是大写、小写还是大小写混合）
select ename, job, sal from emp where upper(ename) = 'SMITH';
```

```sql
mysql> select ename,job,sal from emp where upper(ename)='SMITH';

+-------+-------+--------+
| ename | job   | sal    |
+-------+-------+--------+
| SMITH | CLERK | 800.00 |
+-------+-------+--------+
1 row in set (0.00 sec)
```

### 转小写lower和lcase
**很简单，不再赘述，直接上代码：**
```sql
# 查询员工姓名，以小写形式展现
select lower(ename) as ename from emp;
select lcase(ename) as ename from emp;
```

```sql
mysql> select lower(ename) as ename from emp;

+--------+
| ename  |
+--------+
| smith  |
| allen  |
| ward   |
| jones  |
| martin |
| blake  |
| clark  |
| scott  |
| king   |
| turner |
| adams  |
| james  |
| ford   |
| miller |
+--------+
14 rows in set (0.00 sec)
```

```sql
mysql> select lcase(ename) as ename from emp;

+--------+
| ename  |
+--------+
| smith  |
| allen  |
| ward   |
| jones  |
| martin |
| blake  |
| clark  |
| scott  |
| king   |
| turner |
| adams  |
| james  |
| ford   |
| miller |
+--------+
14 rows in set (0.00 sec)
```

### 截取字符串substr

> **语法：`substr('被截取的字符串', 起始下标, 截取长度)`**

>> 有两种写法：

> 第一种：`substr('被截取的字符串', 起始下标, 截取长度)`

> 第二种：`substr('被截取的字符串', 起始下标)`，当第三个参数“截取长度”缺失时，截取到字符串末尾

> **注意：`起始下标从1开始，不是从0开始`。（`1`表示`从左侧开始的第一个位置`，`-1`表示`从右侧开始的第一个位置`。）**

```sql
mysql> select substr('abcdef',1,3);

+----------------------+
| substr('abcdef',1,3) |
+----------------------+
| abc                  |
+----------------------+
1 row in set (0.00 sec)

mysql> select substr('abcdef',2,3);

+----------------------+
| substr('abcdef',2,3) |
+----------------------+
| bcd                  |
+----------------------+
1 row in set (0.00 sec)

mysql> select substr('abcdef',2);

+--------------------+
| substr('abcdef',2) |
+--------------------+
| bcdef              |
+--------------------+
1 row in set (0.00 sec)
```

> **`练习`：找出`员工名字`中`第二个字母是A`的**

```sql
select ename from emp where substr(ename, 2, 1) = 'A';
```

```sql
mysql> select ename from emp where substr(ename,2,1) = 'A';

+--------+
| ename  |
+--------+
| WARD   |
| MARTIN |
| JAMES  |
+--------+
3 rows in set (0.00 sec)
```

### 获取字符串长度length

> **`统计字节数`，而不是字符数。**

```sql
select length('你好123');
```

```sql
mysql> select length('你好123');

+-------------------+
| length('你好123') |
+-------------------+
|                 7 |
+-------------------+
1 row in set (0.00 sec)
```
**注意：`一个汉字是2个长度`。**

### 获取字符的个数char_length

> **`统计字符数`，而不是字节数。**

```sql
select char_length('你好123');
```

```sql 
mysql> select char_length('你好123');

+------------------------+
| char_length('你好123') |
+------------------------+
|                      5 |
+------------------------+
1 row in set (0.00 sec)
```

### 字符串拼接

> 语法：`concat('字符串1', '字符串2', '字符串3'....)`

> 拼接的`字符串数量没有限制`。

```sql
select concat('abc', 'def', 'xyz');
```

```sql
mysql> select concat('abc','def','xyz');

+---------------------------+
| concat('abc','def','xyz') |
+---------------------------+
| abcdefxyz                 |
+---------------------------+
1 row in set (0.00 sec)
```
> 注意：在mysql8之前，双竖线||也是可以完成字符串拼接的。但在mysql8之后，`||只作为逻辑运算符`，**不能再进行字符串拼接了**。

```sql
select 'abc' || 'def' || 'xyz';
```
> mysql8之后，`|| 只作为“或者”运算符`，例如：找出`工资高于3000或者低于900`的`员工姓名和薪资`：

```sql
select ename, sal from emp where sal > 3000 || sal < 900;
```

```sql
mysql> select ename,sal from emp where sal > 3000 || sal < 900;

+-------+---------+
| ename | sal     |
+-------+---------+
| SMITH |  800.00 |
| KING  | 5000.00 |
+-------+---------+
2 rows in set, 1 warning (0.00 sec)
```
> **mysql中可以使用+进行字符串的拼接吗？**`不可以`，在mysql中+只作加法运算，在进行加法运算时，会将加号两边的数据尽最大的努力转换成数字再求和，如果无法转换成数字，最终运算结果通通是0


### 去除字符串前后空白trim

```sql
select concat(trim('    abc    '), 'def');
```

```sql
mysql> select concat(trim('    abc    '), 'def');

+------------------------------------+
| concat(trim('    abc    '), 'def') |
+------------------------------------+
| abcdef                             |
+------------------------------------+
1 row in set (0.00 sec)
```
> **默认是`去除前后空白`，也可以`去除指定的前缀后缀`**，例如：

>> **去除前置0**

```sql
select trim(leading '0' from '000111000');
```

```sql
mysql> select trim(leading '0' from '000111000');

+------------------------------------+
| trim(leading '0' from '000111000') |
+------------------------------------+
| 111000                             |
+------------------------------------+
1 row in set (0.00 sec)
```

>> **去除后置0**

```sql
select trim(trailing '0' from '000111000');
```

```sql
mysql> select trim(trailing '0' from '000111000');

+-------------------------------------+
| trim(trailing '0' from '000111000') |
+-------------------------------------+
| 000111                              |
+-------------------------------------+
1 row in set (0.00 sec)
```

>> **前置0和后置0全部去除**

```sql
select trim(both '0' from '000111000');
```

```sql
mysql> select trim(trailing '0' from '000111000');

+-------------------------------------+
| trim(trailing '0' from '000111000') |
+-------------------------------------+
| 000111                              |
+-------------------------------------+
1 row in set (0.00 sec)
```

## 数字相关

### rand()和rand(x)

> rand()生成`0到1的随机浮点数`。

```sql
mysql> select rand();

+--------------------+
| rand()             |
+--------------------+
| 0.4465609550909707 |
+--------------------+
1 row in set (0.00 sec)

mysql> select rand();

+--------------------+
| rand()             |
+--------------------+
| 0.3695505944728391 |
+--------------------+
1 row in set (0.00 sec)
```

> rand(x)生成`0到1的随机浮点数`，通过`指定整数x`来确定每次获取到`相同的浮点值`。

```sql
mysql> select rand(2);
+--------------------+
| rand(2)            |
+--------------------+
| 0.6555866465490187 |
+--------------------+
1 row in set (0.00 sec)

mysql> select rand(2);
+--------------------+
| rand(2)            |
+--------------------+
| 0.6555866465490187 |
+--------------------+
1 row in set (0.00 sec)

mysql> select rand(5);
+---------------------+
| rand(5)             |
+---------------------+
| 0.40613597483014313 |
+---------------------+
1 row in set (0.00 sec)

mysql> select rand(5);
+---------------------+
| rand(5)             |
+---------------------+
| 0.40613597483014313 |
+---------------------+
1 row in set (0.00 sec)
```


### round(x)和round(x,y)四舍五入

> round(x) `四舍五入`，`保留整数位，舍去所有小数`

```sql
mysql> select round(9.754);
+--------------+
| round(9.754) |
+--------------+
|           10 |
+--------------+
1 row in set (0.00 sec)

mysql> select round(9.454);
+--------------+
| round(9.454) |
+--------------+
|            9 |
+--------------+
1 row in set (0.00 sec)
```

> round(x,y) `四舍五入`，`保留y位小数`

```sql
mysql> select round(9.454,1);
+----------------+
| round(9.454,1) |
+----------------+
|            9.5 |
+----------------+
1 row in set (0.00 sec)

mysql> select round(9.454,0);
+----------------+
| round(9.454,0) |
+----------------+
|              9 |
+----------------+
1 row in set (0.00 sec)
```


### truncate(x, y)舍去

```sql
mysql> select truncate(9.999,2);
+-------------------+
| truncate(9.999,2) |
+-------------------+
|              9.99 |
+-------------------+
1 row in set (0.00 sec)
```
> 以上SQL表示`保留两位小数`，剩下的`全部舍去`。

### ceil与floor

> **数字处理函数除了以上的之外，还有ceil和floor函数**：

>> ceil(x) `向上取整`，`返回大于或等于x的最小整数`。

>> floor(x) `向下取整`，`返回小于或等于x的最大整数`。

```sql
mysql> select ceil(5.3);
+-----------+
| ceil(5.3) |
+-----------+
|         6 |
+-----------+
1 row in set (0.00 sec)

mysql> select floor(5.3);
+------------+
| floor(5.3) |
+------------+
|          5 |
+------------+
1 row in set (0.00 sec)
```


## 空处理

> **`ifnull(x, y)`，空处理函数，`当x为NULL`时，将`x当做y处理`。**

> **`ifnull(comm, 0)`，表示如果`员工的津贴是NULL时当做0处理`。**

>> **在SQL语句中，`凡是有NULL参与`的数学运算，最终的`计算结果都是NULL`**：

```sql
mysql> select null + 1;
+----------+
| null + 1 |
+----------+
|     NULL |
+----------+
1 row in set (0.01 sec)

mysql> select null * 10;
+-----------+
| null * 10 |
+-----------+
|      NULL |
+-----------+
1 row in set (0.00 sec)

mysql> select null * 0;
+----------+
| null * 0 |
+----------+
|     NULL |
+----------+
1 row in set (0.00 sec)
```

>> **看这样一个需求：`查询每个员工的年薪`。`（年薪 = (月薪 + 津贴) * 12个月`。注意：`有的员工津贴comm是NULL`。）**

```sql
mysql> select ename,(sal + comm) * 12 as yearsal from emp;

+--------+----------+
| ename  | yearsal  |
+--------+----------+
| SMITH  |     NULL |
| ALLEN  | 22800.00 |
| WARD   | 21000.00 |
| JONES  |     NULL |
| MARTIN | 31800.00 |
| BLAKE  |     NULL |
| CLARK  |     NULL |
| SCOTT  |     NULL |
| KING   |     NULL |
| TURNER | 18000.00 |
| ADAMS  |     NULL |
| JAMES  |     NULL |
| FORD   |     NULL |
| MILLER |     NULL |
+--------+----------+
14 rows in set (0.00 sec)
```

>> 以上查询结果中显示`SMITH等人的年薪是NULL`，这是为什么，这是因为`SMITH等人的津贴comm是NULL`，有`NULL参与的数学运算`，最终`结果都是NULL`，显然这个`需要空处理`，此时就用到了`ifnull函数`：

```sql
mysql> select ename,(sal + ifnull(comm, 0)) * 12 as yearsal from emp;

+--------+----------+
| ename  | yearsal  |
+--------+----------+
| SMITH  |  9600.00 |
| ALLEN  | 22800.00 |
| WARD   | 21000.00 |
| JONES  | 35700.00 |
| MARTIN | 31800.00 |
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

## 日期和时间相关函数

### 获取当前日期和时间

```sql
mysql> select now();
+---------------------+
| now()               |
+---------------------+
| 2025-03-22 17:56:34 |
+---------------------+
1 row in set (0.00 sec)

mysql> select sysdate();
+---------------------+
| sysdate()           |
+---------------------+
| 2025-03-22 17:56:38 |
+---------------------+
1 row in set (0.00 sec)

mysql> select now(), sleep(2), sysdate();
+---------------------+----------+---------------------+
| now()               | sleep(2) | sysdate()           |
+---------------------+----------+---------------------+
| 2025-03-22 17:57:14 |        0 | 2025-03-22 17:57:16 |
+---------------------+----------+---------------------+
1 row in set (2.00 sec)
```
> **注意：`now()`和`sysdate()`的区别**：

- now()：获取的是`执行select语句的时刻`。
- sysdate()：获取的是`执行sysdate()函数的时刻`。


### 获取当前日期

```sql
mysql> select curdate();
+------------+
| curdate()  |
+------------+
| 2025-03-22 |
+------------+
1 row in set (0.00 sec)

mysql> select current_date();
+----------------+
| current_date() |
+----------------+
| 2025-03-22     |
+----------------+
1 row in set (0.00 sec)

mysql> select current_date;
+--------------+
| current_date |
+--------------+
| 2025-03-22   |
+--------------+
1 row in set (0.00 sec)
```
> 获取当前日期有三种写法，掌握任意一种即可：

- curdate()
- current_date()
- current_date

### 获取当前时间

```sql
mysql> select curtime();
+-----------+
| curtime() |
+-----------+
| 18:16:27  |
+-----------+
1 row in set (0.01 sec)

mysql> select current_time();
+----------------+
| current_time() |
+----------------+
| 18:16:52       |
+----------------+
1 row in set (0.00 sec)

mysql> select current_time;
+--------------+
| current_time |
+--------------+
| 18:16:57     |
+--------------+
1 row in set (0.00 sec)
```
> 获取档期时间有三种写法，掌握其中一种即可：

- curtime()
- current_time()
- current_time


### 获取单独的年、月、日、时、分、秒

```sql
mysql> select year(now());
+-------------+
| year(now()) |
+-------------+
|        2025 |
+-------------+
1 row in set (0.00 sec)

mysql> select month(now());
+--------------+
| month(now()) |
+--------------+
|            3 |
+--------------+
1 row in set (0.01 sec)

mysql> select day(now());
+------------+
| day(now()) |
+------------+
|         22 |
+------------+
1 row in set (0.01 sec)

mysql> select hour(now());
+-------------+
| hour(now()) |
+-------------+
|          18 |
+-------------+
1 row in set (0.00 sec)

mysql> select minute(now());
+---------------+
| minute(now()) |
+---------------+
|            20 |
+---------------+
1 row in set (0.00 sec)

mysql> select second(now());
+---------------+
| second(now()) |
+---------------+
|            44 |
+---------------+
1 row in set (0.00 sec)
```
> 注意：这些函数在使用的时候，需要传递一个日期参数给它，它可以获取到你给定的这个`日期相关的年、月、日、时、分、秒的信息`。

>> 一次性提取一个`给定日期的“年月日”部分`，可以使用`date()函数`，例如：

```sql
mysql> select date(now());
+-------------+
| date(now()) |
+-------------+
| 2025-03-22  |
+-------------+
1 row in set (0.00 sec)
```

>> 一次性提取一个`给定日期的“时分秒”部分`，可以使用`time()函数`，例如：

```sql
mysql> select time(now());
+-------------+
| time(now()) |
+-------------+
| 18:28:01    |
+-------------+
1 row in set (0.00 sec)
```


### date_add函数

> `date_add函数的作用`：给指定的`日期添加间隔的时间`，从而得到一个`新的日期`。

>> date_add函数的语法格式：`date_add(日期, interval expr 单位)`，例如：

>> 以'2025-3-22'为基准，间隔3天之后的日期：'2025-3-25'

```sql
mysql> select date_add('2025-3-22', interval 3 day);
+---------------------------------------+
| date_add('2025-3-22', interval 3 day) |
+---------------------------------------+
| 2025-03-25                            |
+---------------------------------------+
1 row in set (0.00 sec)
```

>> 以'2025-03-22'为基准，间隔3个月之后的日期：'2025-06-22'
详细解释一下这个函数的相关参数：

```sql
mysql> select date_add('2025-3-22', interval 3 month);
+-----------------------------------------+
| date_add('2025-3-22', interval 3 month) |
+-----------------------------------------+
| 2025-06-22                              |
+-----------------------------------------+
1 row in set (0.00 sec)
```
- `日期`：一个`日期类型`的数据
- `interval`：`关键字`，翻译为`“间隔”`，固定写法
- `expr`：指定`具体的间隔量`，一般是`一个数字`。**也可以为`负数`，如果为`负数`，效果和`date_sub函数相同`**。
- 单位：
   - year：年
   - month：月
   - day：日
   - hour：时
   - minute：分
   - second：秒
   - microsecond：微秒（1秒等于1000毫秒，1毫秒等于1000微秒）
   - week：周
   - quarter：季度

> 请分析下面这条SQL语句所表达的含义：

```sql
mysql> select date_add('2025-3-22 19:16:16', interval -1 microsecond);

+---------------------------------------------------------+
| date_add('2025-3-22 19:16:16', interval -1 microsecond) |
+---------------------------------------------------------+
| 2025-03-22 19:16:15.999999                              |
+---------------------------------------------------------+
1 row in set (0.00 sec)
```
>> 以上SQL表示：`以2025-3-22 19:16:16为基准`，在这个`时间基础上添加-1微秒`，也就是`减去1微秒`。

> 以上SQL也可以`采用date_sub函数`完成，例如：

```sql
mysql> select date_sub('2025-3-22 19:16:16', interval 1 microsecond);

+--------------------------------------------------------+
| date_sub('2025-3-22 19:16:16', interval 1 microsecond) |
+--------------------------------------------------------+
| 2025-03-22 19:16:15.999999                             |
+--------------------------------------------------------+
1 row in set (0.00 sec)
```

> 另外，`单位也可以采用复合型单位`，例如：

- SECOND_MICROSECOND
- MINUTE_MICROSECOND
- MINUTE_SECOND：几分几秒之后
- HOUR_MICROSECOND
- HOUR_SECOND
- HOUR_MINUTE：几小时几分之后
- DAY_MICROSECOND
- DAY_SECOND
- DAY_MINUTE
- DAY_HOUR：几天几小时之后
- YEAR_MONTH：几年几个月之后

>> 如果`单位采用复合型`的话，expr该怎么写呢？例如单位采用：`day_hour`，假设我要`表示3天2小时之后`，怎么写？

```sql
mysql> select date_add('2025-3-22 19:16:16', interval '3,2' day_hour);

+---------------------------------------------------------+
| date_add('2025-3-22 19:16:16', interval '3,2' day_hour) |
+---------------------------------------------------------+
| 2025-03-25 21:16:16                                     |
+---------------------------------------------------------+
1 row in set (0.00 sec)
```
> `'3,2'`这个应该很好理解，表示`3天2个小时之后`。`'3,2'`和`day_hour`是对应的。


### date_format日期格式化函数

**将`日期`转换成`具有某种格式的日期字符串`，通常用在查询操作当中。（`date类型`转换成`char类型`）**

> 语法格式：`date_format(日期, '日期格式')`

>> 该函数有两个参数：

- 第一个参数：`日期`。这个参数就是`即将要被格式化的日期`。类型是`date类型`。
- 第二个参数：指定要`格式化的格式字符串`。
   - %Y：四位年份
   - %y：两位年份
   - %m：月份（1..12）
   - %d：日（1..30）
   - %H：小时（0..23）
   - %i：分（0..59）
   - %s：秒（0..59）

> 例如：获取当前系统时间，让其以这个格式展示：2025-03-22 19:36:58

```sql
mysql> select date_format(now(), '%Y-%m-%d %H:%i:%s');

+-----------------------------------------+
| date_format(now(), '%Y-%m-%d %H:%i:%s') |
+-----------------------------------------+
| 2025-03-22 19:36:58                     |
+-----------------------------------------+
```

> 注意：在mysql当中，默认的日期格式就是：`%Y-%m-%d %H:%i:%s`，所以当你`直接输出日期数据`的时候，会`自动转换成该格式的字符串`：

```sql
mysql> select now();

+---------------------+
| now()               |
+---------------------+
| 2025-03-22 19:41:19 |
+---------------------+
1 row in set (0.00 sec)
```

### str_to_date函数

***该函数的作用是`将char类型`的日期字符串转换成`日期类型date`，通常使用在`插入和修改`操作当中。（`char类型转换成date类型`）**

> 假设有一个`学生表t_student`，学生有一个`生日的字段`，类型是`date类型`：

```sql
drop table if exists t_student;
create table t_student(
  name varchar(255),
  birth date
);
desc t_student;
```
>> 我们要给这个表插入一条数据：`姓名zhangsan`，生日`85年10月1日`，执行以下`insert语句`：
```sql
mysql> insert into t_student (name, birth) values ('zhangsan','10/1/1985');

ERROR 1292 (22007): Incorrect date value: '10/1/1985' for column 'birth' at row 1
```

>> 错误原因：`日期值不正确`。意思是：birth字段需要一个日期，你给的这个字符串`'10/01/1985'`我识别不了。这种情况下，我们就可以使用`str_to_date函数`进行类型转换：

```sql
mysql> insert into t_student(name, birth) values('zhangsan', str_to_data('10/1/1985','%m%d%Y'));
Query OK, 1 row affected, 1 warning (0.02 sec)
```

```sql
mysql> select * from t_student;
+----------+------------+
| name     | birth      |
+----------+------------+
| zhangsan | 1985-10-01 |
+----------+------------+
1 row in set (0.00 sec)
```

>> 当然，如果你`提供的日期字符串格式`能够被mysql解析，`str_to_date函数`是可以`省略`的，底层会自动调用该函数进行类型转换：

```sql
mysql> insert into t_student (name, birth) values('zhangsan','1985-10-1');
Query OK, 1 row affected (0.02 sec)

mysql> insert into t_student (name, birth) values('zhangsan','85-10-1');
Query OK, 1 row affected (0.01 sec)

mysql> insert into t_student (name, birth) values('zhangsan','85/10/1');
Query OK, 1 row affected, 1 warning (0.01 sec)

mysql> insert into t_student (name, birth) values('zhangsan','1985/10/1');
Query OK, 1 row affected, 1 warning (0.01 sec)

mysql> select * from t_student;
+----------+------------+
| name     | birth      |
+----------+------------+
| zhangsan | 1985-10-01 |
| zhangsan | 1985-10-01 |
| zhangsan | 1985-10-01 |
| zhangsan | 1985-10-01 |
| zhangsan | 1985-10-01 |
+----------+------------+
5 rows in set (0.00 sec)
```
> 如果日期格式符合以上的几种格式，mysql都会自动进行类型转换的。


### dayofweek、dayofmonth、dayofyear函数

```sql
mysql> select dayofweek(now());
+------------------+
| dayofweek(now()) |
+------------------+
|                5 |
+------------------+
1 row in set (0.00 sec)

mysql> select dayofmonth(now());
+-------------------+
| dayofmonth(now()) |
+-------------------+
|                27 |
+-------------------+
1 row in set (0.01 sec)

mysql> select dayofyear(now());
+------------------+
| dayofyear(now()) |
+------------------+
|               86 |
+------------------+
1 row in set (0.00 sec)
```
+ **dayofweek：`一周中的第几天（1~7）`，周日是1，周六是7。**
+ **dayofmonth：`一个月中的第几天（1~31）`**
+ **dayofyear：`一年中的第几天（1~366）`**


### last_day函数

> 获取`给定日期所在月的最后一天`的日期：

```sql
mysql> select last_day(now());

+-----------------+
| last_day(now()) |
+-----------------+
| 2025-03-31      |
+-----------------+
1 row in set (0.01 sec)
```

### datediff函数

> 计算`两个日期之间所差天数`：

```sql
mysql> select datediff('1970-02-01 20:10:30', '1970-01-01');

+-----------------------------------------------+
| datediff('1970-02-01 20:10:30', '1970-01-01') |
+-----------------------------------------------+
|                                            31 |
+-----------------------------------------------+
1 row in set (0.01 sec)
```
> **`时分秒不算`，只`计算日期部分相差的天数`。**

### timediff函数

> **计算`两个日期所差时间`，例如日期1和日期2所差`10:20:30`，表示`差10小时20分钟30秒`。**

```sql
mysql> select timediff('1970-01-02 20:10:30','1970-01-01 20:09:30');

+-------------------------------------------------------+
| timediff('1970-01-02 20:10:30','1970-01-01 20:09:30') |
+-------------------------------------------------------+
| 24:01:00                                              |
+-------------------------------------------------------+
1 row in set (0.00 sec)
```

## if函数

> 如果`条件为TRUE则返回“YES”`，如果`条件为FALSE则返回“NO”`：

```sql
SELECT IF(500<1000, "YES", "NO");
```

> 例如：如果`工资高于3000`，`则输出1，反之则输出0`

```sql
mysql> select ename,if(sal > 3000, 1, 0) from emp;

+--------+----------------------+
| ename  | if(sal > 3000, 1, 0) |
+--------+----------------------+
| SMITH  |                    0 |
| ALLEN  |                    0 |
| WARD   |                    0 |
| JONES  |                    0 |
| MARTIN |                    0 |
| BLAKE  |                    0 |
| CLARK  |                    0 |
| SCOTT  |                    0 |
| KING   |                    1 |
| TURNER |                    0 |
| ADAMS  |                    0 |
| JAMES  |                    0 |
| FORD   |                    0 |
| MILLER |                    0 |
+--------+----------------------+
14 rows in set (0.01 sec)
```

> 再例如：如果`名字是SMITH`的，`工资上调10%`，`其他员工工资正常显示`。

```sql 
mysql> select ename,if(ename='SMITH', sal*1.1 ,sal) as sal from emp;

+--------+---------+
| ename  | sal     |
+--------+---------+
| SMITH  |  880.00 |
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

> 再例如：`工作岗位是MANAGER`的`工资上调10%`，是`SALESMAN`的`工资上调20%`，`其他岗位工资正常`。

```sql 
mysql> select ename,job,if(job='MANAGER', sal*1.1, if(job='SALESMAN',sal*1.2, sal)) as sal from emp;

+--------+-----------+---------+
| ename  | job       | sal     |
+--------+-----------+---------+
| SMITH  | CLERK     |  800.00 |
| ALLEN  | SALESMAN  | 1920.00 |
| WARD   | SALESMAN  | 1500.00 |
| JONES  | MANAGER   | 3272.50 |
| MARTIN | SALESMAN  | 1500.00 |
| BLAKE  | MANAGER   | 3135.00 |
| CLARK  | MANAGER   | 2695.00 |
| SCOTT  | ANALYST   | 3000.00 |
| KING   | PRESIDENT | 5000.00 |
| TURNER | SALESMAN  | 1800.00 |
| ADAMS  | CLERK     | 1100.00 |
| JAMES  | CLERK     |  950.00 |
| FORD   | ANALYST   | 3000.00 |
| MILLER | CLERK     | 1300.00 |
+--------+-----------+---------+
14 rows in set (0.00 sec)
```

> **上面这个需求也可以使用：`case.. when.. then.. when.. then.. else.. end`来完成：**

```sql
mysql> select ename,job,sal,(case job when 'MANAGER' then sal*1.1 when 'SALESMAN' then sal*1.2 else sal end) as newsal from emp;

+--------+-----------+---------+---------+
| ename  | job       | sal     | newsal  |
+--------+-----------+---------+---------+
| SMITH  | CLERK     |  800.00 |  800.00 |
| ALLEN  | SALESMAN  | 1600.00 | 1920.00 |
| WARD   | SALESMAN  | 1250.00 | 1500.00 |
| JONES  | MANAGER   | 2975.00 | 3272.50 |
| MARTIN | SALESMAN  | 1250.00 | 1500.00 |
| BLAKE  | MANAGER   | 2850.00 | 3135.00 |
| CLARK  | MANAGER   | 2450.00 | 2695.00 |
| SCOTT  | ANALYST   | 3000.00 | 3000.00 |
| KING   | PRESIDENT | 5000.00 | 5000.00 |
| TURNER | SALESMAN  | 1500.00 | 1800.00 |
| ADAMS  | CLERK     | 1100.00 | 1100.00 |
| JAMES  | CLERK     |  950.00 |  950.00 |
| FORD   | ANALYST   | 3000.00 | 3000.00 |
| MILLER | CLERK     | 1300.00 | 1300.00 |
+--------+-----------+---------+---------+
14 rows in set (0.00 sec)
```


## cast函数

+ cast函数用于将值从一种数据类型转换为表达式中指定的另一种数据类型

+ 语法：cast(值 as 数据类型)

> 例如：`cast('2020-10-11' as date)`，表示`将字符串'2020-10-11'转换成日期date类型`。

> 在使用cast函数时，可用的数据类型包括：
- date：日期类型
- time：时间类型
- datetime：日期时间类型
- signed：有符号的int类型（有符号指的是正数负数）
- char：定长字符串类型
- decimal：浮点型

```sql
mysql> select cast('2020-10-11 20:15:30' as date);
+-------------------------------------+
| cast('2020-10-11 20:15:30' as date) |
+-------------------------------------+
| 2020-10-11                          |
+-------------------------------------+
1 row in set (0.00 sec)

mysql> select cast('2020-10-11 20:15:30' as time);
+-------------------------------------+
| cast('2020-10-11 20:15:30' as time) |
+-------------------------------------+
| 20:15:30                            |
+-------------------------------------+
1 row in set (0.00 sec)

mysql> select cast('2020-10-11 20:15:30' as datetime);
+-----------------------------------------+
| cast('2020-10-11 20:15:30' as datetime) |
+-----------------------------------------+
| 2020-10-11 20:15:30                     |
+-----------------------------------------+
1 row in set (0.00 sec)

mysql> select cast('-5.3' as signed);
+------------------------+
| cast('-5.3' as signed) |
+------------------------+
|                     -5 |
+------------------------+
1 row in set, 1 warning (0.00 sec)

mysql> select cast('5.3' as signed);
+-----------------------+
| cast('5.3' as signed) |
+-----------------------+
|                     5 |
+-----------------------+
1 row in set, 1 warning (0.00 sec)

mysql> select cast(123.456 as char(3));
+--------------------------+
| cast(123.456 as char(3)) |
+--------------------------+
| 123                      |
+--------------------------+
1 row in set, 1 warning (0.00 sec)

mysql> select cast('123.456' as decimal(5,1));
+---------------------------------+
| cast('123.456' as decimal(5,1)) |
+---------------------------------+
|                           123.5 |
+---------------------------------+
1 row in set (0.00 sec)
```


## 加密函数

> `md5函数`，可以将给定的字符串经过md5算法进行加密处理，字符串经过加密之后会生成`一个固定长度32位的字符串`，md5加密之后的密文通常是`不能解密`的：

```sql
mysql> select md5('powernode');

+----------------------------------+
| md5('powernode')                 |
+----------------------------------+
| 88cdef88bcdb8b2e33fb7b4f076cf803 |
+----------------------------------+
1 row in set (0.01 sec)
```