(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{431:function(t,s,a){t.exports=a.p+"assets/img/dockerfile.ac91912a.png"},468:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"dockerfile介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile介绍"}},[t._v("#")]),t._v(" DockerFile介绍")]),t._v(" "),s("blockquote",[s("p",[t._v("DockerFile就是用来构建docker镜像的构建文件")])]),t._v(" "),s("ol",[s("li",[t._v("编写DockerFile，"),s("code",[t._v("vim DockerFile")])])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("from mysql:5.7\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 挂载位置，可为空，挂载目录1和2，可以自定义，在容器内也会添加相应的目录，此方式为匿名挂载方式")]),t._v("\nvolumn "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'挂载的目录1'")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'挂载的目录2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo为linux语法，表示在生成后，打印日志")]),t._v("\nCMD "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--------end------------"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成后，进入目录中")]),t._v("\nCMD /bin/bash\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("通过docker build构建")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" build "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" DockerFile文件位置 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-t")]),t._v(" 镜像名:tag名称 镜像位置\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("通过"),s("code",[t._v("docker run")]),t._v("运行镜像")]),t._v(" "),s("li",[t._v("通过"),s("code",[t._v("docker push")]),t._v("发布镜像，可以发布到私有云或公有云")])]),t._v(" "),s("h3",{attrs:{id:"基本命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本命令"}},[t._v("#")]),t._v(" 基本命令")]),t._v(" "),s("img",{attrs:{src:a(431)}}),t._v(" "),s("h2",{attrs:{id:"dockerfile构建过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile构建过程"}},[t._v("#")]),t._v(" DockerFile构建过程")]),t._v(" "),s("h3",{attrs:{id:"基础知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础知识"}},[t._v("#")]),t._v(" 基础知识")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("每个保留关键字(指令) 采用大写字母")]),t._v(" "),s("li",[t._v("执行采用从上到下顺序执行")]),t._v(" "),s("li",[t._v("使用"),s("code",[t._v("#")]),t._v("表示注释")]),t._v(" "),s("li",[t._v("每个指令都会创建一个新的镜像层并提交")]),t._v(" "),s("li",[t._v("dockerFile是面向开发的，发布项目就需要编写一个dockerfile文件")])])]),t._v(" "),s("h2",{attrs:{id:"dockerfile指令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile指令"}},[t._v("#")]),t._v(" DockerFile指令")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("FROM       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#基础镜像\t")]),t._v("\nMAINTAINER "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 镜像维护者，即谁写的镜像")]),t._v("\nRUN        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 镜像构建时，需要执行的命令")]),t._v("\nADD        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 步骤，添加内容，例如：添加jar包等")]),t._v("\nCOPY.      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将文件拷贝到镜像中")]),t._v("\nWORKDIR    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 镜像的工作目录")]),t._v("\nVOLUME\t\t "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 挂载的目录")]),t._v("\nEXPOST\t\t "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暴露的端口")]),t._v("\nCMD\t\t\t\t "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定容器启动时，要执行的命令，只有最后一个会会生效，可被替代")]),t._v("\nENTRYPOINT "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定容器启动时，要执行的命令，可以追加命令")]),t._v("\nENV\t       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 构建镜像时，设置环境变量")]),t._v("\n")])])]),s("h3",{attrs:{id:"实战测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实战测试"}},[t._v("#")]),t._v(" 实战测试")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("以centos为例")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);