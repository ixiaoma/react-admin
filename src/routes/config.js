export default {
    menus: [ // 菜单相关路由
        { key: '/app/home', title: '首页', icon: 'mobile', component: 'Dashboard' },
        {
            key: '/app/table', title: '表格', icon: 'copy',
            subs: [
                { key: '/app/table/basicTable', title: '基础表格', component: 'BasicTable'},
                { key: '/app/table/advancedTable', title: '高级表格', component: 'AdvancedTable'},
                { key: '/app/table/asynchronousTable', title: '异步表格', component: 'AsynchronousTable'},
            ],
        },
        {
            key: '/app/form', title: '表单', icon: 'edit',
            subs: [
                { key: '/app/form/basicForm', title: '基础表单', component: 'BasicForm'},
            ],
        }
    ],
    others: [] // 非菜单相关路由
}