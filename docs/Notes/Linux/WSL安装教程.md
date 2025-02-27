# Linux | WSL 安装教程

![WSL安装教程](./WSL安装教程/Linux.png)

## 开启 WSL 的两个前提

1. 开启 两个 Windows 功能
2. 开启 CPU 虚拟化

### 开启 CPU虚拟化

1. 打开 BIOS，找到 `CPU 虚拟化`选项，`开启`

2. 打开`任务管理器`——>性能——>CPU——>查看`虚拟化是否启用`

### 开启 两个 Windows 功能

1. 打开`控制面板`——>程序——>启用或关闭 Windows 功能——>勾选`适用于 Linux 的 Windows 子系统`和`虚拟机平台`

2. 重启电脑

## 安装 WSL

1. 打开 PowerShell，输入 `wsl --install --web-download`，等待安装完成

2. 重启电脑

3. 打开 PowerShell，输入 `wsl --list --online`，查看可用的系统

`可用的系统有`：

| NAME                         | FRIENDLY NAME                |
| ---------------------------- | ---------------------------- |
| Ubuntu                       | Ubuntu                       |
| Debian                       | Debian GNU/Linux             |
| kali-linux                   | Kali Linux Rolling           |
| Ubuntu-18.04                 | Ubuntu 18.04 LTS             |
| Ubuntu-20.04                 | Ubuntu 20.04 LTS             |
| Ubuntu-22.04                 | Ubuntu 22.04 LTS             |
| Ubuntu-24.04                 | Ubuntu 24.04 LTS             |
| OracleLinux_7_9              | Oracle Linux 7.9             |
| OracleLinux_8_7              | Oracle Linux 8.7             |
| OracleLinux_9_1              | Oracle Linux 9.1             |
| openSUSE-Leap-15.6           | openSUSE Leap 15.6           |
| SUSE-Linux-Enterprise-15-SP5 | SUSE Linux Enterprise 15 SP5 |
| SUSE-Linux-Enterprise-15-SP6 | SUSE Linux Enterprise 15 SP6 |
| openSUSE-Tumbleweed          | openSUSE Tumbleweed          |

4. 默认安装的是 `Ubuntu`，如果需要安装其他系统，可以输入 `wsl.exe --install <Distro>`，例如 `wsl.exe --install Ubuntu`  ，等待安装完成