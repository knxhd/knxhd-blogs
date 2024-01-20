(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{424:function(t,_,v){t.exports=v.p+"assets/img/授权码模式.e8048540.png"},425:function(t,_,v){t.exports=v.p+"assets/img/简化模式.49ab0184.png"},426:function(t,_,v){t.exports=v.p+"assets/img/密码模式.898a227f.png"},439:function(t,_,v){"use strict";v.r(_);var a=v(2),s=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"_1-什么是oauth2-0"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-什么是oauth2-0"}},[t._v("#")]),t._v(" 1. 什么是OAuth2.0?❓")]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("OAuth2.0是一个开放标准，允许用户授权第三方应用程序访问他们存储在另外一个服务器上的信息，而不再通过用户名和密码进行登录。例如：微信授权中心，登录百度等账号时，可以通过微信授权登录，此时，微信可以访问到我们在百度上的一些信息，校验是否登录成功。")]),t._v(" "),_("li",[t._v("OAuth2.0有四种不同的授权方式")])]),t._v(" "),_("ol",[_("li",[t._v("授权码模式")]),t._v(" "),_("li",[t._v("简化模式")]),t._v(" "),_("li",[t._v("密码模式")]),t._v(" "),_("li",[t._v("客户端模式")])])]),t._v(" "),_("h3",{attrs:{id:"_1-1-oauth2-0的角色介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-oauth2-0的角色介绍"}},[t._v("#")]),t._v(" 1.1 OAuth2.0的角色介绍⭐️")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("角色")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("客户端")]),t._v(" "),_("td",[t._v("本身不存储资源，可以是网站或APP")])]),t._v(" "),_("tr",[_("td",[t._v("资源拥有者")]),t._v(" "),_("td",[t._v("默认为客户")])]),t._v(" "),_("tr",[_("td",[t._v("授权服务器")]),t._v(" "),_("td",[t._v("用户服务提供者给资源拥有者的身份进行校验，对访问的资源进行授权等。")])]),t._v(" "),_("tr",[_("td",[t._v("资源服务器")]),t._v(" "),_("td",[t._v("存储资源的服务器， 比如：微信存储的用户信息等。")])])])]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("以登录知乎为例")])]),t._v(" "),_("ol",[_("li",[t._v("客户端：即知乎网址")]),t._v(" "),_("li",[t._v("资源拥有者：用户本身")]),t._v(" "),_("li",[t._v("授权服务器：微信授权中心")]),t._v(" "),_("li",[t._v("资源服务器：微信的资源服务器，存储着用户的头像等。")])]),t._v(" "),_("ul",[_("li",[t._v("用户通过网址，访问知乎网站，可以通过微信授权登录，微信授权中心校验用户身份后，会返回对应的token，此时访问微信资源服务器时，通过token标识用户已经登录，可以在知乎上，看到自己的微信头像。")])])]),t._v(" "),_("h3",{attrs:{id:"_1️⃣-授权码模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1️⃣-授权码模式"}},[t._v("#")]),t._v(" 1️⃣ 授权码模式")]),t._v(" "),_("img",{attrs:{src:v(424),alt:"VuePress Logo"}}),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("授权码模式是最安全的一种类型。缺点：过于复杂")]),t._v(" "),_("li",[t._v("资源拥有者：用户")]),t._v(" "),_("li",[t._v("客户端：浏览器/手机APP")]),t._v(" "),_("li",[t._v("第三方应用：想要登录的地址")]),t._v(" "),_("li",[t._v("授权中心和资源中心(二者可以是同一个服务器，也可以是不同的服务器)")])])]),t._v(" "),_("h3",{attrs:{id:"_2️⃣-简化模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2️⃣-简化模式"}},[t._v("#")]),t._v(" 2️⃣ 简化模式")]),t._v(" "),_("img",{attrs:{src:v(425),alt:"VuePress Logo"}}),t._v(" "),_("blockquote",[_("ol",[_("li",[t._v("和授权码模式相比，缺少了根据token申请令牌和返回令牌的过程。")])])]),t._v(" "),_("h3",{attrs:{id:"_3️⃣-密码模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3️⃣-密码模式"}},[t._v("#")]),t._v(" 3️⃣ 密码模式")]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("通过密码登录的形式，i将用户名/密码给第三方。例如，将微信的账号密码给知乎，此时通过用户买那个和密码登录知乎后，知乎可以根据用户名和密码获取微信的资源，即头像、昵称等信息。")])])]),t._v(" "),_("img",{attrs:{src:v(426),alt:"VuePress Logo"}}),t._v(" "),_("h3",{attrs:{id:"_4️⃣-客户端模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4️⃣-客户端模式"}},[t._v("#")]),t._v(" 4️⃣ 客户端模式")]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("第三方直接申请令牌，不需要用户名/密码登录即可")])])]),t._v(" "),_("h2",{attrs:{id:"_2-二维码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-二维码"}},[t._v("#")]),t._v(" 2. 二维码")]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("Hutool是一个java工具包类，对文件、流、加解密等组成的包，同时也可以生成二维码。")])])]),t._v(" "),_("h3",{attrs:{id:"纠错级别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#纠错级别"}},[t._v("#")]),t._v(" 纠错级别")]),t._v(" "),_("blockquote",[_("ul",[_("li",[t._v("L、M、Q、H级别由低到高")]),t._v(" "),_("li",[t._v("级别低的像素块更大，可以远距离进行识别，但是遮挡会造成无法识别")]),t._v(" "),_("li",[t._v("高级别的则相反，像素块较小，允许遮挡一定范围，但是像素块更密集。")])])]),t._v(" "),_("h2",{attrs:{id:"jwt令牌"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jwt令牌"}},[t._v("#")]),t._v(" JWT令牌")])])}),[],!1,null,null,null);_.default=s.exports}}]);