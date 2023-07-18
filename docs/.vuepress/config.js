const nav = require("./nav.js");
module.exports = {
    title: '柯南小海盗的博客',
    description: 'YYY',
    base: '/knxhd-blogs/',
    dest: 'dist',
    plugins: [
        ["vuepress-plugin-auto-sidebar", {
            sidebarDepth: 5,
            collapse: {
                open: true
            }
        }]
    ],
    themeConfig: {
        nav
    }
}