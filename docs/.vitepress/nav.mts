export default [
  { text: "首页", link: "/" },
  { text: "导航", link: "/nav" },
  { text: "音乐", link: "https://music.xpin.top", target: "_self" },
  { text: "技术栈",
    items: [
      { text: "JavaSE", link: "/JSZ/JavaSE总结/Windows下Java环境配置教程" },
      { text: "MySQL", link: "/JSZ/MySQL/Navicat安装教程" },
      { text: "JDBC", link: "/JSZ/JDBC/JDBC概述" },
    ], 
  },
  {
    text: "学习笔记",
    items: [
      { text: "Git", link: "/Notes/Git/Git-学习笔记" },
      { text: "Linux", link: "/Notes/Linux/WSL安装教程" },
      { text: "静态部署", link: "/Notes/静态托管/Github注册及使用" },
    ],
  },
  {
    text: "证书考试",
    items: [{ text: "软考中级", link: "/Exam/SDE/软考中级-软件设计师" }],
  },
  { 
    text: "CS常识",
    items: [
      { text: "软件行业常识", link: "/CS/软件设计架构" }],
  },
  //{ text: "测试", link: "/test" },
  { text: "关于我", link: "/about" },
];
