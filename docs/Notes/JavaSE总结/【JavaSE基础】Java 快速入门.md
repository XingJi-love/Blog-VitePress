---
title: 【JavaSE基础】Java 快速入门
categories: JavaSE
tags: JavaSE知识点总结
cover: /img/JAVA SE图片.webp
abbrlink: 9023
date: 2024-08-01 14:06:46
---

# Java | 快速入门

## 需求说明

要求开发一个 Hello.java 程序，可以输出 "hello,world!"

## 开发步骤    

1) 将 Java 代码编写到扩展名为 `Hello.java` 的文件中。[代码说明]

![【JavaSE基础】Java 快速入门](./【JavaSE基础】Java%20快速入门/image.png)

2) 通过 javac 命令对该 java 文件进行编译，生成 .class 文件。

![【JavaSE基础】Java 快速入门](./【JavaSE基础】Java%20快速入门/image-1.png)

3) 通过 java 命令对生成的 class 文件进行运行。

![【JavaSE基础】Java 快速入门](./【JavaSE基础】Java%20快速入门/image-2.png)

## 运行原理示意图

![【JavaSE基础】Java 快速入门](./【JavaSE基础】Java%20快速入门/image-3.png)


## Java 开发快速入门

### Java执行流程分析

![【JavaSE基础】Java 快速入门](./【JavaSE基础】Java%20快速入门/image-4.png)


### 什么是编译

>`javac Hello.java`

1) 有了java源文件，通过`编译器`将其编译成`JVM可以识别的字节码文件`（.class文件）。

2) 在该源文件目录下，通过`javac`编译工具对`Hello.java`文件进行编译。

3) `如果程序没有错误，没有任何提示`，但在当前目录下生成了`Hello.class`文件，该文件称为`字节码文件`，也是可以执行java的程序。


### 什么是运行

>`java Hello`

1) 有了可执行的java程序（Hello.class字节码文件）

2) 通过运行工具java.exe对字节码文件进行执行，本质就是 .class


## Java 开发注意事项和细节说明

对修改后的Hello.java源文件需要重新编译，生成新的class文件后，再进行执行，才能生效。

![【JavaSE基础】Java 快速入门](./【JavaSE基础】Java%20快速入门/image-5.png)

+ 想要运行修改后的Java文件，需要对源文件进行重新编译，生成新的字节码文件后，再执行，才能运行出修改后的。否则运行出的只能是修改之前的。

+ Java应用程序的执行入口是main（）方法。

+ Java语言严格区分大小写。

+ 每条语句以;结束。

+ {}成对出现，缺一不可。

+ 一个源文件中只能有一个public修饰的类，其它类的个数不限。

+ 每一个类编译后，都对应一个.class文件。

+ 如果源文件包含一个public类，则文件名必须按该类命名。

+ 可以将main（）方法写在非public类中，然后指定运行该类，这样入口方法就是非public的main方法。

```java
//一个源文件中最多只能有一个 public 类。其它类的个数不限。[演示] 
//Dog 是一个类
//编译后，每一个类，都对于一个.class

class Dog {
//一个源文件中最多只能有一个 public 类。其它类的个数不限，也可以将 main 方法写在非 public 类中，//然后指定运行非 public 类，这样入口方法就是非 public 的 main 方法
public static void main(String[] args) {
   System.out.println("hello, 小狗狗~");
   }
}


class Tiger {

public static void main(String[] args) { 
    System.out.println("hello, 小老虎~");
    }
}
```

## 如何快速掌握技术或知识点

![【JavaSE基础】Java 快速入门](./【JavaSE基础】Java%20快速入门/image-6.png)