(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{438:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-基础知识"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础知识"}},[t._v("#")]),t._v(" 1. 基础知识")]),t._v(" "),s("h3",{attrs:{id:"进程和线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#进程和线程"}},[t._v("#")]),t._v(" 进程和线程")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("进程：操作系统分配资源的基本单位。一个进程可以包含多个线程。")]),t._v(" "),s("li",[t._v("线程：任务调度和执行的基本单位。")])])]),t._v(" "),s("ul",[s("li",[t._v("线程的状态，可通过"),s("code",[t._v("Thread.State")]),t._v("来查看有哪些状态\n"),s("ol",[s("li",[t._v("NEW")]),t._v(" "),s("li",[t._v("RUNNABLE")]),t._v(" "),s("li",[t._v("BLOCKED")]),t._v(" "),s("li",[t._v("WAITING")]),t._v(" "),s("li",[t._v("TIMED_WAITING")]),t._v(" "),s("li",[t._v("TERMINATED")])])])]),t._v(" "),s("h3",{attrs:{id:"并发和并行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#并发和并行"}},[t._v("#")]),t._v(" 并发和并行")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("并发：多个线程交替执行，一个CPU同时执行多个线程，线程之间执行过程中进行切换，看起来像同时执行")]),t._v(" "),s("li",[t._v("并行：多个线程同时执行。多核同时执行多个线程和调度任务。")]),t._v(" "),s("li",[t._v("并发编程的本质："),s("strong",[t._v("充分利用CPU资源")])])])]),t._v(" "),s("ul",[s("li",[t._v("程序查看有多少核")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test01")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取CPU核数")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CPU密集型 IO密集型")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRuntime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("availableProcessors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"wait和sleep"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wait和sleep"}},[t._v("#")]),t._v(" wait和sleep")]),t._v(" "),s("h3",{attrs:{id:"不同点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同点"}},[t._v("#")]),t._v(" 不同点")]),t._v(" "),s("ol",[s("li",[t._v("来自不同的类。wait来自Object；sleep来自Thread。")]),t._v(" "),s("li",[t._v("锁的释放不同。wait会释放锁；sleep不能释放锁。")]),t._v(" "),s("li",[t._v("使用范围不同。wait必须放到同步代码块中；sleep可以在任何地方使用。")]),t._v(" "),s("li",[t._v("是否可以捕获异常。wait不需要捕获异常；sleep可以捕获异常。")])]),t._v(" "),s("h2",{attrs:{id:"_2-锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-锁"}},[t._v("#")]),t._v(" 2. 锁")]),t._v(" "),s("h3",{attrs:{id:"synchronized和lock锁的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synchronized和lock锁的区别"}},[t._v("#")]),t._v(" Synchronized和Lock锁的区别")]),t._v(" "),s("blockquote",[s("ol",[s("li",[t._v("Synchronized是java内置的关键字，Lock是java的类。")]),t._v(" "),s("li",[t._v("Synchronized无法获取锁的状态；Lock可以判断是否获取了锁。")]),t._v(" "),s("li",[t._v("Synchroized不需要释放锁；Lock必须手动释放锁。")]),t._v(" "),s("li",[t._v("Synchronized 线程一获取锁后，线程二需要一直等待；Lock锁不一定需要继续等待，可设置等待时间")]),t._v(" "),s("li",[t._v("Synchronized 是非公平锁，不可中断锁，可重入锁；lock可重入锁，可中断锁，默认非公平锁，可设置为公平锁。")])])]),t._v(" "),s("h3",{attrs:{id:"公平锁和非公平锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#公平锁和非公平锁"}},[t._v("#")]),t._v(" 公平锁和非公平锁")]),t._v(" "),s("ul",[s("li",[t._v("公平锁：执行需要根据先后顺序执行")]),t._v(" "),s("li",[t._v("非公平锁：执行可以插队")])]),t._v(" "),s("h3",{attrs:{id:"synchronized"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#synchronized"}},[t._v("#")]),t._v(" Synchronized")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("非公平锁")]),t._v(" "),s("li",[t._v("不可中断锁")])])]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("应用到实例方法上，是对当前实例对象加锁(this)")]),t._v(" "),s("li",[t._v("应用到代码块中，根据锁定的对象不同，加锁方式不同。")]),t._v(" "),s("li",[t._v("应用到static中，相当于对Class对象加锁。")])])]),t._v(" "),s("h3",{attrs:{id:"示例方法加锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例方法加锁"}},[t._v("#")]),t._v(" 示例方法加锁")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印票的数量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 具体的执行逻辑      ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"代码块加锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码块加锁"}},[t._v("#")]),t._v(" 代码块加锁")]),t._v(" "),s("h4",{attrs:{id:"方式一"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式一"}},[t._v("#")]),t._v(" 方式一")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印票的数量")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ticket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s卖出类%d张票，剩余%d张%n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"方式二"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方式二"}},[t._v("#")]),t._v(" 方式二")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印票的数量")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s卖出类%d张票，剩余%d张%n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Thread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentThread")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("total "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"static方法加锁"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#static方法加锁"}},[t._v("#")]),t._v(" static方法加锁")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印票的数量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sale")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ... 具体的执行逻辑      ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"lock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lock"}},[t._v("#")]),t._v(" Lock")]),t._v(" "),s("blockquote",[s("ul",[s("li",[t._v("默认为非公平锁，可传入参数到构造器中，制作公平锁")]),t._v(" "),s("li",[t._v("可中断锁")]),t._v(" "),s("li",[t._v("可重入锁")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);