const nav = require("./nav.js");
module.exports = {
    title: '柯南小海盗',
    description: '柯南小海盗',
    base: '/knxhd-blogs/',
    head:[
        [
            'link', {
                rel: 'icon', href: '/images/icon.jpeg'
            }
        ]
    ],
    dest: 'dist',
    theme: 'reco',
    plugins: [
        ["vuepress-plugin-auto-sidebar", {
            sidebarDepth: 5,
            collapse: {
                open: true
            }
        }],
        ['vuepress-plugin-code-copy', true],
        ['cursor-effects', {
            size: 2, // size of the particle, default: 2
            shape: 'circle', // ['star' | 'circle'], // shape of the particle, default: 'star'
            zIndex: 999999999, // z-index property of the canvas, default: 999999999
            }]
    ],
    themeConfig: {
        "nav": [
            {
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            }, {
                "text": "时间轴",
                "link": "/timeline/",
                "icon": "reco-date"
            }, {
                "text": "关于",
                "link": "/about/",
                "icon": "reco-account"
            }
        ],
        "type": "blog",
        "sidebar": true,
        "sidebarDepth": 6,
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "博客"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        }
    }
}
