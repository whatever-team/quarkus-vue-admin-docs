module.exports = {
    theme: 'antdocs',
    title: 'Quarkus-Vue-Admin',
    description: '试试Quarkus+Vue，有点有趣',
    base: '/quarkus-vue-admin-docs/',
    // 插件
    plugins: {},
    // 头部
    head: [
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    // 主题配置
    themeConfig: {
        logo: '/logo.png',
        backToTop: true,
        smoothScroll: true,
        nav: require("./config/nav"),
        ads:{
            style: 3,
            title: '赞助商',
            btnText: '成为赞助商',
            msgTitle: '成为赞助商',
            msgText: '如果您有品牌推广、活动推广、招聘推广、社区合作等需求，欢迎联系我们，成为赞助商。您的广告将出现在文档侧边栏等页面。',
            msgOkText: '确定',
        },
        sidebar: require("./config/sidebar"),
        sidebarDepth: 3,
    },
    markdown: {
        lineNumbers: true
    }
}

