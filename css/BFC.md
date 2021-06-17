### 其他重点小知识：

#### 1. 一共有3个属性会使元素脱离标准流：

（1）浮动  （2）绝对定位  （3）固定定位

#### 2.Position值（）： 

1. static 没有定位   left, top,right, bottom 100px;

2. relative(相对于正常位置定位)

3. absolute 生成绝对定位元素，相对于第一个relative的父级元素定位。

4. fixed 相对于浏览器定窗口定位。

5. inherit

   

#### 3.浮动元素会压在正常元素的上方。块级盒子会尽量撑满浏览器宽度。



### BFC 块级格式化上下文

BFC决定了元素如何对其内容进行定位，以及与其他元素的关系和相互作用。当设计到可视化布局的时候，BFC提供了一个环境，HTML元素在这个环境中按照一定的规则进行布局。一个环境中的元素不会影响到其他环境中的布局。

**BFC的原理（渲染规则）**

1. BFC元素垂直方向的边距会发生重叠。属于不同BFC外边距不会发生重叠
2. BFC的区域不会与浮动元素的布局重叠。
3. BFC元素是一个独立的容器，外面的元素不会影响里面的元素。里面的元素也不会影响外面的元素。
4. 计算BFC高度的时候，浮动元素也会参与计算(清除浮动)

**如何创建BFC**

1. overflow不为visible;
2. float的值不为none；
3. position的值不为static或relative；
4. display属性为inline-blocks,table,table-cell,table-caption,flex,inline-flex;



#### 实际解决的问题

##### 1. 浮动元素令父元素高度塌陷的问题

​	

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>子元素设置为float，父元素高度坍塌</title>
    <!-- 如果父元素没有设置高度（想让盒子的内容来决定高度），子元素设置了浮动，那么就会出现高度坍塌。 -->
    <!--    所以我们要清除浮动 , 创建一个bfc-->
    <style>
        * {
            padding: 0;
            margin: 0;
        }

        .parent {
            overflow: hidden;
            width: 400px;
            border: 2px solid blue;
            background: lightgreen;
            margin: 0 auto;

        }

        .child {
            width: 50%;
            border: 2px soild black;
            float: left;
            height: 400px;
            background: red;

        }
    </style>
</head>

<body>
    <div class="parent">
        <p class="child">让我一次爱个够</p>
    </div>
</body>

</html>
```

其他的触发bfc方法：

```css
overflow: hidden;
display: table-cell, block;
position:fixed, absolute;
这些属性都能触发bfc， 触发了bfc的容器就是页面上完全隔离开的容器，容器中的元素绝对不会影响到外面的元素。所以为了保证这个规则，触发了bfc的父元素在计算高度时，也会把浮动的子元素的高度也带上，就变相的实现了清楚浮动的目的。

```

其他的解决父元素高度坍塌的方法：

1. 让父元素也浮动起来，脱离标准流，父元素会自适应子元素的高度。

2. 给父元素添加一个固定的高度。
3. 在浮动的子元素后面增加一个空元素，设置{clear:both}来清除浮动。
4. 和3原理一样，用伪类代替了空元素  ::after{clear:both}

##### 2.两栏布局（左栏定宽，右栏随着浏览器页面宽度自适应变化）

这个通常会用浮动来实现，左栏设置浮动定宽， 然后让右面的div

#### **注意**：浮动元素会压在正常元素的上方。块级盒子会尽量撑满浏览器宽度。

![image-20210617224400150](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210617224400150.png)

```html
<title>Bfc在两栏布局中的运用</title>
    <style>
        .left {
            float: left;
            width: 300px;
            height: 100px;
            background-color: lightblue;
        }

        .right {
            height: 200px;
            background-color: lightyellow;
            
        }
    </style>
</head>

<body>
    <div class="left"></div>
    <div class="right"></div>
</body>
```

如上图这个div高度超出后，div的元素会扩散到左边。所以我们需要给右边的div设置一个bfc这样他就是独立的空间（overflow:hidden），绝对不会去影响左边的div，为了保证这个规则就会变成下面的这个样子，如下图。

![image-20210617230122310](C:\Users\24026\AppData\Roaming\Typora\typora-user-images\image-20210617230122310.png)

#### 两栏布局的其他方法：

```html
/*第一种方法*/
.left{
	float:left;   
	width:200px;     
}
.right {
	magin-left: 210px;
}

/*第二种方法  左边的绝对定位， 右边的设置 margin-left:200 */
.left{
	position: absolute;   
	width:200px;     
}
.right {
	magin-left: 210px;
}
第三种  右侧元素设置顶线和右线的位置为0， 左线位置位置为200px, 宽度100%
.left{
	position: absolute;   
	width:200px;     
}
.right {
	magin-left: 210px;
	top: 0;
	right: 0;
	left: 210px;
	width: 100%
}
```



