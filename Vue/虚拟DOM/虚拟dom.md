#### 浏览器渲染html页面的过程

大致分为五步： 创建DOM树---创建样式表---创建render树---布局Layout--Painting.

1. 首先html解析器解析html元素， 构建DOM树。

2. css解析器解析css文件和元素上的内联样式，构建出样式表规则。

3. 将样式表和DOM树关联起来，生成render树。每个DOM节点都有**attach方法，接受样式信息**，返回一个render对象(又名renderer)。这些render对象最终会被构建成一颗Render树。

4. 布局：浏览器会根据render树确丁每一个节点的精确坐标。

5. 根据renders树，将页面一个像素一个像素的绘制出来，这个过程就叫paint。


##### 注：如果用js去操作dom的话，马上就会向上面的步骤一样全部执行一遍。



#### 虚拟dom

```js
<div class="box">
        <h3>我是一个标题</h3>
        <ul>
            <li>牛奶</li>
            <li>咖啡</li>
            <li>可乐</li>
        </ul>
    </div>
    <script>
        // 相当于:
        let div = {
            "sel": "div",
            "data": {
                "class": { "box": true }
            },
            "children": [{
                "sel": "h3",
                "data": {},
                "text": "我是一个标题"
            }, {
                "sel": "ul",
                "data": {},
                "children": [
                    { "sel": "li", "data": {}, "text": "牛奶" },
                    { "sel": "li", "data": {}, "text": "咖啡" },
                    { "sel": "li", "data": {}, "text": "可乐" },
                ]
            }]
        }
    </script>
```

##### diff算法就是让新的虚拟dom和老的虚拟dom对象进行精细化比较，算出如何最小量更新，最后反映到真实的DOM上。

