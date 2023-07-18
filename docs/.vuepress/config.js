module.exports = {
    title: '柯南小海盗的博客',
    description: 'YYY',
    themeConfig: {
        nav: [
            {text: "首页", link: "/"},
            {text: "SpringCloud", link: "/md/springcloud/Index"},
        ],
        sidebar: [
            {
                title: "欢迎学习",
                path: "/",
                collapsable: false,  // 是否折叠
                children: [{title: "博客简介", path: "/"}],
            },
            {
                title: "springcloud",
                path: "/md/springcloud/Index",
                collapsable: true,
                children: [
                    {title: "openfeign", path: "/md/springcloud/openfeign/openfeign"},
                    {title: "sentinel", path: "/md/springcloud/sentinel/sentinel"},
                ]
            }
        ]
    }
}