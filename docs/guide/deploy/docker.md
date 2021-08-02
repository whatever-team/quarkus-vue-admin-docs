---
title: JAR发布
---

# JAR发布

> 后端打包.jar运行，前端build后部署到nginx或其他托管服务器
 
## 后端

1. 修改配置`application.properties`

[多环境配置看这里](/guide/server/#文件结构)

修改数据库连接
```
%prod.quarkus.datasource.username=quarkus-vue-admin
%prod.quarkus.datasource.password=1e4Df2Hg8d
%prod.quarkus.datasource.jdbc.url=jdbc:mysql://localhost:3306/quarkus-vue-admin
```

修改本地上传路径
```
%prod.oss.store-path=/home/quarkus-vue-admin/
```

2. 执行maven打包命令

```shell script
./mvnw package -Dmaven.test.skip=true
```

It produces the `quarkus-run.jar` file in the `target/quarkus-app/` directory. Be aware that it’s not an _über-jar_ as
the dependencies are copied into the `target/quarkus-app/lib/` directory.

If you want to build an _über-jar_, execute the following command:

```shell script
./mvnw package -Dmaven.test.skip=true -Dquarkus.package.type=uber-jar
```

3. 运行jar

The application is now runnable using `java -jar target/quarkus-app/quarkus-run.jar` or `java -jar target/server-1.0-SNAPSHOT-runner.jar`

`nohup java -jar jeecg-boot-module-system-2.0.0.jar >catalina.out 2>&1 &`

## 前端