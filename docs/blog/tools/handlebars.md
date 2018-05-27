# handlebars模版引擎使用记录
+ [handlebars模版引擎官网](http://handlebarsjs.com)

#### 浏览器环境使用
---
先下载文件,再按如下方式引入,要下完整的文件。类似handlebars.runtime-v4.0.11是核心文件,下了不能直接用。按如下方式引入
```html
<div id="app"></div>
<script type="text/template" id='myTemplate'>
        <div class="demo">
                <h1>{{name}}</h1>
                <p>{{content}}</p>
        </div>
</script>
<script src="./js/handlebars-v4.0.11.js"></script>
```
```js
let data={
    name:'zhangchulan',
    content:'buyaobilian'
};
let tpl= document.getElementById('myTemplate').innerHTML;
let template = Handlebars.compile(tpl);
let html=template(data);
let app=document.getElementById('app');
app.innerHTML=html;
```

webpack rules中加入配置

{
        test:/\.(hbs|handlebars)$/,
        loader:'handlebars-loader'
}

require('../../xxx.hbs');