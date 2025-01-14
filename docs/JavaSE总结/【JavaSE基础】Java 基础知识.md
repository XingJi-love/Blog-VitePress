---
title: 【JavaSE基础】Java 基础知识
categories: JavaSE
tags: JavaSE知识点总结
cover: /img/JAVA SE图片.webp
abbrlink: 64063
date: 2024-08-19 00:07:00
---

# Java 转义字符

## Java 常用的转义字符

>在控制台，输入 tab 键，可以实现命令补全

| 转义字符 | 含义   | 作用                                                  |
| -------- | ------ | ----------------------------------------------------- |
| \t       | 制表符 | 一个`制表位`，实现`对齐的功能\n` ：`换行符`           |
| \n       | 换行符 | 一个`换行符`                                          |
| \r       | 回车符 | 一个`回车键` System.out.println("韩顺平教育\r 北京"); |
| \"       | 双引号 | 一个`"`                                               |
| \'       | 单引号 | 一个`'`                                               |
| \\       | 反斜杠 | 一个`\`                                               |

## Java 转义字符的使用

```java
//演示转义字符的使用
public class 转义字符的使用 {
    //编写一个main方法
    public static void main(String[] args) {

        //\t ：一个制表位，实现对齐的功能
        System.out.println("北京\t天津\t上海");

        // \n  ：换行符
        System.out.println("jack\nsmith\nmary");

        // \\  ：一个\  \\ ——> 第一个斜杠代表转义，第二个斜杠代表反斜杠本身
        System.out.println("C:\\Windows\\System32\\cmd.exe");

        // \"  :一个"
        System.out.println("老韩说:\"要好好学习java,有前途\"");

        // \'  ：一个'
        System.out.println("老韩说:\'要好好学习java,有前途\'");

        // \r  :一个回车  System.out.println("韩顺平教育\r北京");
        // 解读
        // 1. 输出  韩顺平教育
        // 2. \r表示回车
        System.out.println("韩顺平教育\r北京"); // \r会将自己前面的字符替换为后面的字符，即将“韩顺平教育”替换为“北京”
    }
}
```
输出结果：

![【JavaSE基础】Java 基础知识](./【JavaSE基础】Java%20基础知识/image.png)

## 课堂练习

### 题目

![【JavaSE基础】Java 基础知识](./【JavaSE基础】Java%20基础知识/image-1.png)

### 代码呈现

```java
public class 转义字符课堂练习 {

    //编写一个main方法
    public static void main(String[] args) {
        //完成代码
        System.out.println("书名\t作者\t价格\t销量\n三国\t罗贯中\t120\t1000");
    }
}
```
输出结果：

![【JavaSE基础】Java 基础知识](./【JavaSE基础】Java%20基础知识/image-2.png)


# 初学Java易犯错误

+ 找不到文件

![【JavaSE基础】Java 基础知识](./【JavaSE基础】Java%20基础知识/image-3.png)

>解决方法:源文件名不存在或者写错，或者当前路径错误

+ 主类名和文件名不一致

![【JavaSE基础】Java 基础知识](./【JavaSE基础】Java%20基础知识/image-4.png)

>解决方法:声明为public的主类应与文件名一致，否则编译失败

+ 缺少分号

![【JavaSE基础】Java 基础知识](./【JavaSE基础】Java%20基础知识/image-5.png)

>解决方法：编译失败，注意错误出现的行数，再到源代码中指定位置改错

+ 常见错误总结

>学习编程最容易犯的错是语法错误`(初学者)`。Java要求你必须按照语法规则编写代码。如果你的程序违反了语法规则，例如:`忘记了分号、大括号、引号`，或者拼错了单词java编译器都会报语法错误。尝试着去看懂编译器会报告的错误信息。

>举例:

+ 1->1

+ 0->o

+ 英文符号写中文符号

+ void ->viod 拼写错误

+ 不好修改的错误其实是 业务错误,环境错误


# 注释

## 介绍：
用于注解说明解释程序的文字就是注释，注释提高了代码的阅读性(可读性);注释是`一个程序员必须要具有的良好编程习惯`。将自己的思想通过注释先整理出来，再用代码去体现。

## Java中的注释类型

1) 单行注释 //

2) 多行注释 /* */

3) 文档注释 /** */

### 单行注释：

基本格式

格式: //注释文字

### 多行注释:

基本格式

格式: /* 注释文字 */

### 使用细节

1) 被注释的文字，不会被JVM(java 虚拟机)解释执行

2) 多行注释里面不允许有多行注释嵌套

### 演示注释使用

```Java
//演示注释使用

