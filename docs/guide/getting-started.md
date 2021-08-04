---
title: 快速开始
---
# 快速开始

> 在开始之前，最好知道Quarkus和Vue是什么，以便更快的CRUD

## 依赖环境

<a-alert type="warning" showIcon>
  <span slot="message">
    确保以下环境和插件都成功安装，否则没法儿运行
  </span>
</a-alert>

### 基础开发环境

- JDK: 11
- Maven: 3.5+
- MySql: 5.7+
- Node Js: 10.0+
- Npm: 5.6.0+
- Yarn: 1.21.1+

### IDE插件

- Lombok

## 导入项目

1. 下载项目代码
```shell
mkdir quarkus-vue-admin && cd quarkus-vue-admin
git clone xxx
git clone xxx
```

2. 创建数据库
起个名字，比如`quarkus-vue-admin`，执行SQL脚本，SQL文件在`/src/main/resource/quarkus-vue-admin.sql`

## 启动项目

<a-alert type="info" showIcon>
  <span slot="message">
    前后端分离，所以前后端要分别启动，两边都启动好了才能访问
  </span>
</a-alert>
<br/>

### 后端启动
1. 用IDEA打开server项目
2. 修改`/src/main/resource/application.properties`的数据库配置，将`username`、`password`、`jdbc.url`修改为你的数据库用户名、密码、连接地址
```
quarkus.datasource.username=root
quarkus.datasource.password=
quarkus.datasource.jdbc.url=jdbc:mysql://localhost:3306/quarkus-vue-admin
```
3. 等待maven安装依赖
4. 打开终端，使用如下命令，以开发模式启动项目
```
./mvnw compile quarkus:dev
```

### 前端启动
- 用VsCode或者WebStorm打开web项目
- 打开工具的终端,输入`npm i` 或者 `cnpm i` 或者 `yarn install` 进行安装web项目的环境
- 安装完成之后使用`npm run serve`或者`cnpm run serve`或者`yarn serve`即可启动项目

<a-alert type="warning" showIcon>
  <span slot="message">
    如果启动不起来，看下 <a href="/guide/faq/">FAQ</a>
  </span>
</a-alert>

## 效果预览

<p align="center"><img src="/quarkus-vue-admin-docs/snap01.png"/></p>