export default [
  { text: "首页", link: "/" },
  { text: "导航", link: "/nav" },
  { text: "音乐", link: "https://music.xpin.top", target: "_self" },
  {
    text: "学习笔记",
    items: [
      { text: "Git", link: "/Notes/Git/Git-学习笔记" },
      { text: "JavaSE", link: "/Notes/JavaSE总结/Windows下Java环境配置教程" },
      { text: "MySQL", link: "/Notes/MySQL/Navicat安装教程" },
      { text: "Linux", link: "/Notes/Linux/WSL安装教程" },
      { text: "静态部署", link: "/Notes/静态托管/Github注册及使用" },
    ],
  },
  { text: "测试", link: "/test" },
  { text: "关于我", link: "/about" },
];