public class Comment01 {

	//编写一个main方法
	public static void main(String[] args) {

		//单行注释
		
		//多行注释
		/* 	示意 => 可读性很好
			下面代码完成 两个数相加
			定义变量 

			注释
			注释
			int n1 = 10;... 
			System.out.println("ok~~");
			*/
		int n1 = 10;
		int n2 = 30;
		//求和
		int sum = n1 + n2;
		//输出结果
		System.out.println("结果=" + sum);
	}
}
```


### 文档注释

![【JavaSE基础】Java 基础知识](./【JavaSE基础】Java%20基础知识/image-6.png)

![【JavaSE基础】Java 基础知识](./【JavaSE基础】Java%20基础知识/image-7.png)

>快捷键：

1.//选中，然后输入 tab 整体右移

2.//选中，然后输入 shift+tab 整体左移

![【JavaSE基础】Java 基础知识](./【JavaSE基础】Java%20基础知识/image-8.png)


# Java代码规范

+ 类、方法的注释，要以javadoc的方式来写。

+ **非Java Doc的注释(包括单行注释和多行注释)**，往往是**给代码的维护者看**的，着重告述读者为什么这样写，如何修改，注意什么问题等

+ 使用**tab操作**，实现缩进，默认**整体向右边移动**，时候用**shift+tab整体向左移**

+ **运算符**和 **=** 两边习惯性**各加一个空格**。比如:**2 + 4 * 5 + 345 - 89**

+ **源文件**使用**utf-8**编码

+ **行宽度`不要超过80字符`**

+ 代码编写**次行风格**和**行尾风格(推荐)**。

![【JavaSE基础】Java 基础知识](./【JavaSE基础】Java%20基础知识/image-9.png)


# DOS命令`(了解)`

## DOS介绍

>Dos: Disk Operating System 磁盘操作系统,简单说一下 windows 的目录结构。`[原理图如下]`
+ md: make directory 创建目录

+ rd: remove directory 删除目录

![【JavaSE基础】Java 基础知识](./【JavaSE基础】Java%20基础知识/image-10.png)

>相关的知识补充:相对路径，绝对路径

+ 相对路径: 从**当前目录开始定位**，形成的一个路径。

+ 绝对路径: 从**顶级目录`d`开始定位**，形成的一个路径。

![【JavaSE基础】Java 基础知识](./【JavaSE基础】Java%20基础知识/image-11.png)

## 常用的dos命令

+ `查看当前目录是有什么内容` dir

>dir dir d:\abc2\test200

+ `切换到其他盘下` : `盘符号 cd` : change directory

>案例演示: 切换到c盘 cd /D c:

+ 切换到当前盘的其他目录下(使用相对路径和绝对路径演示)，`..\`表示**上一级目录**

>案例演示: cd d:\abc2\test200 cd ..\..\abc2\test200

+ 切换到上一级:

>案例演示: `cd ..`

+ 切换到根目录: cd \

>案例演示: `cd \`

+ 查看指定的目录下所有的子级目录: `tree` 

+ 清屏 `cls`

+ 退出 `DOS (exit)`

>说明:因为小伙伴后面使用DOS 非常少，所以对下面的几个指令，**了解即可**

+ md[创建目录]

+ rd[删除目录]

+ copy[拷贝文件]

+ del[删除文件]

+ echo[输入内容到文件]

+ type,move[剪切], =>Linux