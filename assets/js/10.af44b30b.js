(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{699:function(a,e,s){"use strict";s.r(e);var r=s(94),t=Object(r.a)({},(function(){var a=this,e=a.$createElement,s=a._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"jar发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jar发布"}},[a._v("#")]),a._v(" JAR发布")]),a._v(" "),s("blockquote",[s("p",[a._v("后端打包.jar运行，前端build后部署到nginx或其他托管服务器")])]),a._v(" "),s("h2",{attrs:{id:"后端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后端"}},[a._v("#")]),a._v(" 后端")]),a._v(" "),s("ol",[s("li",[a._v("修改配置"),s("code",[a._v("application.properties")])])]),a._v(" "),s("p",[s("RouterLink",{attrs:{to:"/guide/server/#文件结构"}},[a._v("多环境配置看这里")])],1),a._v(" "),s("p",[a._v("修改数据库连接")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("%prod.quarkus.datasource.username=quarkus-vue-admin\n%prod.quarkus.datasource.password=1e4Df2Hg8d\n%prod.quarkus.datasource.jdbc.url=jdbc:mysql://localhost:3306/quarkus-vue-admin\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("修改本地上传路径")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("%prod.oss.store-path=/home/quarkus-vue-admin/\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("执行maven打包命令")])]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./mvnw package -Dmaven.test.skip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("It produces the "),s("code",[a._v("quarkus-run.jar")]),a._v(" file in the "),s("code",[a._v("target/quarkus-app/")]),a._v(" directory. Be aware that it’s not an "),s("em",[a._v("über-jar")]),a._v(" as\nthe dependencies are copied into the "),s("code",[a._v("target/quarkus-app/lib/")]),a._v(" directory.")]),a._v(" "),s("p",[a._v("If you want to build an "),s("em",[a._v("über-jar")]),a._v(", execute the following command:")]),a._v(" "),s("div",{staticClass:"language-shell script line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./mvnw package -Dmaven.test.skip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true -Dquarkus.package.type"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("uber-jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("运行jar")])]),a._v(" "),s("p",[a._v("The application is now runnable using "),s("code",[a._v("java -jar target/quarkus-app/quarkus-run.jar")]),a._v(" or "),s("code",[a._v("java -jar target/server-1.0-SNAPSHOT-runner.jar")])]),a._v(" "),s("p",[a._v("Use "),s("code",[a._v("nohup")]),a._v(" to start the service silently:")]),a._v(" "),s("p",[s("code",[a._v("nohup java -jar target/quarkus-app/quarkus-run.jar >catalina.out 2>&1 &")])]),a._v(" "),s("h2",{attrs:{id:"前端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端"}},[a._v("#")]),a._v(" 前端")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" build\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Upload the "),s("code",[a._v("dist")]),a._v(" directory to the server and configure nginx")])])}),[],!1,null,null,null);e.default=t.exports}}]);