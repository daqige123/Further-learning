### 其他重点小知识：

#### 1. 一共有3个属性会使元素脱离标准流：

（1）浮动  （2）绝对定位  （3）固定定位

#### 2.Position值（）： 

1. static 没有定位   left, top,right,  bottom 100px;

2. relative(相对于正常位置定位)

3. absolute 生成绝对定位元素，相对于第一个relative的父级元素定位。

4. fixed 相对于浏览器定窗口定位。

5. inherit

   

#### 3.浮动元素会压在正常元素的上方。块级盒子会尽量撑满浏览器宽度。

#### 4. 选择器

1. 伪类选择器： :active   :foucs   :hover   :link  :visited  :lang

2. 结构选择器： .后代     >父子    +兄弟

### BFC 块级格式化上下文

##### BFC元素是一个独立的容器，外面的元素不会影响里面的元素。里面的元素也不会影响外面的元素。

**具体表现为BFC的3条规则**

1. BFC元素垂直方向的边距会发生重叠。属于不同BFC外边距不会发生重叠。（外边距重叠）
2. BFC的区域不会与浮动元素的布局重叠。 （两栏布局，左边是float的话， 右边设置一个overflow就会变成两栏）  **注意：** BFC会与定位的元素重叠。
4. 计算BFC高度的时候，浮动元素也会参与计算(清除浮动) （父元素高度坍塌）。

##### 因为BFC内部的元素和外部的元素绝对不会互相影响，因此， 当BFC外部存在浮动时，它不应该影响BFC内部Box的布局，BFC会通过变窄，而不与浮动有重叠。同样的，当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动的高度。避免margin重叠也是这样的一个道理。其实就是对BFC定义的解释。

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
	position: absolute/fixed;
	magin-left: 210px;
	top: 0;
	right: 0;
	left: 210px;
	width: 100%
}
```

#### 3. 垂直方向上的外边距重合

1. 给其中一个元素加上一个父元素，然后给父元素设置BFC

2. 将其中的一个的margin ,改为padding，这样就不会重合了

#### 4.overflow的5个值：

##### overflow 规定了当内容溢出元素框时发生的事情。

overflow属性的5个值

visible→默认值，内容不会被剪切，内容会溢出显示在元素框之外

hidden→内容会被剪切，溢出于元素框的内容不可见

scroll→内容会被修剪，但是浏览器会显示滚动条，以便查看其余的内容。

auto→如果内容超出了，会被修剪， 并生成滚动条，如果没有超出元素框，则不用。

inherit→继承父级的overflow值

###  总结

BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

因为BFC内部的元素和外部的元素绝对不会互相影响，因此， 当BFC外部存在浮动时，它不应该影响BFC内部Box的布局，BFC会通过变窄，而不与浮动有重叠。同样的，当BFC内部有浮动时，为了不影响外部元素的布局，BFC计算高度时会包括浮动的高度。避免margin重叠也是这样的一个道理。
