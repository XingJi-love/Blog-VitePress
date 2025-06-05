# JDBC | JDBC概述



---


# 什么是JDBC
JDBC（Java DataBase Connectivity）就是Java数据库连接，说白了就是用Java语言来操作数据库。原来我们操作数据库是在控制台使用SQL语句来操作数据库，JDBC是用Java语言向数据库发送SQL语句。
![图片1.png](https://cdn.nlark.com/yuque/0/2023/png/21376908/1701931262247-009be90f-6a0e-4e63-a1f1-6d6c96df65ce.png#averageHue=%23efe7f7&clientId=ucd4dfa1f-8793-4&from=paste&height=374&id=u7ed5bac8&originHeight=374&originWidth=657&originalType=binary&ratio=1&rotation=0&showTitle=false&size=136883&status=done&style=shadow&taskId=u2ff2f08f-57be-4241-9660-c991fa1d540&title=&width=657)

![](https://cdn.nlark.com/yuque/0/2023/jpeg/21376908/1692002570088-3338946f-42b3-4174-8910-7e749c31e950.jpeg#averageHue=%23f9f8f8&from=url&id=acVGP&originHeight=78&originWidth=1400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=shadow&title=)
# JDBC原理
早期SUN公司的天才们想编写一套可以连接天下所有数据库的API，但是当他们刚刚开始时就发现这是不可完成的任务，因为各个厂商的数据库服务器差异太大了。后来SUN开始与数据库厂商们讨论，最终得出的结论是，由SUN提供一套访问数据库的规范（就是一组接口），并提供连接数据库的协议标准，然后各个数据库厂商会遵循SUN的规范提供一套访问自己公司数据库服务器的API。SUN提供的规范命名为JDBC，而各个厂商提供的，遵循了JDBC规范的，可以访问自己数据库的API被称之为驱动！
![图片2.png](https://cdn.nlark.com/yuque/0/2023/png/21376908/1701931393355-983a997d-c44c-4a48-b1b0-91b281b5a98b.png#averageHue=%23e9e9e8&clientId=ucd4dfa1f-8793-4&from=paste&height=308&id=u158f2a18&originHeight=308&originWidth=610&originalType=binary&ratio=1&rotation=0&showTitle=false&size=139132&status=done&style=shadow&taskId=u23552590-5180-4cee-9959-f9a4b44c308&title=&width=610)
JDBC是接口，而JDBC驱动才是接口的实现，没有驱动无法完成数据库连接！每个数据库厂商都有自己的驱动，用来连接自己公司的数据库。
当然还有第三方公司专门为某一数据库提供驱动，这样的驱动往往不是开源免费的！

![](https://cdn.nlark.com/yuque/0/2023/jpeg/21376908/1692002570088-3338946f-42b3-4174-8910-7e749c31e950.jpeg#averageHue=%23f9f8f8&from=url&id=jfU6l&originHeight=78&originWidth=1400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=shadow&title=)
# 模拟JDBC接口
## 接口在开发中的作用
Java中接口的作用主要有以下几个方面：

1.  定义标准：接口可以用于定义标准，规范应该如何完成某个任务或应该具有哪些属性、方法等。 
2.  隐藏实现：接口隔离了类的实现和外界的逻辑使用，使得外部无论是访问接口的常量或是接口的方法都不需要关心接口的实现。 
3.  实现多态：一个类实现多个接口，在实现接口的过程中，类便会具有接口中的所有方法。这样我们就可以在实际应用中方便的实现多态的效果。 
4.  扩展性和灵活性：通过接口可以为项目提供更好的扩展性和灵活性，接口定义了一个共同的标准，使得新的类可以很容易地加入到已有的系统中，而且不需要修改现有的代码。 

总的来说，Java中的接口可以让我们通过规范来编写更加标准和灵活的代码，使得代码易于维护和扩展，并通过多态的特性来提高代码的重用性和可读性。**Java接口在使用场景中，一定是存在两个角色的，一个是接口的调用者，一个是接口的实现者，接口的出现让调用者和实现者解耦合了。**

![](https://cdn.nlark.com/yuque/0/2023/jpeg/21376908/1692002570088-3338946f-42b3-4174-8910-7e749c31e950.jpeg#averageHue=%23f9f8f8&from=url&id=nA5ZY&originHeight=78&originWidth=1400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=shadow&title=)
## 编写程序模拟JDBC接口
**接口的制定者**：SUN公司负责制定的
```java
// SUN公司负责制定JDBC接口
public interface JDBC {
    // 负责连接数据库的方法
    void getConnection();
}
```

**接口的实现者**：各大数据库厂商分别对JDBC接口进行实现，实现类被称为**驱动**
MySQL数据库厂商对JDBC接口的实现：MySQL驱动
```java
public class MySQLDriver implements JDBC{
    public void getConnection(){
        System.out.println("与MySQL数据库连接建立成功，您正在操作MySQL数据库");
    }
}
```
Oracle数据库厂商对JDBC接口的实现：Oracle驱动
```java
public class OracleDriver implements JDBC{
    public void getConnection(){
        System.out.println("与Oracle数据库连接建立成功，您正在操作Oracle数据库");
    }
}
```

**接口的调用者**：要操作数据库的Java程序员（我们）
```java
public class Client{
    public static void main(String[] args){
        
        JDBC jdbc = new MySQLDriver();
        
        // 只需要面向接口编程即可，不需要关心具体的实现，不需要关心具体是哪个厂商的数据库
        jdbc.getConnection();
    }
}
```
以上是操作MySQL数据库，如果要操作Oracle数据库的话，需要new OracleDriver()：
```java
public class Client{
    public static void main(String[] args){
        
        JDBC jdbc = new OracleDriver();
        
        // 只需要面向接口编程即可，不需要关心具体的实现，不需要关心具体是哪个厂商的数据库
        jdbc.getConnection();
    }
}
```
可能你会说，最终还是修改了java代码，不符合OCP原则呀，如果你想达到OCP，那可以将创建对象的任务交给反射机制，将类名配置到文件中，例如：
配置文件如下：
```properties
driver=MySQLDriver
```
Java代码如下：
```java
import java.util.ResourceBundle;

public class Client{
    public static void main(String[] args) throws Exception{
        
        String driverClassName = ResourceBundle.getBundle("jdbc").getString("driver");
        Class c = Class.forName(driverClassName);
        JDBC jdbc = (JDBC)c.newInstance();
        
        // 只需要面向接口编程即可，不需要关心具体的实现，不需要关心具体是哪个厂商的数据库
        jdbc.getConnection();
    }
}
```
最终通过修改jdbc.properties配置文件即可做到数据库的切换。这样就完全做到了调用者和实现者的解耦合。调用者不需要关心实现者，实现者也不需要关心调用者。双方都是面向接口编程。这就是JDBC的本质：它就是一套接口。

![](https://cdn.nlark.com/yuque/0/2023/jpeg/21376908/1692002570088-3338946f-42b3-4174-8910-7e749c31e950.jpeg#averageHue=%23f9f8f8&from=url&id=h2q4g&originHeight=78&originWidth=1400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=shadow&title=)
# 配置CLASSPATH
经过上面内容的讲解，大家应该知道JDBC开发有三个角色的参与：

- 我们（对数据库中数据进行增删改查的Java程序员）
- JDBC接口的制定者
- JDBC接口的实现者（驱动）

以上三者凑齐了我们才能进行JDBC的开发。它们三个都在哪里呢？“我们”就不用多说了，写操作数据库的代码就行了。JDBC接口在哪（接口的class文件在哪）？JDBC接口实现类在哪（驱动在哪）？

![](https://cdn.nlark.com/yuque/0/2023/jpeg/21376908/1692002570088-3338946f-42b3-4174-8910-7e749c31e950.jpeg#averageHue=%23f9f8f8&from=url&id=ZFsNv&originHeight=78&originWidth=1400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=shadow&title=)
## JDBC接口在哪
JDBC接口在JDK中。对应的包是：**java.sql.*;**
JDBC API帮助文档就在JDK的帮助文档当中。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21376908/1701939712048-f4487a29-3eb7-494f-b7c0-b72c6c0c03ad.png#averageHue=%23f2f2f2&clientId=u88d51c01-0843-4&from=paste&height=258&id=u2929644e&originHeight=258&originWidth=422&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21472&status=done&style=shadow&taskId=u3924f2fb-b1a5-4961-ae9f-35e5a0fbabb&title=&width=422)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21376908/1701939824373-e1c98bbf-cc6a-44c0-95b6-d2c3a0ecbf52.png#averageHue=%23434541&clientId=u88d51c01-0843-4&from=paste&height=793&id=u969d5906&originHeight=793&originWidth=473&originalType=binary&ratio=1&rotation=0&showTitle=false&size=29261&status=done&style=shadow&taskId=u2686a26a-bd60-4c00-af46-2beeceb81d7&title=&width=473)

![](https://cdn.nlark.com/yuque/0/2023/jpeg/21376908/1692002570088-3338946f-42b3-4174-8910-7e749c31e950.jpeg#averageHue=%23f9f8f8&from=url&id=pYLed&originHeight=78&originWidth=1400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=shadow&title=)
## 驱动在哪
驱动是JDBC接口的实现类，这些实现类是各大数据库厂家自己实现的，所以这些实现类的就需要去数据库厂商相关的网站上下载了。通常这些实现类被全部放到一个xxx.jar包中。下面演示一下mysql的驱动如何下载【下载mysql的驱动jar包】：
打开页面：[https://dev.mysql.com/downloads/connector/j/](https://dev.mysql.com/downloads/connector/j/)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21376908/1701940874635-9b10510f-2f00-4b7e-9b35-36425eaa9457.png#averageHue=%23e2c193&clientId=u88d51c01-0843-4&from=paste&height=839&id=u969fd07e&originHeight=839&originWidth=1118&originalType=binary&ratio=1&rotation=0&showTitle=false&size=85771&status=done&style=shadow&taskId=u4544a600-db3b-4560-a3d2-9dc9cad3730&title=&width=1118)
下载后：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21376908/1701940923947-24cc167c-8fc4-4afa-92fd-9fab33ab6226.png#averageHue=%23fbfaf8&clientId=u88d51c01-0843-4&from=paste&height=46&id=u84c583c0&originHeight=46&originWidth=255&originalType=binary&ratio=1&rotation=0&showTitle=false&size=1871&status=done&style=none&taskId=ub85fd9f4-77df-4219-8ae1-9ec14c6d3ab&title=&width=255)
解压：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21376908/1701940961500-9a610263-604c-4001-9020-98151a6bfc99.png#averageHue=%23fbf5f3&clientId=u88d51c01-0843-4&from=paste&height=196&id=u4a9d485d&originHeight=196&originWidth=239&originalType=binary&ratio=1&rotation=0&showTitle=false&size=6234&status=done&style=shadow&taskId=u189b1d51-0178-4527-acad-26b527a382c&title=&width=239)
上图中的“mysql-connector-j-8.2.0.jar”就是mysql数据库的驱动，8.2.0这个版本适用于目前最新版本的mysql数据库。可以使用解压工具打开这个jar包，看看里面是什么？
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21376908/1701941060668-654b02a2-956a-4765-87be-8be10997ce0a.png#averageHue=%23f9f4f1&clientId=u88d51c01-0843-4&from=paste&height=581&id=u4969b92c&originHeight=581&originWidth=451&originalType=binary&ratio=1&rotation=0&showTitle=false&size=25066&status=done&style=shadow&taskId=u4276fdb4-72f6-497c-9a1b-73c4c2a7b57&title=&width=451)
可以看到这个jar包中都是xxx.class文件，这就是JDBC接口的实现类。这个jar包就是连接mysql数据库的驱动。如果是oracle的驱动就需要去oracle的官网下载了。这里不再赘述。

![](https://cdn.nlark.com/yuque/0/2023/jpeg/21376908/1692002570088-3338946f-42b3-4174-8910-7e749c31e950.jpeg#averageHue=%23f9f8f8&from=url&id=CqMSe&originHeight=78&originWidth=1400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=shadow&title=)
## 如果使用文本编辑器开发
如果使用文本编辑器开发，不使用集成开发环境的话，以上的jar包就需要手动配置到环境变量CLASSPATH当中，配置如下：
如果jar包放在这里：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21376908/1701941355365-9101c03a-7016-463c-8860-f6cc41745553.png#averageHue=%23faf9f8&clientId=u88d51c01-0843-4&from=paste&height=264&id=ufa86982d&originHeight=264&originWidth=346&originalType=binary&ratio=1&rotation=0&showTitle=false&size=13160&status=done&style=shadow&taskId=uca5f8530-035e-49c4-ba75-c8c6eb426c4&title=&width=346)
就需要这样配置环境变量CLASSPATH：
![image.png](https://cdn.nlark.com/yuque/0/2023/png/21376908/1701941302115-b531f7d3-3a17-487e-a3fe-7168e4022d40.png#averageHue=%23f0efee&clientId=u88d51c01-0843-4&from=paste&height=177&id=u9af25ce2&originHeight=177&originWidth=651&originalType=binary&ratio=1&rotation=0&showTitle=false&size=8674&status=done&style=shadow&taskId=u1612016b-7741-45d3-bb17-43d00f24f94&title=&width=651)
注意配置路径中的当前路径“.”是不能省略的。

![](https://cdn.nlark.com/yuque/0/2023/jpeg/21376908/1692002570088-3338946f-42b3-4174-8910-7e749c31e950.jpeg#averageHue=%23f9f8f8&from=url&id=hmiOT&originHeight=78&originWidth=1400&originalType=binary&ratio=1&rotation=0&showTitle=false&status=done&style=shadow&title=)
## 如果使用IDEA工具开发
如果是采用集成开发工具，例如IDEA，就不需要手动配置CLASSPATH了，只需要将jar包放到IDEA中（实际上放到IDEA工具中的过程就是等同于在配置CLASSPATH）

第一步：创建lib目录，将jar包拷贝到lib目录
![图片3.png](https://cdn.nlark.com/yuque/0/2023/png/21376908/1701941544921-ebd72cf1-b7b1-4474-9044-5d5061e2cb16.png#averageHue=%23ebcca0&clientId=u88d51c01-0843-4&from=paste&height=140&id=ud0a37617&originHeight=140&originWidth=589&originalType=binary&ratio=1&rotation=0&showTitle=false&size=9818&status=done&style=shadow&taskId=u5cb4ad6c-346a-4cd4-b40a-8ecf431c14b&title=&width=589)

第二步：把lib包引入项目环境
![图片4.png](https://cdn.nlark.com/yuque/0/2023/png/21376908/1701941611962-8afef1cb-645e-4ae2-9c3b-63f374574806.png#averageHue=%23f1f1f1&clientId=u88d51c01-0843-4&from=paste&height=1326&id=u0dd3b46c&originHeight=1326&originWidth=2163&originalType=binary&ratio=1&rotation=0&showTitle=false&size=142476&status=done&style=shadow&taskId=ue03efd37-32eb-49c7-9420-92fae56ef8b&title=&width=2163)
![图片5.png](https://cdn.nlark.com/yuque/0/2023/png/21376908/1701941622028-54dee69e-3879-439a-a877-a994eea2ba26.png#averageHue=%23f5f2f1&clientId=u88d51c01-0843-4&from=paste&height=420&id=u1bf9c766&originHeight=420&originWidth=1104&originalType=binary&ratio=1&rotation=0&showTitle=false&size=22625&status=done&style=none&taskId=u5d922472-2932-4659-a9bb-a326a7bbb67&title=&width=1104)