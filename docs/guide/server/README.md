---
title: 后端手册
---

# 后端手册

> 我慢慢写，您慢慢看

## 文件结构

```
xyz.easyboot     
├── common            // 通用功能
│       └── base                          // 基类
│       └── generator                     // 代码生成器
│       └── logging                       // 日志控制
│       └── orm                           // 数据操作
│       └── util                          // 工具类
├── handler           // 全局处理器
├── lifecycle         // 生命周期
├── task              // 定时任务
├── web               // Web请求
│       └── business                      // 业务代码
│       └── common                        // 通用请求
│       └── system                        // 系统请求
│               └── dto                      // DTO类
│               └── entity                   // 数据实体类
│               └── param                    // 入参类
│               └── resource                 // 资源请求
│               └── service                  // Service
│       └── manager                       // 异步处理
│       └── security                      // 权限控制
│       └── web                           // 前端控制
```

## 多环境配置

不同环境变量使用`%{profile}.config.key=value`格式指定参数，注意有`%`

Quarkus默认提供了三种profile，根据启动命令自动激活:
- dev - 在开发模式下（即quarkus:dev）激活
- test - 运行测试时激活
- prod - 不在开发或测试模式下运行时的默认配置文件

还可以创建其他profile，使用 `quarkus.profile` 配置属性来激活，当然得是默认以外的profile，比如：
```
quarkus.profile=staging
quarkus.http.port=9090
%staging.quarkus.http.port=9999
```

更多说明[查看这里](https://quarkus.io/guides/config-reference)

## 数据字典

## 操作日志

## 异常处理

## 代码生成

1. 创建JPA实体类，如`SysVar`

```
import xyz.easyboot.common.orm.entity.AuditableEntity;
import javax.persistence.Entity;
import javax.persistence.Index;
import javax.persistence.Table;

@Entity
@Table(
        name = "sys_var",
        indexes = {
                @Index(name = "index_var_code", columnList = "varCode"),
        }
)
public class SysVar extends AuditableEntity {
    
    public String varCode;
    public String varName;
    public String varValue;
    
}
```

2. 打开`/src/test/xyz/easyboot/CodeGeneratorTest.java`类，修改`generate()`方法，将`CodeGenerator.genCode()`的参数改为`SysVar`
3. 运行`generate()`方法

```
CodeGenerator.BUSINESS_PACKAGE = "web.system";
CodeGenerator.genCode(SysVar.class);
```

4. 生成器将自动生成`SysVarService`、`SysVarResource`和前端页面（位于`/src/main/resource/gen_web`目录），记得把前端文件拷贝到前端项目中

## 定时任务

## 上传下载