module.exports={
    title:'奶油面包好好吃啊',
    description:'my blog',
    themeConfig:{
        nav:[
            {text:'首页',link:'/'},
            {text:'日志',link:'/blog/'},
            {text:'Github',link:'https://github.com/aszx-fyh'},
        ],
        sidebar:{
            '/blog/':[
                {
                    title:'文章',
                    collapsable:false,
                    children:[
                        ['frontend/','前端相关'],
                        ['tools/','工具使用小结']
                    ]
                },
                ['collections','搜集'],
            ]
                
            
            
            
        }
    }
};