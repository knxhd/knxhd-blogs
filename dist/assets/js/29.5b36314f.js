(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{450:function(t,a,v){"use strict";v.r(a);var _=v(2),r=Object(_.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[t._v("#")]),t._v(" 文件")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("基本方式 open('filePath', 'mode', 'encoding')")]),t._v(" "),a("li",[t._v("filePath: 文件路径，mode:操作模式，encoding:编码，默认采用和操作系统相同的编码")])])]),t._v(" "),a("h2",{attrs:{id:"文件操作模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件操作模式"}},[t._v("#")]),t._v(" 文件操作模式")]),t._v(" "),a("h3",{attrs:{id:"基本模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本模式"}},[t._v("#")]),t._v(" 基本模式")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("操作模式")]),t._v(" "),a("th",[t._v("具体含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("'r'")])]),t._v(" "),a("td",[t._v("读取 （默认）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'w'")])]),t._v(" "),a("td",[t._v("写入（会先截断之前的内容）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'x'")])]),t._v(" "),a("td",[t._v("写入，如果文件已经存在会产生异常")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'a'")])]),t._v(" "),a("td",[t._v("追加，将内容写入到已有文件的末尾")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'b'")])]),t._v(" "),a("td",[t._v("二进制模式")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'t'")])]),t._v(" "),a("td",[t._v("文本模式（默认）")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("'+'")])]),t._v(" "),a("td",[t._v("更新（既可以读又可以写）")])])])]),t._v(" "),a("h3",{attrs:{id:"组合使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组合使用"}},[t._v("#")]),t._v(" 组合使用")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("操作模式")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("r+/r+b")]),t._v(" "),a("td",[t._v("可读可写，且不会删除原内容,前者返回文本；后者返回字节，多用于非文本操作")])]),t._v(" "),a("tr",[a("td",[t._v("w+/w+b")]),t._v(" "),a("td",[t._v("可读可写，删除原来的内容，位置在文件的开始")])]),t._v(" "),a("tr",[a("td",[t._v("a+")]),t._v(" "),a("td",[t._v("可读可写，且不会删除原内容，但是由于位置在文件尾部，输出的结果为空")])])])]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("注意："),a("code",[t._v("open")]),t._v("操作文本，可能会删除原来的内容，具体用法如下")])])]),t._v(" "),a("h2",{attrs:{id:"异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[t._v("#")]),t._v(" 异常")]),t._v(" "),a("blockquote",[a("ul",[a("li",[t._v("父类："),a("code",[t._v("OSError")])])])]),t._v(" "),a("h3",{attrs:{id:"基本格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本格式"}},[t._v("#")]),t._v(" 基本格式")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" traceback\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 业务逻辑")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" OSError "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    traceback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("format_exception"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("ul",[a("li",[t._v("可不通过"),a("code",[t._v("traceback")]),t._v("打印堆栈信息，可直接通过print进行输出信息")]),t._v(" "),a("li",[t._v("如果except后的异常类型不正确，则不会拦截，可通过"),a("code",[t._v("OSError")]),t._v("来拦截异常")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);