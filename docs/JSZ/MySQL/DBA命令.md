# MySQL | DBA命令

![MySQL安装教程](./MySQL安装教程/MySQL.png)

---


## 新建用户

创建一个用户名为java1，密码设置为123的本地用户：

```sql [SQL]
create user 'java1'@'localhost' identified by '123';
```
创建一个用户名为java2，密码设置为123的外网用户：
```sql [SQL]
create user 'java2'@'%' identified by '123';
```
采用以上方式新建的用户没有任何权限：系统表也只能看到以下两个

```sql [SQL]
 mysql -ujava1 -p123
mysql: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 13
Server version: 8.0.41 MySQL Community Server - GPL

Copyright (c) 2000, 2025, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| performance_schema |
+--------------------+
2 rows in set (0.00 sec)
```

使用root用户查看系统中当前用户有哪些？
```sql [SQL]
select user,host from mysql.user;
```
```sql [SQL]
mysql> select user,host from mysql.user;

+------------------+-----------+
| user             | host      |
+------------------+-----------+
| java2            | %         |
| java1            | localhost |
| mysql.infoschema | localhost |
| mysql.session    | localhost |
| mysql.sys        | localhost |
| root             | localhost |
+------------------+-----------+
6 rows in set, 1 warning (0.00 sec)
```


## 给用户授权

::: tip 提示
`授权语法`：`grant [权限1，权限2...] on 库名.表名 to '用户名'@'主机名/IP地址';`

给`本地用户授权`：grant [权限1，权限2...] on 库名.表名 to '用户名'@'localhost';

给`外网用户授权`：grant [权限1，权限2...] on 库名.表名 to '用户名'@'%';
:::

::: tip 提示
所有权限：`all privileges`

细粒度权限：`select、insert、delete、update、alter、create、drop、index(索引)、usage(登录权限)......`

`库名`可以使用 `*` ，它代表`所有数据库`

`表名`可以采用`*` ，它代表`所有表`

也可以提供具体的数据库和表，例如：`powernode.emp` （`powernode数据库的emp表`）
:::

```sql [SQL]
# 将所有库所有表的查询权限赋予本地用户java1
grant select,insert,delete,update,create on *.* to 'java1'@'localhost';

# 将powernode库中所有表的所有权限赋予本地用户java1
grant all privileges on powernode.* to 'java1'@'localhost';
```
> **授权后必须`刷新权限`，才能生效：`flush privileges`**

> **查看某个用户拥有`哪些权限`？**

```sql [SQL]
show grants for 'java1'@'localhost';
show grants for 'java2'@'%';
```
```sql [SQL]
mysql> show grants for 'java1'@'localhost';
+----------------------------------------------------------------------------+
| Grants for java1@localhost                                                 |
+----------------------------------------------------------------------------+
| GRANT SELECT, INSERT, UPDATE, DELETE, CREATE ON *.* TO `java1`@`localhost` |
+----------------------------------------------------------------------------+
1 row in set (0.00 sec)

mysql> show grants for 'java2'@'%';
+-----------------------------------+
| Grants for java2@%                |
+-----------------------------------+
| GRANT USAGE ON *.* TO `java2`@`%` |
+-----------------------------------+
1 row in set (0.00 sec)
```

**`with grant option`**：

```sql [SQL]
# with grant option的作用是：java2用户也可以给其他用户授权了。

grant select,insert,delete,update on *.* to 'java2'@'%' with grant option;
```


## 撤销用户权限

> **`revoke 权限 on 数据库名.表名 from '用户'@'IP地址';`**

```sql [SQL]
# 撤销本地用户java1的insert、update、delete权限
revoke insert, update, delete on powernode.* from 'java1'@'localhost'

# 撤销外网用户java2的insert权限
revoke insert on powernode.* from 'java2'@'%'
```
> **`撤销权限`后也需要`刷新权限`：`flush privileges`**

**注意：`撤销权限时 “数据库名.表名” `不能随便写，要求和`授权语句时的 “数据库名.表名” 一致`。**


## 修改用户的密码

具有管理用户权限的用户才能修改密码，例如root账户可以修改其他账户的密码：

```sql [SQL]
# 本地用户修改密码
alter user 'java1'@'localhost' identified by '456';

# 外网用户修改密码
alter user 'java2'@'%' identified by '456';
```
> **`修改密码后`，也需要`刷新权限`才能生效：`flush privileges`**

以上是MySQL8版本以后修改用户密码的方式。


## 修改用户名

```sql [SQL]
rename user '原始用户名'@'localhost' to '新用户名'@'localhost';
rename user '原始用户名'@'localhost' to '新用户名'@'%';

rename user 'java1'@'localhost' to 'java11'@'localhost';
rename user 'java11'@'localhost' to 'java123'@'%';
```

> **刷新权限：`flush privileges;`**


## 删除用户

```sql [SQL]
drop user 'java123'@'localhost';
drop user 'java2'@'%';
```
```sql [SQL]
mysql> select user,host from mysql.user;
+------------------+-----------+
| user             | host      |
+------------------+-----------+
| java2            | %         |
| java1            | localhost |
| mysql.infoschema | localhost |
| mysql.session    | localhost |
| mysql.sys        | localhost |
| root             | localhost |
+------------------+-----------+
6 rows in set, 1 warning (0.00 sec)

mysql> drop user 'java1'@'localhost';
Query OK, 0 rows affected (0.01 sec)

mysql> drop user 'java2'@'%';
Query OK, 0 rows affected (0.01 sec)

mysql> select user,host from mysql.user;
+------------------+-----------+
| user             | host      |
+------------------+-----------+
| mysql.infoschema | localhost |
| mysql.session    | localhost |
| mysql.sys        | localhost |
| root             | localhost |
+------------------+-----------+
4 rows in set, 1 warning (0.00 sec)
```

> **刷新权限：`flush privileges;`**


## 数据备份

- 导出数据（请在登录mysql数据库之前进行）
```sql [SQL]
# 导出powernode这个数据库中所有的表
mysqldump powernode > e:/powernode.sql -uroot -p1234 --default-character-set=utf8

# 导出powernode中emp表的数据
mysqldump powernode emp > e:/powernode.sql -uroot -p1234 --default-character-set=utf8
```

- 导入数据第一种方式：（请在登录mysql之前进行）

```sql [SQL]
# 现在登录mysql状态下新建一个数据库
create database powernode;
# 在登录mysql之前执行以下命令
mysql powernode < e:/powernode.sql -uroot -p1234 --default-character-set=utf8
```

- 导入数据第二种方式：（请在登录mysql之后操作）

```sql [SQL]
create  database powernode;
use powernode;
source d:/powernode.sql
```