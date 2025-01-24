---
title: 【JavaSE基础】Java 语言概述
categories: JavaSE
tags: JavaSE知识点总结
cover: /img/JAVA SE图片.webp
abbrlink: 18950
date: 2024-07-31 11:54:06
---

# Java | 语言概述

## Java历史

### 什么是程序

程序：计算机执行某些操作或解决某个问题而**`编写的一系列有序指令的集合`**

>`举例说明`：

![【JavaSE基础】Java 语言概述](./【JavaSE基础】Java%20语言概述/image.png)

![【JavaSE基础】Java 语言概述](./【JavaSE基础】Java%20语言概述/image-1.png)

>编写一个简单的Java程序：

```Java
public class test {
        
    public static void main(String[] args) {
        int res = 1 + 1;
        //显示
        System.out.println("结果=" + res);
    }
}
```
运行该程序，输出结果为：

```Java
结果=2
```


## Java诞生的小故事

![【JavaSE基础】Java 语言概述](./【JavaSE基础】Java%20语言概述/image-2.png)

>Java背景知识

- Java是美国 sun 公司（Stanford University Network）在1995年推出的一门计算机高级编程语言。

- Java 早期称为Oak(橡树)，后期改名为Java。

- Java 之父：**詹姆斯·高斯林(James Gosling)**。

- 2009年 sun公司被Oracle公司收购。

![【JavaSE基础】Java 语言概述](./【JavaSE基础】Java%20语言概述/image-3.png)


## Java技术体系平台

![【JavaSE基础】Java 语言概述](./【JavaSE基础】Java%20语言概述/image-4.png)


## Java重要特点

+ Java 语言是面向对象的(oop)

+  Java 语言是健壮的。Java 的强类型机制、异常处理、垃圾的自动收集等是 Java 程序健壮性的重要保证

+  Java 语言是`跨平台性的`。`[即: 一个编译好的.class 文件可以在多个系统下运行，这种特性称为跨平台]`

![【JavaSE基础】Java 语言概述](./【JavaSE基础】Java%20语言概述/image-5.png)

+ Java 语言是解释型的`[了解]`

解释性语言：`javascript`,`PHP`, `java` 编译性语言: `c / c++`

区别是：`解释性语言`，编译后的代码，`不能直接被机器执行`,需要解释器来执行, `编译性语言`, 编译后的代码, `可以直接被机器执行`, **c /c++**


## Java 的开发工具

![【JavaSE基础】Java 语言概述](./【JavaSE基础】Java%20语言概述/image-6.png)

>前期使用Sublime Text + Java插件进行Java开发，后期转向IntelliJ IDEA + Java插件进行Java开发。

Sublime Text 官方网址：https://www.sublimetext.com/

IntelliJ IDEA 官方网址：https://www.jetbrains.com/idea/

+ Sublime Text：`一个跨平台的文本编辑器`，支持Java开发，有丰富的插件，语法高亮，代码自动完成等功能。

+ editplus.com：`一个免费的文本编辑器`，支持Java开发，有丰富的插件，语法高亮，代码自动完成等功能。

+ NetBeans++：`一个商业Java开发环境`，支持Java开发，有丰富的插件，语法高亮，代码自动完成等功能。

+ Eclipse：`一个开源的Java开发环境`，支持Java开发，有丰富的插件，语法高亮，代码自动完成等功能。

+ IntelliJ IDEA：`一个商业Java开发环境`，支持Java开发，有丰富的插件，语法高亮，代码自动完成等功能。


## Java 工具选择

>如何选择开发工具

+ 我们先选择用文本编辑器本 sublime，到大家对 java 有一定了解后，我们再使用 IDEA 和 Eclipse 开发工具。

>这是为什么呢

+ 更深刻的理解 java 技术,培养代码感。【面试时，往往程序员手写代码】

+ 有利于公司面试。


## Java运行机制及运行过程

### Java 语言的特点：跨平台性

![【JavaSE基础】Java 语言概述](./【JavaSE基础】Java%20语言概述/image-7.png)

>`Java 核心机制-Java 虚拟机 [JVM java virtual machine]`

基本介绍

1) `JVM` 是一个`虚拟的计算机`，具有`指令集并使用不同的存储区域`。负责执行指令，管理数据、内存、寄存器，包含在JDK 中.

2) 对于`不同的平台`，有`不同的虚拟机`。

4) Java 虚拟机机制屏蔽了底层运行平台的差别，实现了“`一次编译，到处运行`” [说明]

>`Java 程序运行过程示意图`:

![【JavaSE基础】Java 语言概述](./【JavaSE基础】Java%20语言概述/image-8.png)

## 什么是 JDK，JRE

### JDK 基本介绍
1) JDK 的全称(Java Development Kit `Java 开发工具包`)

>JDK = JRE + java 的开发工具 [java, javac,javadoc,javap 等]

2) JDK 是提供给 Java 开发人员使用的，其中包含了 java 的开发工具，也包括了 JRE。所以安装了 JDK，就不用在单独安装 JRE 了。

### JRE 基本介绍
1) JRE(Java Runtime Environment `Java 运行环境`)

>JRE = JVM + Java 的核心类库[类]

2) 包括 Java 虚拟机(JVM Java Virtual Machine)和 Java 程序所需的核心类库等，如果想要运行一个开发好的 Java 程序，计算机中只需要安装 JRE 即可。

## JDK、JRE 和 JVM 的包含关系

1) `JDK = JRE + 开发工具集`（例如 Javac,java 编译工具等)

2) `JRE = JVM + Java SE 标准类库`（java 核心类库）

3) 如果只想运行开发好的 `.class` 文件 `只需要 JRE`