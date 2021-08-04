(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{702:function(s,a,e){"use strict";e.r(a);var n=e(94),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"后端手册"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#后端手册"}},[s._v("#")]),s._v(" 后端手册")]),s._v(" "),e("blockquote",[e("p",[s._v("我慢慢写，您慢慢看")])]),s._v(" "),e("h2",{attrs:{id:"文件结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文件结构"}},[s._v("#")]),s._v(" 文件结构")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("xyz.easyboot     \n├── common            // 通用功能\n│       └── base                          // 基类\n│       └── generator                     // 代码生成器\n│       └── logging                       // 日志控制\n│       └── orm                           // 数据操作\n│       └── util                          // 工具类\n├── handler           // 全局处理器\n├── lifecycle         // 生命周期\n├── task              // 定时任务\n├── web               // Web请求\n│       └── business                      // 业务代码\n│       └── common                        // 通用请求\n│       └── system                        // 系统请求\n│               └── dto                      // DTO类\n│               └── entity                   // 数据实体类\n│               └── param                    // 入参类\n│               └── resource                 // 资源请求\n│               └── service                  // Service\n│       └── manager                       // 异步处理\n│       └── security                      // 权限控制\n│       └── web                           // 前端控制\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br")])]),e("h2",{attrs:{id:"多环境配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#多环境配置"}},[s._v("#")]),s._v(" 多环境配置")]),s._v(" "),e("p",[s._v("不同环境变量使用"),e("code",[s._v("%{profile}.config.key=value")]),s._v("格式指定参数，注意有"),e("code",[s._v("%")])]),s._v(" "),e("p",[s._v("Quarkus默认提供了三种profile，根据启动命令自动激活:")]),s._v(" "),e("ul",[e("li",[s._v("dev - 在开发模式下（即quarkus:dev）激活")]),s._v(" "),e("li",[s._v("test - 运行测试时激活")]),s._v(" "),e("li",[s._v("prod - 不在开发或测试模式下运行时的默认配置文件")])]),s._v(" "),e("p",[s._v("还可以创建其他profile，使用 "),e("code",[s._v("quarkus.profile")]),s._v(" 配置属性来激活，当然得是默认以外的profile，比如：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("quarkus.profile=staging\nquarkus.http.port=9090\n%staging.quarkus.http.port=9999\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("更多说明"),e("a",{attrs:{href:"https://quarkus.io/guides/config-reference",target:"_blank",rel:"noopener noreferrer"}},[s._v("查看这里"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"数据字典"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据字典"}},[s._v("#")]),s._v(" 数据字典")]),s._v(" "),e("h2",{attrs:{id:"操作日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作日志"}},[s._v("#")]),s._v(" 操作日志")]),s._v(" "),e("h2",{attrs:{id:"异常处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异常处理"}},[s._v("#")]),s._v(" 异常处理")]),s._v(" "),e("h2",{attrs:{id:"代码生成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码生成"}},[s._v("#")]),s._v(" 代码生成")]),s._v(" "),e("ol",[e("li",[s._v("创建JPA实体类，如"),e("code",[s._v("SysVar")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('import xyz.easyboot.common.orm.entity.AuditableEntity;\nimport javax.persistence.Entity;\nimport javax.persistence.Index;\nimport javax.persistence.Table;\n\n@Entity\n@Table(\n        name = "sys_var",\n        indexes = {\n                @Index(name = "index_var_code", columnList = "varCode"),\n        }\n)\npublic class SysVar extends AuditableEntity {\n    \n    public String varCode;\n    public String varName;\n    public String varValue;\n    \n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("ol",{attrs:{start:"2"}},[e("li",[s._v("打开"),e("code",[s._v("/src/test/xyz/easyboot/CodeGeneratorTest.java")]),s._v("类，修改"),e("code",[s._v("generate()")]),s._v("方法，将"),e("code",[s._v("CodeGenerator.genCode()")]),s._v("的参数改为"),e("code",[s._v("SysVar")])]),s._v(" "),e("li",[s._v("运行"),e("code",[s._v("generate()")]),s._v("方法")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('CodeGenerator.BUSINESS_PACKAGE = "web.system";\nCodeGenerator.genCode(SysVar.class);\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ol",{attrs:{start:"4"}},[e("li",[s._v("生成器将自动生成"),e("code",[s._v("SysVarService")]),s._v("、"),e("code",[s._v("SysVarResource")]),s._v("和前端页面（位于"),e("code",[s._v("/src/main/resource/gen_web")]),s._v("目录），记得把前端文件拷贝到前端项目中")])]),s._v(" "),e("h2",{attrs:{id:"定时任务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定时任务"}},[s._v("#")]),s._v(" 定时任务")]),s._v(" "),e("h2",{attrs:{id:"上传下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#上传下载"}},[s._v("#")]),s._v(" 上传下载")])])}),[],!1,null,null,null);a.default=t.exports}}]);